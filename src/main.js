import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';

import toast from './components/common/toast';

Vue.config.productionTip = false;

// 添加事件总线对象
Vue.prototype.$bus = new Vue();
// 安装 toast 插件
Vue.use(toast);
// 解决移动端点击 300ms 的延迟
FastClick.attach(document.body);
// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
