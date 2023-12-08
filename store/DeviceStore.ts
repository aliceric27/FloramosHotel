import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { useRoute, useRouter } from "vue-router";
import useLoginStore from "./LoginStore";
export interface State {
  power: any | null;
  ventilation: any | null;
  water: any | null;
  paginatedData: any;
}
// 初始化資料
const initState: State = {
  power: null,
  ventilation: null,
  water: null,
  paginatedData: null,
};
// 相關fn
const actions: any = {
  async getDevice(device: string) {
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
  setdata(data: any, device: string) {
    this[`${device}`] = data;
  },
  async getMaintain(deviceID: number | string = "") {
    const userStore = useLoginStore();
    const token = userStore.token;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/deviceMaintain/${deviceID}`,
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
    await this.setdata(result.data, "maintain");
    return result;
  },
  async getEvent() {
    const userStore = useLoginStore();
    const token = userStore.token;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/events/`,
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
    await this.setdata(result.data, "event");

    return result;
  },
  async updateDevice(updatData: any) {
    const userStore = useLoginStore();
    const token = userStore.token;
    let fetchurl = "";
    if (updatData?.customName) fetchurl = updatData.customName;
    else fetchurl = updatData.deviceID;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/deviceMaintain/${fetchurl}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`, // 在这里添加 token
          "Content-Type": "application/json", // 确保设置正确的内容类型
        },
        body: {
          customName: updatData.customName,
          cycle_value: updatData.cycle_value,
          cycle_unit: updatData.cycle_unit,
          lastTime: updatData.lastTime,
        },
      }
    );
    let result = {
      data: toRaw(data.value),
      status: toRaw(status.value),
      error: toRaw(error.value),
    };
    console.log(result);
    return result;
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
