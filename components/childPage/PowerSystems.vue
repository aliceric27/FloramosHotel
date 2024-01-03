<!-- 電力系統 -->
<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="grid grid-cols-3 gap-4 justify-items-center">
        <DeviceCard
          :title="deviceDetails[1]?.deviceName"
          :system="'電力系統'"
          :ID="deviceDetails[1]?.deviceID"
        />
        <DeviceCard
          :title="deviceDetails[2]?.deviceName"
          :system="'電力系統'"
          :ID="deviceDetails[2]?.deviceID"
        />
        <DeviceCard
          :title="deviceDetails[3]?.deviceName"
          :system="'電力系統'"
          :ID="deviceDetails[3]?.deviceID"
        />
        <div>
          <img src="@/assets/images/maincard/power-logo.png" alt="" srcset="" />
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between m-4">
          <div class="flex">
            <div>
              <img src="@/assets/button/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">{{ deviceDetails[4]?.deviceName }}</p>
          </div>
          <div v-show="batteryStatue">
            <img src="@/assets/button/battery_full.png" alt="normal" />
          </div>
          <div v-show="!batteryStatue">
            <img src="@/assets/button/battery_low.png" alt="error" />
          </div>
          <div class="flex items-center justify-between">
            <p>電瓶電壓</p>
            <DeviceNormal :isNormal="batteryStatue" :statTitle="batterystat" />
          </div>
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between min-w-[207px] m-4">
          <div class="flex items-center">
            <div>
              <img src="@/assets/button/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">{{ deviceDetails[5]?.deviceName }}</p>
          </div>
          <div>
            <img
              v-show="oilStatue"
              src="@/assets/button/fueltank-nomal.png"
              alt="油箱圖案"
            />
            <img
              v-show="!oilStatue"
              src="@/assets/button/fueltank-error.png"
              alt="油箱圖案"
            />
          </div>
          <div class="flex items-center justify-between">
            <p>油位</p>
            <DeviceNormal :isNormal="oilStatue" :statTitle="oilstat" />
          </div>
        </div>
        <!-- -------------------------------- -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
onMounted(async () => {
  try {
    await loadDeviceData();
  } catch (error) {
    console.error("Error loading device data:", error);
  }
});
interface Device {
  deviceName: string;
  deviceID: number;
}
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rdata = computed(() => {
  return toRaw(socketStore?.data?.BA?.power?.devices);
});
const batteryStatue = computed(() => {
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === 4);
  if (dstatus) {
    return dstatus?.faultStatus === "正常" ? true : false;
  }
  return dstatus;
});

const batterystat = computed(() => {
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === 4);
  if (dstatus) {
    return dstatus?.faultStatus;
  }
  return dstatus;
});

const oilStatue = computed(() => {
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === 5);
  if (dstatus) {
    return dstatus?.faultStatus === "正常" ? true : false;
  }
  return false;
});

const oilstat = computed(() => {
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === 5);
  if (dstatus) {
    return dstatus?.faultStatus;
  }
  return false;
});

import usePopupStore from "~/store/PopupStore";
import useDeviceStore from "~/store/DeviceStore";
const deviceStore = useDeviceStore();
const Rawpower = computed(() => deviceStore.power);
const powerdevice = toRaw(Rawpower?.value?.data);
const PopupStore = usePopupStore();
const sidpage = computed(() => PopupStore.sidpage);
const switchsidpage = PopupStore.switchsidpage;
const childtitle = ref("電力系統");
const isfuelNormal = ref(true);
const isBatteryNormal = ref(true);

const deviceDetails = ref<{ [key: number]: Device | null }>({});
const DEVICE_TYPE = "power";

const loadDeviceData = async () => {
  await deviceStore.getDevice(DEVICE_TYPE);
  updateDeviceDetails();
};

const updateDeviceDetails = () => {
  for (let id = 1; id <= 5; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>

<style lang="scss" scoped></style>
