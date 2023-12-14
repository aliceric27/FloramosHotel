<template>
  <div class="logo">
    <div class="logo-content">
      <div class="logo-img">
        <img class="img" src="@/Assets/images/F-LOGO.svg" alt="logo" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.logo {
  display: inline-block;
  min-width: 12vw;
  .logo-content {
    border-radius: 50%;
    background-color: transparent;
  }
  .logo-img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 45rem;
    min-height: 300px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
