<!-- 主頁card -->
<template>
  <div class="main-warp">
    <div class="grid-container">
      <div class="cursor-pointer" @click="() => navigateTo('/system/power')">
        <maincard
          :status="'error'"
          :title="'電力系統'"
          :notify="2"
          :device-count="5"
        />
      </div>
      <div class="cursor-pointer" @click="() => navigateTo('/system/wind')">
        <maincard
          :status="'normal'"
          :title="'送排風系統'"
          :notify="3"
          :device-count="5"
        />
      </div>
      <div class="cursor-pointer" @click="() => navigateTo('/system/water')">
        <maincard
          :status="'normal'"
          :title="'排水系統'"
          :notify="3"
          :device-count="22"
        />
      </div>
      <div class="cursor-pointer" @click="() => navigateTo('/system/heat')">
        <maincard
          :status="'normal'"
          :title="'熱泵系統'"
          :notify="3"
          :device-count="9"
        />
      </div>
      <div class="cursor-pointer" @click="() => navigateTo('/system/urgent')">
        <maincard
          :status="'normal'"
          :title="'緊急求救'"
          :notify="3"
          :device-count="12"
        />
      </div>
      <div
        class="cursor-pointer"
        @click="() => navigateTo('/system/firefighting')"
      >
        <maincard
          :status="'normal'"
          :title="'消防系統'"
          :notify="3"
          :device-count="11"
        />
      </div>
      <div class="cursor-pointer" @click="() => navigateTo('/system/light')">
        <maincard
          :status="'normal'"
          :title="'公共照明系統'"
          :notify="3"
          :device-count="79"
        />
      </div>
      <div class="cursor-pointer" @click="() => navigateTo('/system/codetect')">
        <maincard
          :status="'normal'"
          :title="'一氧化碳偵測'"
          :notify="3"
          :device-count="50"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rdata = computed(() => socketStore.data);
</script>
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
