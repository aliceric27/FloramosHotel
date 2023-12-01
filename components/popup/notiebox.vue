<template>
  <div>
    <div class="my-4">
      <div class="flex justify-between">
        <div>{{ props.title }}</div>
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
        <div>{{ props.content }}</div>
        <div>{{ props.date }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "發電機",
  },
  content: {
    type: String,
    default: "日用油箱-處於低油位",
  },
  date: {
    type: String,
    default: "2023/02/22  14:13",
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped></style>
