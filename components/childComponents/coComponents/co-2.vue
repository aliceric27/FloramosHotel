<!-- 消防系統提示bottom -->
<template>
  <div>
    <div class="flex items-center justify-center gap-32">
      <div class="flex items-center gap-4">
        <div><co-alert status="normal" /></div>
        <div><p class="content">環境中含一氧化碳濃度正常</p></div>
      </div>
      <!-- <div class="flex items-center gap-4">
        <div><co-alert status="warning" /></div>
        <div><p class="content">環境中含一氧化碳濃度高於25ppm</p></div>
      </div> -->
      <div class="flex items-center gap-4">
        <div><co-alert status="error" /></div>
        <div>
          <p class="text-center content">環境中含一氧化碳濃度過高</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.content {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 106.002%; /* 0.86125rem */
  letter-spacing: 0.04875rem;
}
</style>
