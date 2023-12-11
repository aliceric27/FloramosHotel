<template>
  <div>
    <div class="flex flex-col pl-5 pr-2.5 max-w-[265px] cursor-pointer">
      <div
        class="justify-between items-stretch self-stretch z-[1] flex mt-0 gap-5"
      >
        <img
          loading="lazy"
          src="@/assets/button/power-page_Line.png"
          class=""
          alt=""
        />
        <div
          class="justify-center items-stretch flex grow basis-[0%] flex-col self-end max-md:mt-10"
        >
          <header
            @click="switchsidpage(props.system, props.title, props.ID)"
            class="justify-between items-stretch flex gap-5 rounded-[1.875rem] my-6 mr-4"
          >
            <h1 class="small-title">
              {{ title }}
            </h1>
            <img
              loading="lazy"
              src="@/assets/images/maincard/arrow.svg"
              class="aspect-[0.56] object-contain object-center w-2.5 fill-neutral-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
              alt=""
            />
          </header>
          <div class="justify-between flex gap-5 pr-1.5">
            <h2
              class="text-xl font-bold leading-6 tracking-wider text-neutral-500"
            >
              設備狀態
            </h2>
            <DevicePower :deviceOn="true" />
          </div>
          <div class="justify-between items-center flex gap-5 mt-5 pr-1.5">
            <h2
              class="my-auto text-xl font-bold leading-6 tracking-wider text-neutral-500"
            >
              故障異常
            </h2>
            <DeviceNormal :isNormal="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePopupStore from "~/store/PopupStore";
const PopupStore = usePopupStore();
const switchsidpage = PopupStore.switchsidpage;
const props = defineProps({
  title: {
    type: String,
  },
  system: {
    type: String,
  },
  ID: {
    type: Number,
  },
});
</script>
<style lang="scss" scoped></style>
