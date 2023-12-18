<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[60vw] relative">
        <Childtitle :title="childtitle" />
        <light-1 />
        <div class="grid grid-cols-8 gap-4">
          <div v-for="item in rawData">
            <light-2
              :title="item?.ioName"
              :is-on="item?.status === 'ON' ? true : false"
              :title2="item?.title2"
              :rdata="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useSocketStore from "~/store/socketStore";
import useDeviceStore from "~/store/DeviceStore";
const DeviceStore = useDeviceStore();
const socketStore = useSocketStore();
const lightPage = computed(() => DeviceStore.lightPage);
const rawData = computed(() => {
  const page = lightPage.value;
  return toRaw(socketStore?.data?.DO?.lightControl[page as string]);
});
const childtitle = ref("公共照明系統");
const lightdata = ref([
  {
    title: "車道燈 01",
    isOn: true,
  },
  {
    title: "車位燈 01",
    isOn: true,
  },
  ,
  {
    title: "車位燈 02",
    isOn: false,
  },
  {
    title: "車道燈 02",
    isOn: false,
  },
  {
    title: "車道燈 03",
    isOn: false,
  },
  {
    title: "車道燈 03",
    title2: "梯間燈",
    isOn: false,
  },
  ,
  {
    title: "車位燈 02",
    isOn: false,
  },

  {
    title: "車位燈 03",
    isOn: false,
  },

  {
    title: "SP 01",
    isOn: false,
  },

  {
    title: "SP 02",
    isOn: false,
  },
  {
    title: "車道燈",
    title2: "梯間燈",
    isOn: true,
  },
  {
    title: "正向",
    title2: "地底燈 01",
    isOn: true,
  },
  {
    title: "正向",
    title2: "庭園燈",
    isOn: false,
  },
  {
    title: "正向",
    title2: "地底燈 02",
    isOn: true,
  },
  {
    title: "正向 壁燈",
    title2: "",
    isOn: true,
  },
  {
    title: "背向",
    title2: "地底燈",
    isOn: true,
  },
  {
    title: "背向",
    title2: "庭園燈",
    isOn: false,
  },
  {
    title: "背向",
    title2: "矮燈",
    isOn: false,
  },
  {
    title: "左向",
    title2: "地底燈 01",
    isOn: false,
  },
  {
    title: "左向",
    title2: "地底燈 02",
    isOn: false,
  },
  {
    title: "左向",
    title2: "庭園燈",
    isOn: true,
  },
  {
    title: "右向",
    title2: "草坪燈",
    isOn: true,
  },
]);
</script>
<style lang="scss" scoped></style>
