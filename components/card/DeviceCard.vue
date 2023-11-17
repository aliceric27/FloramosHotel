<template>
  <div class="flex flex-col pl-5 pr-2.5 max-w-[265px]">
    <header
      class="justify-between items-stretch flex gap-5 ml-2.5 mt-2 rounded-[1.875rem]"
    >
      <h1
        class="indent-2 text-neutral-500 text-4xl font-bold leading-10 tracking-[2.16px]"
      >
        {{ title }}
      </h1>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8df1190a-307f-4259-b9f7-fed136229e34?apiKey=401e09b7edb949e9841f58b02a0a5f94&"
        class="aspect-[0.56] object-contain object-center w-2.5 fill-neutral-400 overflow-hidden self-center shrink-0 max-w-full my-auto"
        alt=""
      />
    </header>
    <div
      class="justify-between items-stretch self-stretch z-[1] flex mt-0 gap-5"
    >
      <img loading="lazy" src="@/assets/svg/cardline.svg" class="" alt="" />
      <div
        class="justify-center items-stretch flex grow basis-[0%] flex-col mt-11 self-end max-md:mt-10"
      >
        <div class="justify-between flex gap-5 pr-1.5">
          <h2
            class="text-xl font-bold leading-6 tracking-wider text-neutral-500"
          >
            設備狀態
          </h2>
          <DeviceOn :deviceOn="true" />
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
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
<style lang="scss" scoped></style>
