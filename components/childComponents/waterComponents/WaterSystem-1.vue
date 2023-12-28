<!-- 生活用水 -->
<template>
  <div class="grid w-[80dvw] grid-cols-[auto,1fr,auto] m-4">
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="flex justify-between h-full">
        <!-- 左側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater :title="deviceDetails[15]?.deviceName" :ID="15" />
          </div>
          <div>
            <deviceWater :title="deviceDetails[16]?.deviceName" :ID="16" />
          </div>
          <div>
            <deviceWater
              :title="deviceDetails[14]?.deviceName"
              :ID="14"
              :isalertWarter="true"
            />
          </div>
        </div>
        <!-- 右側水塔圖 -->
        <img src="@/assets/images/water/tower-3.png" alt="水塔示意圖" />
      </div>
    </div>
    <!-- 2/3 -->
    <div class="w-full h-full bg-white">
      <div class="flex flex-col items-center">
        <div>
          <deviceWater
            :title="deviceDetails[12]?.deviceName"
            :isNormal="true"
            :ID="12"
            :isalertWarter="true"
          />
        </div>
        <div>
          <deviceWater :title="deviceDetails[13]?.deviceName" :ID="13" />
        </div>
        <div class="relative">
          <windCard
            :title="deviceDetails[17]?.deviceName"
            :ID="deviceDetails[17]?.deviceID"
            :system="'給排水系統'"
          />
          <div></div>
        </div>
      </div>
    </div>
    <!-- 3/3 -->
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="relative flex justify-between h-full">
        <!-- 左側水塔圖 -->
        <img src="@/assets/images/water/tower-3.png" alt="水塔示意圖" />

        <img
          class="absolute bottom-28 -left-5"
          src="@/assets/images/water/WaterPump.png"
          sizes=""
          alt=""
        />

        <img
          class="absolute scale-x-[-1] bottom-28 left-52"
          src="@/assets/images/water/WaterPump.png"
          alt=""
        />
        <!-- 右側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater :title="deviceDetails[52]?.deviceName" :ID="52" />
          </div>
          <div>
            <deviceWater
              :title="deviceDetails[11]?.deviceName"
              :ID="11"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard
              :title="deviceDetails[18]?.deviceName"
              :ID="deviceDetails[18]?.deviceID"
              :system="'給排水系統'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDeviceStore from "~/store/DeviceStore";
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
  deviceDetails.value[52] = deviceStore.getDeviceByID(52, DEVICE_TYPE);
};
console.log(deviceDetails);
</script>
