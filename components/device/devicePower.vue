<template>
  <div>
    <div
      @click="$emit('toggle-power')"
      v-if="deviceOn"
      class="text-onGreen justify-center items-center self-stretch flex w-20 shrink-0 h-7 flex-col rounded-2xl border-[3px] border-solid border-borderGreen"
    >
      ON
    </div>
    <div
      @click="$emit('toggle-power')"
      v-if="!deviceOn"
      class="text-offRed justify-center items-center self-stretch flex w-20 shrink-0 h-7 flex-col rounded-2xl border-[3px] border-solid border-borderRed"
    >
      OFF
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  deviceOn: {
    type: Boolean,
  },
});
</script>
