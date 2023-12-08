<!-- 保養編輯頁面 -->
<template>
  <div>
    <div class="main-container" v-if="isPopup">
      <span class="text">新增保養管理項目</span>
      <div class="img"><img src="@/assets/images/maint/line.png" /></div>
      <div class="wrapper">
        <span class="text-2">保養項目</span><span class="text-3"> <br /></span>
      </div>
      <div class="section">
        <el-input
          v-model="input"
          placeholder="請輸入名稱"
          :disabled="!isCustom"
        />
      </div>
      <div class="box">
        <span class="text-5">首次保養時間</span>
        <el-date-picker v-model="datepick" type="date" placeholder="" />
      </div>
      <div class="wrapper-3">
        <span class="text-7">保養週期</span>
        <el-select v-model="customcycle" class="m-2" placeholder="週期選擇">
          <el-option
            v-for="(item, key) in custoption"
            :key="key"
            :label="item.val"
            :value="item.val"
          />
        </el-select>
        <div class="wrapper-4">
          <el-select v-model="cycle" class="m-2" placeholder="週期選擇">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="section-2">
        <div class="box-3" @click="closchmaintEdit">
          <span class="text-a">關閉</span>
        </div>
        <div class="cursor-pointer section-3" @click="sendaddData(sendData)">
          <span class="text-b">確認保養</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $swal } = useNuxtApp();
