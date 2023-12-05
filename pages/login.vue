<template>
  <div id="login-warp" class="bg-contain xl:bg-cover">
    <div class="warp-in">
      <Logo :class="{ 'logo-login': isLogin }" />
      <p class="logo-text logo-login">中央監控系統</p>
      <Inputtext :nametitle="'Username'" :typ="'acc'" v-if="!isLogin" />
      <Inputtext :nametitle="'Password'" :typ="'pwd'" v-if="!isLogin" />
      <Loginbtn @click="checkacc" v-if="!isLogin" />
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
const isLogin = ref(false);
onBeforeMount(() => {
  infostore.cleartext();
});
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
    localStorage.setItem("token", rawtoken);
    setToken(rawtoken);
    infostore.cleartext();
    await navigateTo({ path: "/" });
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
      color: #1777fc;
      font-family: CHei2HK;
      font-size: 1.25rem;
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
