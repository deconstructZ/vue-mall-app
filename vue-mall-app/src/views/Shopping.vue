<template>
  <div class="shop-car">
    <div class="shop-car-nav">
      <van-nav-bar title="购物车" right-text="删除" @click-right="del" />
    </div>
    <div class="shop-car-list">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="list-item" v-for="item in shopList" :key="item.id">
          <van-checkbox class="check" :name="item.id"></van-checkbox>
          <GoodsCard
            v-bind="item"
            :num="counterMap[item.id]"
            :noFly="true"
          ></GoodsCard>
        </div>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      :price="totalPrice"
      :button-text="`去提交(${totalNum})`"
      @submit="onSubmit"
    >
      <van-checkbox @click="checkAll" v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import GoodsCard from "../components/GoodsCard.vue";
import { mapState, mapMutations } from "vuex";
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      result: [], //选中的
      shopList: [], //加入购物车的所有商品
      checked: false,
    };
  },
  methods: {
    ...mapMutations(["storageChange"]),
    async del() {
      if (this.result.length === 0) {
        Toast("未选中任何商品");
      }
      //选中情况下弹出提示框删除本地存储对应项和shopList对应项
      try {
        await Dialog.confirm({
          message: "您是否要删除指定商品？",
        });
        //点击了确定
        this.result.forEach((id) => {
          this.storageChange({ id, value: -Infinity });
          //对购物车列表进行筛选，已经选中并删除的从列表中筛掉
          this.shopList = this.shopList.filter(
            (item) => item.id !== id
            //!this.result.includes(item.id)
          );
        });
      } catch (error) {
        //点击了取消
        Toast("用户点击了取消");
      }
    },
    onSubmit() {
      Dialog.alert({
        message: "结算页面",
        theme: "round-button",
      });
    },
    checkAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll(false);
      }
      // console.log(this.$refs.checkboxGroup);
    },
  },
  computed: {
    //从vuex里拿购物车id数据CouterMap
    ...mapState(["counterMap"]),

    totalNum() {
      // const checkedGoods = this.shopList.filter((item) =>
      //   this.result.includes(item.id)
      // );
      return this.result.reduce((pre, cur) => this.counterMap[cur] + pre, 0);
      // const resArr = this.shopList.filter((item) =>
      //   this.result.includes(item.id)
      // );
      // const res = resArr.reduce(
      //   (prev, next) => prev + (this.counterMap[next.id] || 0),
      //   0
      // );
      // return res;
    },
    totalPrice() {
      const selectedGoodsInAll = this.shopList.filter((item) =>
        this.result.includes(item.id)
      );
      const totalPrice = selectedGoodsInAll.reduce(
        (pre, cur) => cur.price * this.counterMap[cur.id] * 100 + pre,
        0
      );
      // // console.log(totalPrice);
      return totalPrice;

      // const resArr = this.shopList.filter((item) =>
      //   this.result.includes(item.id)
      // );
      // return resArr.reduce((prev, next) => {
      //   const num = this.counterMap[next.id] || 0;
      //   return Math.round(num * next.price * 100) + prev;
      // }, 0);
    },
  },
  components: {
    GoodsCard,
  },
  async mounted() {
    const ids = Object.keys(this.counterMap);
    //根据购物车id发送请求拿到购物车列表
    const resp = await this.$api.getGoodsByIds(ids.join());
    this.shopList = resp.list;
  },
  watch: {
    result() {
      if (this.result.length === this.shopList.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.shop-car {
  min-height: 100vh;
  background: #eee;
  .shop-car-nav {
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 10;
    width: 100%;
  }
  .shop-car-list {
    position: absolute;
    top: 46px;
    padding: 10px 10px 100px 10px;
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    z-index: 0;

    .list-item {
      display: flex;
      justify-content: center;

      .check {
        margin-right: 10px;
        flex-shrink: 0;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
</style>