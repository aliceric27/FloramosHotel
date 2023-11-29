<!-- 燈控樓層組件 -->
<template>
  <div class="absolute right-0 -top-3">
    <div class="grid grid-flow-col grid-rows-2 w-[36rem] h-[5rem] gap-2">
      <div class="row-span-2 glod-floor">ALL</div>
      <!-- 上排 -->
      <div class="flex gap-2">
        <div class="glod-floor">B2F</div>
        <div class="glod-floor">B1F</div>
        <div class="glod-floor">3F</div>
        <div class="glod-floor">4F</div>
        <div class="glod-floor">5F</div>
      </div>
      <!-- 下排 -->
      <div class="flex gap-2">
        <div class="glod-floor">6F</div>
        <div class="glod-floor">7F</div>
        <div class="glod-floor">8F</div>
        <div class="glod-floor">9F</div>
        <div class="glod-floor">10F</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.glod-floor {
  display: flex;
  cursor: pointer;
  width: 5.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #c2a344;
  background: #fff;
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.09rem;
}
.glod-floor:hover {
  color: #fff;
  background: #c2a344;
}
</style>
