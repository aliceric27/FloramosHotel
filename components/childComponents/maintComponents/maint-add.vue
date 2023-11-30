<template>
  <div>
    <div
      @click="switchMaintPopup"
      class="bg-white cursor-pointer my-2 w-full flex border-2 border-[#B4B4B4] border-dashed items-center justify-center"
    >
      <div
        class="border-2 border-solid border-[#B4B4B4] rounded-[50%] my-2 w-[38px] h-[38px]"
      >
        <div class="flex items-center justify-center add-text">+</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
console.log("PopupStore", PopupStore);
const switchMaintPopup = () => {
  PopupStore.switchMaintPopup();
};
</script>
<style lang="scss" scoped>
.add-text {
  color: #b4b4b4;
  text-align: center;
  font-family: Microsoft JhengHei UI;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 85.714% */
}
</style>
