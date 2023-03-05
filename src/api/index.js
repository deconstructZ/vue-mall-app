import Axios from "axios";
import baseURL, {
  urls
} from "./URLS.js"
const appkey = 'dd_1597654682810';
const request = Axios.create({
  baseURL,
  params: {
    appkey,
  },
});
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
})
const getsidebar = (type) =>
  request.get(urls.getsidebar, {
    params: {
      type
    }
  })
const getGoodsList = (type, page, sort, size) => request.get(urls.getGoodsList, {
  params: {
    type,
    page,
    sort,
    size,
  }
})
const getLikeList = (likeValue) => {
  return request.get(urls.likeSearch, {
    params: {
      likeValue,
    }
  })
}
const getSearchList = (type, page, size) => {
  return request.get(urls.search, {
    params: {
      type,
      page,
      size
    }
  })
}

const getGoodsByIds = (value) => request.get(urls.getGoodsByIds, {
  params: {
    value
  }
})

export default {
  getsidebar,
  getGoodsList,
  getLikeList,
  getSearchList,
  getGoodsByIds
}
