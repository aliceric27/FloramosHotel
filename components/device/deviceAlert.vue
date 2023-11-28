<!-- 狀態警告 通用面板 -->
<template>
  <div>
    <div class="flex items-center justify-around my-2">
      <div class="alert">{{ props.title }}</div>
      <div
        v-if="props.isNormal"
        class="flex border-2 border-[#6DE479] border-solid rounded-[1rem] text-[#6DE479]"
      >
        <p class="mx-2 normal">正常</p>
      </div>
      <div
        v-if="!props.isNormal"
        class="flex border-2 border-[#FF5B5B] border-solid rounded-[1rem] text-[#FF5B5B]"
      >
        <p class="mx-2 error">異常</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "警報異常",
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.alert {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 0.77319rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.116rem;
}
.normal {
  color: #5fd76c;
  font-family: Microsoft JhengHei UI;
  font-size: 0.77319rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.23969rem;
}
.error {
  color: #ff5b5b;
  font-family: Microsoft JhengHei UI;
  font-size: 0.77319rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.23969rem;
}
</style>
