<template>
  <div id="main-warp">
    <pheader />
    <pmenu />
    <NuxtPage />
    <marquee />
  </div>
</template>
<style lang="scss" scoped>
#main-warp {
  min-height: 100dvh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)),
    url("@/assets/images/background/image-10.png") 90% / cover no-repeat;
}
</style>
