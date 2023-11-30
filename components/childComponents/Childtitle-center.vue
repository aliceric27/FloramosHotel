<!-- 子頁標題 -->
<template>
  <div class="flex justify-center w-full big-title">
    <p>{{ title }}</p>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
