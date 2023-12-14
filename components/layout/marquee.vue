<!-- 共用跑馬燈 -->
<template>
  <div class="fixed bottom-0 w-screen">
    <div class="flex items-center justify-center w-full">
      <div class="flex items-center justify-center warp w-[80%]">
        <div class="content" :class="animationClass">
          {{ marqcontent[currentIndex].c }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import useSocketStore from "~/store/socketStore";
import dayjs from "dayjs";
function formatISODateWithDayjs(isoString: string) {
  return dayjs(isoString).format("YYYY/MM/DD HH:mm");
}
const socketStore = useSocketStore();
const data = computed(() => socketStore.data);
const NewData = computed(() => {
  if (data.value) {
    return data.value?.Events;
  } else return null;
});
const marqcontent = computed(() => {
  if (NewData.value) {
    const data = toRaw(NewData.value);
    let result: any[] | undefined = [];
    data.forEach(
      (item: { eventTime: string; deviceName: any; alarmMessage: any }) => {
        let obj = {
          c: `${formatISODateWithDayjs(item.eventTime)}${item.deviceName}${
            item.alarmMessage
          }`,
        };
        result?.push(obj);
      }
    );
    return result;
  }
});
const animationClass = ref("animate__animated animate__slideInUp");
const animationDuration = 5000; // 動畫持續時間（3秒）
// 資料格式暫定，串接後需要再次進行修改
const content = [
  {
    c: "電力系統始於風能轉換器，進入主幹線路網，經過多層次變壓器分配。穿越城市的地下電纜，與高壓直流聯error錯誤錯誤錯誤錯誤錯誤",
  },
  {
    c: "送排風系統始於空氣質量控制單元，經過高效過濾器，進入循環管道。集成智能控制系統確保恆溫恆濕，通過隱藏式風道送達各個區域。專業排風設計實現室內空氣新鮮，與節能環保標準相結合，保證系統長期穩定運行。",
  },
  {
    c: "熱泵系統核心技術涵蓋高效能轉換器，與環境友好冷媒相結合。透過先進的熱交換機制，實現低溫升高與高溫下降的能量循環。採用智慧控制系統，自動調節操作參數，以達到最佳能效比。系統設計兼顧空間佈局與美觀，確保長期穩定性與經濟性，滿足不同季節的供暖與冷卻需求。",
  },
];
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

let intervalId: string | number | NodeJS.Timeout | undefined;
onMounted(() => {
  intervalId = setInterval(toggleAnimation, animationDuration);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.warp {
  overflow: hidden;
  border: 2px solid rgb(179, 179, 179);
  margin: 0.5rem 1rem;
}
.content {
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}
</style>
