<template>
  <div class="classify-wrapper">
    <router-link class="search-btn" tag="div" to="/search"
      ><van-icon name="search" />苹果9.9一斤</router-link
    >
    <OneTab />
    <template v-if="showContent"><SideBar /></template>
    <van-loading color="#ff1a90" vertical v-else />
    <GoodsContent />
  </div>
</template>

<script>
import OneTab from "../components/OneTab.vue";
import SideBar from "../components/SideBar.vue";
import GoodsContent from "../components/GoodsContent.vue";
import { mapState } from "vuex";
export default {
  components: {
    OneTab,
    SideBar,
    GoodsContent,
  },
  computed: {
    ...mapState(["sideList", "showContent"]),
  },
  
};
</script>

<style lang="less" scoped>
.classify-wrapper {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    background: #eee;
    border-radius: 10px;
    margin: 11px auto 0;
    text-align: center;
    line-height: 33px;
    color: #a1a1a1;
    > * {
      vertical-align: middle;
    }
  }
}
</style>