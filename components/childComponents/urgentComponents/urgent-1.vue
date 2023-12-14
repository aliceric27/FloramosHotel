<!-- 緊急求救小card -->
<template>
  <div>
    <div
      class="flex flex-col justify-between min-h-[8.5rem] max-w-[8.5rem] rounded-[1rem] border-4 border-[#E2E2E2] border-solid bg-no-repeat bg-center p-2"
      :class="backgroundClass"
    >
      <div class="flex">
        <p class="gold">{{ props.floor }}</p>
        <div><img src="@/assets/images/urgent/floor.png" /></div>
      </div>
      <div><p class="uragent-text">緊急求救</p></div>
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
