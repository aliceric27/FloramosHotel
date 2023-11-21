import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { RouteRecordName, Router } from "vue-router";
export interface State {
  page: string | null;
}
// 初始化資料
const initState: State = {
  page: "home",
};
// 相關fn
const actions: any = {
  async turnpage(page: RouteRecordName, router: Router) {
    if (page) {
      this.page = page;
      await router.push({ name: page });
      return this.page;
    }
  },
};
const getters: _GettersTree<State> = {};
const usePageStore = defineStore("main", {
  state: () => initState,
  actions,
  getters,
});

export default usePageStore;
