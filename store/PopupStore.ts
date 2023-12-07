import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { RouteRecordName, Router } from "vue-router";
import useDeviceStore from "./DeviceStore";
export interface State {
  maintAdd: Boolean;
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
  noticedata: any;
}
// 初始化資料
const initState: State = {
  maintAdd: false,
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
  switchmaintConfirm(system: string) {
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
};
const getters: _GettersTree<State> = {};
const usePopupStore = defineStore("Popup", {
  state: () => initState,
  actions,
  getters,
});

export default usePopupStore;
