import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex);

// 2.创建 Store 对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload: 新添加的商品
      let oldProduct = null;
      for (const item of state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item;
        }
      }
      // 判断 oldProduct 是否有值
      if (oldProduct) {
        oldProduct.count += 1;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    }
  }
})

// 3.挂载到 vue 实例上
export default store