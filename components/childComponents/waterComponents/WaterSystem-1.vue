<!-- 生活用水 -->
<template>
  <div class="grid w-[80dvw] grid-cols-[auto,1fr,auto] m-4">
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="flex justify-between h-full">
        <!-- 左側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater
              :title="deviceDetails[15]?.deviceName"
              :isNormal="true"
            />
          </div>
          <div>
            <deviceWater
              :title="deviceDetails[14]?.deviceName"
              :isNormal="false"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard
              :title="deviceDetails[17]?.deviceName"
              :system="'給排水系統'"
            />
            <div>
              <img
                class="absolute top-0 -right-14"
                src="@/assets/images/water/WaterPump.png"
                sizes=""
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 右側水塔圖 -->
        <img src="@/assets/images/water/tower-3.png" alt="水塔示意圖" />
      </div>
    </div>
    <!-- 2/3 -->
    <div class="w-full h-full bg-white">
      <div class="flex justify-center">
        <div>
          <deviceWater-2 />
        </div>
      </div>
    </div>
    <!-- 3/3 -->
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="flex justify-between h-full">
        <!-- 左側水塔圖 -->
        <img src="@/assets/images/water/tower-1.png" alt="水塔示意圖" />
        <!-- 右側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater
              :title="deviceDetails[13]?.deviceName"
              :isNormal="true"
            />
          </div>
          <div>
            <deviceWater
              :title="deviceDetails[11]?.deviceName"
              :isNormal="true"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard
              :title="deviceDetails[18]?.deviceName"
              :system="'給排水系統'"
            />
            <div>
              <img
                class="absolute top-0 scale-x-[-1] -left-14"
                src="@/assets/images/water/WaterPump.png"
                alt=""
              />
            </div>
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
const DEVICE_TYPE = "water";

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
  for (let id = 11; id <= 18; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>
