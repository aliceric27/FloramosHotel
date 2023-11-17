<!-- 子頁標題 -->
<template>
  <div class="big-title">
    {{ title }}
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
