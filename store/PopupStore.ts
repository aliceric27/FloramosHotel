import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { RouteRecordName, Router } from "vue-router";
export interface State {
  maintAdd: boolean;
  noticeBox: boolean;
}
// 初始化資料
const initState: State = {
  maintAdd: false,
  noticeBox: false,
};
// 相關fn
const actions: any = {
  switchMaintPopup() {
    this.maintAdd = !this.maintAdd;
  },
  switchNoticeBox() {
    this.noticeBox = !this.noticeBox;
  },
};
const getters: _GettersTree<State> = {};
const usePopupStore = defineStore("Popup", {
  state: () => initState,
  actions,
  getters,
});

export default usePopupStore;
