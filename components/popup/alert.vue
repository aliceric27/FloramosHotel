<!-- 即時訊息通知 -->
<template>
  <div>
    <div class="main-container">
      <div class="image-wrapper">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef8f062-3ca4-46f3-ac83-041a7a49fd05?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
          class="img"
        />
        <div class="heading" role="heading" aria-level="2">即時訊息</div>
      </div>
      <div class="divider"></div>
      <div class="message">{{ arertTitle }}</div>
      <div class="details">
        <div class="reason">
          <div class="label">異常原因</div>
          <div class="value">{{ alertreson }}</div>
        </div>
        <div class="update-time">
          <div class="label">更新時間</div>
          <div class="value">{{ alerttime }}</div>
        </div>
      </div>
      <div class="actions">
        <div class="close-button">關閉</div>
        <div class="spacer">警報管理</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const arertTitle = ref("發電機發生異常");
const alertreson = ref("日用油箱-處於低油位");
const alerttime = ref("2023/02/22 14:13");
</script>
<style scoped>
.main-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid #c1c1c1;
  box-shadow: 0px 0px 90px 0px #b4b4b4;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  min-width: 500px;
  min-height: 300px;
}

@media (max-width: 991px) {
  .main-container {
    padding: 0 20px;
  }
}

.image-wrapper {
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  display: flex;
  margin-top: 27px;
  width: 108px;
  max-width: 100%;
  gap: 11px;
}

.img {
  aspect-ratio: 1.47;
  object-fit: contain;
  object-position: center;
  width: 25px;
  fill: #ff5b5b;
  stroke-width: 0.3px;
  stroke: #ff5b5b;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}

.heading {
  color: #838383;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .heading {
    white-space: initial;
  }
}

.divider {
  background-color: #cdcdcd;
  align-self: stretch;
  margin-top: 22px;
  height: 2px;
}

.message {
  align-self: stretch;
  color: #717171;
  text-align: center;
  letter-spacing: 1.2px;
  margin-top: 24px;
  font: 700 20px/25px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.details {
  justify-content: space-between;
  align-content: center;
  row-gap: 1.625rem;
  flex-wrap: wrap;
  display: flex;
  margin-top: 30px;
  width: 100%;
  max-width: 360px;
  gap: 20px;
}

.reason {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}

.label {
  color: #717171;
  letter-spacing: 0.96px;
  font: 700 16px/20px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.value {
  color: #717171;
  letter-spacing: 0.96px;
  margin-top: 7px;
  font: 700 16px/20px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.update-time {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}

.actions {
  justify-content: center;
  align-self: stretch;
  display: flex;
  gap: 20px;
  margin: 29px -4px 27px 0;
}

.close-button {
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: #b8b8b8;
  text-align: center;
  /* letter-spacing: 19.8px; */
  align-items: center;
  border-radius: 1.5625rem;
  border: 2px solid #e2e2e2;
  background-color: #f5f5f5;
  margin-left: -2px;
  /* padding: 11px 20px; */
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.spacer {
  width: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 1.5625rem;
  border: 1.5px solid #eaeaea;
  box-shadow: 1px 1px 2px 0px rgba(34, 34, 34, 0.1);
  background-color: #fff;
  display: flex;
  height: 50px;
  flex-direction: column;
  margin-right: -3px;
}
</style>
