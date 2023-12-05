import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { useRoute, useRouter } from "vue-router";
export interface State {
  acc: string | any;
  pwd: string | any;
}
// 初始化資料
const initState: State = {
  acc: null,
  pwd: null,
};
// 相關fn
const actions: any = {
  setAcc(v: any) {
    this.acc = v;
  },
  setPwd(c: any) {
    this.pwd = c;
  },
  cleartext() {
    this.acc = "";
    this.pwd = "";
  },
};
const getters: _GettersTree<State> = {};
const useInfoStore = defineStore("main", {
  state: () => initState,
  actions,
  getters,
});

export default useInfoStore;
