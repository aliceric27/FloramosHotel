<template>
  <div>
    <div class="flex justify-center">
      <div class="w-[80vw]">
        <Childtitle-center :title="'歷史事件'" />
        <history-header />
        <div v-for="val in paginatedData" v-if="isLoaded">
          <history-table
            :mainsys="val?.mainSystem"
            :altsys="val?.subSystem"
            :device="val?.deviceName"
            :alertTime="val?.eventTime"
            :alertmsg="val?.alarmMessage"
            :resloveTime="val?.resolveTime"
            :resloveMsg="val?.resolveMessage"
            :eventID="val?.eventID"
            :deviceID="val?.deviceID"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <el-pagination
        layout="prev, pager, next"
        @current-change="handlePageChange"
        :current-page="currentPage"
        :total="history ? history?.length : 0"
        class="red-text"
        :page-count="totalPage"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
onMounted(async () => {
  const result = await historyData();
});
import useDeviceStore from "~/store/DeviceStore";
const currentPage = ref(1);
const DeviceStore = useDeviceStore();
const isLoaded = ref(false);
const history: any = ref([]);
const handlePageChange = (newPage: number) => {
  currentPage.value = newPage;
};
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * 9;
  return history.value?.slice(start, start + 9);
});
const totalPage = computed(() => {
  return history.value ? Math.ceil(history.value.length / 9) : 0;
});
const historyData = async (eventID: number) => {
  const historyData = await DeviceStore.getHistoryEvent();
  if (historyData.status === "success") {
    console.log("historyData", historyData);
    history.value = historyData?.data?.data;
    isLoaded.value = true;
  }
};
</script>
<style lang="scss" scoped>
.red-text {
  --el-pagination-button-disabled-color: #dd8282;
  --el-pagination-button-color: #dd8282;
  --el-pagination-hover-color: rgb(157, 183, 255);
}
</style>
