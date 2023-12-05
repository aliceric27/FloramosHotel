<!-- 電力系統 -->
<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="grid grid-cols-3 gap-16 justify-items-center">
        <DeviceCard :title="deviceID1?.deviceName" :system="'電力系統'" />
        <DeviceCard :title="deviceID2?.deviceName" :system="'電力系統'" />
        <DeviceCard :title="deviceID3?.deviceName" :system="'電力系統'" />
        <div>
          <img src="@/assets/images/maincard/power-logo.png" alt="" srcset="" />
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between m-4">
          <div class="flex">
            <div>
              <img src="@/assets/button/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">{{ deviceID4?.deviceName }}</p>
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
            <p class="small-title">{{ deviceID5?.deviceName }}</p>
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
            <p>油位</p>
            <DeviceNormal :isNormal="isfuelNormal" />
          </div>
        </div>
        <!-- -------------------------------- -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
onMounted(() => {
  loadDeviceData();
});
interface Device {
  deviceName: string;
  deviceID: number;
}
import usePopupStore from "~/store/PopupStore";
import useDeviceStore from "~/store/DeviceStore";
const deviceStore = useDeviceStore();
const Rawpower = computed(() => deviceStore.power);
const powerdevice = toRaw(Rawpower?.value?.data);
const deviceID1 = ref<Device | null>(null);
const deviceID2 = ref<Device | null>(null);
const deviceID3 = ref<Device | null>(null);
const deviceID4 = ref<Device | null>(null);
const deviceID5 = ref<Device | null>(null);
const PopupStore = usePopupStore();
const sidpage = computed(() => PopupStore.sidpage);
const switchsidpage = PopupStore.switchsidpage;
const childtitle = ref("電力系統");
const isfuelNormal = ref(true);
const isBatteryNormal = ref(true);

const loadDeviceData = async () => {
  await deviceStore.getDevice("power");
  updateDeviceDetails();
};

const updateDeviceDetails = () => {
  deviceID1.value = deviceStore.getDeviceByID(1, "power");
  deviceID2.value = deviceStore.getDeviceByID(2, "power");
  deviceID3.value = deviceStore.getDeviceByID(3, "power");
  deviceID4.value = deviceStore.getDeviceByID(4, "power");
  deviceID5.value = deviceStore.getDeviceByID(5, "power");
};
</script>

<style lang="scss" scoped></style>
