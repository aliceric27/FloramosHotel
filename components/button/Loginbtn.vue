<template>
  <div id="logbtn-warp">
    <div class="out-warp">
      <p class="btn-text">Login</p>
    </div>
  </div>
</template>

<script land="ts" setup></script>

<style lang="scss" scope>
#logbtn-warp {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
  .out-warp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 2.125rem;
    width: 90%;
    max-width: 300px;
    height: 4rem;
    background-color: #ffffff;
    box-shadow: 3px 5px 8px 0px rgba(224, 179, 0, 0.25);
    .btn-text {
      color: rgba(152, 96, 0);
      font-family: CHei2HK;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .out-warp:hover {
    background-color: rgb(255, 213, 142);
  }
}
</style>
