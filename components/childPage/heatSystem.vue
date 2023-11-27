<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="flex justify-around">
        <div>
          <heat-1 :title="'熱泵主機_01'" />
          <heat-1 :title="'熱泵主機_02'" />
          <heat-1 :title="'熱泵主機_03'" />
          <heat-1 :title="'熱泵主機_04'" />
          <div><img src="@/assets/images/maincard/heat-pump.png" alt="" /></div>
        </div>
        <div>
          <div class="flex flex-col gap-4">
            <div class="border-2 border-dashed border-[#C2A344] rounded-xl">
              <heat-2 :title="'熱水循環泵_01'" :isNormal="true" />
              <heat-2 :title="'熱水循環泵_02'" :isNormal="false" />
              <heat-2 :title="'熱水循環泵_03'" :isNormal="false" />
              <heat-2 :title="'熱水循環泵_04'" :isNormal="true" />
            </div>
            <div>
              <div class="border-2 border-dashed border-[#C2A344] rounded-xl">
                <heat-2 :title="'回水電動閥'" :isNormal="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("熱泵系統");
const isfuelNormal = ref(true);
const isBatteryNormal = ref(true);
</script>

<style lang="scss" scoped></style>
