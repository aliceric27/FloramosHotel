<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="grid grid-cols-3 gap-16 justify-items-center">
        <DeviceCard :title="'發電機'" />
        <DeviceCard :title="'進風機'" />
        <DeviceCard :title="'排風機'" />
        <div>
          <img
            class="opacity-30"
            src="@/assets/images/maincard/power-logo.png"
            alt=""
            srcset=""
          />
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between m-4">
          <div class="flex">
            <div>
              <img src="@/assets/svg/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">電瓶電壓</p>
          </div>
          <div><img src="@/assets/svg/battery.svg" alt="電池圖案" /></div>
          <div class="flex items-center justify-between">
            <p>電瓶電壓</p>
            <DeviceNormal :isNormal="false" />
          </div>
        </div>
        <!-- ----------------------------- -->
        <div class="flex flex-col justify-between min-w-[207px] m-4">
          <div class="flex items-center">
            <div>
              <img src="@/assets/svg/s-cardline.svg" alt="小icon" />
            </div>
            <p class="small-title">日用油箱</p>
          </div>
          <div>
            <img
              v-if="isfuelNormal"
              @click="isfuelNormal = !isfuelNormal"
              src="@/assets/svg/fueltank-nomal.png"
              alt="油箱圖案"
            />
            <img
              v-if="!isfuelNormal"
              @click="isfuelNormal = !isfuelNormal"
              src="@/assets/svg/fueltank-error.png"
              alt="油箱圖案"
            />
          </div>
          <div class="flex items-center justify-between">
            <p>日用油箱</p>
            <DeviceNormal :isNormal="isfuelNormal" />
          </div>
        </div>
        <!-- -------------------------------- -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("電力系統");
const isfuelNormal = ref(true);
</script>

<style lang="scss" scoped></style>
