// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/zTreeStyle/zTreeStyle.css'
// import '@/assets/css/zTreeStyle.css'
import '@/assets/js/jquery-1.4.4.min.js'
import '@/assets/js/jquery.ztree.core.min.js'
import '@/assets/js/jquery.ztree.excheck.min.js'
import '@/assets/js/jquery.ztree.exedit.min.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
