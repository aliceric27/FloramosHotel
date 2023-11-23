<template>
  <div>
    <div>
      <div class="flex flex-col items-center">
        <img
          src="@/assets/images/water/pond-1.png"
          alt=""
          v-show="pond === '1'"
        />
        <img
          src="@/assets/images/water/pond-2.png"
          alt=""
          v-show="pond === '2'"
        />
        <img
          src="@/assets/images/water/pond-3.png"
          alt=""
          v-show="pond === '3'"
        />
        <img
          src="@/assets/images/water/pond-4.png"
          alt=""
          v-show="pond === '4'"
        />
      </div>
      <div class="flex justify-between w-full">
        <div class="p-4 text-[#717171] text-base font-bold tracking-[0.2rem]">
          {{ "水位狀態" }}
        </div>
        <div class="p-4">
          <DeviceNormal :is-normal="props.isNormal" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isNormal: {
    type: Boolean,
    default: false,
  },
  pond: {
    type: String,
    default: "1",
  },
});
</script>
<style lang="scss" scoped></style>
