<template>
  <div>
    <div>
      <div class="flex flex-col items-center">
        <img
          src="@/assets/images/water/pond-1.png"
          alt=""
          v-show="pond === '1'"
        />
        <img
          src="@/assets/images/water/pond-2.png"
          alt=""
          v-show="pond === '2'"
        />
        <img
          src="@/assets/images/water/pond-3.png"
          alt=""
          v-show="pond === '3'"
        />
        <img
          src="@/assets/images/water/pond-4.png"
          alt=""
          v-show="pond === '4'"
        />
      </div>
      <div class="flex justify-between w-full">
        <div class="p-4 text-[#717171] text-base font-bold tracking-[0.2rem]">
          {{ "水位狀態" }}
        </div>
        <div class="p-4">
          <DeviceNormal :is-normal="isNormal" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isNormal: {
    type: Boolean,
    default: false,
  },
  pond: {
    type: String,
    default: "1",
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
  let deviceID = 0;
  switch (props.pond) {
    case "1":
      deviceID = 19;
      break;
    case "2":
      deviceID = 20;
      break;
    case "3":
      deviceID = 25;
      break;
    case "4":
      deviceID = 26;
      break;
  }
  const dstatus = rdata.value?.find((item: any) => item?.deviceID === deviceID);
  return dstatus;
});
const isDeviceOn = computed(() =>
  DeviceStatue.value?.deviceSta === "開" ? true : false
);
const isNormal = computed(() =>
  DeviceStatue.value?.faultStatus === "正常" ? true : false
);
</script>
<style lang="scss" scoped></style>
