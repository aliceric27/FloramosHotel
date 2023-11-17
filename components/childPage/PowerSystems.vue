<template>
  <div>
    <Childtitle :title="childtitle" />
    <div class="grid grid-cols-3 gap-8 justify-items-center">
      <DeviceCard :title="'發電機'" />
      <DeviceCard :title="'進風機'" />
      <DeviceCard :title="'排風機'" />
      <div>
        <img src="@/assets/images/maincard/dynamo.png" alt="" srcset="" />
      </div>
      <!-- ----------------------------- -->
      <div class="flex flex-col justify-between">
        <div class="flex items-center">
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
      <div class="flex flex-col justify-between min-w-[207px]">
        <div class="flex items-center">
          <div>
            <img src="@/assets/svg/s-cardline.svg" alt="小icon" />
          </div>
          <p class="small-title">日用油箱</p>
        </div>
        <div>
          <img
            class="max-h-[84px]"
            src="@/assets/svg/fueltank.svg"
            alt="油箱圖案"
          />
        </div>
        <div class="flex items-center justify-between">
          <p>電瓶電壓</p>
          <DeviceNormal :isNormal="false" />
        </div>
      </div>
      <!-- -------------------------------- -->
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("電力系統");
</script>

<style lang="scss" scoped></style>
