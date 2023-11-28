<!-- 消防右側card -->
<template>
  <div>
    <div
      class="w-[11.7rem] h-[8.1rem] rounded-[1.17038rem] bg-white shadow-[0px_0px_28.0895px_0px_rgba(255,250,234),1.87263px_2.80895px_3.74527px_0px_rgba(0,0,0,0.15)]"
    >
      <div
        class="flex justify-between flex-col shadow-[0px_0px_9.36317px_0px_rgba(255,250,234)] rounded-[1rem] bg-white p-2"
      >
        <div class="flex">
          <p class="gold">{{ props.floor }}</p>
          <div><img src="@/assets/images/urgent/floor.png" /></div>
        </div>
        <div>
          <p class="uragent-text">{{ props.title }}</p>
        </div>
        <deviceAlert :title="'設備狀態'" :isNormal="props.isNormal" />
        <deviceAlert :title="'故障異常'" :isNormal="props.isNormal2" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "排煙機",
  },
  floor: {
    type: String,
    default: "B1",
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
  isNormal2: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.gold {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13256rem;
}
.uragent-text {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.19881rem;
}
</style>
