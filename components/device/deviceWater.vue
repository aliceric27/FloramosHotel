<!-- 汙廢水頁面 -->
<template>
  <div>
    <div
      class="border-2 border-[#C2A344] border-dashed h-max w-max rounded-[1rem] min-w-[14.75rem] m-2"
    >
      <div class="flex flex-col">
        <div class="p-4 small-title tracking-[0.12rem]">
          <p>{{ props.title }}</p>
        </div>
        <div class="flex justify-between w-full">
          <div class="p-4 text-[#717171] text-base font-bold tracking-[0.2rem]">
            {{ isalertWarter ? "水位狀態" : "異常警報" }}
          </div>
          <div class="p-4">
            <DeviceNormal :is-normal="isNormal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "屋頂-水塔蓋",
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
  isalertWarter: {
    type: Boolean,
    default: false,
  },
  ID: {
    type: Number,
  },
});
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
const DeviceStatue = computed(() => {
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === props.ID);
  return dstatus;
});
const isDeviceOn = computed(() =>
  DeviceStatue.value?.deviceSta === "開" ? true : false
);
const isNormal = computed(() =>
  DeviceStatue.value?.faultStatus === "正常" ? true : false
);
</script>
