<!-- 汙廢水 -->
<template>
  <div>
    <div class="grid grid-cols-2 h-[90vh]">
      <!-- left -->
      <div class="flex flex-col items-center justify-around gap-10">
        <div class="flex items-center gap-20">
          <div><deviceWater-3 :pond="'1'" /></div>
          <div><deviceWater-3 :pond="'2'" /></div>
        </div>
        <div>
          <div class="flex gap-[10rem]">
            <div class="flex flex-col gap-10">
              <deviceWater-5 :title="deviceDetails[21]?.deviceName" :ID="21" />
              <deviceWater-5 :title="deviceDetails[22]?.deviceName" :ID="22" />
            </div>
            <div class="flex flex-col gap-10">
              <deviceWater-5 :title="deviceDetails[23]?.deviceName" :ID="23" />
              <deviceWater-5 :title="deviceDetails[24]?.deviceName" :ID="24" />
            </div>
          </div>
        </div>
      </div>
      <!-- right-->
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center w-max">
          <div class="border-2 border-dashed border-[#C2A344] rounded-xl">
            <deviceWater-6 :title="deviceDetails[53]?.deviceName" :ID="53" />
            <deviceWater-6 :title="deviceDetails[54]?.deviceName" :ID="54" />
            <deviceWater-6 :title="deviceDetails[55]?.deviceName" :ID="55" />
            <deviceWater-6 :title="deviceDetails[56]?.deviceName" :ID="56" />
            <deviceWater-6 :title="deviceDetails[57]?.deviceName" :ID="57" />
            <deviceWater-6 :title="deviceDetails[58]?.deviceName" :ID="58" />
            <deviceWater-6 :title="deviceDetails[59]?.deviceName" :ID="59" />
            <deviceWater-6 :title="deviceDetails[60]?.deviceName" :ID="60" />
            <deviceWater-6 :title="deviceDetails[61]?.deviceName" :ID="61" />
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
  for (let id = 53; id <= 61; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>

<style lang="scss" scoped></style>
