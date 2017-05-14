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
  },
  test() {
    return new Promise((resolve, reject) => {
      vm.$http.get('http://music.163.com/api').then((res) => {
        console.log(res)
      }, () => {
        console.log('error')
      })
    })
  }
}
