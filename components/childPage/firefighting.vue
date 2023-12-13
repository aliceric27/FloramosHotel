<template>
  <div id="main-warp">
    <div class="flex justify-center h-[70vh]">
      <div class="w-[80vw] flex flex-col">
        <Childtitle :title="childtitle" />
        <div class="grid justify-center grid-cols-2">
          <!-- 左 -->
          <div class="flex flex-col items-center">
            <div>
              <DeviceCard
                :title="deviceDetails[40]?.deviceName"
                :ID="deviceDetails[40]?.deviceID"
                :system="'消防設備'"
              />
            </div>
            <div>
              <DeviceCard
                :title="deviceDetails[41]?.deviceName"
                :ID="deviceDetails[41]?.deviceID"
                :system="'消防設備'"
              />
            </div>
            <div>
              <DeviceCard
                :title="deviceDetails[42]?.deviceName"
                :ID="deviceDetails[42]?.deviceID"
                :system="'消防設備'"
              />
            </div>
          </div>
          <!-- 右 -->
          <div>
            <div class="flex flex-col justify-around h-full">
              <!-- B1F -->
              <div class="flex items-center gap-4">
                <div class="flex gap-2">
                  <div><img src="@/assets/images/fire/B1F.svg" alt="" /></div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="129"
                      viewBox="0 0 11 129"
                      fill="none"
                    >
                      <path
                        d="M5.401 0.325877C2.45548 0.325877 0.0676676 2.71369 0.0676675 5.65921C0.0676674 8.60473 2.45548 10.9925 5.401 10.9925C8.34652 10.9925 10.7343 8.60473 10.7343 5.65921C10.7343 2.71369 8.34652 0.325877 5.401 0.325877ZM4.401 5.65921L4.401 128.659L6.401 128.659L6.401 5.65921L4.401 5.65921Z"
                        fill="#C2A344"
                      />
                    </svg>
                  </div>
                </div>

                <fire-1
                  :floor="'B1'"
                  :title="deviceDetails[43]?.deviceName"
                  :ID="43"
                />
                <!-- 火災警報 -->
                <fire-2
                  :floor="'1'"
                  :title="deviceDetails[49]?.deviceName"
                  :ID="49"
                />
              </div>
              <!-- 1F -->
              <div class="flex gap-4">
                <div class="flex gap-6">
                  <div><img src="@/assets/images/fire/1F.svg" alt="" /></div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="129"
                      viewBox="0 0 11 129"
                      fill="none"
                    >
                      <path
                        d="M5.401 0.325877C2.45548 0.325877 0.0676676 2.71369 0.0676675 5.65921C0.0676674 8.60473 2.45548 10.9925 5.401 10.9925C8.34652 10.9925 10.7343 8.60473 10.7343 5.65921C10.7343 2.71369 8.34652 0.325877 5.401 0.325877ZM4.401 5.65921L4.401 128.659L6.401 128.659L6.401 5.65921L4.401 5.65921Z"
                        fill="#C2A344"
                      />
                    </svg>
                  </div>
                </div>
                <fire-1
                  :floor="'1'"
                  :title="deviceDetails[44]?.deviceName"
                  :ID="44"
                />
                <fire-1
                  :floor="'1'"
                  :title="deviceDetails[45]?.deviceName"
                  :ID="45"
                />
              </div>
              <!-- 2F -->
              <div class="flex gap-4">
                <div class="flex gap-6">
                  <div><img src="@/assets/images/fire/2F.svg" alt="" /></div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="129"
                      viewBox="0 0 11 129"
                      fill="none"
                    >
                      <path
                        d="M5.401 0.325877C2.45548 0.325877 0.0676676 2.71369 0.0676675 5.65921C0.0676674 8.60473 2.45548 10.9925 5.401 10.9925C8.34652 10.9925 10.7343 8.60473 10.7343 5.65921C10.7343 2.71369 8.34652 0.325877 5.401 0.325877ZM4.401 5.65921L4.401 128.659L6.401 128.659L6.401 5.65921L4.401 5.65921Z"
                        fill="#C2A344"
                      />
                    </svg>
                  </div>
                </div>

                <fire-1
                  :floor="'2'"
                  :title="deviceDetails[46]?.deviceName"
                  :ID="46"
                />
                <fire-1
                  :floor="'2'"
                  :title="deviceDetails[47]?.deviceName"
                  :ID="47"
                />
                <fire-1
                  :floor="'2'"
                  :title="deviceDetails[48]?.deviceName"
                  :ID="48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("消防系統");
import useDeviceStore from "~/store/DeviceStore";

interface Device {
  deviceName: string;
  deviceID: number;
}

const deviceStore = useDeviceStore();
const deviceDetails = ref<{ [key: number]: Device | null }>({});
const DEVICE_TYPE = "firefighting";

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
  for (let id = 40; id <= 49; id++) {
    deviceDetails.value[id] = deviceStore.getDeviceByID(id, DEVICE_TYPE);
  }
};
</script>
