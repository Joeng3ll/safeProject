/**
 * Created by joeng on 2017/5/12.
 * 请求数据接口 获取各类数据方法
 */
import fetch from '../config/fetch'

export default {
  // 获取新闻
  getNews (newsType) {
    return new Promise((resolve, reject) => {
      fetch.get(`/toutiao/index?type=${newsType}&key=68e5b38d548adabc8b842a2ae29e3d40`).then(res => {
        resolve(res.data.result.data)
      }, () => {
        console.log('request error')
      })
    })
  }
}
