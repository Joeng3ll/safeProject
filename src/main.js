// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './config/rem'
import './common/stylus/index.styl'
// import cordova from 'vue-cordova'
// import Qscode from 'qrcode-reader'
Vue.config.productionTip = false
// Vue.use(cordova)
// console.log(Vue.cordova)
// console.log(Qscode)
/* eslint-disable no-new */
if (window.location.protocol === 'file:' || window.location.port === '8080') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
new Vue({
  router,
  render: h => h(App),
  data () {
    return {
      cordova: Vue.cordova
    }
  }
}).$mount('#app')

