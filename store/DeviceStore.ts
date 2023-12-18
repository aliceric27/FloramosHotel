import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { useRoute, useRouter } from "vue-router";
import useLoginStore from "./LoginStore";
import usePopupStore from "./PopupStore";
export interface State {
  power: any | null;
  ventilation: any | null;
  water: any | null;
  paginatedData: any;
  lightPage: String;
}
// 初始化資料
const initState: State = {
  power: null,
  ventilation: null,
  water: null,
  paginatedData: null,
  lightPage: "B2F",
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
  async getEvent(ID = "") {
    const userStore = useLoginStore();
    const token = userStore.token;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/events/${ID}`,
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
    return result;
  },
  async createDevice(Data: any) {
    if (Data) {
      let {
        customcycle: { value: customcycle },
        cycle: { value: cycle },
        datepick: { value: datepick },
        input: { value: input },
      } = Data;
      datepick = this.getDate(datepick);
      const userStore = useLoginStore();
      const token = userStore.token;
      const { data, pending, refresh, execute, error, status } = await useFetch(
        `${import.meta.env.VITE_Socket_URL}/api/deviceMaintain/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // 在这里添加 token
            "Content-Type": "application/json", // 确保设置正确的内容类型
          },
          body: {
            customName: input,
            cycle_value: customcycle,
            cycle_unit: cycle,
            lastTime: datepick,
          },
        }
      );
      let result = {
        data: toRaw(data.value),
        status: toRaw(status.value),
      };
      await this.setdata(result.data, "event");
      return result;
    } else return false;
  },
  async EditDevice(Data: any) {
    if (Data) {
      let {
        customcycle: { value: customcycle },
        cycle: { value: cycle },
        datepick: { value: datepick },
        input: { value: input },
      } = Data;
      datepick = this.getDate(datepick);
      const userStore = useLoginStore();
      const PopupStore = usePopupStore();
      const device = PopupStore.maintainData;
      const currentData = toRaw(PopupStore.currentData);
      const url = currentData?.customName || currentData?.deviceID;
      const token = userStore.token;
      let requestBody;
      if (device?.customName) {
        requestBody = {
          customName: input,
          cycle_value: customcycle,
          cycle_unit: cycle,
          lastTime: datepick,
        };
      } else {
        requestBody = {
          deviceID: currentData?.deviceID,
          cycle_value: customcycle,
          cycle_unit: cycle,
          lastTime: datepick,
        };
      }
      const { data, pending, refresh, execute, error, status } = await useFetch(
        `${import.meta.env.VITE_Socket_URL}/api/deviceMaintain/${url}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`, // 在这里添加 token
            "Content-Type": "application/json", // 确保设置正确的内容类型
          },
          body: { ...requestBody },
        }
      );
      let result = {
        data: toRaw(data.value),
        status: toRaw(status.value),
      };
      return result;
    } else return false;
  },
  async DelDevice(Data: any) {
    const userStore = useLoginStore();
    const url = Data?.customName;
    const token = userStore.token;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/deviceMaintain/${url}`,
      {
        method: "DELETE",
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
    return result;
  },
  getDate(d: any) {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从0开始计数
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  },
  async updateEvent(updatData: any) {
    const userStore = useLoginStore();
    const popupStore = usePopupStore();
    const token = userStore.token;
    let fetchurl = popupStore.sidata.maintain.deviceID;
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/events/${fetchurl}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`, // 在这里添加 token
          "Content-Type": "application/json", // 确保设置正确的内容类型
        },
        body: {
          ...updatData,
        },
      }
    );
    let result = {
      data: toRaw(data.value),
      status: toRaw(status.value),
      error: toRaw(error.value),
    };
    return result;
  },
  ChangeLightPage(page: string) {
    console.log("pagechange", page);
    this.lightPage = page;
  },
};
const getters: _GettersTree<State> = {
  getDeviceByID: (state) => (id: Number, device: String) => {
    const rawdevice = toRaw(state[device]?.data);
    const result = rawdevice?.find((item: any) => item.deviceID === id);
    return result;
  },
};
const useDeviceStore = defineStore("device", {
  state: () => initState,
  actions,
  getters,
});

export default useDeviceStore;
