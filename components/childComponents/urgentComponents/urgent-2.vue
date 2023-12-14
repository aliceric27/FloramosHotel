<!-- 無障礙廁所 -->
<template>
  <div>
    <div
      class="flex justify-between flex-col w-[10.6rem] h-[7.68rem] shadow-[1.86885px_2.80328px_3.7377px_0px_rgba(0,0,0,0.15)] rounded-[1rem] bg-no-repeat bg-right"
      :class="backgroundClass"
    >
      <div class="flex">
        <p class="gold">{{ props.floor }}</p>
        <div><img src="@/assets/images/urgent/floor.png" /></div>
      </div>
      <div><p class="uragent-text">公共廁所</p></div>
      <deviceAlert :isNormal="props.isNormal" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const backgroundClass = computed(() => {
  return props.isNormal
    ? "bg-[url(@/assets/images/urgent/uragent-bg-1.svg)]"
    : "bg-[url(@/assets/images/urgent/uragent-bg-3.svg)]";
});
const props = defineProps({
  floor: {
    type: String,
    default: "B1",
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.gold {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13256rem;
}
.uragent-text {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.19881rem;
}
</style>
