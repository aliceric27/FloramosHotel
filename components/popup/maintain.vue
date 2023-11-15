<template>
  <div class="main-container">
    <h2 class="title">確認保養</h2>
    <div class="divider"></div>
    <div class="maintenance-item">保養項目</div>
    <div class="maintenance-title">發電機</div>
    <div class="maintenance-time">
      <div class="maintenance-label">保養時間</div>
      <div class="date-picker">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14162cca-66ca-469f-9ccf-9033bfd5da2a?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
          class="image"
        />
      </div>
    </div>
    <div class="confirmation">
      <button class="close">關閉</button>
      <button class="confirm">確認保養</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.title {
  color: #717171;
  letter-spacing: 6px;
  align-self: center;
  margin-top: 27px;
  white-space: nowrap;
  font: 700 20px/25px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .title {
    white-space: initial;
  }
}

.divider {
  background-color: #cdcdcd;
  align-self: stretch;
  margin-top: 20px;
  height: 2px;
}

.maintenance-item {
  color: #717171;
  text-align: center;
  letter-spacing: 1.2px;
  align-self: center;
  margin-top: 22px;
  font: 700 20px/31px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.maintenance-time {
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  margin-top: 22px;
  width: 188px;
  max-width: 100%;
  gap: 14px;
}

.maintenance-title {
  margin: 1rem 0 0 0;
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 156.502%;
  letter-spacing: 0.09rem;
}

.maintenance-label {
  color: #717171;
  letter-spacing: 0.96px;
  margin: auto 0;
  font: 700 16px/20px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.date-picker {
  justify-content: space-between;
  border-radius: 0.3125rem;
  border: 1px solid #a7a7a7;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  gap: 12px;
  padding: 4px 6px 4px 5px;
}

.date-picker-label {
  color: #717171;
  letter-spacing: 2.96px;
  font: 700 16px/20px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.image {
  aspect-ratio: 1.83;
  object-fit: contain;
  object-position: center;
  width: 11px;
  fill: #a7a7a7;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
}

.confirmation {
  justify-content: space-between;
  display: flex;
  gap: 20px;
  margin: 1rem;
}

.close {
  letter-spacing: 1rem;
  text-indent: 1rem;
  color: #b8b8b8;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 1.6875rem;
  border: 2px solid #e2e2e2;
  background-color: #f5f5f5;
  flex-grow: 1;
  padding: 0 1rem;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .close {
    white-space: initial;
  }
}

.confirm {
  color: #717171;
  letter-spacing: 10px;
  text-indent: 10px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 1.6875rem;
  border: 1.2px solid #eaeaea;
  box-shadow: 1px 1px 2px 0px rgba(34, 34, 34, 0.1);
  background-color: #fff;
  flex-grow: 1;
  padding: 8px 20px;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .confirm {
    white-space: initial;
  }
}
</style>
