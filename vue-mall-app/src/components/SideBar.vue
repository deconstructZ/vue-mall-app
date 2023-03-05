<template>
  <div class="sidebar-wrapper" ref="sideBarWrapper">
    <div
      v-for="(item, i) in sidelist"
      :key="item"
      class="side-item"
      :class="{ active: index === i }"
      @touchend="moveTo(i, $event)"
      @touchmove="moving = true"
      @touchstart="moving = false"
    >
      {{ i === 0 ? "全部" : item }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { mapActions } from "vuex";
import { ScrollMoveTo } from "../utils/ScrollMove";
export default {
  data() {
    return {
      index: 0,
      moving: false,
      page: 1,
    };
  },
  computed: {
    ...mapState({
      sidelist: (state) => state.sideList,
      goodsList: (state) => state.goodsList,
    }),
  },
  async mounted() {
    await this.getSideList(this.sidelist[this.index]);
    await this.getGoodsList({ type: this.sidelist[0], page: 1, sort: "all" });
  },
  methods: {
    ...mapActions(["getSideList", "getGoodsList"]),
    ...mapMutations(["resetGoodsList"]),
    moveTo(i, e) {
      if (this.moving) {
        return;
      }
      this.index = i;
      const { sideBarWrapper } = this.$refs;
      const rect = sideBarWrapper.getBoundingClientRect();
      const wrapperTop = rect.top;
      const wrapperHeight = sideBarWrapper.offsetHeight;
      const sideItem = e.target;
      const itemTop = sideItem.getBoundingClientRect().top;
      const itemHeight = sideItem.offsetHeight;
      const dis = wrapperHeight / 2 - itemTop + wrapperTop - itemHeight / 2;
      // console.log(dis);
      ScrollMoveTo(sideBarWrapper.scrollTop, -dis, sideBarWrapper, "scrollTop");
      this.resetGoodsList();
      this.getGoodsList({
        type: this.sidelist[i],
        page: 1,
        sort: "all",
      });
    },
  },
  mounted() {
    this.resetGoodsList();
    this.getGoodsList({
      type: this.sidelist[0],
      page: 1,
      sort: "all",
    });
  },
};
</script>

<style lang="less" scoped>
.sidebar-wrapper {
  width: 79px;
  top: 135px;
  bottom: 50px;
  position: fixed;

  overflow: auto;
  background: #f8f8f8;
  .side-item {
    width: 100%;
    height: 40px;
    text-align: center;

    line-height: 40px;
    position: relative;
  }
  .active {
    font-weight: bold;
    color: #ff1a90;
  }
  .active::before {
    content: "";
    width: 6px;
    height: 18px;
    background: #ff1a90;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.sidebar-wrapper::-webkit-scrollbar {
  display: none;
}
</style>