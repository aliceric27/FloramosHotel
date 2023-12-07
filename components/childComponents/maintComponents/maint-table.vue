<template>
  <div>
    <div class="w-full">
      <div
        class="grid grid-cols-7 header-text border-b-2 border-b-[rgba(74, 164, 82, 0.35)] py-2"
      >
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.title }}
        </div>
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.cycletime }}
        </div>
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.lasttime }}
        </div>
        <div class="flex items-center justify-center col-span-1 title">
          {{ props.nexttime }}
        </div>
        <div
          class="flex items-center justify-center col-span-3 cursor-pointer title"
        >
          <div><img src="@/assets/images/maint/confirm.png" /></div>
          <div>
            <img src="@/assets/images/maint/Edit.png" />
          </div>
          <div>
            <img src="@/assets/images/maint/delete.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "A",
  },
  cycletime: {
    type: String,
    default: "3週",
  },
  lasttime: {
    type: String,
    default: "2023-03-01",
  },
  nexttime: {
    type: String,
    default: "2023-03-22",
  },
});
</script>
<style lang="scss" scoped>
.title {
  color: #717171;
  text-align: center;
  font-family: Microsoft JhengHei UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;
}
</style>
