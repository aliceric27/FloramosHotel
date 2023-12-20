<template>
  <el-config-provider :locale="language">
    <div id="main-warp">
      <!-- <alert /> -->

      <emergency
        v-if="isEmergency"
        :conten1="'一氧化碳偵測出現異常'"
        :conten2="'B2F  旅館後方左側'"
      />
      <maintainConfirm v-if="maintConfirm" />
      <alertreset v-if="alertset" />
      <datailPopup v-if="detailPopup" />
      <immimsg v-if="datalength && immPopup" />
      <sidepage />
      <pheader />
      <pmenu />
      <NuxtLoadingIndicator
        :color="'grey'"
        :height="4"
        :duration="2000"
        :throttle="0"
      />
      <loading
        :active="isLoading"
        :can-cancel="true"
        :is-full-page="true"
        :opacity="0.5"
        :transition="'slide'"
      />
      <NuxtPage />

      <marquee />
    </div>
  </el-config-provider>
</template>
<script lang="ts" setup>
import useLoginStore from "~/store/LoginStore";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import usePopupStore from "~/store/PopupStore";
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const LoginStore = useLoginStore();
const isLoading = computed(() => LoginStore.isLoading);
const socketstore = () => {
  socketStore.ConnectSocket();
};
socketstore();
const language = ref(zhTw);
const PopupStore = usePopupStore();
const isEmergency = computed(() => PopupStore.emergency);
const maintConfirm = computed(() => PopupStore.maintConfirm);
const alertset = computed(() => PopupStore.alertset);
const detailPopup = computed(() => PopupStore.detailPopup);
const immPopup = computed(() => PopupStore.immPopup);
const dataRaw = computed(() => socketStore.data);
const datalength = computed(() => toRaw(dataRaw.value)?.Events?.length);
</script>
<style lang="scss" scoped>
#main-warp {
  min-height: 100dvh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)),
    url("@/assets/images/background/image-10.png") 90% / cover no-repeat;
}
</style>
