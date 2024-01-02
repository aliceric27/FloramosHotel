<!-- 汙廢水頁面 -->
<template>
  <div>
    <div
      class="border-2 border-[#C2A344] border-dashed h-max w-max rounded-[1rem] min-w-[14.75rem] m-2 cursor-pointer"
      @click="switchsidpage"
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
  },
  isNormal: {
    type: Boolean,
  },
  isalertWarter: {
    type: Boolean,
  },
  ID: {
    type: Number,
  },
});
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const switchsidpage = async () => {
  const title = props.title;
  const system = "排水系統";
  const id = props.ID;
  await PopupStore.switchsidpage(system, title, id);
};
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
const isNormal = computed(() => {
  if (props.ID === 14 || props.ID === 11) {
    const stat = DeviceStatue.value?.faultStatus;
    if (stat === "正常") return true;
  }
  DeviceStatue.value?.faultStatus === "正常" ? true : false;
});
</script>
