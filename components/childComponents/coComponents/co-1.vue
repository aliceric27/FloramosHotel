<!-- 一氧化碳偵測Card -->
<template>
  <div>
    <div
      class="cursor-pointer relative w-[11.6rem] h-[9.1rem] rounded-[0.43rem] shadow-[2px_4px_12px_2px_rgba(60,60,60,0.7)] border-b-[1px] border-solid"
      :class="borderbottom"
      @click="switchsidpage(props.system, props.deviceName, props.deviceID)"
    >
      <div
        class="absolute w-[8rem] h-auto max-w-[130px] max-h-[99.47px] left-14 top-4"
      >
        <img src="@/assets/images/maincard/carbon-monoxide.png" alt="" />
      </div>
      <div class="relative flex flex-col">
        <div class="flex flex-col justify-around mx-4 my-2">
          <goldFloor :floor="devicefloor" />
          <div>
            <p class="loc">{{ props.deviceName }}</p>
          </div>
        </div>
        <div>
          <div class="flex justify-around my-2">
            <div class="loc">偵測狀態</div>
            <co-alert :status="devicestatus" />
          </div>
          <!-- <div class="flex justify-around">
            <div class="loc">電量狀態</div>
            <co-alert :status="props.battery" />
          </div> -->
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
  deviceName: {
    type: String,
    default: "error",
  },
  deviceID: {
    type: Number,
  },
  faultStatus: {
    type: String,
  },
  system: {
    type: String,
  },
});
const devicefloor = computed(() => {
  switch (props.deviceID) {
    case 50:
      return "B1F";
    case 51:
      return "B2F";
    default:
      return "1F";
  }
});
const borderbottom = computed(() => {
  const device = props.faultStatus;
  switch (device) {
    case "正常":
      return "border-b-[#5FD76C]";
      break;
    case "warning":
      return "border-b-[#FF9214]";
      break;
    case "異常":
      return "border-b-[#FF5B5B]";
      break;
    default:
      return "border-b-[#FF5B5B]";
      break;
  }
});
const devicestatus = computed(() => {
  const device = props.faultStatus;
  if (device === "正常") return "normal";
  else return "error";
});
</script>
<style lang="scss" scoped>
.loc {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0675rem;
}
</style>
