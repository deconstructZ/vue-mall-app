(function(t){function e(e){for(var i,a,c=e[0],r=e[1],l=e[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,c=1;c<s.length;c++){var r=s[c];0!==o[r]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},o={app:0},n=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1201:function(t,e,s){"use strict";s("ee7c")},3088:function(t,e,s){},5418:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),o=s("b970"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:t.transitionName,mode:this.$router.back?"out-in":"in-out"}},[e("router-view",{staticClass:"view"})],1)],1)},a=[],c={data(){return{transitionName:"left"}},created(){const t=JSON.parse(localStorage.getItem("goods"))||{};this.$store.commit("setCounterMap",t)},watch:{$route(t,e){"classify"===t.name&&"search"===e.name&&(this.$router.back=!0),this.$router.back?this.transitionName="right":this.transitionName="left",this.$router.back=!1}}},r=c,l=(s("ebef"),s("2877")),u=Object(l["a"])(r,n,a,!1,null,null,null),d=u.exports,h=s("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",[e("router-view"),e("Tabbar")],1)},g=[],m=function(){var t=this,e=t._self._c;return e("van-tabbar",{attrs:{fixed:"",route:""}},[e("van-tabbar-item",{attrs:{icon:"home-o",to:"/"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{icon:"apps-o",to:"/home/classify"}},[t._v("分类")]),e("van-tabbar-item",{attrs:{icon:"cart-o",to:"/home/shopping",badge:t.carCount,id:"shop-car"}},[t._v("购物车")]),e("van-tabbar-item",{attrs:{icon:"user-circle-o",to:"/my"}},[t._v("我的")])],1)},f=[],b=(s("13d5"),s("2f62")),v={computed:{...Object(b["d"])(["counterMap"]),carCount(){const t=Object.values(this.counterMap).reduce((t,e)=>t+e,0);return t>=99?"99+":t}}},y=v,L=Object(l["a"])(y,m,f,!1,null,null,null),k=L.exports,j={components:{Tabbar:k}},_=j,C=Object(l["a"])(_,p,g,!1,null,null,null),w=C.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"classify-wrapper"},[e("router-link",{staticClass:"search-btn",attrs:{tag:"div",to:"/search"}},[e("van-icon",{attrs:{name:"search"}}),t._v("苹果9.9一斤")],1),e("OneTab"),t.showContent?[e("SideBar")]:e("van-loading",{attrs:{color:"#ff1a90",vertical:""}}),e("GoodsContent")],2)},O=[],G=function(){var t=this,e=t._self._c;return e("div",{ref:"tabWrapper",staticClass:"one-tab-wrapper"},t._l(t.menuList,(function(s,i){return e("div",{key:s.title,staticClass:"tab-item",class:{active:t.index===i},on:{touchend:function(e){return t.moveTo(i,e)},touchstart:function(e){t.moving=!1},touchmove:function(e){t.moving=!0}}},[e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s.imgURL}})]),e("div",{staticClass:"tab-title"},[t._v(t._s(s.title))])])})),0)},S=[];function M(t,e,s,i){let o=5,n=0;e<0&&(o=-5);let a=setInterval(()=>{n+=o,s[i]=t+n,Math.abs(n)>Math.abs(e)&&(s[i]=t+e,clearInterval(a))},3)}var R={data(){return{moving:!1,index:0,menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},methods:{...Object(b["b"])(["getSideList"]),moveTo(t,e){if(this.moving)return;this.index=t;const s=this.$refs.tabWrapper,i=e.target,o=s.offsetWidth/2-i.getBoundingClientRect().left-i.offsetWidth/2;M(s.scrollLeft,-o,s,"scrollLeft"),this.getSideList(this.menuList[t].title)}},mounted(){this.getSideList(this.menuList[0].title)}},T=R,$=(s("9bef"),Object(l["a"])(T,G,S,!1,null,"51e34753",null)),U=$.exports,B=function(){var t=this,e=t._self._c;return e("div",{ref:"sideBarWrapper",staticClass:"sidebar-wrapper"},t._l(t.sidelist,(function(s,i){return e("div",{key:s,staticClass:"side-item",class:{active:t.index===i},on:{touchend:function(e){return t.moveTo(i,e)},touchmove:function(e){t.moving=!0},touchstart:function(e){t.moving=!1}}},[t._v(" "+t._s(0===i?"全部":s)+" ")])})),0)},I=[],H={data(){return{index:0,moving:!1,page:1}},computed:{...Object(b["d"])({sidelist:t=>t.sideList,goodsList:t=>t.goodsList})},async mounted(){await this.getSideList(this.sidelist[this.index]),await this.getGoodsList({type:this.sidelist[0],page:1,sort:"all"})},methods:{...Object(b["b"])(["getSideList","getGoodsList"]),...Object(b["c"])(["resetGoodsList"]),moveTo(t,e){if(this.moving)return;this.index=t;const{sideBarWrapper:s}=this.$refs,i=s.getBoundingClientRect(),o=i.top,n=s.offsetHeight,a=e.target,c=a.getBoundingClientRect().top,r=a.offsetHeight,l=n/2-c+o-r/2;M(s.scrollTop,-l,s,"scrollTop"),this.resetGoodsList(),this.getGoodsList({type:this.sidelist[t],page:1,sort:"all"})}},mounted(){this.resetGoodsList(),this.getGoodsList({type:this.sidelist[0],page:1,sort:"all"})}},W=H,N=(s("ea50"),Object(l["a"])(W,B,I,!1,null,"646e8797",null)),P=N.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods-wrapper"},[e("div",{staticClass:"header van-hairline--top-bottom"},[e("div",{class:{active:"all"===t.type},on:{click:function(e){return t.changeType("all")}}},[t._v(" 综合 ")]),e("div",{class:{active:"sale"===t.type},on:{click:function(e){return t.changeType("sale")}}},[t._v(" 销量 ")]),e("div",{staticClass:"price",class:{"price-up":"price-up"===t.type,"price-down":"price-down"===t.type},on:{click:function(e){return t.changeType("price")}}},[t._v(" 价格 ")])]),e("div",{staticClass:"content"},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsList,(function(s,i){return e("GoodsCard",t._b({key:i,attrs:{num:t.counterMap[s.id]}},"GoodsCard",s,!1))})),1)],1)],1)])},Y=[],z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"goods-card-wrapper van-hairline--bottom"},[e("div",{staticClass:"img-wrapper"},[e("img",{ref:"img",attrs:{src:t.images[0],alt:""}})]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"title overflow"},[t._v(t._s(t.title))]),e("div",{staticClass:"desc overflow"},[t._v(t._s(t.desc))]),e("div",{staticClass:"tags"},t._l(t.tags,(function(s){return e("div",{key:s},[t._v(t._s(s))])})),0),e("div",{staticClass:"price"},[t._v("￥"+t._s(t.price))]),e("div",{staticClass:"counter"},[t.num?e("div",{on:{touchstart:function(e){return t.counter(t.id,-1)}}},[e("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png",alt:""}})]):t._e(),t.num?e("div",{staticClass:"num"},[t._v(t._s(t.num))]):t._e(),e("div",{on:{touchstart:function(e){return t.counter(t.id,1)}}},[e("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png",alt:""}})])])])])},J=[],F=function(){var t=this,e=t._self._c;return t.exist?e("div",{staticClass:"item",style:{width:t.imgWidth+"px",height:t.imgHeight+"px",transform:`translate(${t.startX}px,${t.startY}px) scale(${t.sX},${t.sY})`,opacity:t.opacity}},[e("img",{attrs:{src:t.src,alt:""}})]):t._e()},A=[],E={},D=E,V=(s("1201"),Object(l["a"])(D,F,A,!1,null,"7ca51ebd",null)),q=V.exports;const K=i["a"].extend(q);var Q=function({startX:t,startY:e,endX:s,endY:i,imgWidth:o,imgHeight:n,src:a}){const c=new K({el:document.createElement("div"),data(){return{startX:t,startY:e,imgWidth:o,imgHeight:n,src:a,sX:1,sY:1,opacity:1,exist:!0}}});document.body.appendChild(c.$el),setTimeout(()=>{c.startX=s,c.startY=i,c.sX=.1,c.sY=.1,c.opacity=0},0),setTimeout(()=>{c.exist=!1},1100)},Z={props:["images","tags","title","price","desc","id","num","noFly"],methods:{counter(t,e){if(this.storageChange({id:t,value:e}),-1===e||this.noFly)return;const s=this.$refs.img,{left:i,top:o}=s.getBoundingClientRect(),{offsetWidth:n,offsetHeight:a}=s,c=document.getElementById("shop-car"),{left:r,top:l}=c.getBoundingClientRect(),{offsetWidth:u,offsetHeight:d}=c,h=r+u/2,p=l+d/2;Q({startX:i,startY:o,endX:h,endY:p,imgWidth:n,imgHeight:a,src:s.src})},...Object(b["c"])(["storageChange"])}},tt=Z,et=(s("6034"),Object(l["a"])(tt,z,J,!1,null,"6d4681a2",null)),st=et.exports,it={data(){return{type:"",isLoading:!1,loading:!1,finished:!1,page:1}},components:{GoodsCard:st},computed:{...Object(b["d"])(["goodsList","counterMap"])},methods:{...Object(b["b"])(["getGoodsList"]),...Object(b["c"])(["resetGoodsList"]),async onRefresh(){this.isLoading=!0,this.finished=!1,this.page=1,this.resetGoodsList(),await this.getGoodsList({page:1,sort:this.type}),this.isLoading=!1},async onLoad(){this.loading=!0,this.page+=1;const t=await this.getGoodsList({page:this.page,sort:this.type});console.log(t),t?this.loading=!1:(this.loading=!1,this.finished=!0)},changeType(t){"all"===t?this.type="all":"sale"===t?this.type="sale":"price-up"===this.type?this.type="price-down":this.type="price-up",this.onRefresh()}}},ot=it,nt=(s("9b73"),Object(l["a"])(ot,X,Y,!1,null,"ce570248",null)),at=nt.exports,ct={components:{OneTab:U,SideBar:P,GoodsContent:at},computed:{...Object(b["d"])(["sideList","showContent"])}},rt=ct,lt=(s("60dd"),Object(l["a"])(rt,x,O,!1,null,"3e453763",null)),ut=lt.exports,dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"shop-car"},[e("div",{staticClass:"shop-car-nav"},[e("van-nav-bar",{attrs:{title:"购物车","right-text":"删除"},on:{"click-right":t.del}})],1),e("div",{staticClass:"shop-car-list"},[e("van-checkbox-group",{ref:"checkboxGroup",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.shopList,(function(s){return e("div",{key:s.id,staticClass:"list-item"},[e("van-checkbox",{staticClass:"check",attrs:{name:s.id}}),e("GoodsCard",t._b({attrs:{num:t.counterMap[s.id],noFly:!0}},"GoodsCard",s,!1))],1)})),0)],1),e("van-submit-bar",{attrs:{price:t.totalPrice,"button-text":`去提交(${t.totalNum})`},on:{submit:t.onSubmit}},[e("van-checkbox",{on:{click:t.checkAll},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)},ht=[],pt=s("d399"),gt=s("2241"),mt={data(){return{result:[],shopList:[],checked:!1}},methods:{...Object(b["c"])(["storageChange"]),async del(){0===this.result.length&&Object(pt["a"])("未选中任何商品");try{await gt["a"].confirm({message:"您是否要删除指定商品？"}),this.result.forEach(t=>{this.storageChange({id:t,value:-1/0}),this.shopList=this.shopList.filter(e=>e.id!==t)})}catch(t){Object(pt["a"])("用户点击了取消")}},onSubmit(){gt["a"].alert({message:"结算页面",theme:"round-button"})},checkAll(){this.checked?this.$refs.checkboxGroup.toggleAll(!0):this.$refs.checkboxGroup.toggleAll(!1)}},computed:{...Object(b["d"])(["counterMap"]),totalNum(){return this.result.reduce((t,e)=>this.counterMap[e]+t,0)},totalPrice(){const t=this.shopList.filter(t=>this.result.includes(t.id)),e=t.reduce((t,e)=>e.price*this.counterMap[e.id]*100+t,0);return e}},components:{GoodsCard:st},async mounted(){const t=Object.keys(this.counterMap),e=await this.$api.getGoodsByIds(t.join());this.shopList=e.list},watch:{result(){this.result.length===this.shopList.length?this.checked=!0:this.checked=!1}}},ft=mt,bt=(s("f518"),Object(l["a"])(ft,dt,ht,!1,null,"6f57ec66",null)),vt=bt.exports,yt=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-wrapper"},[e("div",{staticClass:"search-head"},[e("van-icon",{staticClass:"arr-left",attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.goBack()}}}),e("van-search",{staticClass:"search-inp",attrs:{"show-action":!0,placeholder:t.place},on:{input:t.onInput,search:t.onSearch,focus:t.onFocus},scopedSlots:t._u([t.showList?{key:"action",fn:function(){return[e("div",{on:{touchend:function(e){return t.onSearch(t.value)}}},[t._v("搜索")])]},proxy:!0}:{key:"action",fn:function(){return[e("van-icon",{staticClass:"shop-car",attrs:{name:"cart-o",id:"shop-car",badge:t.carCount},on:{click:function(e){return t.$router.push("/home/shopping")}}})]},proxy:!0}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t.likeList.length&&t.showList?e("div",{staticClass:"like-search-list"},[e("van-list",t._l(t.likeList,(function(s){return e("van-cell",{key:s,on:{click:function(e){return t.onSearch(s)}}},[e("span",{domProps:{innerHTML:t._s(t.formatHTML(s))}})])})),1)],1):t._e(),t.showList?t._e():e("div",{staticClass:"goods-cards"},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsList,(function(s,i){return e("GoodsCard",t._b({key:i,attrs:{num:t.counterMap[s.id]}},"GoodsCard",s,!1))})),1)],1),t.likeList.length<=0&&t.showList?e("div",{staticClass:"search-history"},[e("SearchHistory",{attrs:{searchList:t.searchList},on:{search:t.onSearch}})],1):t._e()])}),Lt=[],kt=(s("3c65"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-history-wrapper"},[e("h4",[t._v("历史记录:")]),t._l(t.searchList,(function(s){return e("div",{key:s.time,staticClass:"his-item",on:{click:function(e){return t.search(s.value)}}},[t._v(" "+t._s(s.value)+" ")])}))],2)}),jt=[],_t={props:{searchList:{default:[]}},methods:{search(t){this.$emit("search",t)}}},Ct=_t,wt=(s("7ca0"),Object(l["a"])(Ct,kt,jt,!1,null,"281e16c6",null)),xt=wt.exports,Ot={data(){return{place:"酒",value:"",likeList:[],timer:null,page:1,size:5,total:0,showList:!0,loading:!1,finished:!1,goodsList:[],searchList:[]}},components:{GoodsCard:st,SearchHistory:xt},methods:{async onLoad(){const t=await this.$api.getSearchList(this.value,this.page,this.size);this.total=t.total,this.goodsList=[...t.list],this.loading=!1,this.goodsList.length>=this.total?this.finished=!0:this.page+=1},formatHTML(t){const e=new RegExp(this.value,"g");return t.replace(e,this.value.fontcolor("red"))},async onInput(){""!==this.value?this.timer?(clearTimeout(this.timer),this.timer=null):this.timer=setTimeout(async()=>{const t=await this.$api.getLikeList(this.value);this.likeList=t.result,clearTimeout(this.timer),this.timer=null},300):this.likeList=[]},async onSearch(t){t&&(this.value=t),""===this.value&&(this.value=this.place);const e=this.searchList.find(t=>t.value===this.value);e?(e.time=(new Date).getTime(),this.searchList.sort((t,e)=>e.time-t.time)):(this.searchList.unshift({value:this.value,time:(new Date).getTime()}),this.searchList.length>=11&&this.searchList.pop()),localStorage.setItem("searchList",JSON.stringify(this.searchList)),this.likeList=[],this.finished=!1,this.loading=!1,this.onLoad(),this.showList=!1},onFocus(){this.showList=!0}},computed:{carCount(){const t=Object.values(this.counterMap).reduce((t,e)=>t+e,0);return t>=99?"99+":t},...Object(b["d"])(["counterMap"])},created(){this.searchList=JSON.parse(localStorage.getItem("searchList"))||[]}},Gt=Ot,St=(s("71f7"),Object(l["a"])(Gt,yt,Lt,!1,null,"bf5d958c",null)),Mt=St.exports;i["a"].use(h["a"]),h["a"].prototype.back=!1,h["a"].prototype.goBack=function(){this.back=!0,this.go(-1)};const Rt=[{path:"/home",component:w,children:[{path:"classify",component:ut,name:"classify"},{path:"shopping",component:vt}]},{path:"/search",component:Mt,name:"search"},{path:"*",redirect:"/home/classify"}],Tt=new h["a"]({mode:"history",base:"",routes:Rt});var $t=Tt,Ut=s("cee4");const Bt="https://mallapi.duyiedu.com/goods/",It={getsidebar:"/getsidebar",getGoodsList:"/getGoodsList",likeSearch:"/likeSearch",search:"/search",getGoodsByIds:"/getGoodsByIds"};var Ht=Bt;const Wt="dd_1597654682810",Nt=Ut["a"].create({baseURL:Ht,params:{appkey:Wt}});Nt.interceptors.response.use((function(t){return t.data}));const Pt=t=>Nt.get(It.getsidebar,{params:{type:t}}),Xt=(t,e,s,i)=>Nt.get(It.getGoodsList,{params:{type:t,page:e,sort:s,size:i}}),Yt=t=>Nt.get(It.likeSearch,{params:{likeValue:t}}),zt=(t,e,s)=>Nt.get(It.search,{params:{type:t,page:e,size:s}}),Jt=t=>Nt.get(It.getGoodsByIds,{params:{value:t}});var Ft={getsidebar:Pt,getGoodsList:Xt,getLikeList:Yt,getSearchList:zt,getGoodsByIds:Jt};i["a"].use(b["a"]);var At=new b["a"].Store({state:{sideList:[],showContent:!1,size:5,goodsList:[],type:null,counterMap:{}},mutations:{setSideList(t,e){t.sideList=e},setShowContent(t,e){t.showContent=e},setGoodsList(t,e){t.goodsList=[...t.goodsList,...e]},resetGoodsList(t,e){t.goodsList=[]},setGoodsType(t,e){t.type=e},setCounterMap(t,e){t.counterMap=e},storageChange(t,{id:e,value:s}){t.counterMap[e]?-1===s&&1===t.counterMap[e]||s===-1/0?i["a"].delete(t.counterMap,e):i["a"].set(t.counterMap,e,t.counterMap[e]+s):i["a"].set(t.counterMap,e,1),localStorage.setItem("goods",JSON.stringify(t.counterMap))}},actions:{async getSideList({commit:t},e){const s=await Ft.getsidebar(e);t("setSideList",s),t("setShowContent",!0)},async getGoodsList({commit:t,state:e},s){const{page:i,sort:o}=s,n=s.type||e.type,{list:a,total:c}=await Ft.getGoodsList(n,i,o,e.size);return t("setGoodsList",a),t("setGoodsType",n),c>e.goodsList.length}},modules:{}});s("499a"),s("157a");i["a"].prototype.$api=Ft,i["a"].config.productionTip=!1,i["a"].use(o["a"]),new i["a"]({router:$t,store:At,render:t=>t(d)}).$mount("#app")},6034:function(t,e,s){"use strict";s("9d86")},"60dd":function(t,e,s){"use strict";s("3088")},"71f7":function(t,e,s){"use strict";s("caa2")},"7ca0":function(t,e,s){"use strict";s("5418")},"971f":function(t,e,s){},"9b73":function(t,e,s){"use strict";s("d871")},"9bef":function(t,e,s){"use strict";s("971f")},"9d86":function(t,e,s){},b74c:function(t,e,s){},c908:function(t,e,s){},caa2:function(t,e,s){},d871:function(t,e,s){},e3b0:function(t,e,s){},ea50:function(t,e,s){"use strict";s("c908")},ebef:function(t,e,s){"use strict";s("e3b0")},ee7c:function(t,e,s){},f518:function(t,e,s){"use strict";s("b74c")}});
//# sourceMappingURL=app.ee58a2bb.js.map