<!-- 緊急求救小card -->
<template>
  <div>
    <div
      class="flex flex-col justify-between w-[20rem] min-h-[20rem] rounded-[1rem] border-4 border-[#E2E2E2] border-solid bg-no-repeat bg-center p-2"
      :class="backgroundClass"
    >
      <div class="flex">
        <p class="gold">{{ props.floor }}</p>
        <div><img src="@/assets/images/urgent/floor.png" /></div>
      </div>
      <div class="flex items-center justify-center">
        <p class="uragent-text">{{ deviceName }}</p>
      </div>
      <deviceAlert :isNormal="devisNormal" :isBigText="true" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const backgroundClass = computed(() => {
  return devisNormal
    ? "bg-[url(@/assets/images/urgent/uragent-bg-1.svg)] bg-contain"
    : "bg-[url(@/assets/images/urgent/uragent-bg-1.svg)] bg-contain";
});
const props = defineProps({
  floor: {
    type: String,
    default: "B1",
  },
  deviceID: {
    type: Number,
  },
});
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rdata = computed(() => {
  let systemType = "SOS";
  return toRaw(socketStore?.data?.BA[systemType]?.devices);
});
const DeviceStatue = computed(() => {
  const dstatus = rdata.value?.find(
    (item: any) => item?.deviceID === props.deviceID
  );
  return dstatus;
});
const deviceName = computed(() => DeviceStatue.value?.deviceName);
const isDeviceOn = computed(() =>
  DeviceStatue.value?.deviceSta === "開" ? true : false
);
const devisNormal = computed(() =>
  DeviceStatue.value?.faultStatus === "正常" ? true : false
);
</script>
<style lang="scss" scoped>
.gold {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13256rem;
}
.uragent-text {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.19881rem;
}
</style>
