<template>
  <div>
    <div class="flex flex-col justify-between items-center h-[50vh] w-[90vw]">
      <div class="flex items-center justify-between gap-20 my-6">
        <div><deviceWater-3 :pond="'1'" /></div>
        <div><deviceWater-4 :title="'化糞池泵浦'" /></div>
        <div><deviceWater-3 :pond="'2'" /></div>
      </div>
      <div>
        <div class="flex gap-[10rem]">
          <div class="flex gap-10">
            <deviceWater-5 :title="'廢水泵1-1'" />
            <deviceWater-5 :title="'廢水泵1-2'" />
          </div>
          <div class="flex">
            <deviceWater-5 :title="'廢水泵2-1'" />
            <deviceWater-5 :title="'廢水泵2-2'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped></style>
