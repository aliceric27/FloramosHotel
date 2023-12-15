<!-- 確認保養彈出視窗 -->
<template>
  <div>
    <div
      class="fixed top-[40%] left-[40%] w-[490px] h-[20rem] bg-[#F5F5F5] z-50 px-[1.75rem]"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <div
          class="flex justify-center border-b-2 border-[#CDCDCD] w-full py-4 my-2"
        >
          <p class="title">確認保養</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="alt-title">保養項目</div>
          <div class="main-item">{{ sidata.device }}</div>
        </div>
        <div class="flex items-center justify-center gap-2 w-[188px]">
          <div class="main-date">保養週期</div>
          <div class="cycle-val">{{ maintaincycle || "未設定" }}</div>
        </div>
        <div class="flex items-center justify-center gap-2 w-[188px]">
          <div class="main-date">保養時間</div>
          <div class="w-[107px]">
            <el-date-picker
              v-model="pickdate"
              type="date"
              placeholder="日期選擇"
            />
          </div>
        </div>
        <div class="flex gap-4">
          <div @click="switchmaintConfirm">
            <img
              class="cursor-pointer"
              src="@/assets/images/maint/close.png"
              alt=""
            />
          </div>
          <div @click="sendmaintConfirm">
            <img
              class="cursor-pointer"
              src="@/assets/images/maint/confirm.png"
              alt=""
            />
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
const maintain = computed(() => DeviceStore?.maintain?.data);
const sidata = computed(() => PopupStore.sidata);
const currentData = computed(() => PopupStore.currentData);
const updateDevice = DeviceStore.updateDevice;
const pickdate = ref("");
const switchmaintConfirm = PopupStore.switchmaintConfirm;
const maintaincycle = computed(() => PopupStore.maintaincycle);
const formatDate = (dateString: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - userTimezoneOffset)
    .toISOString()
    .split("T")[0];
};
const sendmaintConfirm = async () => {
  let data = {
    ...{
      customName: null,
      cycle_unit: null,
      cycle_value: null,
      deleteFlag: null,
      deviceID: null,
      deviceName: null,
      lastTime: null,
      nextTime: null,
    },
    ...maintain?.value,
  };
  data.customName = currentData.value?.customName;
  const cycleval = maintain?.value?.cycle_value;
  const cycleunit = maintain?.value?.cycle_unit;
  data.cycle_value = cycleval;
  data.cycle_unit = cycleunit;
  data.lastTime = formatDate(pickdate.value);
  if (data.lastTime) {
    const result = await updateDevice(data);
    if (result.status === "success") {
      PopupStore.closesidpage();
      $swal.fire({
        title: "成功",
        text: `保養成功`,
        icon: "success",
        confirmButtonText: "確認",
      });
    } else {
      console.log(result);
      $swal.fire({
        title: "錯誤",
        text: `${result?.error?.data?.message}`,
        icon: "error",
        confirmButtonText: "確認",
      });
    }
  } else {
    $swal.fire({
      title: "錯誤",
      text: "日期未填寫",
      icon: "warning",
      confirmButtonText: "確認",
    });
  }
};
</script>
<style lang="scss" scoped>
.title {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 6px;
}
.alt-title {
  color: #717171;
  text-align: center;
  font-family: Microsoft JhengHei UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 0%; /* 0px */
  letter-spacing: 4.9px;
}
.main-item {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 156.502%;
  letter-spacing: 1.44px;
}
.main-date {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
}
.cycle-val {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 156.502%;
  letter-spacing: 1px;
}
</style>
