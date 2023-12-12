import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { io, Socket } from "socket.io-client";
import mokerData from "./mockrData.json";
import useInfoStore from "./InfoStore";

export interface State {
  isConnected: boolean;
  data: any;
  socket: null | Socket;
}
// 初始化資料
const initState: State = {
  isConnected: false,
  data: ref(null),
  socket: null,
  heatshtdown: null,
};

const getters: _GettersTree<State> = {};

const useSocketStore = defineStore({
  id: "socketStore",
  state: () => initState,
  actions: {
    async ConnectSocket(endpoint: string = import.meta.env.VITE_IO_URL) {
      if (!import.meta.env.SSR) {
        if (!this.socket) {
          if (import.meta.env.PROD) {
            this.socket = io();
          } else {
            this.socket = io(endpoint, {
              reconnection: false,
            });
          }
          this.socket.on("connect", () => {
            this.isConnected = true;
            console.log("Connected Socket Server!");
          });
          this.socket.on("connect_error", (error) => {
            // Notify the user
            // Use mock data if available
            if (import.meta.env.PROD) {
              console.error("Connection Error:", error);
            } else {
              console.error("Connection Error:", error);
            }
          });

          this.socket.on("data", (newData) => {
            this.data = newData;
            console.log("Socket Data", newData);
          });

          this.socket.on("disconnect", () => {
            this.isConnected = false;
          });
        }
      }
    },
    disconnectSocket() {
      if (this.socket) {
        this.socket.disconnect();
        this.socket = null;
        this.isConnected = false;
      }
    },
  },
  getters,
});

export default useSocketStore;
