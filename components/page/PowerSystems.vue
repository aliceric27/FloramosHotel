<template>
  <Childtitle :title="childtitle" />
  <div class="grid grid-cols-3 gap-4">
    <DeviceCard :title="'發電機'" />
    <DeviceCard :title="'進風機'" />
    <DeviceCard :title="'排風機'" />
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("電力系統");
</script>

<style lang="scss" scoped></style>
