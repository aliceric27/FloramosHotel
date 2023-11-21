<template>
  <Cardlayout />
</template>
<script setup lang="ts">
import usePageStore from "~/store/PageStore";
const PageStore = usePageStore();
const page = computed(() => PageStore.page);
const changepage = PageStore.turnpage;
</script>

<style lang="scss" scoped>
// #main-warp {
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.7),
//       rgba(255, 255, 255, 0.7)
//     ),
//     url("@/assets/images/background/image-10.png") 90% / cover no-repeat;
// }
</style>
