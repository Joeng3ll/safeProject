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

import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$http = axios
let vm = new Vue()
//代理地址 测试环境下使用
const BASE_URL = process.env.NODE_ENV === 'development' ? 'driver' : 'http://116.62.40.216:8080'
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
   * 登录
   * */
  var loginIn = (user) => {
    return new Promise((resolve, reject) => {
      let username = user.username
      let password = user.password
      vm.$http.post(`${BASE_URL}/driver/login?username=${username}&password=${password}`).then(res => {
        resolve(res.data)
      })
    }, () => {
      console.log('post error')
    })
  }
  /*
   * 注销登录
   * */
  var loginOut = () => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/driver/logout`).then(res => {
        resolve(res.data)
      })
    }, () => {
      console.log('post error')
    })
  }
  /*
   *  获取驾驶员本人信息
   * */
  var getDriverInfo = () => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/sessioninfo`).then(res => {
        resolve(res.data)
      })
    }, () => {
      console.log('axios error')
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

  /*
   *   获取用户档案信息
   * */
  var getArchives = () => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/contact/public`).then(res => {
        resolve(res.data)
      })
    })
  }

  /*
   *   获取通讯录信息
   * */
  var getContact = (orgId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/contact/org/${orgId}/driver`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  获取上级组织id
   * */
  var getSuperOrgId = (orgId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/${orgId}/supers`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  提交问题
   * */
  var commitQues = (suggestOrgId, title, content) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/qa?suggestOrgId=${suggestOrgId}&title=${title}&content=${content}`).then(res => {
        resolve(res)
      })
    })
  }
  /*
   *  获取问题列表
   * */
  var getQuesList = (type) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/asks?type=${type}`).then(res => {
        resolve(res)
      })
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
  var loginIn = (user) => {
    console.log(process.env.NODE_ENV)
    return new Promise((resolve, reject) => {
      let username = user.username
      let password = user.password
      vm.$http.post(`${BASE_URL}/driver/login?username=${username}&password=${password}`).then(res => {
        resolve(res.data)
      })
    }, () => {
      console.log('post error')
    })
  }

  var getDriverInfo = () => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/sessioninfo`).then(res => {
        resolve(res.data)
      })
    }, () => {
      console.log('axios error')
    })
  }

  var loginOut = () => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/driver/logout`).then(res => {
        resolve(res)
      })
    }, () => {
      console.log('post error')
    })
  }

  var getArchives = () => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/contact/public`).then(res => {
        resolve(res.data)
      })
    })
  }

  var getContact = (orgId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/contact/org/${orgId}/driver`).then(res => {
        resolve(res)
      })
    })
  }

  var getSuperOrgId = (orgId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/${orgId}/supers`).then(res => {
        resolve(res)
      })
    })
  }

  var getQuesList = (type) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/asks?type=${type}`).then(res => {
        resolve(res)
      })
    })
  }

  var commitQues = (suggestOrgId, title, content) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/qa?suggestOrgId=${suggestOrgId}&title=${title}&content=${content}`).then(res => {
        resolve(res)
      })
    })
  }

  var getAttendanceDays = () => mockData(attendance)

  var getHourRecord = () => mockData(hourRecord)

  var getHaulRecord = () => mockData(haulRecord)

  var getVolumeRecord = () => mockData(volumeRecord)
}
export {
  getNews,
  getDriverInfo,
  loginIn,
  loginOut,
  getContact,
  getQuesList,
  getArchives,
  getSuperOrgId,
  commitQues,
  getAttendanceDays,
  getHourRecord,
  getHaulRecord,
  getVolumeRecord
}
