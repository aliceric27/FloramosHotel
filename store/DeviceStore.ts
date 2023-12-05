import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { useRoute, useRouter } from "vue-router";
import useLoginStore from "./LoginStore";
export interface State {
  power: any | null;
  ventilation: any | null;
}
// 初始化資料
const initState: State = {
  power: null,
  ventilation: null,
};
// 相關fn
const actions: any = {
  async getDevice(device: String) {
    const userStore = useLoginStore();
    const token = userStore.token;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/system/${device}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // 在这里添加 token
          "Content-Type": "application/json", // 确保设置正确的内容类型
        },
      }
    );
    let result = {
      data: toRaw(data.value),
      status: toRaw(status.value),
    };
    await this.setdata(result.data, device);
    return result;
  },
  setdata(data: any, device: String) {
    this[`${device}`] = data;
  },
};
const getters: _GettersTree<State> = {
  getDeviceByID: (state) => (id: Number, device: String) => {
    const rawdevice = toRaw(state[device]?.data);
    const result = rawdevice?.find((item: any) => item.deviceID === id);
    console.log(result);
    return result;
  },
};
const useDeviceStore = defineStore("device", {
  state: () => initState,
  actions,
  getters,
});

export default useDeviceStore;
