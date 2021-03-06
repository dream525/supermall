import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  // mutations 唯一的目的就是修改 state 中的状态
  // mutations 中的每一个方法尽可能完成的事情比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload);
  }
}