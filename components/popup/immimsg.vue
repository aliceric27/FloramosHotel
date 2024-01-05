<template>
  <div>
    <black-opacity />
    <div class="fixed z-50 left-[38%] top-[40%]">
      <div class="main-container">
        <div class="wrapper">
          <div class="pic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="19"
              viewBox="0 0 27 19"
              fill="none"
            >
              <path
                d="M13.4901 1.00087C8.88632 1.00635 5.15534 4.80813 5.14996 9.50035C5.54187 20.7493 21.4397 20.7458 21.8297 9.50035C21.8248 4.80813 18.0938 1.00635 13.4901 1.00087ZM13.4901 15.8748C5.22424 15.6069 5.22521 3.3923 13.4901 3.12587C21.7559 3.39379 21.7549 15.6084 13.4901 15.8748ZM14.5324 6.31311V9.50035C14.5324 10.087 14.0657 10.5626 13.4901 10.5626C12.9144 10.5626 12.4477 10.087 12.4477 9.50035V6.31311C12.4477 5.72646 12.9144 5.25086 13.4901 5.25086C14.0657 5.25086 14.5324 5.72646 14.5324 6.31311ZM26 9.50035C25.998 12.461 24.987 15.3285 23.1403 17.6139C22.7733 18.0666 22.1161 18.1303 21.6719 17.7568C21.2277 17.3828 21.1651 16.713 21.5316 16.2603C24.6874 12.327 24.6874 6.67317 21.5316 2.73991C21.1646 2.28722 21.2277 1.6174 21.6719 1.2434C22.1161 0.869397 22.7733 0.93364 23.1403 1.38633C24.987 3.67168 25.998 6.5397 26 9.49985V9.50035ZM5.44805 16.2603C5.81504 16.7125 5.75249 17.3823 5.30829 17.7563C4.86458 18.1303 4.20732 18.0666 3.84033 17.6139C0.0531427 12.8933 0.0531427 6.10693 3.84082 1.38683C4.20781 0.934636 4.86458 0.870891 5.30878 1.2444C5.75249 1.6184 5.81504 2.28772 5.44854 2.74041C2.29271 6.67367 2.29271 12.3275 5.44854 16.2608L5.44805 16.2603ZM14.5324 12.6876C14.5324 13.2742 14.0657 13.7498 13.4901 13.7498C12.9144 13.7498 12.4477 13.2742 12.4477 12.6876C12.4477 12.1009 12.9144 11.6253 13.4901 11.6253C14.0657 11.6253 14.5324 12.1009 14.5324 12.6876Z"
                fill="#FF5B5B"
                stroke="#FF5B5B"
                stroke-width="0.3"
              />
            </svg>
          </div>
          <span class="text">即時訊息</span>
        </div>
        <div class="pic-2"></div>
        <span class="text-2">{{ getNewData?.deviceName }}發生異常</span>
        <div class="section">
          <div class="box">
            <span class="text-3">異常原因</span
            ><span class="text-4">{{ getNewData?.alarmMessage }}</span>
          </div>
          <div class="group">
            <span class="text-5">更新時間</span
            ><span class="text-6">{{
              formatISODateWithDayjs(getNewData?.eventTime)
            }}</span>
          </div>
        </div>
        <div class="group-2">
          <div class="cursor-pointer box-2" @click="switchimmPopup">
            <span class="text-7">關閉</span>
          </div>
          <!-- <div class="wrapper-2"><span class="text-8">警報管理</span></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useSocketStore from "~/store/socketStore";
import usePopupStore from "~/store/PopupStore";
import dayjs from "dayjs";
const socketStore = useSocketStore();
const PopupStore = usePopupStore();
const switchimmPopup = PopupStore.switchimmPopup;
const data = computed(() => socketStore.data);
const immPopup = PopupStore.immPopup;
const datalength = computed(() => toRaw(data.value)?.Events?.length);
const getNewData = computed(() => {
  if (data.value) {
    return data.value?.Events[datalength?.value - 1];
  } else return null;
});
function formatISODateWithDayjs(isoString: string) {
  return dayjs(isoString).format("YYYY/MM/DD HH:mm");
}
</script>
<style lang="scss" scoped>
.main-container {
  overflow: hidden;
}

.main-container,
.main-container * {
  box-sizing: border-box;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 24px;
  position: relative;
  width: 460px;
  height: 296px;
  margin: 0 auto;
  padding: 27px 35px 27px 35px;
  background: #f5f5f5;
  border: 1px solid #c1c1c1;
  border-radius: 6px;
  box-shadow: 0 0 90px 0 #b4b4b4;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 11px;
  position: relative;
  width: 122px;
}
.text {
  flex-basis: auto;
  position: relative;
  height: 23px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #838383;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.86px;
  text-align: left;
  white-space: nowrap;
  z-index: 2;
}
.pic-2 {
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  min-width: 0;
  background: url(../assets/images/5aea8698-b63f-464b-8872-7e34dab1b4cf.png)
    no-repeat center;
  background-size: cover;
  z-index: 3;
}
.text-2 {
  align-self: stretch;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  min-width: 0;
  height: 25px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.2px;
  z-index: 4;
  text-shadow: 0 0 90px #b4b4b4;
}
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-wrap: wrap;
  flex-shrink: 0;
  position: relative;
  min-width: 0;
  height: 60px;
  padding: 0 15px 0 15px;
  z-index: 5;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 7px;
  position: relative;
  width: 170px;
  z-index: 6;
}
.text-3 {
  align-self: stretch;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  min-width: 0;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.96px;
  z-index: 7;
}
.text-4 {
  align-self: stretch;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  min-width: 0;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.96px;
  z-index: 8;
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 9px;
  position: relative;
  width: 170px;
  height: 49px;
  z-index: 9;
}
.text-5 {
  align-self: stretch;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  min-width: 0;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.96px;
  z-index: 10;
}
.text-6 {
  align-self: stretch;
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  min-width: 0;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}
.group-2 {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 36px;
  position: relative;
  width: 392px;
  z-index: 12;
}
.box-2 {
  flex-grow: 1;
  flex-basis: 0;
  position: relative;
  min-width: 0;
  height: 38px;
  background: #f5f5f5;
  border: 2px solid #e2e2e2;
  z-index: 13;
  overflow: hidden;
  border-radius: 25px;
}
.text-7 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 56px;
  bottom: 3px;
  left: 56px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #b8b8b8;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.86px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 19.8px;
  z-index: 14;
}
.wrapper-2 {
  flex-grow: 1;
  flex-basis: 0;
  position: relative;
  min-width: 0;
  height: 38px;
  background: #ffffff;
  border: 1.5px solid #eaeaea;
  z-index: 15;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 1px 1px 2px 0 rgba(34, 34, 34, 0.1);
}
.text-8 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 29px;
  top: calc(50% - 13px);
  right: 35px;
  left: 35px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.86px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 9.9px;
  z-index: 16;
  text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.1);
}
</style>
