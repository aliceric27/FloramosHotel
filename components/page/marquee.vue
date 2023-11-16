<template>
  <div class="wrap">
    <div class="content" :class="animationClass">
      {{ content[currentIndex].c }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const animationClass = ref("animate__animated animate__slideInUp");
const animationDuration = 4000; // 動畫持續時間（3秒）
// 資料格式暫定，串接後需要再次進行修改
const content = [{ c: "test001" }, { c: "test002" }, { c: "123123" }];
const currentIndex = ref(0);

// 執行動畫切換
function toggleAnimation() {
  if (animationClass.value.includes("animate__slideInUp")) {
    animationClass.value = "animate__animated animate__slideOutDown";

    // 等待 animate__slideOutDown 動畫完成
    setTimeout(() => {
      // 更新資料
      currentIndex.value = (currentIndex.value + 1) % content.length;

      // 重新開始 animate__slideInUp 動畫
      animationClass.value = "animate__animated animate__slideInUp";
    }, animationDuration / 2); // 假設 animate__slideOutDown 動畫持續半個動畫週期
  }
}

let intervalId;
onMounted(() => {
  intervalId = setInterval(toggleAnimation, animationDuration);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
.content {
  /* 根據需要添加樣式 */
}
</style>
