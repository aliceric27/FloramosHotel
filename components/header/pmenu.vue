<template>
  <div id="menu-warp">
    <div class="main">
      <div class="list">
        <div class="item">電力系統</div>
        <div class="item">送排風系統</div>
        <div class="item">給排水系統</div>
        <div class="item">熱泵系統</div>
        <div class="item">緊急求救</div>
        <div class="item">消防系統</div>
        <div class="item">公共照明系統</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style lang="scss" scoped>
#menu-warp {
  background: linear-gradient(180deg, #fff 32.29%, rgba(255, 255, 255, 0) 100%);
  .main {
    display: flex;
    justify-content: center;
    .list {
      width: 80%;
      margin: 1rem;
      border-bottom: 1px solid rgba(167, 167, 167, 0.3);
      display: flex;
      justify-content: center;
      padding: 1rem;
      .item {
        cursor: pointer;
        padding: 1rem;
        border-right: 1px solid rgba(167, 167, 167, 0.3);
        color: #717171;
        text-align: center;
        font-family: Microsoft JhengHei UI;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.0675rem;
      }
    }
  }
}
</style>
