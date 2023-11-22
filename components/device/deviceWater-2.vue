<template>
  <div>
    <div class="relative">
      <div class="absolute top-0 left-0 w-full h-full shadow-blur"></div>
      <div class="relative z-10">
        <div class="flex bg-white rounded-lg shadow-md">
          <div class="flex justify-center">
            <img src="@/assets/button/sidepage-3.svg" alt="" />
          </div>
          <div>
            <div class="small-title"><p>水箱蓋</p></div>
            <div class="flex justify-between w-full">
              <div
                class="p-4 text-[#717171] text-base font-bold tracking-[0.2rem]"
              >
                異常警報
              </div>
              <div class="p-4">
                <DeviceNormal :is-normal="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.shadow-blur {
  background: #fffaea;
  filter: blur(7.5px);
}
</style>
