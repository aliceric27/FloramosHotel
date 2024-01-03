<template>
  <div class="main-container flex flex-col gap-[-32px] items-center">
    <div class="flex items-end justify-center gap-2 shrink-0">
      <div>
        <img src="@/assets/images/wind/point.png" alt="" />
      </div>
      <div class="flex flex-col items-center justify-center gap-5 shrink-0">
        <div
          class="flex w-[266px] h-[60px] pt-0 pr-[11px] pb-0 justify-between items-center rounded-[30px]"
          @click="switchsidpage(props.system, props.title, props.ID)"
        >
          <div class="flex items-start shrink-0">
            <span
              class="h-[46px] shrink-0 basis-auto text-4xl font-bold leading-[45.721px] text-[#707070] tracking-2.16px text-left break-words"
              >{{ title }}</span
            >
          </div>
          <div
            class="w-2.5 h-[17.395px] shrink-0 bg-[url(@/assets/images/wind/arrow.png)] bg-cover bg-no-repeat"
          ></div>
        </div>
        <div class="flex items-center justify-center gap-9 shrink-0">
          <span
            class="h-[25px] shrink-0 basis-auto text-xl font-bold leading-[25px] text-[#707070] tracking-1.2px text-left break-words"
            >設備狀態</span
          >
          <DevicePower :deviceOn="isDeviceOn" @toggle-power="togglePower" />
        </div>
        <div class="flex items-center justify-center gap-9 shrink-0">
          <span
            class="h-[25px] shrink-0 basis-auto text-xl font-bold leading-[25px] text-[#707070] tracking-1.2px text-left break-words"
            >故障異常</span
          >
          <deviceNormal :isNormal="isNormal" :statTitle="statTitle" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const PopupStore = usePopupStore();
const switchsidpage = PopupStore.switchsidpage;
const rdata = computed(() => {
  let systemType = "";
  if (props.system === "送排風系統") systemType = "ventilation";
  if (props.system === "給排水系統") systemType = "water";
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

const statTitle = computed(() => DeviceStatue.value?.faultStatus);

const props = defineProps({
  title: {
    type: String,
  },
  deviceOn: {
    type: Boolean,
    default: false,
  },
  normal: {
    type: Boolean,
    default: false,
  },
  system: {
    type: String,
  },
  ID: {
    type: Number,
  },
});
const deviceOn = ref(true);
const normal = ref(true);
const togglePower = () => {
  deviceOn.value = !deviceOn.value;
};
const toggleNormal = () => {
  normal.value = !normal.value;
};
</script>
