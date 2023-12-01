<template>
  <div class="main-container flex flex-col gap-[-32px] items-center">
    <div class="flex items-end justify-center gap-2 shrink-0">
      <div>
        <img src="@/assets/images/wind/point.png" alt="" />
      </div>
      <div class="flex flex-col items-center justify-center gap-5 shrink-0">
        <div
          class="flex w-[266px] h-[60px] pt-0 pr-[11px] pb-0 justify-between items-center rounded-[30px]"
          @click="switchsidpage('送排風系統', props.title)"
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
          <DevicePower :deviceOn="deviceOn" @toggle-power="togglePower" />
        </div>
        <div class="flex items-center justify-center gap-9 shrink-0">
          <span
            class="h-[25px] shrink-0 basis-auto text-xl font-bold leading-[25px] text-[#707070] tracking-1.2px text-left break-words"
            >故障異常</span
          >
          <deviceNormal :isNormal="normal" @toggle="toggleNormal" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const switchsidpage = PopupStore.switchsidpage;
const props = defineProps({
  title: {
    type: String,
    default: "排風機",
  },
  deviceOn: {
    type: Boolean,
    default: false,
  },
  normal: {
    type: Boolean,
    default: false,
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
