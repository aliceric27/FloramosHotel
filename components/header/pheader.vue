<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <div class="div-4">工務版</div>
        <div class="div-5"></div>
        <div class="div-6">
          <div class="div-7">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7f10abe-436d-4b0a-b46e-32277b2c269d?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
              class="img"
            />
            <div class="div-8">首頁</div>
          </div>
          <div class="div-9">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d879135-7a71-4aaf-b321-f280c6e8d9cc?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
              class="img-2"
            />
            <div class="div-10">登出</div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4433fcd0-3c39-48cf-8858-af7c3ced707f?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
        class="img-3"
      />
      <div class="div-11">
        <div class="div-12">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ca0832-7431-4476-a039-472d72b04384?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
            class="img-4"
          />
          <div class="div-13">歷史事件</div>
        </div>
        <div class="div-14">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ddcfce-7127-49f1-9726-5ea0d2a524e0?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
            class="img-5"
          />
          <div class="div-15">保養設定</div>
        </div>
        <div class="div-16">
          <div class="div-17">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/015833bc-086a-4d1b-b307-fd7e6ebe68b8?apiKey=929b44a9cf6a4b4891c6112d7debe76e&"
              class="img-6"
            />
            <div class="div-18">即時訊息</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div {
  display: flex;
  flex-direction: column;
}
.div-2 {
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(
    --nav-bar,
    linear-gradient(
      180deg,
      #fff 32.81%,
      #f3f3f3 75.52%,
      #e0dfdf 99.99%,
      #cfcece 100%
    )
  );
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 91px 12px 45px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.div-3 {
  justify-content: space-between;
  align-self: center;
  display: flex;
  gap: 20px;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-3 {
    justify-content: center;
  }
}
.div-4 {
  color: #232323;
  letter-spacing: 3.6px;
  align-self: center;
  margin: auto 0;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
.div-5 {
  background-color: #a7a7a7;
  width: 1px;
  height: 74px;
}
.div-6 {
  align-self: center;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
  padding: 2px 0;
}
.div-7 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  fill: #838383;
  stroke-width: 0.2px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-8 {
  color: #838383;
  letter-spacing: 3.6px;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    white-space: initial;
  }
}
.div-9 {
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 19px;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
  fill: #838383;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-10 {
  color: #838383;
  letter-spacing: 7.2px;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.img-3 {
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 87px;
  overflow: hidden;
  max-width: 100%;
}
.div-11 {
  align-self: center;
  display: flex;
  padding-left: 5px;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-11 {
    justify-content: center;
  }
}
.div-12 {
  align-self: center;
  display: flex;
  gap: 18px;
  margin: auto 0;
}
.img-4 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  fill: #838383;
  stroke-width: 0.6px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
}
.div-13 {
  justify-content: center;
  color: #838383;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    white-space: initial;
  }
}
.div-14 {
  align-self: center;
  display: flex;
  gap: 17px;
  margin: auto 0;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  fill: #838383;
  stroke-width: 0.5px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
}
.div-15 {
  justify-content: center;
  color: #838383;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-15 {
    white-space: initial;
  }
}
.div-16 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 1px 0;
}
.div-17 {
  justify-content: space-between;
  align-items: center;
  display: flex;
  gap: 16px;
}
.img-6 {
  aspect-ratio: 1.41;
  object-fit: contain;
  object-position: center;
  width: 24px;
  fill: #838383;
  stroke-width: 0.1px;
  stroke: #838383;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-18 {
  color: #838383;
  align-self: stretch;
  white-space: nowrap;
  font: 700 18px/23px Microsoft JhengHei UI, -apple-system, Roboto, Helvetica,
    sans-serif;
}
@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
  }
}
</style>
