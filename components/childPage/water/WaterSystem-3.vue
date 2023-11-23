<template>
  <div>
    <div class="flex flex-col justify-between items-center h-[50vh] w-[90vw]">
      <div class="flex items-center justify-around w-full my-6">
        <div><deviceWater-3 :pond="'3'" /></div>
        <div><deviceWater-3 :pond="'4'" /></div>
      </div>
      <div>
        <div class="flex gap-[10rem]">
          <div class="flex gap-20">
            <deviceWater-5 :title="'污水放流泵浦_01'" />
            <deviceWater-5 :title="'污水放流泵浦_02'" />
          </div>
          <div class="flex">
            <deviceWater-5 :title="'雨水泵_01'" />
            <deviceWater-5 :title="'雨水泵_02'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped></style>
