<!-- 燈控樓層組件 -->
<template>
  <div class="absolute right-20 -top-3">
    <div class="grid grid-flow-col grid-rows-2 w-[36rem] h-[5rem] gap-2">
      <!-- <div class="row-span-2 glod-floor">ALL</div> -->
      <!-- 上排 -->
      <div class="flex gap-2">
        <div
          v-for="f in floors[0]"
          :key="f"
          class="glod-floor"
          :class="{ 'gold-selected': lightPage === f }"
          @click="ChangeLightPage(f)"
        >
          {{ f }}
        </div>
      </div>
      <!-- 下排 -->
      <div class="flex gap-2">
        <div
          v-for="f in floors[1]"
          :key="f"
          class="glod-floor"
          :class="{ 'gold-selected': lightPage === f }"
          @click="ChangeLightPage(f)"
        >
          {{ f }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDeviceStore from "~/store/DeviceStore";
const DeviceStore = useDeviceStore();
const ChangeLightPage = DeviceStore.ChangeLightPage;
const lightPage = computed(() => DeviceStore.lightPage);
const floors = ref([
  ["B2F", "B1F", "1F", "2F", "3F", "4F", "5F"],
  ["6F", "7F", "8F", "9F", "10F", "11F", "RF"],
]);
</script>
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

.gold-selected {
  color: #fff;
  background: #c2a344;
}
</style>
