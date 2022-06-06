import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { ApmVuePlugin } from '@elastic/apm-rum-vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);



const routes = []
const router = new VueRouter({
      // 配置URL和组价直接的映射关系
      routes,
      // history模式 
      mode: 'history'
  })
  // 将router对象传入到vue实例中

Vue.use(ApmVuePlugin, {
  router,
  config: {
    serviceName: 'app-name',
    // serverUrl:'http://localhost:9200'
    // agent configuration
  }})
new Vue({
  render: h => h(App),
}).$mount('#app')
