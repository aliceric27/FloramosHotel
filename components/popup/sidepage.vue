<!-- 共用側邊 -->
<template>
  <div>
    <div class="relative">
      <div
        v-if="sidpage"
        class="fixed z-30 w-screen h-screen bg-black bg-opacity-50"
      >
        <div @click="switchsidpage"><black-opacity /></div>
        <div class="absolute right-0 z-50 w-1/3 h-full bg-[#F2F2F2]">
          <div class="flex flex-col items-center justify-center">
            <div class="flex justify-center w-full grey-bg h-1/2">
              <div class="flex flex-col">
                <div>
                  <p class="side-title">{{ system }}</p>
                  <p class="my-4 small-title-n">{{ device }}</p>
                </div>
                <div class="flex items-center">
                  <div class="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="189"
                      viewBox="0 0 11 189"
                      fill="none"
                    >
                      <path
                        d="M5.5 0.966654C2.55448 0.966654 0.166666 3.35447 0.166667 6.29999C0.166667 9.24551 2.55448 11.6333 5.5 11.6333C8.44552 11.6333 10.8333 9.24551 10.8333 6.29999C10.8333 3.35447 8.44552 0.966654 5.5 0.966654ZM4.5 6.29999L4.50001 189L6.50001 189L6.5 6.29999L4.5 6.29999Z"
                        fill="#717171"
                      />
                    </svg>
                  </div>
                  <div class="flex flex-col justify-between">
                    <div class="flex">
                      <div>
                        <img src="@/assets/button/sidepage-1.svg" alt="" />
                      </div>
                      <p class="side-green-title">保養管理</p>
                    </div>
                    <div class="flex outline-1 outline-green-500">
                      <div class="m-4 side-content">
                        <p class="m-2">保養週期</p>
                        <p class="m-2">{{ CycleString }}</p>
                      </div>
                      <div class="m-4 side-content">
                        <p class="m-2">上次保養時間</p>
                        <p class="m-2">{{ lastdate }}</p>
                      </div>
                      <div class="m-4 side-content">
                        <p class="m-2">下次保養時間</p>
                        <p class="m-2">{{ nextdate }}</p>
                      </div>
                    </div>
                    <div
                      @click="switchmaintConfirm"
                      class="cursor-pointer flex text-neutral-500 text-2xl font-bold leading-8 tracking-wider whitespace-nowrap justify-center items-center shadow-sm bg-white px-5 py-1.5 rounded-3xl"
                    >
                      <p>確認保養</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-4/5 m-8 border-t-2 border-[#717171] h-1/2"></div>
            <div class="w-full grey-bg h-1/2">
              <div
                class="flex flex-col items-center justify-center"
                v-if="eventData?.eventTime"
              >
                <div class="flex">
                  <div class="flex items-center justify-center">
                    <img src="@/assets/button/sidepage-2.svg" alt="" />
                  </div>
                  <p class="side-green-title">警報即時監視</p>
                </div>
                <!--  -->
                <div
                  class="h-[200px] w-[80%] bg-white flex flex-col justify-center items-center my-4"
                >
                  <div class="flex my-4">
                    <div class="mx-2">
                      <img src="@/assets/button/sidepage-3.svg" alt="" />
                    </div>
                    <div class="flex flex-col my-2 side-time">
                      <p>警報時間</p>
                      <p>{{ eventData?.eventTime }}</p>
                    </div>
                    <div class="flex items-center justify-center mx-4">
                      <p>{{ eventData?.alarmMessage }}</p>
                    </div>
                  </div>
                  <div class="flex" v-if="eventData?.resolveTime">
                    <div class="mx-2">
                      <img src="@/assets/button/sidepage-3.svg" alt="" />
                    </div>
                    <div class="flex flex-col my-2 side-time">
                      <p>解除時間</p>
                      <p>{{ eventData?.resolveTime }}</p>
                    </div>
                    <div class="flex items-center justify-center mx-4">
                      <p>{{ eventData?.resolveMessage }}</p>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div
                  @click="switchdetailPopup('alarm')"
                  class="cursor-pointer flex text-neutral-500 text-2xl font-bold leading-8 tracking-wider whitespace-nowrap justify-center items-center shadow-sm bg-white px-5 py-1.5 rounded-3xl w-4/5"
                >
                  <p>復歸</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const sidpage = computed(() => PopupStore.sidpage);
const maintainConfirm = computed(() => PopupStore.maintConfirm);
const alertset = computed(() => PopupStore.alertset);
const system = computed(() => PopupStore.sidata.system);
const device = computed(() => PopupStore.sidata.device);
const maintain = computed(() => PopupStore.sidata.maintain);
const eventData = computed(() => PopupStore.sidata.event);
const switchsidpage = PopupStore.switchsidpage;
const switchmaintConfirm = PopupStore.switchmaintConfirm;
const setMaintaincycle = PopupStore.setMaintaincycle;
const switchdetailPopup = PopupStore.switchdetailPopup;
const getCycle = (c: String) => {
  try {
    switch (c) {
      case "d":
        return "日";
      case "w":
        return "週";
      case "m":
        return "月";
      case "y":
        return "年";
    }
  } catch {
    console.error(Error);
  }
};
const CycleString = computed(() => {
  const cycle = getCycle(maintain?.value?.cycle_unit);
  const cycleVal = maintain?.value?.cycle_value;
  if (cycle && cycleVal) {
    const result = `每${cycleVal}${cycle}`;
    setMaintaincycle(result);
    return result;
  } else {
    setMaintaincycle(null);
    return null;
  }
});
const getDate = (d: String) => d?.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || null;
const lastdate = computed(() => getDate(maintain?.value?.lastTime));
const nextdate = computed(() => getDate(maintain?.value?.nextTime));
</script>
<style scoped></style>
