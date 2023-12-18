import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { io, Socket } from "socket.io-client";
import mokerData from "./mockrData.json";
import useInfoStore from "./InfoStore";
import usePopupStore from "./PopupStore";
import { th } from "element-plus/es/locale";

export interface State {
  isConnected: boolean;
  data: any;
  socket: any | Socket;
  odata: any;
}
// 初始化資料
const initState: State = {
  isConnected: false,
  data: ref(null),
  socket: null,
  odata: null,
};

const getters: _GettersTree<State> = {};

const useSocketStore = defineStore({
  id: "socketStore",
  state: () => initState,
  actions: {
    async ConnectSocket(endpoint: string = import.meta.env.VITE_IO_URL) {
      if (!import.meta.env.SSR) {
        if (!this.socket) {
          this.socket = io(endpoint, {
            autoConnect: true, // 啟用自動重連
            reconnectionAttempts: 5, // 重連嘗試次數
            reconnectionDelay: 3000, // 重連間隔
          });
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

          this.socket.on("socketdata", (newData: any) => {
            console.log("this.odata", this.odata);
            if (this.odata === null) this.odata = newData;
            else {
              const olength = this.odata?.Events.length;
              const nlength = newData?.Events.length;
              if (olength !== nlength) {
                const popupStore = usePopupStore();
                popupStore.turnOnimmPopup();
                this.odata = newData;
              }
            }
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
    sendDocmd(data: any) {
      if (data) {
        console.log("doCMD", data);
        this.socket.emit("doCmd", { ...data });
        return true;
      }
    },
  },
  getters,
});

export default useSocketStore;
