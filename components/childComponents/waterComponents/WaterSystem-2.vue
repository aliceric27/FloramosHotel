<!-- 汙廢水 -->
<template>
  <div>
    <div class="flex flex-col justify-between items-center h-[50vh] w-[90vw]">
      <div class="flex items-center justify-between gap-20 my-6">
        <div><deviceWater-3 :pond="'1'" /></div>
        <div><deviceWater-4 :title="'化糞池泵浦'" /></div>
        <div><deviceWater-3 :pond="'2'" /></div>
      </div>
      <div>
        <div class="flex gap-[10rem]">
          <div class="flex gap-10">
            <deviceWater-5 :title="deviceDetails[21]?.deviceName" :ID="21" />
            <deviceWater-5 :title="deviceDetails[22]?.deviceName" :ID="22" />
          </div>
          <div class="flex">
            <deviceWater-5 :title="deviceDetails[23]?.deviceName" :ID="23" />
            <deviceWater-5 :title="deviceDetails[24]?.deviceName" :ID="24" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDeviceStore from "~/store/DeviceStore";

interface Device {
  deviceName: string;
  deviceID: number;
}

const deviceStore = useDeviceStore();
const deviceDetails = ref<{ [key: number]: Device | null }>({});
const DEVICE_TYPE = "sewage";

onMounted(async () => {
  try {
    await loadDeviceData();
  } catch (error) {
    console.error("Error loading device data:", error);
  }
});

const loadDeviceData = async () => {
  await deviceStore.getDevice(DEVICE_TYPE);
  updateDeviceDetails();
};

const updateDeviceDetails = () => {
  for (let id = 19; id <= 24; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>

<style lang="scss" scoped></style>
