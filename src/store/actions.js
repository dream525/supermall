import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve,reject) => {
      // payload: 新添加的商品
    let oldProduct = null;
    for (let item of context.state.cartList) {
      if (item.iid === payload.iid) {
        oldProduct = item;
      }
    }
    // 判断 oldProduct 是否有值
    if (oldProduct) { // 数量加一
      context.commit(ADD_COUNTER, oldProduct);
      resolve('当前商品数量+1');
    } else { // 添加新的商品
      context.commit(ADD_TO_CART, payload);
      resolve('添加了新的商品');
    }
    })
  }
}