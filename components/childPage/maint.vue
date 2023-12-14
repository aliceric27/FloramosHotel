<!-- 保養設定 -->
<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[80vw]">
        <Childtitle-center :title="'保養設定'" />
        <maint-header />
        <maint-add />
        <maint-table
          v-if="isload"
          v-for="item in paginatedData"
          :key="item.id"
          :data="item"
          :title="item.deviceName || item.customName"
          :cycletime="`${item.cycle_value || ''}${getCycle(item.cycle_unit)}`"
          :lasttime="(getDate(item.lastTime) as string)"
          :nexttime="(getDate(item.nextTime) as string)"
          :deleteFlag="item.deleteFlag"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <el-pagination
        v-if="isload"
        layout="prev, pager, next"
        :current-page="currentPage"
        @current-change="handlePageChange"
        :total="maintainData ? maintainData?.length : 0"
        class="red-text"
        :page-count="totalPage"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const isload = ref(false);
import useDeviceStore from "~/store/DeviceStore";
const DeviceStore = useDeviceStore();
onMounted(async () => {
  await DeviceStore.getMaintain();
  isload.value = true;
});
const maintain = computed(() => toRaw(DeviceStore?.maintain));
const maintainData = computed(() => maintain?.value?.data);
const currentData = computed(() => maintain?.value?.currentData);
const currentPage = ref(1);
const handlePageChange = (newPage: number) => {
  currentPage.value = newPage;
};
const paginatedData = computed(() => {
  if (!Array.isArray(maintainData.value)) {
    return []; // 返回空数组
  }
  const start = (currentPage.value - 1) * 10;
  return maintainData.value?.slice(start, start + 10) || 0;
});
const totalPage = computed(() => {
  if (!Array.isArray(maintainData.value)) {
    return []; // 返回空数组
  }
  return maintainData.value ? Math.ceil(maintainData.value.length / 10) : 0;
});
const getCycle = (c: String) => {
  try {
    switch (c) {
      case "d":
        return "日";
      case "w":
        return "週";
      case "m":
        return "月";
      case "y":
        return "年";
      default:
        return "";
    }
  } catch {
    console.error(Error);
  }
};
const getDate = (d: String) => d?.match(/^\d{4}-\d{2}-\d{2}/)?.[0] || "";
</script>
<style lang="scss" scoped>
.red-text {
  --el-pagination-button-disabled-color: #4aa452;
  --el-pagination-button-color: #4aa452;
  --el-pagination-hover-color: rgb(157, 183, 255);
}
</style>
