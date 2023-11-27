<template>
  <div>
    <div class="flex gap-3">
      <p class="gold">{{ props.floor }}</p>
      <div><img src="@/assets/button/floor.svg" /></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  floor: {
    type: String,
    default: "1F",
  },
});
</script>
<style lang="scss" scoped>
.gold {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.125rem;
}
</style>
