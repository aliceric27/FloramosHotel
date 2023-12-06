<!-- 送排風系統 -->
<template>
  <div class="flex justify-center">
    <div class="w-max">
      <Childtitle :title="childtitle" />
      <div class="flex justify-items-center gap-[2.25rem]">
        <!-- 左側 -->
        <div
          class="flex flex-col items-start gap-[2.25rem] p-[0.625rem_2.8125rem_0.625rem_1.9375rem] bg-white"
        >
          <!-- B1FBar -->
          <div class="flex flex-col items-start">
            <div
              class="flex w-[9rem] justify-center items-center gap-[0.75rem]"
            >
              <p class="B1F">B1F</p>
              <img src="@/assets/images/wind/floor.png" alt="" />
            </div>
            <div class="bg-[#C2A344] w-[16.625rem] h-[0.1875rem]"></div>
          </div>
          <!--  -->
          <WindCard
            :title="deviceDetails[6]?.deviceName"
            :ID="deviceDetails[6]?.deviceID"
          />
          <WindCard
            :title="deviceDetails[7]?.deviceName"
            :ID="deviceDetails[7]?.deviceID"
          />
          <!--  -->
          <!--  -->
        </div>
        <!-- 右側 -->
        <div
          class="bg-white flex items-start content-start flex-shrink-0 flex-wrap w-[43.25rem] h-[27.6875rem] p-[0.375rem_1.5625rem_0rem_1.5625rem] gap-[2.25rem_6.5625rem]"
        >
          <!-- B2F-separate bar -->
          <div class="flex w-[40.125rem] flex-col items-start shrink-0">
            <div
              class="flex w-[9rem] justify-center items-center gap-[0.75rem]"
            >
              <p class="B1F">B2F</p>
              <img src="@/assets/images/wind/floor.png" alt="" />
            </div>
            <div class="bg-[#C2A344] w-[40.125rem] h-[0.1875rem]"></div>
          </div>
          <!-- end -->
          <!-- Frame 138 -->
          <div class="flex items-start gap-[6.125rem]">
            <WindCard
              :title="deviceDetails[8]?.deviceName"
              :ID="deviceDetails[8]?.deviceID"
            />
            <WindCard
              :title="deviceDetails[9]?.deviceName"
              :ID="deviceDetails[9]?.deviceID"
            />
          </div>
          <!-- end -->
          <div class="flex items-start gap-[6.125rem]">
            <WindCard
              :title="deviceDetails[10]?.deviceName"
              :ID="deviceDetails[10]?.deviceID"
            />
            <img src="@/assets/images/wind/air-con-pic.png" alt="" />
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

const childtitle = ref("送排風系統");
import useDeviceStore from "~/store/DeviceStore";

interface Device {
  deviceName: string;
  deviceID: number;
}

const deviceStore = useDeviceStore();
const deviceDetails = ref<{ [key: number]: Device | null }>({});
const DEVICE_TYPE = "ventilation";

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
  for (let id = 6; id <= 10; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>

<style lang="scss" scoped>
.B1F {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.15rem;
}
</style>
