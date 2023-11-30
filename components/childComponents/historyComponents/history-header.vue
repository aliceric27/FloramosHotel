<template>
  <div>
    <div class="w-full">
      <div class="grid grid-cols-10 header-text">
        <div>主系統</div>
        <div>子系統</div>
        <div>設備名稱</div>
        <div>警報時間</div>
        <div class="col-span-2">訊息</div>
        <div>解除時間</div>
        <div class="col-span-2">訊息</div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.header-text {
  color: #dd8282;
  font-family: Microsoft JhengHei UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.6px;
}
</style>
