import { defineStore, _ActionsTree, _GettersTree } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
interface LoginInfo {}
export interface State {
  token: string | null;
}
// 初始化資料
const initState: State = {
  token: null,
};
// 相關fn
const actions: any = {
  async sendLogin(userinfo: {}) {
    console.log("userinfo", userinfo);
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/login`,
      {
        method: "POST",
        body: { ...userinfo },
      }
    );
    let result = {
      data: toRaw(data.value),
      status: toRaw(status.value),
    };
    console.log("結果", result);
    return result;
  },
  checkTokenVaild(token: string) {
    console.log("檢查的token", token);
    const decoded = jwtDecode(token);
    const exp = decoded?.exp;
    console.log("exp", exp);
    if (exp) {
      const result = this.isTokenExpired(exp);
      console.log("result", result);
      return result;
    }
  },
  isTokenExpired(exp: number): boolean {
    // 獲取當前的 Unix timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000); // Date.now() 返回毫秒，所以除以 1000 轉換成秒
    // 如果當前時間大於或等於 exp，則 token 已過期
    console.log("currentTimestamp", currentTimestamp);
    return currentTimestamp < exp;
  },
  setToken(token: string) {
    this.token = token;
  },
  setExptime(time: string) {
    this.exptime = time;
  },
  initializeToken() {
    if (process.client) {
      const local = localStorage.getItem("token");
      // 確保只在客戶端執行
      const isJWT = this.checkIsJWT(local);
      if (isJWT) {
        this.token = localStorage.getItem("token");
        console.log("localToken", this.token);
      } else {
        this.token = null;
        localStorage.setItem("token", "");
        console.log("invalid token set to null", this.token);
      }
    }
  },
  checkIsJWT(token: String) {
    const parts = token?.split(".");
    return parts?.length === 3;
  },
  async getDevice() {
    const { data, pending, refresh, execute, error, status } = await useFetch(
      `${import.meta.env.VITE_Socket_URL}/api/system/power`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`, // 在这里添加 token
          "Content-Type": "application/json", // 确保设置正确的内容类型
        },
      }
    );
    let result = {
      data: toRaw(data.value),
      status: toRaw(status.value),
    };
    console.log("結果", result);
    return result;
  },
};
const getters: _GettersTree<State> = {
  //   getlocalToken: () =>
};
const useLoginStore = defineStore("loginStore", {
  state: () => initState,
  actions,
  getters,
});

export default useLoginStore;
