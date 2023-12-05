<!-- 分類共用目錄layout -->
<template>
  <div id="menu-warp">
    <div class="main">
      <div class="list">
        <div class="item" @click="() => navigateTo('/system/power')">
          <p>電力系統</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/wind')">
          <p>送排風系統</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/water')">
          <p>給排水系統</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/heat')">
          <p>熱泵系統</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/urgent')">
          <p>緊急求救</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/firefighting')">
          <p>消防系統</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/light')">
          <p>公共照明系統</p>
        </div>
        <div class="item" @click="() => navigateTo('/system/codetect')">
          <p>CO偵測</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import usePageStore from "~/store/PageStore";
import { useRouter } from "vue-router";
const router = useRouter();
const PageStore = usePageStore();
const changepage = PageStore.turnpage;
</script>
<style lang="scss" scoped>
#menu-warp {
  background: linear-gradient(180deg, #fff 32.29%, rgba(255, 255, 255, 0) 100%);
  .main {
    display: flex;
    justify-content: center;
    .list {
      width: 90%;
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
      .item p {
        position: relative;
        z-index: 10;
      }
      .item p:hover {
        color: #4aa452;
      }
      .item p:hover::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1; /* 將偽元素放在文字後方 */
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 1.03125rem;
        background: #fff6eb;
        filter: blur(10px);
      }
    }
  }
}
</style>
