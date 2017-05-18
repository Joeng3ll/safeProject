/**
 * Created by joeng on 2017/5/12.
 * 请求数据接口 获取各类数据方法
 */
import driverInfo from './dataTemplate/driver'
import attendance from './dataTemplate/attendance'
import fetch from '../config/fetch'

/*
 * 测试环境下模拟异步请求获取数据
 *
 * */
let mockData = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
/*
 * 如果真实环境则发出真正的请求
 * */


if (process.NODE_ENV === 'development') {
  /*
   *  获取首页新闻
   * */
  var getNews = (newsType) => {
    return new Promise((resolve, reject) => {
      fetch.get(`/toutiao/index?type=${newsType}&key=68e5b38d548adabc8b842a2ae29e3d40`).then(res => {
        resolve(res.data.result.data)
      }, () => {
        console.log('request error')
      })
    })
  }
  /*
   *  获取驾驶员本人信息
   * */
  var getDriverInfo = () => {
    return new Promise((resolve, reject) => {

    })
  }
} else {

  var getNews = (newsType) => {
    return new Promise((resolve, reject) => {
      fetch.get(`/toutiao/index?type=${newsType}&key=68e5b38d548adabc8b842a2ae29e3d40`).then(res => {
        resolve(res.data.result.data)
      }, () => {
        console.log('request error')
      })
    })
  }

  var getDriverInfo = () => mockData(driverInfo)
  var getAttendanceDays = () => mockData(attendance)
}
export {getNews, getDriverInfo, getAttendanceDays}
