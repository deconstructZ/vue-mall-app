<template>
  <div class="one-tab-wrapper" ref="tabWrapper">
    <div
      class="tab-item"
      v-for="(item, i) in menuList"
      :key="item.title"
      :class="{
        active: index === i,
      }"
      @touchend="moveTo(i, $event)"
      @touchstart="moving = false"
      @touchmove="moving = true"
    >
      <div class="img-wrapper">
        <img :src="item.imgURL" />
      </div>
      <div class="tab-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ScrollMoveTo } from "../utils/ScrollMove";
export default {
  data() {
    return {
      moving: false,
      index: 0,
      menuList: [
        {
          title: "时令水果",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg",
        },
        {
          title: "酒水冲调",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg",
        },
        {
          title: "安心乳品",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg",
        },
        {
          title: "休闲零食",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg",
        },
        {
          title: "肉蛋食材",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg",
        },
        {
          title: "新鲜蔬菜",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg",
        },
        {
          title: "熟食餐饮",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg",
        },
        {
          title: "海鲜水产",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg",
        },
        {
          title: "粮油调味",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg",
        },
        {
          title: "某手美食",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg",
        },
        {
          title: "纸杯清洁",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg",
        },
        {
          title: "个人护理",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg",
        },
        {
          title: "美妆护肤",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg",
        },
        {
          title: "家居收纳",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg",
        },
        {
          title: "家用电器",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg",
        },
        {
          title: "3C数码",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg",
        },
        {
          title: "母婴用品",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg",
        },
        {
          title: "鲜花绿植",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg",
        },
        {
          title: "宠物用品",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg",
        },
        {
          title: "图书玩具",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg",
        },
        {
          title: "手表配饰",
          imgURL:
            "https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["getSideList"]),
    moveTo(i, e) {
      if (this.moving) {
        return;
      }
      this.index = i;
      //计算移动距离
      const tabWrapper = this.$refs.tabWrapper;
      const tabItem = e.target;

      const dis =
        tabWrapper.offsetWidth / 2 -
        tabItem.getBoundingClientRect().left -
        tabItem.offsetWidth / 2;
      //   console.log(dis);
      //   tabWrapper.scrollLeft += -dis;
      ScrollMoveTo(tabWrapper.scrollLeft, -dis, tabWrapper, "scrollLeft");
      //获取侧边栏数据
      this.getSideList(this.menuList[i].title);
    },
  },
  mounted() {
    this.getSideList(this.menuList[0].title);
  },
};
</script>

<style lang="less" scoped>
.one-tab-wrapper {
  width: 355px;
  height: 104px;
  display: flex;
  overflow: auto;

  .tab-item {
    width: 50px;
    height: 70px;
    padding: 10px 5px;
    .img-wrapper {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
    }
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
    .tab-title {
      text-align: center;
      margin-top: 5px;
      color: #000;
      font-size: 12px;
    }
  }
  .active {
    .img-wrapper {
      border: 2px solid #d13193;
      border-radius: 23px;
    }
    .tab-title {
      color: #fff;
      font-weight: bold;
      background: #d13193;
      border-radius: 30px;
    }
  }
}
.one-tab-wrapper::-webkit-scrollbar {
  display: none;
}
</style>