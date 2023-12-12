import useLoginStore from "~/store/LoginStore";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
export default defineNuxtRouteMiddleware((to, from) => {
  const LoginStore = useLoginStore();
  console.log("to", to, "from", from);
  const checkToken = LoginStore.checkTokenVaild;
  const isLogin = LoginStore.isLogin;
  const token = LoginStore.token;
  console.log("tokentoken", token);
  if (to.path === "/login") return true;
  if (isLogin) {
    const vaild = checkToken(token);
    if (vaild) return true;
    else return navigateTo("/login");
  } else return navigateTo("/login");
});
