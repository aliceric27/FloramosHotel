<!-- 確認保養彈出視窗 -->
<template>
  <div>
    <div
      v-if="maintConfirm"
      class="fixed top-[40%] left-[40%] w-[490px] h-[283px] bg-[#F5F5F5] z-50 px-[1.75rem] py-[2.18rem]"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <div
          class="flex justify-center border-b-2 border-[#CDCDCD] w-full py-4 my-2"
        >
          <p class="title">確認保養</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="alt-title">保養項目</div>
          <div class="main-item">發電機</div>
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
          <div><img src="@/assets/images/maint/close.png" alt="" /></div>
          <div><img src="@/assets/images/maint/confirm.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const maintConfirm = computed(() => PopupStore.maintConfirm);
const pickdate = ref("");
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
</style>
