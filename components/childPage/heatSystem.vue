<!-- 熱泵系統 -->
<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="flex justify-around">
        <div>
          <heat-1
            :title="deviceDetails[31]?.deviceName"
            :ID="deviceDetails[31]?.deviceID"
            :relIdx="0"
          />
          <heat-1
            :title="deviceDetails[32]?.deviceName"
            :ID="deviceDetails[32]?.deviceID"
            :relIdx="1"
          />
          <heat-1
            :title="deviceDetails[33]?.deviceName"
            :ID="deviceDetails[33]?.deviceID"
            :relIdx="2"
          />
          <heat-1
            :title="deviceDetails[34]?.deviceName"
            :ID="deviceDetails[34]?.deviceID"
            :relIdx="3"
          />
          <div><img src="@/assets/images/maincard/heat-pump.png" alt="" /></div>
        </div>
        <!-- 右側清單 -->
        <!-- <div>
          <div class="flex flex-col gap-4">
            <div class="border-2 border-dashed border-[#C2A344] rounded-xl">
              <heat-2 :title="deviceDetails[35]?.deviceName" :ID="35" />
              <heat-2 :title="deviceDetails[36]?.deviceName" :ID="36" />
              <heat-2 :title="deviceDetails[37]?.deviceName" :ID="37" />
              <heat-2 :title="deviceDetails[38]?.deviceName" :ID="38" />
            </div>
            <div>
              <div class="border-2 border-dashed border-[#C2A344] rounded-xl">
                <heat-3 :title="deviceDetails[39]?.deviceName" :ID="39" />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("熱泵系統");

const isfuelNormal = ref(true);
const isBatteryNormal = ref(true);
import useDeviceStore from "~/store/DeviceStore";

interface Device {
  deviceName: string;
  deviceID: number;
}

const deviceStore = useDeviceStore();
const deviceDetails = ref<{ [key: number]: Device | null }>({});
const DEVICE_TYPE = "heatbump";

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
  for (let id = 31; id <= 39; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>

<style lang="scss" scoped></style>
