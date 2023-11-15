<template>
  <div class="main-container">
    <h2 class="title">警報復歸</h2>
    <div class="divider"></div>
    <div class="maintenance-item">警報項目</div>
    <div class="maintenance-title">排煙機</div>
    <div class="maintenance-time">
      <div class="maintenance-label">解除時間</div>
      <p class="alert-time">2023-03-27 16:04:01</p>
    </div>
    <div class="choice">
      <div class="optionbtn">
        <el-radio-group v-model="radio1" class="ml-4">
          <el-radio label="1" size="large">維修</el-radio>
          <el-radio label="2" size="large">更換</el-radio>
          <el-radio label="3" size="large">保養</el-radio>
          <el-radio label="4" size="large">系統測試</el-radio>
        </el-radio-group>
      </div>
    </div>
    <el-input v-model="input" placeholder="備註" />
    <div class="confirmation">
      <button class="close">關閉</button>
      <button class="confirm">確認保養</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const radio1 = ref("");
const input = ref("");
</script>
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
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  margin-top: 22px;
  gap: 14px;
}
.alert-time {
  color: #717171;
  font-family: Microsoft JhengHei UI;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06rem;
}
.choice {
  display: flex;
  align-items: flex-start;
  .optionbtn {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
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
