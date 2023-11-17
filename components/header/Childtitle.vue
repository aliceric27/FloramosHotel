<template>
  <div
    class="border-b-[3px] border-[#717171] p-4 m-4 text-[3rem] font-bold text-[#717171]"
  >
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
