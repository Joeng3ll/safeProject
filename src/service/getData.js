/**
 * Created by joeng on 2017/5/12.
 * 请求数据接口 获取各类数据方法
 */
import driverInfo from './dataTemplate/driver'
import attendance from './dataTemplate/attendance'
import hourRecord from './dataTemplate/hourRecord'
import haulRecord from './dataTemplate/haulRecord'
import fetch from '../config/fetch'
import volumeRecord from './dataTemplate/volumeRecord'

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


if (process.env.NODE_ENV !== 'development') {
  console.log('product')
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
  /*
   *获取 我的工时记录
   * */
  var getHourRecord = () => {
    return new Promise((resolve, reject) => {

    })
  }
  /*
   *获取我的运程记录
   * */
  var getHourRecord = () => {
    return new Promise((resolve, reject) => {

    })
  }
  /*
   * 获取指定id联系人信息
   * */
  var getContactProfile = (id) => {
    return new Promise((resolve, reject) => {

    })
  }
} else {
  console.log('development')
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

  var getHourRecord = () => mockData(hourRecord)

  var getHaulRecord = () => mockData(haulRecord)

  var getVolumeRecord = () => mockData(volumeRecord)
}
export {getNews, getDriverInfo, getAttendanceDays, getHourRecord, getHaulRecord, getVolumeRecord}
