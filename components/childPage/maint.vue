<!-- 保養設定 -->
<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[80vw]">
        <Childtitle-center :title="'保養設定'" />
        <maint-header />
        <maint-add />
        <maint-table />
        <maint-table
          :title="'B'"
          :cycletime="'10日'"
          :lasttime="'2023-03-01'"
          :nexttime="'2023-03-11'"
        />
        <maint-table
          :title="'C'"
          :cycletime="'3月'"
          :lasttime="'2023-03-01'"
          :nexttime="'2023-03-11'"
        />
        <maint-table
          :title="'D'"
          :cycletime="'3週'"
          :lasttime="'2023-03-01'"
          :nexttime="'2023-03-11'"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <el-pagination layout="prev, pager, next" :total="50" class="red-text" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.red-text {
  --el-pagination-button-disabled-color: #4aa452;
  --el-pagination-button-color: #4aa452;
  --el-pagination-hover-color: rgb(157, 183, 255);
}
</style>
