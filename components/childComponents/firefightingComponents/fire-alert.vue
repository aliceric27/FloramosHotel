<template>
  <div>
    <div
      v-if="props.status === 'normal'"
      class="flex border-2 border-[#6DE479] border-solid rounded-[1rem] text-[#6DE479]"
    >
      <p class="mx-2 normal">正常</p>
    </div>
    <div
      v-if="props.status === 'warning'"
      class="flex border-2 border-[#FF9214] border-solid rounded-[1rem] text-[#FF9214]"
    >
      <p class="mx-2 normal">警戒</p>
    </div>
    <div
      v-if="props.status === 'error'"
      class="flex border-2 border-[#FF5B5B] border-solid rounded-[1rem] text-[#FF5B5B]"
    >
      <p class="mx-2 normal">警報</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  status: {
    type: String,
    default: "normal",
  },
});
</script>
<style lang="scss" scoped></style>
