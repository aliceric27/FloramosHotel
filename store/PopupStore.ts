import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { RouteRecordName, Router } from "vue-router";
export interface State {
  maintAdd: Boolean;
  maintConfirm: Boolean;
  noticeBox: Boolean;
  emergency: Boolean;
  sidePage: Boolean;
  sidpage: Boolean;

  sidata: {
    system: String;
    device: String;
  };
}
// 初始化資料
const initState: State = {
  maintAdd: false,
  maintConfirm: false,
  noticeBox: false,
  sidePage: false,
  emergency: false,
  sidpage: false,
  sidata: {
    system: "",
    device: "",
  },
};
// 相關fn
const actions: any = {
  switchMaintPopup() {
    this.maintAdd = !this.maintAdd;
  },
  switchNoticeBox() {
    this.noticeBox = !this.noticeBox;
  },
  switchsidePage() {
    this.sidePage = !this.sidePage;
  },
  switchemergency() {
    this.emergency = !this.emergency;
  },
  switchmaintConfirm() {
    this.maintConfirm = !this.maintConfirm;
  },
  switchsidpage(system: String = "", device: String = "") {
    this.sidpage = !this.sidpage;
    this.sidata.system = system;
    this.sidata.device = device;
    if (this.sidpage === false) this.maintConfirm = false;
  },
};
const getters: _GettersTree<State> = {};
const usePopupStore = defineStore("Popup", {
  state: () => initState,
  actions,
  getters,
});

export default usePopupStore;
