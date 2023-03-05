import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);
import
api
from "@/api/index.js"
export default new Vuex.Store({
  state: {
    sideList: [],
    showContent: false,
    size: 5, //每页显示几条
    goodsList: [],
    type: null,
    counterMap: {},
  },
  mutations: {
    setSideList(state, payload) {
      state.sideList = payload
    },
    setShowContent(state, payload) {
      state.showContent = payload
    },
    setGoodsList(state, payload) {
      state.goodsList = [...state.goodsList, ...payload]
    },
    resetGoodsList(state, payload) {
      state.goodsList = []
    },
    setGoodsType(state, payload) {
      state.type = payload
    },
    setCounterMap(state, payload) {
      state.counterMap = payload
    },
    storageChange(state, {
      id,
      value,
    }) {

      if (state.counterMap[id]) {
        if ((value === -1 && state.counterMap[id] === 1) || value === -Infinity) {
          Vue.delete(state.counterMap, id)
        } else {
          Vue.set(state.counterMap, id, state.counterMap[id] + value)
        }
      } else {
        Vue.set(state.counterMap, id, 1)
      }

      localStorage.setItem("goods", JSON.stringify(state.counterMap))
    }
  },
  actions: {
    async getSideList({
      commit
    }, payload) {
      const resp = await api.getsidebar(payload)
      commit("setSideList", resp)
      commit("setShowContent", true)
      // console.log(resp)
    },
    async getGoodsList({
      commit,
      state
    }, payload) {
      const {
        page,
        sort
      } = payload
      const type = payload.type || state.type
      const {
        list,
        total
      } = await api.getGoodsList(type, page, sort, state.size)
      commit("setGoodsList", list)
      commit("setGoodsType", type)
      if (total > state.goodsList.length) {
        return true
      } else {
        return false
      }
    }
  },

  modules: {},
});
