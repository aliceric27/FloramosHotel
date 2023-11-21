<template>
  <div class="flex justify-center">
    <div class="w-[80vw]">
      <Childtitle :title="childtitle" />
      <div class="grid grid-cols-2 gap-8 justify-items-center">
        <div
          class="flex flex-col items-start gap-[2.25rem] p-[0.625rem_2.8125rem_0.625rem_1.9375rem] bg-white"
        >
          <!-- B1FBar -->
          <div class="flex flex-col items-start">
            <div
              class="flex w-[9rem] justify-center items-center gap-[0.75rem]"
            >
              <p class="B1F">B1F</p>
              <img src="@/assets/images/wind/floor.png" alt="" />
            </div>
            <div class="bg-[#C2A344] w-[16.625rem] h-[0.1875rem]"></div>
          </div>
          <!--  -->
          <WindCard title="排風機" />
          <WindCard title="誘導式風車" />
          <!--  -->
          <!--  -->
        </div>
        <div class="w-full h-full bg-blue-400">02</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const childtitle = ref("送排風系統");
</script>

<style lang="scss" scoped>
.B1F {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.15rem;
}
</style>
