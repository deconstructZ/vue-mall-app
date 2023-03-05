<template>
  <div class="goods-card-wrapper van-hairline--bottom">
    <div class="img-wrapper"><img :src="images[0]" alt="" ref="img" /></div>
    <div class="card-content">
      <div class="title overflow">{{ title }}</div>
      <div class="desc overflow">{{ desc }}</div>
      <div class="tags">
        <div v-for="t in tags" :key="t">{{ t }}</div>
      </div>
      <div class="price">￥{{ price }}</div>
      <div class="counter">
        <div @touchstart="counter(id, -1)" v-if="num">
          <img
            src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"
            alt=""
          />
        </div>
        <div class="num" v-if="num">{{ num }}</div>
        <div @touchstart="counter(id, 1)">
          <img
            src="https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import animate from "../tools/Animate/index.js";
export default {
  props: ["images", "tags", "title", "price", "desc", "id", "num", "noFly"],
  methods: {
    counter(id, num) {
      this.storageChange({ id, value: num });
      if (num === -1 || this.noFly) {
        return;
      }
      //图片位置与size
      const img = this.$refs.img;
      const { left: startX, top: startY } = img.getBoundingClientRect();
      const { offsetWidth: imgWidth, offsetHeight: imgHeight } = img;
      //购物车
      const shopCar = document.getElementById("shop-car");
      const { left: carLeft, top: carTop } = shopCar.getBoundingClientRect();
      const { offsetWidth: carWidth, offsetHeight: carHeight } = shopCar;
      const endX = carLeft + carWidth / 2;
      const endY = carTop + carHeight / 2;

      animate({
        startX,
        startY,
        endX,
        endY,
        imgWidth,
        imgHeight,
        src: img.src,
      });
    },
    ...mapMutations(["storageChange"]),
  },
};
</script>

<style lang="less" scoped>
.goods-card-wrapper {
  width: 100%;
  display: flex;
  height: 100px;
  .img-wrapper {
    width: 90px;
    margin-right: 20px;
    img {
      width: 90px;
      height: 90px;
    }
  }
  .card-content {
    flex: 1;
    position: relative;
    > div {
      width: 170px;
    }
    .title {
      font-size: 13px;
      color: #1a1a1a;
      margin-top: 5px;
    }
    .desc {
      color: #aaa;
      font-size: 11px;
      margin-top: 5px;
    }
    .tags {
      display: flex;
      margin-top: 4px;
      > div {
        font-size: 10px;
        padding: 2px;
        color: #aaa;
        border: 1px solid #aaa;
        border-radius: 3px;
        margin-right: 5px;
      }
    }
    .price {
      color: #ff1a90;
      font-size: 14px;
      font-weight: 600;
      margin-top: 4px;
    }
    .counter {
      display: flex;
      position: absolute;
      right: 15px;
      bottom: 12px;
      justify-content: flex-end;
      align-items: center;
      > div:not(.num) {
        width: 16px;
        height: 16px;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
    .num {
      padding: 0 5px;
      height: 22px;
      line-height: 22px;
    }
  }
}
.overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>