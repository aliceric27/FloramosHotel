<!-- 緊急求救 -->
<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div>
        <div class="flex items-center justify-center gap-5">
          <urgent-1 :isNormal="true" :floor="'B1'" />
          <urgent-1 :isNormal="false" :floor="'B2'" />
        </div>
        <div class="flex justify-center my-4">
          <div class="grid grid-rows-2 gap-16">
            <div class="grid grid-cols-5 gap-16">
              <urgent-2 :isNormal="true" :floor="'1'" />
              <urgent-2 :isNormal="false" :floor="'2'" />
              <urgent-2 :isNormal="true" :floor="'3'" />
              <urgent-2 :isNormal="true" :floor="'4'" />
              <urgent-2 :isNormal="true" :floor="'5'" />
            </div>
            <div class="grid grid-cols-5 gap-16">
              <urgent-2 :isNormal="true" :floor="'6'" />
              <urgent-2 :isNormal="true" :floor="'7'" />
              <urgent-2 :isNormal="true" :floor="'8'" />
              <urgent-2 :isNormal="true" :floor="'9'" />
              <urgent-2 :isNormal="true" :floor="'10'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("緊急系統");
</script>
<style lang="scss" scoped></style>
