<!-- 主頁card -->
<template>
  <div id="maincard-warp" :style="maincardStyle">
    <div class="card-in">
      <div class="card-top">
        <img :src="`_nuxt/assets/images/maincard/${status}.png`" alt="" />
        <img src="@/assets/images/maincard/arrow.svg" alt="" />
      </div>
      <div class="card-bottom">
        <div>
          <p
            class="system-title"
            :class="{ 'has-notification': notificationNumber }"
            :data-notification-number="notificationNumber"
          >
            {{ maincardtitle }}
          </p>
          <p class="device-count">5 devices</p>
        </div>
        <div>
          <p>熱泵主機_01</p>
          <p>設備狀況<span>關閉</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { stringifyQuery } from "vue-router";

const props = defineProps({
  status: String,
  title: String,
  notify: Number,
});
const status = props.status; //設備狀態
const notificationNumber = props.notify; //紅點提示
const maincardtitle = props.title; //標題

const maincardStyle = computed(() => {
  let bgtitle = "";
  switch (props.title) {
    case "電力系統":
      bgtitle = "dynamo.png";
      break;
    case "送排風系統":
      bgtitle = "Supply-air.png";
      break;
    case "排水系統":
      bgtitle = "water.png";
      break;
    case "熱泵系統":
      bgtitle = "heat-pump.png";
      break;
    case "緊急求救":
      bgtitle = "urgent.png";
      break;
    case "消防系統":
      bgtitle = "firefighting.png";
      break;
    case "公共照明系統":
      bgtitle = "light.png";
      break;
    case "一氧化碳偵測":
      bgtitle = "carbon-monoxide.png";
      break;
    default:
      bgtitle = "dynamo.png";
  }
  let bgUrl = `_nuxt/assets/images/maincard/${bgtitle}`;
  return {
    backgroundColor: "#fff",
    backgroundImage: `url(${bgUrl})`,
  };
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
      position: relative;
      .system-title {
        color: #4aa452;
        font-family: Microsoft JhengHei UI;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.09rem;
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
