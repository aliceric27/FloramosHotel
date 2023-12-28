<!-- 狀態警告 通用面板 -->
<template>
  <div>
    <div class="flex items-center justify-around my-2">
      <div class="alert" :class="{ 'alert-1': props.isBigText }">
        {{ props.title }}
      </div>
      <!-- ispower -->
      <div>
        <div
          v-if="props.isPower"
          class="flex border-2 border-[#6DE479] border-solid rounded-[1rem] text-[#6DE479]"
        >
          <p class="mx-2 normal" :class="{ 'normal-1': props.isBigText }">
            開啟
          </p>
        </div>
        <div
          v-if="!props.isPower"
          class="flex border-2 border-[#FF5B5B] border-solid rounded-[1rem] text-[#FF5B5B]"
        >
          <p class="mx-2 error" :class="{ 'error-1': props.isBigText }">關閉</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
  isPower: {
    type: Boolean,
  },
  isBigText: {
    type: Boolean,
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
.alert-1 {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 2rem;
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
.normal-1 {
  color: #5fd76c;
  font-family: Microsoft JhengHei UI;
  font-size: 3rem;
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
.error-1 {
  color: #ff5b5b;
  font-family: Microsoft JhengHei UI;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.23969rem;
}
</style>
