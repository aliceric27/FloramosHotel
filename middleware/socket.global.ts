import useLoginStore from "~/store/LoginStore";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  const { $swal } = useNuxtApp();
  const router = useRouter();
  const loginStore = useLoginStore();
  loginStore.initializeToken();
  const checkexp = loginStore.checkTokenVaild;
  const localtoken = loginStore.token;
  const checktoken = () => {
    console.log("localtoken", localtoken);
    if (!localtoken) {
      console.log("1");
      // router.push({ path: "/Login" });
      $swal.fire({
        title: "請重新登入",
        text: "憑證過期",
        icon: "warning",
        confirmButtonText: "確認",
      });
      return navigateTo({ path: "/Login" });
    } else {
      console.log("2");
      const expvaild = checkexp(localtoken);
      console.log("expvaild", expvaild);
      if (!expvaild) {
        console.log("3");
        localStorage.clear();
        return navigateTo({ path: "/Login" });
        $swal.fire({
          title: "請重新登入",
          text: "憑證過期",
          icon: "warning",
          confirmButtonText: "確認",
        });
      } else return true;
    }
  };
  if (to.path === "/Login") return true;
  checktoken();
  // if (!tokenValid) {
  // 使用 navigateTo 统一重定向方法
  //   return navigateTo({ path: "/Login" });
  // }
  console.log(to, from);
  return true;
});
