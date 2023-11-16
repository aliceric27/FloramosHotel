<template>
  <div
    class="border-b-[3px] border-[#717171] p-4 m-4 text-[3rem] font-bold text-[#717171]"
  >
    {{ childtitle }}
  </div>
  <DeviceCard />
  <DeviceCard />
</template>
<script lang="ts" setup>
const childtitle = ref("電力系統");
</script>

<style lang="scss" scoped></style>
