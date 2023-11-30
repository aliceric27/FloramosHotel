import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { RouteRecordName, Router } from "vue-router";
export interface State {
  maintAdd: boolean;
}
// 初始化資料
const initState: State = {
  maintAdd: false,
};
// 相關fn
const actions: any = {
  switchMaintPopup() {
    console.log("ll");
    this.maintAdd = !this.maintAdd;
  },
};
const getters: _GettersTree<State> = {};
const usePopupStore = defineStore("main", {
  state: () => initState,
  actions,
  getters,
});

export default usePopupStore;
