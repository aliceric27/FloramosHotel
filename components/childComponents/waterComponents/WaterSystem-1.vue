<template>
  <div class="grid w-[80dvw] grid-cols-[auto,1fr,auto] m-4">
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="flex justify-between h-full">
        <!-- 左側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater :title="deviceID15?.deviceName" :isNormal="true" />
          </div>
          <div>
            <deviceWater
              :title="deviceID14?.deviceName"
              :isNormal="false"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard :title="deviceID17?.deviceName" :system="'給排水系統'" />
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
            <deviceWater :title="deviceID13?.deviceName" :isNormal="true" />
          </div>
          <div>
            <deviceWater
              :title="deviceID11?.deviceName"
              :isNormal="true"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard :title="deviceID18?.deviceName" :system="'給排水系統'" />
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
interface Device {
  deviceName: string;
  deviceID: number;
}
onMounted(() => {
  loadDeviceData();
});
import useDeviceStore from "~/store/DeviceStore";
const deviceStore = useDeviceStore();
const deviceID11 = ref<Device | null>(null);
const deviceID12 = ref<Device | null>(null);
const deviceID13 = ref<Device | null>(null);
const deviceID14 = ref<Device | null>(null);
const deviceID15 = ref<Device | null>(null);
const deviceID16 = ref<Device | null>(null);
const deviceID17 = ref<Device | null>(null);
const deviceID18 = ref<Device | null>(null);
const loadDeviceData = async () => {
  await deviceStore.getDevice("water");
  updateDeviceDetails();
};
const updateDeviceDetails = () => {
  deviceID11.value = deviceStore.getDeviceByID(11, "water");
  deviceID12.value = deviceStore.getDeviceByID(12, "water");
  deviceID13.value = deviceStore.getDeviceByID(13, "water");
  deviceID14.value = deviceStore.getDeviceByID(14, "water");
  deviceID15.value = deviceStore.getDeviceByID(15, "water");
  deviceID16.value = deviceStore.getDeviceByID(16, "water");
  deviceID17.value = deviceStore.getDeviceByID(17, "water");
  deviceID18.value = deviceStore.getDeviceByID(18, "water");
};
</script>
