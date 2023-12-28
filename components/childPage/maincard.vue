<!-- 主頁card -->
<template>
  <div id="maincard-warp" :style="maincardStyle" class="cursor-pointer">
    <div class="card-in">
      <div class="card-top">
        <img :src="StatusPic" alt="" />
        <img src="@/assets/images/maincard/arrow.svg" alt="" />
      </div>
      <div class="card-bottom">
        <div class="flex flex-col justify-end">
          <p
            class="system-title"
            :class="{ 'has-notification': filtdata?.count }"
            :data-notification-number="filtdata?.count"
          >
            {{ maincardtitle }}
          </p>
          <p class="device-count">{{ props.deviceCount }}devices</p>
        </div>
        <div
          v-if="props.title === '熱泵系統' && Heatshutdown?.length"
          class="overflow-hidden"
        >
          <div v-for="item in Heatshutdown">
            <p>{{ item }}</p>
          </div>
          <p>設備狀況<span>關閉</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { stringifyQuery } from "vue-router";
import dynamoImage from "@/assets/images/maincard/dynamo.png";
import supplyAirImage from "@/assets/images/maincard/Supply-air.png";
import waterImage from "@/assets/images/maincard/water.png";
import heatPumpImage from "@/assets/images/maincard/heat-pump.png";
import urgentImage from "@/assets/images/maincard/urgent.png";
import firefightingImage from "@/assets/images/maincard/firefighting.png";
import lightImage from "@/assets/images/maincard/light.png";
import carbonMonoxideImage from "@/assets/images/maincard/carbon-monoxide.png";
import errorImage from "@/assets/images/maincard/error.png";
import normalImage from "@/assets/images/maincard/normal.png";
import notiImage from "@/assets/images/maincard/noti.png";
const props = defineProps({
  status: String,
  title: String,
  notify: Number,
  deviceCount: Number,
});
const notificationNumber = props.notify; //紅點提示
const maincardtitle = props.title; //標題
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rdata = computed(() => socketStore.data);
const Heatshutdown = ref([]);
const maincardStyle = computed(() => {
  let bgurl;
  switch (props.title) {
    case "電力系統":
      bgurl = dynamoImage;
      break;
    case "送排風系統":
      bgurl = supplyAirImage;
      break;
    case "排水系統":
      bgurl = waterImage;
      break;
    case "熱泵系統":
      bgurl = heatPumpImage;
      break;
    case "緊急求救":
      bgurl = urgentImage;
      break;
    case "消防系統":
      bgurl = firefightingImage;
      break;
    case "公共照明系統":
      bgurl = lightImage;
      break;
    case "一氧化碳偵測":
      bgurl = carbonMonoxideImage;
      break;
    default:
      bgurl = dynamoImage;
  }
  return {
    backgroundColor: "#fff",
    backgroundImage: `url(${bgurl})`,
  };
});
const filtdata = computed(() => {
  switch (props.title) {
    case "電力系統":
      return rdata.value?.BA?.power?.mainpage;
    case "送排風系統":
      return rdata.value?.BA?.ventilation?.mainpage;
    case "排水系統":
      return rdata.value?.BA?.water?.mainpage;
    case "熱泵系統":
      Heatshutdown.value = rdata.value?.BA?.heatbump?.shutdown;
      return rdata.value?.BA?.heatbump?.mainpage;
    case "緊急求救":
      return rdata.value?.BA?.SOS.mainpage;
    case "消防系統":
      return rdata.value?.BA?.firefighting?.mainpage;
    case "公共照明系統":
      return rdata.value?.DO?.lightControl.mainpage;
    case "一氧化碳偵測":
      return rdata.value?.BA?.CO.mainpage;
  }
});
const StatusPic = computed(() => {
  if (props.title === "公共照明系統") {
    return "";
  }
  const status = toRaw(filtdata.value)?.faultStatus;
  const needMaint = toRaw(filtdata.value)?.needMaintenance;
  switch (status) {
    case "正常":
      return needMaint ? notiImage : normalImage;
    case "異常":
      return errorImage;
    default:
      return errorImage;
  }
});
</script>
<style lang="scss" scoped>
#maincard-warp {
  background-repeat: no-repeat;
  background-position: 5% 80%;
  margin: 1rem;
  width: 19.6875rem;
  height: 13.5625rem;
  .card-in {
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card-top {
      display: flex;
      justify-content: space-between;
    }
    .card-bottom {
      display: flex;
      justify-content: space-between;

      .system-title {
        color: #4aa452;
        font-family: Microsoft JhengHei UI;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.09rem;
        position: relative;
      }
      .system-title.has-notification::after {
        content: attr(data-notification-number); /* The notification number */
        position: absolute; /* Position it relative to the .system-title */
        top: -10px; /* Adjust as necessary */
        width: 20px; /* Badge size */
        height: 20px; /* Badge size */
        line-height: 20px; /* Center the content vertically */
        text-align: center; /* Center the content horizontally */
        background-color: #ff5b5b; /* Badge color */
        color: white; /* Text color */
        border-radius: 50%; /* Make it round */
        font-size: 0.75rem; /* Adjust as necessary */
        font-weight: bold; /* Make the number bold */
      }

      .device-count {
        color: #848484;
        font-family: Microsoft JhengHei UI;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
}
</style>
