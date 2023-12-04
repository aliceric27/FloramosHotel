<template>
  <div id="main-warp">
    <Cardlayout />
  </div>
</template>
<script setup lang="ts">
import useLoginStore from "~/store/LoginStore";
const LoginStore = useLoginStore();
</script>

<style lang="scss" scoped>
#main-warp {
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.7)
    ),
    url("@/assets/images/background/image-10.png") 90% / cover no-repeat;
}
</style>
