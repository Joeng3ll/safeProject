/**
 * Created by joeng on 2017/5/12.
 * axios get post请求方法
 */
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$http = axios
let vm = new Vue()
//proxyTable代理表中的代理地址
// const configUrl = '/api'
const configUrl = process.env.NODE_ENV === 'production' ? 'http://v.juhe.cn' : 'api'
const driverUrl = 'http://116.62.40.216:8080/'
export default {
  get(url) {
    url = configUrl + url
    return new Promise((resolve, reject) => {
      vm.$http.get(url).then((res) => {
        resolve(res)
      }, (reject) => {
        console.log('axios error')
      })
    })
  }
}
