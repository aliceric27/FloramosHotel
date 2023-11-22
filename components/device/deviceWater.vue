<template>
  <div>
    <div
      class="border-2 border-[#C2A344] border-dashed h-max w-max rounded-[1rem] min-w-[14.75rem]"
    >
      <div class="flex flex-col">
        <div class="p-4 small-title tracking-[0.12rem]">
          <p>{{ props.title }}</p>
        </div>
        <div class="flex justify-between w-full">
          <div class="p-4 text-[#717171] text-base font-bold tracking-[0.2rem]">
            異常警報
          </div>
          <div class="p-4">
            <DeviceNormal :is-normal="props.isNormal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "屋頂-水塔蓋",
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
});
</script>
