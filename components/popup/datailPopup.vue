<template>
  <black-opacity />
  <div class="fixed z-50 left-[38%] top-[20%]">
    <div class="main-container">
      <span class="text">{{ titleTyp }}</span>
      <div class="border-t-2 border-gray-300 section">
        <div class="img"></div>
        <div class="box">
          <div class="section-2">
            <span class="text-2">設備名稱</span
            ><span class="text-3">{{ eventData?.deviceName }}</span>
          </div>
          <div class="wrapper">
            <div class="group">
              <div class="section-3">
                <span class="text-4">主系統</span
                ><span class="text-5">{{ eventData?.mainSystem }}</span>
              </div>
              <div class="section-4">
                <div class="group-2">
                  <span class="text-6">警報時間</span
                  ><span class="text-7">{{ eventData?.eventTime }}</span>
                </div>
                <div class="wrapper-2">
                  <span class="text-8">訊息</span
                  ><span class="text-9">{{ eventData?.alarmMessage }}</span>
                </div>
              </div>
            </div>
            <div class="box-2">
              <div class="group-3">
                <span class="text-a">子系統</span
                ><span class="text-b">{{ device }}</span>
              </div>
              <div class="section-5">
                <div class="group-4">
                  <span class="text-c">解除時間</span
                  ><span class="text-d">{{ eventData?.resolveTime }}</span>
                </div>
                <div class="section-6">
                  <span class="text-e">訊息</span
                  ><span class="text-f">{{ eventData?.resolveMessage }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="box-3">
            <div class="group-5">
              <span class="text-10">預期</span>
              <div class="group-6">
                <el-checkbox-group v-model="checkedexceptedState" :max="1">
                  <el-checkbox
                    v-for="val in exceptedState"
                    :key="val"
                    :label="val"
                    :disabled="checkisEdit"
                    >{{ val }}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div class="box-7">
              <span class="text-14">硬體</span>
              <div class="wrapper-6">
                <el-checkbox-group v-model="checkedhardwareState" :max="1">
                  <el-checkbox
                    v-for="val in hardwareState"
                    :key="val"
                    :label="val"
                    :disabled="checkisEdit"
                    >{{ val }}</el-checkbox
                  >
                </el-checkbox-group>
              </div>
            </div>
          </div>
          <div class="section-c">
            <el-input
              v-model="textarea"
              maxlength="30"
              placeholder="備註"
              show-word-limit
              type="textarea"
              :disabled="checkisEdit"
            />
          </div>
        </div>
        <div class="group-a">
          <div class="cursor-pointer wrapper-b" @click="closedetailPopup">
            <span class="text-1a">關閉</span>
          </div>
          <div
            class="cursor-pointer wrapper-c"
            @click="sendUpdata"
            v-if="!checkisEdit"
          >
            <span class="text-1b">確認</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
import useDeviceStore from "~/store/DeviceStore";
const { $swal } = useNuxtApp();
const PopupStore = usePopupStore();
const DeviceStore = useDeviceStore();
const closedetailPopup = PopupStore.closedetailPopup;
const detailPoptyp = computed(() => PopupStore.detailPoptyp);
const system = computed(() => PopupStore.sidata.system);
const device = computed(() => PopupStore.sidata.device);
const eventData = computed(() => PopupStore.sidata.event);
const titleTyp = computed(() =>
  detailPoptyp.value === "alarm" ? "賦歸事件" : "歷史事件"
);
const textarea = ref("");
const checkedexceptedState = computed({
  get: () => {
    if (
      eventData.value &&
      eventData.value.expectedState &&
      exceptedState.includes(eventData.value.expectedState)
    ) {
      return [eventData.value.expectedState];
    }
    return [];
  },
  set: (newValue) => {
    if (eventData.value) {
      eventData.value.expectedState = newValue[0]; // 假設 newValue 是一個陣列
    }
  },
});
const checkedhardwareState = computed({
  get: () => {
    if (
      eventData.value &&
      eventData.value.hardwareState &&
      hardwareState.includes(eventData.value.hardwareState)
    ) {
      return [eventData.value.hardwareState];
    }
    return [];
  },
  set: (newValue) => {
    if (eventData.value) {
      eventData.value.hardwareState = newValue[0]; // 假設 newValue 是一個陣列
    }
  },
});
const exceptedState = ["非計畫內", "計畫內", "系統測試"];
const hardwareState = ["維修", "更換", "保養", "無"];
const sendUpdata = async () => {
  const data = {
    exceptedState: checkedexceptedState.value[0],
    hardwareState: checkedhardwareState.value[0],
    comment: textarea.value,
    eventType: "history",
  };
  const result = await DeviceStore.updateEvent(data);
  if (result.status === "error") {
    $swal.fire({
      title: "失敗",
      text: `${result?.error?.data?.message}`,
      icon: "error",
      confirmButtonText: "確認",
    });
  } else if (result.status === "success") {
    $swal
      .fire({
        title: "成功",
        text: `賦歸成功`,
        icon: "success",
        confirmButtonText: "確認",
      })
      .then(async () => {
        await PopupStore.closedetailPopup();
        await PopupStore.switchsidpage();
        await DeviceStore.getEvent();
      });
  }
};
const checkisEdit = computed(() => {
  if (eventData.value?.resolveTime !== null && detailPoptyp.value === "alarm") {
    return false;
  }
  return true;
});
watch(eventData, (newdata, olddata) => {
  console.log("newData", newdata, olddata);
});
</script>
<style lang="scss" scoped>
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
  gap: 17px;
  position: relative;
  width: 458px;
  height: 585px;
  margin: 0 auto;
  background: #f5f5f5;
  border: 1px solid #c1c1c1;
  border-radius: 6px;
  box-shadow: 0 0 90px 0 #b4b4b4;
}
.text {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 28px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 20px;
  font-weight: 700;
  line-height: 25.4px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 6px;
  text-shadow: 0 0 90px #b4b4b4;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 30px;
  position: relative;
  width: 384px;
  z-index: 1;
}
.img {
  flex-shrink: 0;
  position: relative;
  width: 384px;
  background: url(../assets/images/0aa91702-1976-4855-aba7-536e75d5f63a.png)
    no-repeat center;
  background-size: cover;
  z-index: 2;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 18px;
  position: relative;
  width: 360px;
  z-index: 3;
}
.section-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 3px;
  position: relative;
  width: 92px;
  z-index: 4;
}
.text-2 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 2.6px;
  z-index: 5;
}
.text-3 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 34px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 22px;
  font-weight: 700;
  line-height: 34px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.3199999999999998px;
  z-index: 6;
}
.wrapper {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 10px;
  position: relative;
  width: 360px;
  z-index: 7;
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 16px;
  position: relative;
  width: 175px;
  z-index: 8;
}
.section-3 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 170px;
  z-index: 9;
}
.text-4 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.4000000000000001px;
  z-index: 10;
}
.text-5 {
  flex-shrink: 0;
  position: relative;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.7px;
  z-index: 11;
}
.section-4 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 14px;
  position: relative;
  width: 175px;
  height: 114px;
  padding: 0 15px 0 15px;
  background: #eeeeee;
  border: 1px solid #e2e2e2;
  z-index: 12;
  border-radius: 8px;
}
.group-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 5px;
  position: relative;
  width: 159.559px;
  z-index: 13;
}
.text-6 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.3px;
  z-index: 14;
}
.text-7 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.65px;
  z-index: 15;
}
.wrapper-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 5px;
  position: relative;
  width: 144.118px;
  z-index: 16;
}
.text-8 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.3px;
  z-index: 17;
}
.text-9 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.7px;
  z-index: 18;
}
.box-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 16px;
  position: relative;
  width: 175px;
  z-index: 19;
}
.group-3 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 2px;
  position: relative;
  width: 170px;
  z-index: 20;
}
.text-a {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.4000000000000001px;
  z-index: 21;
}
.text-b {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.7px;
  z-index: 22;
}
.section-5 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 14px;
  position: relative;
  width: 175px;
  height: 114px;
  padding: 0 15px 0 15px;
  background: #eeeeee;
  border: 1px solid #e2e2e2;
  z-index: 23;
  border-radius: 8px;
}
.group-4 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 5px;
  position: relative;
  width: 159.559px;
  z-index: 24;
}
.text-c {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.3px;
  z-index: 25;
}
.text-d {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.65px;
  z-index: 26;
}
.section-6 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 5px;
  position: relative;
  width: 144.118px;
  z-index: 27;
}
.text-e {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 17px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 13px;
  font-weight: 700;
  line-height: 16.51px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.3px;
  z-index: 28;
}
.text-f {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 0.7px;
  z-index: 29;
}
.box-3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 15px;
  position: relative;
  width: 313px;
  z-index: 30;
}
.group-5 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 21px;
  position: relative;
  width: 313px;
  z-index: 31;
}
.text-10 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.4000000000000001px;
  z-index: 32;
}
.group-6 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 21px;
  position: relative;
  z-index: 33;
}
.box-4 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 78px;
  z-index: 34;
}
.wrapper-3 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 78px;
  z-index: 35;
  overflow: hidden;
}
.section-7 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 36;
  overflow: hidden;
  border-radius: 2px;
}
.text-11 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 37;
}
.group-7 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 64px;
  z-index: 38;
}
.wrapper-4 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 64px;
  z-index: 39;
  overflow: hidden;
}
.box-5 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 40;
  overflow: hidden;
  border-radius: 2px;
}
.text-12 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 41;
}
.wrapper-5 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 78px;
  z-index: 42;
}
.section-8 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 78px;
  z-index: 43;
  overflow: hidden;
}
.box-6 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 44;
  overflow: hidden;
  border-radius: 2px;
}
.text-13 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 45;
}
.box-7 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 21px;
  position: relative;
  width: 306px;
  z-index: 46;
}
.text-14 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 18px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #49a352;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.78px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 1.4000000000000001px;
  z-index: 47;
}
.wrapper-6 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 23px;
  position: relative;
  z-index: 48;
}
.box-8 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 50px;
  z-index: 49;
}
.box-9 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 50px;
  z-index: 50;
  overflow: hidden;
}
.section-9 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 51;
  overflow: hidden;
  border-radius: 2px;
}
.text-15 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 52;
}
.wrapper-7 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 50px;
  z-index: 53;
}
.wrapper-8 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 50px;
  z-index: 54;
  overflow: hidden;
}
.group-8 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 55;
  overflow: hidden;
  border-radius: 2px;
}
.text-16 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 56;
}
.section-a {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 50px;
  z-index: 57;
}
.section-b {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 50px;
  z-index: 58;
  overflow: hidden;
}
.wrapper-9 {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 59;
  overflow: hidden;
  border-radius: 2px;
}
.text-17 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 60;
}
.wrapper-a {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 36px;
  z-index: 61;
}
.group-9 {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 8px;
  position: relative;
  width: 36px;
  z-index: 62;
  overflow: hidden;
}
.box-a {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  z-index: 63;
  overflow: hidden;
  border-radius: 2px;
}
.text-18 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 22px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #606266;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 64;
}
.section-c {
  flex-shrink: 0;
  position: relative;
  width: 350px;
  height: 60px;
  font-size: 0px;
  z-index: 65;
  overflow: hidden;
}
.text-19 {
  display: block;
  position: relative;
  height: 22px;
  margin: 9px 0 0 16px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #a8abb2;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: -0.01px;
  z-index: 66;
}
.pic {
  position: relative;
  width: 7px;
  height: 7px;
  margin: 17px 0 0 321px;
  background: url(../assets/images/8c92551d-fbc6-4d64-9df4-ead5050dbb06.png)
    no-repeat center;
  background-size: cover;
  z-index: 67;
}
.group-a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 36px;
  position: relative;
  width: 382px;
  z-index: 68;
}
.wrapper-b {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 10px;
  position: relative;
  width: 173px;
  height: 38px;
  padding: 10px 10px 10px 10px;
  background: #f5f5f5;
  border: 2px solid #e2e2e2;
  z-index: 69;
  border-radius: 27px;
}
.text-1a {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 23px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #b8b8b8;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 19.8px;
  z-index: 70;
}
.wrapper-c {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 10px;
  position: relative;
  width: 173px;
  height: 38px;
  padding: 10px 10px 10px 10px;
  background: #ffffff;
  border: 1.2px solid #eaeaea;
  z-index: 71;
  border-radius: 27px;
  box-shadow: 1px 1px 2px 0 rgba(34, 34, 34, 0.1);
}
.text-1b {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 23px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: #707070;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  white-space: nowrap;
  letter-spacing: 19.8px;
  z-index: 72;
  text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.1);
}
</style>
