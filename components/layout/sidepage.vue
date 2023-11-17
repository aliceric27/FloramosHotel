<!-- 共用側邊 -->
<template>
  <div class="relative">
    <div
      v-if="!active"
      class="fixed z-40 w-screen h-screen bg-black bg-opacity-50"
    >
      <div class="absolute right-0 z-50 w-1/3 h-full bg-[#F2F2F2]">test</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  active: Boolean,
});
</script>
<style scoped></style>
