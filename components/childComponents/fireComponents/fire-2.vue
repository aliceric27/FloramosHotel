<!-- 受信總機 -->
<template>
  <div>
    <div class="border-2 border-dashed border-[#C2A344] p-2">
      <div
        class="w-[17.7rem] h-[8.3rem] rounded-[1.17038rem] bg-white shadow-[0px_0px_28.0895px_0px_rgba(255,250,234),1.87263px_2.80895px_3.74527px_0px_rgba(0,0,0,0.15)]"
      >
        <div
          class="flex justify-between flex-col shadow-[0px_0px_9.36317px_0px_rgba(255,250,234)] rounded-[1rem] bg-white p-2"
        >
          <div class="flex">
            <p class="gold">{{ props.floor }}</p>
            <div><img src="@/assets/images/urgent/floor.png" /></div>
          </div>
          <div>
            <div class="flex justify-around m-2">
              <p class="uragent-text">火災警報</p>
              <img src="@/assets/images/fire/alert.svg" />
              <img src="@/assets/images/maincard/arrow.svg" />
            </div>

            <div>
              <div class="flex items-center justify-around my-2">
                <div class="alert">異常警報</div>
                <div
                  v-if="props.isNormal"
                  class="flex border-2 border-[#6DE479] border-solid rounded-[1rem] text-[#6DE479]"
                >
                  <p class="mx-2 normal">正常</p>
                </div>
                <div
                  v-if="!props.isNormal"
                  class="flex border-2 border-[#FF5B5B] border-solid rounded-[1rem] text-[#FF5B5B]"
                >
                  <p class="mx-2 error">異常</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "火災警報",
  },
  floor: {
    type: String,
    default: "1F",
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.gold {
  color: #c2a344;
  font-family: Microsoft JhengHei UI;
  font-size: 1.3255rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13256rem;
}
.uragent-text {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.89338rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.11363rem;
}
.alert-text {
  color: #717171;

  font-family: Microsoft JhengHei UI;
  font-size: 1.05188rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06313rem;
}

.alert {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.05188rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06313rem;
}
</style>
