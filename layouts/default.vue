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
      <sidepage />
      <pheader />
      <pmenu />
      <NuxtPage />
      <marquee />
    </div>
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhTw from "element-plus/dist/locale/zh-tw.mjs";
import usePopupStore from "~/store/PopupStore";
const language = ref(zhTw);
const PopupStore = usePopupStore();
const isEmergency = computed(() => PopupStore.emergency);
const maintConfirm = computed(() => PopupStore.maintConfirm);
const alertset = computed(() => PopupStore.alertset);
</script>
<style lang="scss" scoped>
#main-warp {
  min-height: 100dvh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)),
    url("@/assets/images/background/image-10.png") 90% / cover no-repeat;
}
</style>
