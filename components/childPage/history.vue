<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[80vw]">
        <Childtitle-center :title="'歷史事件'" />
        <history-header />
        <history-table
          :mainsys="'熱泵系統'"
          :altsys="'熱水循環泵_04'"
          :device="'熱水循環泵'"
          :alertTime="'2023-03-20'"
          :alertmsg="'設備狀態異常'"
          :resloveTime="'2023-03-20'"
          :resloveMsg="'設備狀態恢復正常'"
        />
        <history-table
          :mainsys="'電力系統'"
          :altsys="'電瓶電壓'"
          :device="'電瓶電壓'"
          :alertTime="'2023-03-10'"
          :alertmsg="'電瓶電壓過低'"
          :resloveTime="'2023-03-10'"
          :resloveMsg="'設電瓶電壓恢復正常'"
        />
        <history-table
          :mainsys="'給排水系統'"
          :altsys="'屋頂-水塔'"
          :device="'水塔'"
          :alertTime="'2023-02-19'"
          :alertmsg="'水位狀態超高水位'"
          :resloveTime="'2023-02-19'"
          :resloveMsg="'水位狀態恢復正常'"
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
  --el-pagination-button-disabled-color: #dd8282;
  --el-pagination-button-color: #dd8282;
  --el-pagination-hover-color: rgb(157, 183, 255);
}
</style>
