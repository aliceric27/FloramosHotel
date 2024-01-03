<template>
  <div
    class="main-container flex flex-col gap-[-32px] items-center cursor-pointer"
    @click="switchsidpage"
  >
    <div class="relative flex items-end justify-center gap-2 shrink-0">
      <div>
        <img src="@/assets/images/wind/point.png" alt="" />
      </div>
      <img
        class="absolute w-[6rem] h-[5rem] -top-6 -left-[4.5rem]"
        src="@/assets/images/water/WaterPump.png"
        alt=""
      />
      <div class="flex flex-col items-center justify-center gap-5 shrink-0">
        <div
          class="flex w-[266px] h-[60px] pt-0 pr-[11px] pb-0 justify-between items-center rounded-[30px]"
        >
          <div class="flex items-start shrink-0">
            <span
              class="h-[46px] shrink-0 basis-auto text-4xl font-bold leading-[45.721px] text-[#707070] tracking-2.16px text-left break-words"
              >{{ title }}</span
            >
          </div>
          <!-- <div
            class="w-2.5 h-[17.395px] shrink-0 bg-[url(@/assets/images/wind/arrow.png)] bg-cover bg-no-repeat"
          ></div> -->
        </div>
        <div class="flex items-center justify-center gap-9 shrink-0">
          <span
            class="h-[25px] shrink-0 basis-auto text-xl font-bold leading-[25px] text-[#707070] tracking-1.2px text-left break-words"
            >設備狀態</span
          >
          <DevicePower :deviceOn="isDeviceOn" />
        </div>
        <div class="flex items-center justify-center gap-9 shrink-0">
          <span
            class="h-[25px] shrink-0 basis-auto text-xl font-bold leading-[25px] text-[#707070] tracking-1.2px text-left break-words"
            >故障異常</span
          >
          <deviceNormal :isNormal="isNormal" :statTitle="statTitle" />
        </div>
      </div>
      <div class="absolute right-0 top-4">
        <img src="@/assets/button/arrow.svg" alt="arrow" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useSocketStore from "~/store/socketStore";
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const switchsidpage = async () => {
  const title = props.title;
  const system = "廢水系統";
  const id = props.ID;
  await PopupStore.switchsidpage(system, title, id);
};
const socketStore = useSocketStore();
const props = defineProps({
  title: {
    type: String,
    default: "廢水泵1-1",
  },
  ID: {
    type: Number,
  },
});
const rdata = computed(() => {
  let systemType = "water";
  return toRaw(socketStore?.data?.BA[systemType]?.devices);
});
const DeviceStatue = computed(() => {
  return rdata.value?.find((item: any) => item?.deviceID === props.ID);
});
const isDeviceOn = computed(() =>
  DeviceStatue.value?.deviceSta === "開" ? true : false
);
const isNormal = computed(() =>
  DeviceStatue.value?.faultStatus === "正常" ? true : false
);
const statTitle = computed(() => DeviceStatue.value?.faultStatus);
</script>
