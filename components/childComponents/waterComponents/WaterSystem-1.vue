<template>
  <div class="grid w-[80dvw] grid-cols-[auto,1fr,auto] m-4">
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="flex justify-between h-full">
        <!-- 左側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater :title="'屋頂-水塔蓋'" :isNormal="true" />
          </div>
          <div>
            <deviceWater
              :title="'屋頂-水塔'"
              :isNormal="false"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard :title="'揚水泵_01'" />
            <div>
              <img
                class="absolute top-0 -right-14"
                src="@/assets/images/water/WaterPump.png"
                sizes=""
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 右側水塔圖 -->
        <img src="@/assets/images/water/tower-3.png" alt="水塔示意圖" />
      </div>
    </div>
    <!-- 2/3 -->
    <div class="w-full h-full bg-white">
      <div class="flex justify-center">
        <div>
          <deviceWater-2 />
        </div>
      </div>
    </div>
    <!-- 3/3 -->
    <div class="w-full h-full bg-white">
      <!-- 1/3 -->
      <div class="flex justify-between h-full">
        <!-- 左側水塔圖 -->
        <img src="@/assets/images/water/tower-1.png" alt="水塔示意圖" />
        <!-- 右側裝置資訊 -->
        <div class="flex flex-col justify-around">
          <div>
            <deviceWater :title="'自來水-水箱蓋'" :isNormal="true" />
          </div>
          <div>
            <deviceWater
              :title="'自來水-水箱'"
              :isNormal="true"
              :isalertWarter="true"
            />
          </div>
          <div class="relative">
            <windCard :title="'揚水泵_02'" />
            <div>
              <img
                class="absolute top-0 scale-x-[-1] -left-14"
                src="@/assets/images/water/WaterPump.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
