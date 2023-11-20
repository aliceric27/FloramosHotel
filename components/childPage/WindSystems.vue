<template>
  <div>
    <Childtitle :title="childtitle" />
    <div class="grid grid-cols-2 gap-8 justify-items-center">
      <div class="flex flex-col justify-between w-full h-full bg-green-400">
        <div>header</div>
        <div>排風機</div>
        <div>誘導式風車</div>
      </div>
      <div class="w-full h-full bg-blue-400">02</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("送排風系統");
</script>

<style lang="scss" scoped></style>
