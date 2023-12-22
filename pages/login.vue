<template>
  <div id="login-warp" class="bg-contain xl:bg-cover">
    <div class="warp-in">
      <Logo />
      <p class="logo-text">中央監控系統</p>
      <Inputtext
        :nametitle="'Username'"
        :typ="'acc'"
        v-if="!isLogin"
        @keyup.enter="checkacc"
      />
      <Inputtext
        :nametitle="'Password'"
        :typ="'pwd'"
        v-if="!isLogin"
        @keyup.enter="checkacc"
      />
      <Loginbtn @click="checkacc" v-if="!isLogin" @keyup.enter="checkacc" />
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: false,
});

import useInfoStore from "~/store/InfoStore";
import useLoginStore from "~/store/LoginStore";
import { useRouter } from "vue-router";

const router = useRouter();
const infostore = useInfoStore();
const loginstore = useLoginStore();
const { $swal } = useNuxtApp();
const isLogin = ref(true);
const inittokenCheck = () => {
  if (process.client) {
    const local = sessionStorage.getItem("token");
    if (local) {
      const valid = loginstore.checkTokenVaild(local);
      if (valid) {
        loginstore.setToken(local);
        loginstore.setLogin();
        navigateTo({ path: "/" });
      } else {
        isLogin.value = false;
      }
    } else {
      isLogin.value = false;
    }
    infostore.cleartext();
  }
};
inittokenCheck();
const checkacc = async () => {
  const sendLogin = loginstore.sendLogin;
  const setToken = loginstore.setToken;
  const inputacc = computed(() => infostore.acc);
  const inputpw = computed(() => infostore.pwd);
  const cleartext = infostore.cleartext;

  console.log(inputacc, inputpw);
  const sendinfo = {
    username: inputacc,
    password: inputpw,
  };
  const result = await sendLogin(sendinfo);
  console.log("result", result);
  if (result.status === "error") {
    // account/password error
    $swal.fire({
      title: "帳號密碼錯誤",
      text: "錯誤",
      icon: "warning",
      confirmButtonText: "確認",
    });
    infostore.cleartext();
  }
  if (result.status === "success") {
    loginstore.setLogin();
    isLogin.value = true;
    const rawtoken = result?.data?.token;
    console.log("rawtoken", rawtoken);
    sessionStorage.setItem("token", rawtoken);
    setToken(rawtoken);
    infostore.cleartext();
    navigateTo({ path: "/" });
  } else {
    sessionStorage.removeItem("token");
    navigateTo({ path: "/login" });
  }
};
</script>

<style lang="scss" scoped>
@keyframes fadeInScaleUp {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
}

.logo-login {
  animation: fadeInScaleUp 0.6s ease-in-out forwards;
}
.fade-transition {
  transition: opacity 0.5s ease-in-out;
  opacity: 0; // 初始状态为不可见
  &:loaded {
    opacity: 1; // 图片加载后淡入
  }
}

#login-warp {
  min-height: 100vh;
  display: flex;
  justify-content: center;

  background-image: url("@/assets/images/background/image-10.png");
  .warp-in {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo-text {
      margin: 0 0 1rem 0;
      color: rgb(182, 115, 0);
      font-family: CHei2HK;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.375rem;
      // visibility: hidden;
      // opacity: 0;
      // transition: visibility 0s ease-in 1s, opacity 1s linear;
    }
    .logo-text.show {
      visibility: visible;
      opacity: 1;
      transition-delay: 0s;
    }
  }
}
</style>
