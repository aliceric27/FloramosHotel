<!-- CO偵測Page -->
<template>
  <div id="main-warp">
    <div class="flex justify-center h-[70vh]">
      <div class="w-[80vw] flex flex-col">
        <Childtitle :title="childtitle" />
        <div class="flex flex-col justify-around h-[50vh]">
          <div class="flex items-center justify-center gap-5">
            <div v-for="item in rawdata">
              <co-1
                :deviceName="item?.deviceName"
                :deviceID="item?.deviceID"
                :faultStatus="item?.faultStatus"
                :system="item?.mainSystem"
              />
            </div>
          </div>
          <div>
            <co-2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useSocketStore from "~/store/socketStore";
const socketStore = useSocketStore();
const rawdata = computed(() => {
  return toRaw(socketStore?.data?.BA?.CO?.devices);
});

const childtitle = ref("一氧化碳偵測");
</script>
<style lang="scss" scoped></style>
