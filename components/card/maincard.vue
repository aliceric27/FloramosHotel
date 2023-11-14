<template>
  <div id="maincard-warp" :style="maincardStyle">
    <div class="card-in">
      <div class="card-top">
        <img :src="`_nuxt/assets/images/maincard/${status}.png`" alt="" />
        <img src="@/assets/images/maincard/arrow.svg" alt="" />
      </div>
      <div class="card-bottom">
        <p
          class="system-title"
          :class="{ 'has-notification': notificationNumber > 0 }"
          :data-notification-number="notificationNumber"
        >
          {{ maincardtitle }}
        </p>
        <p class="device-count">5 devices</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const status = ref("normal"); //設備狀態
const notificationNumber = ref(1); //紅點提示
const maincardtitle = ref("熱泵系統"); //標題
//動態切換圖片
const getManicardbg = () => {
  const title = maincardtitle.value;
  switch (title) {
    case "熱泵系統":
      return "@/assets/images/maincard/heat-pump.png";
    case "電力系統":
      return "@/assets/images/maincard/dynamo.png";
  }
};

const maincardStyle = computed(() => {
  let bgUrl = "";
  switch (maincardtitle.value) {
    case "熱泵系統":
      bgUrl = "_nuxt/assets/images/maincard/heat-pump.png";
      break;
    case "電力系統":
      bgUrl = "_nuxt/assets/images/maincard/dynamo.png";
      break;
    // 添加更多 case 以处理不同的标题
    default:
      bgUrl = "_nuxt/assets/images/maincard/dynamo.png";
  }
  return {
    backgroundColor: "#fff",
    backgroundImage: `url(${bgUrl})`,
  };
});
</script>
<style lang="scss" scoped>
#maincard-warp {
  background-repeat: no-repeat;
  background-position: 5% 80%;
  margin: 1rem;
  width: 19.6875rem;
  height: 13.5625rem;
  outline: 1px solid salmon;
  .card-in {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card-top {
      display: flex;
      justify-content: space-between;
    }
    .card-bottom {
      position: relative;
      .system-title {
        color: #4aa452;
        font-family: Microsoft JhengHei UI;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.09rem;
      }
      .system-title.has-notification::after {
        content: attr(data-notification-number); /* The notification number */
        position: absolute; /* Position it relative to the .system-title */
        top: -10px; /* Adjust as necessary */
        width: 20px; /* Badge size */
        height: 20px; /* Badge size */
        line-height: 20px; /* Center the content vertically */
        text-align: center; /* Center the content horizontally */
        background-color: #ff5b5b; /* Badge color */
        color: white; /* Text color */
        border-radius: 50%; /* Make it round */
        font-size: 0.75rem; /* Adjust as necessary */
        font-weight: bold; /* Make the number bold */
      }

      .device-count {
        color: #848484;
        font-family: Microsoft JhengHei UI;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
}
</style>
