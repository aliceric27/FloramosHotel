<!-- 汙/雨水 -->
<template>
  <div>
    <div class="flex flex-col justify-between items-center h-[50vh] w-[90vw]">
      <div class="flex items-center justify-around w-full my-6">
        <div><deviceWater-3 :pond="'3'" /></div>
        <div><deviceWater-3 :pond="'4'" /></div>
      </div>
      <div>
        <div class="flex gap-[10rem]">
          <div class="flex gap-20">
            <deviceWater-5 :title="deviceDetails[27]?.deviceName" />
            <deviceWater-5 :title="deviceDetails[28]?.deviceName" />
          </div>
          <div class="flex">
            <deviceWater-5 :title="deviceDetails[29]?.deviceName" />
            <deviceWater-5 :title="deviceDetails[30]?.deviceName" />
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
const DEVICE_TYPE = "rainwater";

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
  for (let id = 25; id <= 30; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>

<style lang="scss" scoped></style>
