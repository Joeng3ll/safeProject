// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './config/rem'
import './common/stylus/index.styl'
import store from './vuex/index'
import {getLoginStorage} from './config/storage'
Vue.config.productionTip = false
if (window.location.protocol === 'file:' || window.location.port === '8080') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let isLogin = getLoginStorage()
    // 检查登录信息 是否登录
    if (isLogin !== 'true') {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
