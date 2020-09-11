import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/base.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload';
//图片懒加载处理
Vue.use(VueLazyLoad,{
  error:'./assets/img/404.png',
  loading:'./assets/img/loading.svg'
})
//element ui
Vue.use(ElementUI)
Vue.config.productionTip = false
//配置事件总线
let bus = new Vue()
Vue.prototype.$bus = bus
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')