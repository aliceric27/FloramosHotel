<!-- 消防右側card -->
<template>
  <div>
    <div
      class="w-[11.7rem] h-[8.1rem] rounded-[1.17038rem] bg-white shadow-[0px_0px_28.0895px_0px_rgba(255,250,234),1.87263px_2.80895px_3.74527px_0px_rgba(0,0,0,0.15)]"
    >
      <div
        class="flex justify-between flex-col shadow-[0px_0px_9.36317px_0px_rgba(255,250,234)] rounded-[1rem] bg-white p-2"
      >
        <div class="flex">
          <p class="gold">{{ props.floor }}</p>
          <div><img src="@/assets/images/urgent/floor.png" /></div>
        </div>
        <div>
          <p class="uragent-text">{{ props.title }}</p>
        </div>
        <deviceAlert-p :title="'設備狀態'" :isPower="isDeviceOn" />
        <deviceAlert :title="'故障異常'" :isNormal="isNormal" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const props = defineProps({
  title: {
    type: String,
  },
  floor: {
    type: String,
  },
  ID: {
    type: Number,
  },
});
const rdata = computed(() => {
  let systemType = "firefighting";
  console.log(
    "socketStore?.data?.BA[systemType]?.devices",
    socketStore?.data?.BA[systemType]?.devices
  );
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
<style lang="scss" scoped>
.gold {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13256rem;
}
.uragent-text {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.19881rem;
}
</style>
