<!-- CO偵測Page -->
<template>
  <div id="main-warp">
    <div class="flex justify-center h-[70vh]">
      <div class="w-[80vw] flex flex-col">
        <Childtitle :title="childtitle" />
        <div class="flex flex-col justify-between h-[50vh]">
          <div class="grid grid-rows-2 gap-4">
            <div class="grid grid-cols-5">
              <co-1 />
              <co-1 />
              <co-1 />
              <co-1 />
              <co-1 />
            </div>
            <div class="grid grid-cols-5">
              <co-1 />
              <co-1 />
              <co-1 />
              <co-1 />
              <co-1 />
            </div>
          </div>
          <div>
            <co-2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("一氧化碳偵測");
</script>
<style lang="scss" scoped></style>
