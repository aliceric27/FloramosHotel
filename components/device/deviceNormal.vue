<template>
  <div>
    <div
      @click="$emit('toggle')"
      v-if="!isNormal"
      class="text-offRed justify-center items-center self-stretch flex w-20 shrink-0 h-[29px] flex-col rounded-2xl border-[3px] border-solid border-borderRed"
    >
      異常
    </div>

    <div
      @click="$emit('toggle')"
      v-if="isNormal"
      class="text-onGreen justify-center items-center self-stretch flex w-20 shrink-0 h-[29px] flex-col rounded-2xl border-[3px] border-solid border-borderGreen"
    >
      正常
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isNormal: {
    type: Boolean,
  },
});
</script>
