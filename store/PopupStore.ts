import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { RouteRecordName, Router } from "vue-router";
import useDeviceStore from "./DeviceStore";
export interface State {
  maintAdd: Boolean;
  maintEdit: Boolean;
  maintConfirm: Boolean;
  noticeBox: Boolean;
  emergency: Boolean;
  sidePage: Boolean;
  sidpage: Boolean;
  alertset: Boolean;
  sidata: {
    system: String;
    device: String;
    maintain: any;
  };
  maintainData: any;
  noticedata: any;
  maintaincycle: string | null;
}
// 初始化資料
const initState: State = {
  maintAdd: false,
  maintEdit: false,
  maintConfirm: false,
  noticeBox: false,
  sidePage: false,
  emergency: false,
  sidpage: false,
  alertset: false,
  sidata: {
    system: "",
    device: "",
    maintain: "",
  },
  noticedata: null,
  maintaincycle: null,
  maintainData: "",
};
// 相關fn
const actions: any = {
  switchMaintPopup() {
    this.maintAdd = !this.maintAdd;
  },
  async switchNoticeBox() {
    const deviceStore = useDeviceStore();
    const notice = await deviceStore.getEvent();
    if (notice.status === "success") {
      this.noticedata = notice?.data?.data || null;
    }
    this.noticeBox = !this.noticeBox;
  },
  switchsidePage() {
    this.sidePage = !this.sidePage;
  },
  switchemergency() {
    this.emergency = !this.emergency;
  },
  async switchmaintConfirm(data?) {
    if (data) {
      this.setCycle(data.cycle_unit, data.cycle_value);
      const url = data?.deviceID || data?.customName;
      const deviceStore = useDeviceStore();
      const siddata = await deviceStore.getMaintain(url);
      if (siddata.status === "success") {
        const data = siddata?.data?.data;
        this.sidata.maintain = data;
        this.sidata.device = data?.deviceName;
      }
    }
    this.maintConfirm = !this.maintConfirm;
  },
  async switchsidpage(system: String = "", device: String = "", ID: Number) {
    const deviceStore = useDeviceStore();
    if (ID) {
      const siddata = await deviceStore.getMaintain(ID);
      if (siddata.status === "success") {
        const data = siddata?.data?.data;
        this.sidata.maintain = data;
      }
    }
    this.sidpage = !this.sidpage;
    this.sidata.system = system;
    this.sidata.device = device;
    if (this.sidpage === false) this.maintConfirm = false;
  },
  switchalertset() {
    this.alertset = !this.alertset;
  },
  setMaintaincycle(cycle: string) {
    this.maintaincycle = cycle;
  },
  closesidpage() {
    this.maintConfirmm = fasle;
    this.sidpage = fasle;
  },
  closchmaintEdit() {
    this.maintEdit = false;
  },
  setCycle(c: String, t: String) {
    let cyc = "";
    try {
      switch (c) {
        case "d":
          cyc = "日";
          break;
        case "w":
          cyc = "週";
          break;
        case "m":
          cyc = "月";
          break;
        case "y":
          cyc = "年";
          break;
      }
    } catch {
      console.error(Error);
    }
    const cycle = cyc;
    const cycleVal = t;
    if (cycle && cycleVal) {
      const result = `每${cycleVal}${cycle}`;
      this.setMaintaincycle(result);
      return result;
    } else {
      this.setMaintaincycle(null);
      return null;
    }
  },
  async switchmaintEdit(data?) {
    if (data) {
      this.setCycle(data.cycle_unit, data.cycle_value);
      const url = data?.deviceID || data?.customName;
      const deviceStore = useDeviceStore();
      const siddata = await deviceStore.getMaintain(url);
      if (siddata.status === "success") {
        const data = siddata?.data?.data;
        this.maintainData = data;
        this.sidata.maintain = data;
        this.sidata.device = data?.deviceName;
      }
    }
    this.maintEdit = !this.maintEdit;
    console.log("datatest");
  },
};
const getters: _GettersTree<State> = {};
const usePopupStore = defineStore("Popup", {
  state: () => initState,
  actions,
  getters,
});

export default usePopupStore;