import usePopupStore from "~/store/PopupStore";
import useDeviceStore from "~/store/DeviceStore";
const isCustom = ref(false);
const PopupStore = usePopupStore();
const DeviceStore = useDeviceStore();
const closchmaintEdit = PopupStore.closchmaintEdit;
const isPopup = computed(() => PopupStore.maintEdit);
const EditDevice = DeviceStore.EditDevice;
const sidata = computed(() => PopupStore.maintainData);
const input = ref("");
const datepick = ref("");
const cycle = ref("");
const customcycle = ref(1);
const custoption = computed(() => {
  let r = [];
  for (let i = 1; i <= 99; i++) {
    r.push({ val: i });
  }
  return r;
});
const sendData = {
  input,
  datepick,
  cycle,
  customcycle,
};
const options = [
  {
    value: "d",
    label: "日",
  },
  {
    value: "w",
    label: "週",
  },
  {
    value: "m",
    label: "月",
  },
  {
    value: "y",
    label: "年",
  },
];
const checkInput = () => {
  // 检查每个值是否都存在且不为空
  const allValuesExist =
    input.value && datepick.value && cycle.value && cycle.value;

  // 检查cycle是否为数字
  const cycleIsNumber =
    !isNaN(parseFloat(customcycle.value)) && isFinite(customcycle.value);

  // 如果所有值都存在且cycle是数字，则返回true，否则返回false
  return allValuesExist && cycleIsNumber;
};
const sendaddData = async (data) => {
  console.log("送出前data", data);
  const checkinput = checkInput();
  if (checkinput) {
    const result = await EditDevice(sendData);
    if (result.status === "success") {
      $swal.fire({
        title: "成功",
        text: `自訂設備新增完成`,
        icon: "success",
        confirmButtonText: "確認",
      });
      input.value = "";
      datepick.value = "";
      cycle.value = "";
      customcycle.value = 1;
      closchmaintEdit();
    } else {
      $swal.fire({
        title: "錯誤",
        text: `請求錯誤`,
        icon: "error",
        confirmButtonText: "確認",
      });
    }
  } else {
    $swal.fire({
      title: "警告",
      text: `欄位未填或填寫錯誤`,
      icon: "warning",
      confirmButtonText: "確認",
    });
  }
};
function toISODateString(dateTimeStr: string) {
  const date = new Date(dateTimeStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从0开始计数
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

watch(sidata, (newdata, olddata) => {
  console.log("newdata.value", newdata);
  input.value = newdata?.customName || newdata?.deviceName;
  datepick.value = toISODateString(newdata?.lastTime);
  cycle.value = newdata?.cycle_unit;
  customcycle.value = newdata?.cycle_value;
  isCustom.value = newdata?.deviceID ? false : true;
});
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
  flex-wrap: nowrap;
  gap: 22px;
  position: relative;
  width: 489px;
  margin: 0 auto;
  padding: 28px 35px 28px 35px;
  background: rgb(245, 245, 245);
  border: 1px solid rgb(193, 193, 193);
  border-radius: 6px;
  box-shadow: 0 0 90px 0 rgb(180, 180, 180);
}
.text {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 25px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
  letter-spacing: 6px;
  text-shadow: 0 0 90px rgb(180, 180, 180);
}
.img {
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  min-width: 0;
  background-size: cover;
  z-index: 1;
}
.wrapper {
  flex-shrink: 0;
  position: relative;
  width: 71px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 0;
  text-align: center;
  text-overflow: initial;
  white-space: nowrap;
  letter-spacing: 1.2px;
  z-index: 2;
}
.text-2 {
  position: relative;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 14px;
  font-weight: 700;
  line-height: 31.3px;
  text-align: center;
  letter-spacing: 4.9px;
}
.text-3 {
  position: relative;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 16px;
  font-weight: 700;
  line-height: 31.3px;
  text-align: center;
  letter-spacing: 3.2px;
}
.section {
  flex-shrink: 0;
  position: relative;
  width: 177px;
  height: 33px;
  z-index: 3;
  overflow: hidden;
}
.group {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 10px;
  position: relative;
  width: 172px;
  min-width: 43px;
  height: 28px;
  margin: 0 0 0 2.5px;
  padding: 8px 4px 8px 4px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(166, 166, 166);
  z-index: 4;
  border-radius: 5px;
}
.text-4 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 15px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(217, 217, 217);
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  z-index: 5;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 14px;
  position: relative;
  width: 250px;
  z-index: 6;
}
.text-5 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  letter-spacing: 0.96px;
  z-index: 7;
}
.wrapper-2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 107px;
  padding: 4px 6px 4px 5px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(166, 166, 166);
  z-index: 8;
  border-radius: 5px;
}
.text-6 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  letter-spacing: 2.96px;
  z-index: 9;
}
.pic {
  flex-shrink: 0;
  position: relative;
  width: 11px;
  height: 6px;
  background: url(../assets/images/e7f7cb79-479c-4366-b646-19b80a1dbc21.png)
    no-repeat center;
  background-size: cover;
  z-index: 10;
}
.wrapper-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 14px;
  position: relative;
  width: 300px;
  z-index: 11;
}
.text-7 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  letter-spacing: 0.96px;
  z-index: 12;
}
.box-2 {
  flex-shrink: 0;
  position: relative;
  width: 48px;
  height: 32px;
  z-index: 13;
  overflow: hidden;
}
.group-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 10px;
  position: relative;
  width: 43px;
  min-width: 43px;
  height: 28px;
  margin: 0 0 0 1px;
  padding: 8px 4px 8px 4px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(166, 166, 166);
  z-index: 14;
  border-radius: 5px;
}
.text-8 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 15px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(217, 217, 217);
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  z-index: 15;
}
.wrapper-4 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-shrink: 0;
  position: relative;
  width: 130px;
  padding: 4px 6px 4px 5px;
  z-index: 16;
  border-radius: 5px;
}
.text-9 {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 20px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  letter-spacing: 2.96px;
  z-index: 17;
}
.img-2 {
  flex-shrink: 0;
  position: relative;
  width: 11px;
  height: 6px;
  background: url(../assets/images/3d281d13-cf18-4034-af71-bbb847a488de.png)
    no-repeat center;
  background-size: cover;
  z-index: 18;
}
.section-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 36px;
  position: relative;
  width: 382px;
  z-index: 19;
}
.box-3 {
  cursor: pointer;
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
  background: rgb(245, 245, 245);
  border: 2px solid rgb(226, 226, 226);
  z-index: 20;
  border-radius: 27px;
}
.text-a {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 23px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(184, 184, 184);
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  letter-spacing: 19.8px;
  z-index: 21;
}
.section-3 {
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
  background: rgb(255, 255, 255);
  border: 1.2px solid rgb(234, 234, 234);
  z-index: 22;
  border-radius: 27px;
  box-shadow: 1px 1px 2px 0 rgba(34, 34, 34, 0.1);
}
.text-b {
  flex-shrink: 0;
  flex-basis: auto;
  position: relative;
  height: 23px;
  font-family: Microsoft JhengHei UI, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial,
    "PingFang SC", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
  color: rgb(112, 112, 112);
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: left;
  letter-spacing: 9.9px;
  z-index: 23;
  text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.1);
}
</style>
