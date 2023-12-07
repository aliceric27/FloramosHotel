<template>
  <div>
    <div
      class="main-container w-[513px] h-[60px] relative border-b-2 border-[#F5F5F5] m-4"
    >
      <div
        class="flex w-[513px] h-[60px] justify-between items-center absolute top-0 left-0 z-[2] py-2"
      >
        <div class="flex flex-col gap-2.5 items-start shrink-0 relative">
          <div
            class="w-[290px] h-[60px] shrink-0 rounded-[39px] relative"
            @click="switchsidpage('熱泵系統', props.title, props.ID)"
          >
            <div
              class="flex w-[238px] h-9 justify-between items-center absolute top-2.5 left-[23px] z-[3]"
            >
              <span
                class="w-[169px] h-9 shrink-0 font-[Microsoft_JhengHei_UI] text-[28px] font-bold leading-[35.561px] text-[#707070] tracking-1.68px text-left break-words whitespace-nowrap"
                >{{ title }}</span
              >
              <div
                class="w-2.5 h-[17.395px] shrink-0 bg-[url(@/assets/button/arrow.svg)] bg-cover bg-no-repeat"
              ></div>
            </div>
          </div>
          <div
            class="w-1.5 h-2.5 shrink-0 bg-[url(@/assets/button/goldarrow.svg)] bg-[length:100%_100%] bg-no-repeat absolute top-[41.67%] left-[2.07%] z-[4]"
          ></div>
        </div>
        <div class="flex flex-col gap-1.5 items-start shrink-0 cursor-pointer">
          <div class="flex gap-[13px] items-center shrink-0">
            <span
              class="w-[85px] h-5 shrink-0 basis-auto font-[Microsoft_JhengHei_UI] text-base font-bold leading-5 text-[#707070] tracking-3.2px text-left break-words"
              >設備狀態</span
            >
            <div
              class="switch-container linear-animat w-[68px] h-[26px] shrink-0 relative bg-[#ff5b5b] rounded-[43px] border-solid border-[3px] border-[#b8b8b8]"
              :class="{ 'switch-on': isOn }"
              @click="toggleSwitch"
            >
              <span
                v-if="!isOn"
                class="linear-animat w-[60.68%] h-[70%] font-[Microsoft_JhengHei_UI] text-base font-bold leading-5 text-[#fff] tracking-0.96px absolute top-[5%] left-[10%] text-left z-[7] break-words"
                >OFF</span
              >
              <span
                v-if="isOn"
                class="linear-animat w-[60.68%] h-[70%] font-[Microsoft_JhengHei_UI] text-base font-bold leading-5 text-[#fff] tracking-0.96px absolute top-[5%] left-[50%] text-left z-[7] break-words"
                >ON</span
              >

              <div
                class="switch-thumb w-[39.56%] h-full bg-[url(@/assets/button/Onbtn.svg)] bg-[length:100%_100%] bg-no-repeat absolute top-0"
                :style="{ left: isOn ? '0%' : '60.44%' }"
              >
                <div
                  :class="{ 'switch-on': isOn }"
                  class="w-full h-full bg-[#ff5b5b] rounded-[80px] border-solid border-[#b8b8b8] absolute top-0 left-0 z-[6]"
                ></div>
                <div
                  class="w-full h-full bg-[url(@/assets/button/Onbtn.svg)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[8]"
                ></div>
              </div>
            </div>
          </div>
          <div class="flex gap-[13px] items-center shrink-0">
            <span
              class="w-[85px] h-5 shrink-0 basis-auto font-[Microsoft_JhengHei_UI] text-base font-bold leading-5 text-[#707070] tracking-3.2px text-left break-words"
              >故障異常</span
            >
            <div class="w-[67.672px] h-6 shrink-0 rounded-[43px] relative">
              <div class="w-full h-full absolute top-0 left-0 z-[9]">
                <div
                  class="w-full h-full bg-[#fff] rounded-[43px] border-solid border-[3px] border-[#6de479] absolute top-0 left-0 z-10"
                ></div>
                <span
                  class="w-[56.15%] h-[78.15%] font-[Microsoft_JhengHei_UI] text-sm font-bold leading-[17.78px] text-[#5fd76c] tracking-4.34px absolute top-[13.01%] left-[25.12%] text-left z-[11] break-words"
                  >正常</span
                >
              </div>
            </div>
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
    default: "熱泵主機_01",
  },
  ID: {
    type: Number,
  },
});
const isOn = ref(false);
const toggleSwitch = () => (isOn.value = !isOn.value);
</script>
<style lang="scss" scoped>
.linear-animat {
  transition: background-color 0.4s linear;
}

.switch-on {
  background-color: #6de479; /* 綠色背景 */
}

.switch-thumb {
  transition: left 0.4s linear; /* 線性過渡效果 */
}
</style>
