<!-- 子頁標題 -->
<template>
  <div class="flex justify-center">
    <div class="flex w-[64rem]">
      <div class="flex justify-between w-full water-title">
        <p>{{ title }}</p>
      </div>

      <div class="flex flex-col justify-end h-full">
        <div class="flex max-h-[4rem]">
          <!--  -->
          <div
            class="pt-4 pb-4 border-b-4 border-[#C2A344] flex justify-items-center cursor-pointer"
            :class="{ 'bg-[#FFF6DC]': waterPage === '1' }"
            @click="turnWaterpage('1')"
          >
            <div class="flex">
              <div
                class="px-4 text-[#C2A344] whitespace-nowrap flex justify-center items-center border-[#C2A344] border-r-2"
              >
                <p class="text-[1.5rem] font-bold">生活用水</p>
              </div>
            </div>
          </div>
          <!--  -->
          <div
            class="pt-4 pb-4 border-b-4 border-[#C2A344] flex justify-items-center"
            :class="{ 'bg-[#FFF6DC]': waterPage === '2' }"
            @click="turnWaterpage('2')"
          >
            <div class="flex">
              <div
                class="px-4 text-[#C2A344] whitespace-nowrap flex justify-center items-center border-[#C2A344] border-r-2 cursor-pointer"
              >
                <p class="text-[1.5rem] font-bold">汙廢水</p>
              </div>
            </div>
          </div>
          <!--  -->
          <div
            class="pt-4 pb-4 border-b-4 border-[#C2A344] flex justify-items-center"
            :class="{ 'bg-[#FFF6DC]': waterPage === '3' }"
            @click="turnWaterpage('3')"
          >
            <div class="flex">
              <div
                class="px-4 text-[#C2A344] whitespace-nowrap flex justify-center items-center border-[#C2A344] border-r-2 cursor-pointer"
              >
                <p class="text-[1.5rem] font-bold">汙/雨水</p>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePageStore from "~/store/PageStore";
const PageStore = usePageStore();
const waterPage = computed(() => PageStore.water);
console.log("waterPage", waterPage);
const turnWaterpage = PageStore.turnWaterpage;
const props = defineProps({
  title: {
    type: String,
  },
});
const isMenuSelect = ref("water-1");
</script>
