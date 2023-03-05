<template>
  <div class="search-wrapper">
    <div class="search-head">
      <van-icon name="arrow-left" class="arr-left" @click="$router.goBack()" />
      <van-search
        class="search-inp"
        v-model="value"
        :show-action="true"
        :placeholder="place"
        @input="onInput"
        @search="onSearch"
        @focus="onFocus"
      >
        <template #action v-if="showList"
          ><div @touchend="onSearch(value)">搜索</div></template
        >
        <template #action v-else
          ><van-icon
            name="cart-o"
            id="shop-car"
            class="shop-car"
            :badge="carCount"
            @click="$router.push(`/home/shopping`)"
        /></template>
      </van-search>
    </div>
    <div class="like-search-list" v-if="likeList.length && showList">
      <van-list>
        <van-cell @click="onSearch(item)" v-for="item in likeList" :key="item">
          <span v-html="formatHTML(item)"></span>
        </van-cell>
      </van-list>
    </div>
    <div class="goods-cards" v-if="!showList">
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
    </div>
    <div class="search-history" v-if="likeList.length <= 0 && showList">
      <SearchHistory
        :searchList="searchList"
        @search="onSearch"
      ></SearchHistory>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GoodsCard from "../components/GoodsCard.vue";
import SearchHistory from "../components/SearchHistory.vue";
export default {
  data() {
    return {
      place: "酒",
      value: "",
      likeList: [],
      timer: null,
      page: 1,
      size: 5,
      total: 0,
      showList: true,
      loading: false,
      finished: false,
      goodsList: [],
      searchList: [],
    };
  },
  components: { GoodsCard, SearchHistory },
  methods: {
    async onLoad() {
      const resp = await this.$api.getSearchList(
        this.value,
        this.page,
        this.size
      );
      //   console.log(resp.list);
      this.total = resp.total;
      this.goodsList = [...resp.list];
      this.loading = false;

      if (this.goodsList.length >= this.total) {
        this.finished = true;
      } else {
        this.page += 1;
      }
    },
    formatHTML(item) {
      const reg = new RegExp(this.value, "g");
      // console.log(reg);
      return item.replace(reg, this.value.fontcolor("red"));
    },
    async onInput() {
      if (this.value === "") {
        this.likeList = [];
        return;
      }

      //debounce
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } else {
        this.timer = setTimeout(async () => {
          const resp = await this.$api.getLikeList(this.value);
          this.likeList = resp.result;
          clearTimeout(this.timer);
          this.timer = null;
        }, 300);
      }
    },
    async onSearch(value) {
      if (value) {
        this.value = value;
      }
      if (this.value === "") {
        this.value = this.place;
      }
      //搜过的顺序提前，没搜过的往数组中添加
      const result = this.searchList.find((item) => item.value === this.value);
      if (result) {
        //搜索过的更新时间
        result.time = new Date().getTime();
        //降序排序，时间靠后的排在前面
        this.searchList.sort((pre, cur) => cur.time - pre.time);
      } else {
        //没有搜索过往数组内添加一项
        this.searchList.unshift({
          value: this.value,
          time: new Date().getTime(),
        });
        if (this.searchList.length >= 11) {
          this.searchList.pop();
        }
      }
      localStorage.setItem("searchList", JSON.stringify(this.searchList));
      this.likeList = [];
      this.finished = false;
      this.loading = false;
      this.onLoad();
      this.showList = false;
    },
    onFocus() {
      this.showList = true;
    },
  },
  computed: {
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
    ...mapState(["counterMap"]),
  },
  created() {
    this.searchList = JSON.parse(localStorage.getItem("searchList")) || [];
  },
};
</script>

<style lang="less" scoped>
.search-wrapper {
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: #fff;
  .search-head {
    background: #fff;
    z-index: 22;
    width: 345px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 5px;
    .arr-left {
      font-size: 22px;
    }
    .search-inp {
      flex: 1;
      .shop-car {
        font-size: 15px;
      }
    }
  }
  .like-search-list {
    z-index: 10;
    width: 100%;
    position: relative;
    top: 50px;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .goods-cards {
    position: relative;
    width: 345px;
    margin: 48px auto 0;
    z-index: 10;
    background: #fff;
  }
  .search-history {
    width: 350px;
    position: absolute;
    top: 55px;
    left: 10px;
    z-index: 1;
  }
}
</style>