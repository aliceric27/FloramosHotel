<!-- 電力系統 -->
<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="grid grid-cols-3 gap-16 justify-items-center">
        <DeviceCard :title="'發電機'" :system="'電力系統'" />
        <DeviceCard :title="'進風機'" :system="'電力系統'" />
        <DeviceCard :title="'排風機'" :system="'電力系統'" />
        <div>
          <img src="@/assets/images/maincard/power-logo.png" alt="" srcset="" />
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between m-4">
          <div class="flex">
            <div>
              <img src="@/assets/button/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">電瓶電壓</p>
          </div>
          <div
            v-show="isBatteryNormal"
            @click="isBatteryNormal = !isBatteryNormal"
          >
            <img src="@/assets/button/battery_full.png" alt="normal" />
          </div>
          <div
            v-show="!isBatteryNormal"
            @click="isBatteryNormal = !isBatteryNormal"
          >
            <img src="@/assets/button/battery_low.png" alt="error" />
          </div>
          <div class="flex items-center justify-between">
            <p>電瓶電壓</p>
            <DeviceNormal :isNormal="isBatteryNormal" />
          </div>
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between min-w-[207px] m-4">
          <div class="flex items-center">
            <div>
              <img src="@/assets/button/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">日用油箱</p>
          </div>
          <div>
            <img
              v-show="isfuelNormal"
              @click="isfuelNormal = !isfuelNormal"
              src="@/assets/button/fueltank-nomal.png"
              alt="油箱圖案"
            />
            <img
              v-show="!isfuelNormal"
              @click="isfuelNormal = !isfuelNormal"
              src="@/assets/button/fueltank-error.png"
              alt="油箱圖案"
            />
          </div>
          <div class="flex items-center justify-between">
            <p>日用油箱</p>
            <DeviceNormal :isNormal="isfuelNormal" />
          </div>
        </div>
        <!-- -------------------------------- -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const sidpage = computed(() => PopupStore.sidpage);
const switchsidpage = PopupStore.switchsidpage;
const childtitle = ref("電力系統");
const isfuelNormal = ref(true);
const isBatteryNormal = ref(true);
</script>

<style lang="scss" scoped></style>
