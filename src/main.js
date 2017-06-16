// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './config/rem'
import './common/stylus/index.styl'
import {loginIn} from './WebIM/webIM'
// import {getDriverInfo} from 'service/getData'
// import {loginAgain} from './config/mUtils'
import store from './vuex/index'
import {getLoginStorage} from './config/storage'
Vue.config.productionTip = false
if (window.location.protocol === 'file:' || window.location.port === '8080') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
loginIn('yll', 'zz')
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 由于localStorage中保存的是string类型 所以转换成布尔值 方便比较
    let isLogin = !!getLoginStorage()
    // let user = null
    // getDriverInfo().then(res => {
    //   user = Object.assign({}, res)
    // }).then(() => {
    //   if (isLogin === false) {
    //     next('/login')
    //   } else if (isLogin === true && user.userId === -1) {
    //     loginAgain()
    //     next()
    //   } else {
    //     next()
    //   }
    // })
    if (isLogin === false) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
