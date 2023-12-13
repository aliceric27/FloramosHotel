<!-- 水箱蓋-1 -->
<template>
  <div>
    <div class="relative">
      <div class="absolute top-0 left-0 w-full h-full shadow-blur"></div>
      <div class="relative z-10">
        <div class="flex bg-white rounded-lg shadow-md">
          <div class="flex justify-center">
            <img src="@/assets/button/sidepage-3.svg" alt="" />
          </div>
          <div>
            <div class="small-title">
              <p>{{ DeviceName }}</p>
            </div>
            <div class="flex justify-between w-full">
              <div
                class="p-4 text-[#717171] text-base font-bold tracking-[0.2rem]"
              >
                異常警報
              </div>
              <div class="p-4">
                <DeviceNormal :is-normal="isNormal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
interface Device {
  deviceName: string;
  deviceID: number;
}
const rdata = computed(() => {
  let systemType = "water";
  return toRaw(socketStore?.data?.BA[systemType]?.devices);
});
const DeviceName = computed(() => DeviceStatue?.value?.deviceName);
const DeviceStatue = computed(() => {
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === 12);
  return dstatus;
});
const isDeviceOn = computed(() =>
  DeviceStatue.value?.deviceSta === "開" ? true : false
);
const isNormal = computed(() =>
  DeviceStatue.value?.faultStatus === "正常" ? true : false
);
</script>
<style lang="scss" scoped>
.shadow-blur {
  background: #fffaea;
  filter: blur(7.5px);
}
</style>
