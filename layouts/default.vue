<template>
  <div id="main-warp">
    <!-- <alert /> -->

    <emergency
      v-if="isEmergency"
      :conten1="'一氧化碳偵測出現異常'"
      :conten2="'B2F  旅館後方左側'"
    />
    <maintain-confirm />
    <sidepage />
    <pheader />
    <pmenu />
    <NuxtPage />
    <marquee />
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
console.log("PopupStore", PopupStore);
const isEmergency = computed(() => PopupStore.emergency);
</script>
<style lang="scss" scoped>
#main-warp {
  min-height: 100dvh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)),
    url("@/assets/images/background/image-10.png") 90% / cover no-repeat;
}
</style>
