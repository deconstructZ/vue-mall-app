<template>
  <van-tabbar fixed route>
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/home/classify">分类</van-tabbar-item>
    <van-tabbar-item
      icon="cart-o"
      to="/home/shopping"
      :badge="carCount"
      id="shop-car"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["counterMap"]),
    carCount() {
      const count = Object.values(this.counterMap).reduce(
        (pre, cur) => pre + cur,
        0
      );
      if (count >= 99) {
        return "99+";
      } else {
        return count;
      }
    },
  },
};
</script>

<style>
</style>