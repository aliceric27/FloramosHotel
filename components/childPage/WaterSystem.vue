<!-- 給排水系統 -->
<template>
  <div>
    <Watertitle :title="'給排水系統'" />
    <div class="flex items-center justify-center">
      <WaterSystem-1 v-if="waterPage === '1'" />
      <WaterSystem-2 v-if="waterPage === '2'" />
      <WaterSystem-3 v-if="waterPage === '3'" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDeviceStore from "~/store/DeviceStore";
const deviceStore = useDeviceStore();
import usePageStore from "~/store/PageStore";
const PageStore = usePageStore();
console.log("PageStore", PageStore);
const waterPage = computed(() => PageStore.water);
const turnWaterpage = PageStore.turnWaterpage;
</script>
