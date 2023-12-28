<template>
  <div>
    <div v-for="val in rdata">
      <div class="my-4">
        <div class="flex justify-between">
          <div>{{ val?.deviceName }}</div>
          <div v-if="isNew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#FF5B5B" />
            </svg>
          </div>
        </div>
        <div class="flex justify-between gap-4">
          <div>{{ val?.alarmMessage }}</div>
          <div>{{ formatISODateWithDayjs(val?.eventTime) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import usePopupStore from "~/store/PopupStore";
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rdata = computed(() => socketStore.data?.Events);
const popupstore = usePopupStore();
const noticedata = computed(() => popupstore.noticedata);
const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: String,
  },
  isNew: {
    type: Boolean,
  },
});
function formatISODateWithDayjs(isoString: string) {
  return dayjs(isoString).format("YYYY/MM/DD HH:mm");
}
</script>
<style lang="scss" scoped></style>
