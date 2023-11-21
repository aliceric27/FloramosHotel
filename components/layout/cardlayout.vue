<!-- 主頁card -->
<template>
  <div class="main-warp">
    <div class="grid-container">
      <maincard :status="'error'" :title="'電力系統'" :notify="2" />
      <maincard :status="'normal'" :title="'送排風系統'" :notify="3" />
      <maincard :status="'normal'" :title="'排水系統'" :notify="3" />
      <maincard :status="'normal'" :title="'熱泵系統'" :notify="3" />
      <maincard :status="'normal'" :title="'緊急求救'" :notify="3" />
      <maincard :status="'normal'" :title="'消防系統'" :notify="3" />
      <maincard :status="'normal'" :title="'公共照明系統'" :notify="3" />
      <maincard :status="'normal'" :title="'一氧化碳偵測'" :notify="3" />
    </div>
  </div>
</template>
<script lang="ts"></script>
<style lang="scss" scoped>
.main-warp {
  display: flex;
  justify-content: center;
  height: 75vh;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 定義 4 列，每列大小相等 */
    grid-gap: 20px; /* 格子之間的間隔 */
  }
}
</style>
