<template>
  <div
    v-if="exist"
    class="item"
    :style="{
      width: `${imgWidth}px`,
      height: `${imgHeight}px`,
      transform: `translate(${startX}px,${startY}px) scale(${sX},${sY})`,
      opacity,
    }"
  >
    <img :src="src" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  position: fixed;
  left: 0;
  top: 0;
  transition: all 1s;
  z-index: 100;
  transform-origin: 0% 0%;
}
img {
  width: 100%;
  border-radius: 50%;
}
</style>