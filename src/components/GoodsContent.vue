<template>
  <div class="goods-wrapper">
    <div class="header van-hairline--top-bottom">
      <div :class="{ active: type === `all` }" @click="changeType(`all`)">
        综合
      </div>
      <div :class="{ active: type === `sale` }" @click="changeType(`sale`)">
        销量
      </div>
      <div
        class="price"
        :class="{
          'price-up': type === 'price-up',
          'price-down': type === 'price-down',
        }"
        @click="changeType(`price`)"
      >
        价格
      </div>
    </div>
    <div class="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <GoodsCard
            v-for="(item, i) in goodsList"
            v-bind="item"
            :key="i"
            :num="counterMap[item.id]"
          />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import GoodsCard from "./GoodsCard.vue";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      type: "",
      isLoading: false, //下拉刷新
      loading: false, //加载更多
      finished: false,
      page: 1,
    };
  },
  components: {
    GoodsCard,
  },
  computed: {
    ...mapState(["goodsList", "counterMap"]),
  },
  methods: {
    ...mapActions(["getGoodsList"]),
    ...mapMutations(["resetGoodsList"]),
    //下拉刷新
    async onRefresh() {
      this.isLoading = true;
      this.finished = false;
      this.page = 1;
      this.resetGoodsList();
      await this.getGoodsList({
        page: 1,
        sort: this.type,
      });
      this.isLoading = false;
    },
    //加载更多
    async onLoad() {
      this.loading = true;
      this.page += 1;
      const result = await this.getGoodsList({
        page: this.page,
        sort: this.type,
      });
      console.log(result);
      //可以继续加载
      if (result) {
        this.loading = false;
      } else {
        this.loading = false;
        this.finished = true;
      }
    },
    changeType(type) {
      if (type === "all") {
        this.type = "all";
      } else if (type === "sale") {
        this.type = "sale";
      } else {
        if (this.type === "price-up") {
          this.type = "price-down";
        } else {
          this.type = "price-up";
        }
      }
      this.onRefresh();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 296px;
  padding: 0 8px;
  position: relative;
  left: 79px;
  top: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  > div {
    width: 50px;
    height: 25px;
    line-height: 25px;
    color: #cecece;
    text-align: center;
    position: relative;
  }
  .active,
  .price-up,
  .price-down {
    color: #ff1a90;
    font-weight: bold;
  }
  .price::after {
    content: "";
    border: 4px solid transparent;
    border-top-color: #aaa;
    position: absolute;
    bottom: 4px;
    right: 0;
  }
  .price::before {
    content: "";
    border: 4px solid transparent;
    border-bottom-color: #aaa;
    position: absolute;
    top: 4px;
    right: 0;
  }
  .price-up::before {
    border-bottom-color: #ff1a90;
  }
  .price-down::after {
    border-top-color: #ff1a90;
  }
}
.content {
  width: 296px;
  position: fixed;
  top: 170px;
  right: 0;
  bottom: 50px;
  overflow: auto;
}
.van-pull-refresh {
  overflow: unset !important;
}
</style>