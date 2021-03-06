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
   *  获取首页新闻(公共API，测试用)
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
   *  服务器获取新闻
   * */
  var getNewsT = (newsType) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/announcement/app/list/${newsType}`).then(res => {
        resolve(res)
      })
    }, () => {
      console.log('网络请求错误')
    })
  }

  /*
   * 获取某条新闻
   * */
  var getNewsContent = (id) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/announcement/app/${id}`).then(res => {
        resolve(res)
      })
    }, () => {
      console.log('网络请求错误')
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
   *   获取驾驶员档案信息
   * */
  var getArchives = (driverId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/driver/app/${driverId}`).then(res => {
        resolve(res)
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

  /*
   *  查看问题详情
   * */
  var getQuesMore = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/ask/${ques_id}`).then((res) => {
        resolve(res)
      })
    })
  }

  /*
   * 获取问题回答列表
   * */
  var getQuesAs = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/ask/${ques_id}/answers`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  回答问题
   * */
  var postQuesAs = (ques_id, content) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/qa/${ques_id}/answer?content=${content}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  删除问题
   * */
  var deleteQues = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.delete(`${BASE_URL}/qa/${ques_id}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  设为结帖
   * */
  var closeQues = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.put(`${BASE_URL}/qa/${ques_id}/close`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   * 删除回答
   * */
  var deleteAs = (answerId) => {
    return new Promise((resolve, reject) => {
      vm.$http.delete(`${BASE_URL}/qa/answer/${answerId}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  标记回答为采纳
   * */
  var recommendAs = (answerId) => {
    return new Promise((resolve, reject) => {
      vm.$http.put(`${BASE_URL}/qa/answer/${answerId}/recommend`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  上班打卡
   * */
  var checkIn = (driverId, carNo) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/attendance/checkIn/driverId=${driverId}&carNo=${carNo}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  下班打卡
   * */
  var checkOut = (driverId, carNo) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/attendance/checkOut/driverId=${driverId}&carNo=${carNo}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  考勤记录
   * */
  var getAttendance = (driverId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/attendance/list?driverId=${driverId}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  发送消息
   * */
  var sendMsg = (senderId, receiverId, content) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}//communication/make/${senderId}/${receiverId}?content=${content}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  接收消息
   * */
  var receiveMsg = (senderId, receiverId) => {
    return new Promise((resolve, reject) => {

    })
  }

  /*
   *  获取事故上报所需信息
   * */
  var getAccidentType = (driverId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/compensation/report?driverId=${driverId}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  事故上报
   * */
  var reportAccident = (accident) => {
    // let str = JSON.stringify(accident)
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/compensation/report`, {params: accident}).then(res => {
        resolve(res)
      })
    })
  }

  /*
   * 我的事故记录 todo 分页
   * */
  var getAccidentRecord = (driverId, status) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/compensation/${driverId}/list?status=${status}`).then(res => {
        resolve(res)
      })
    })
  }

  /*
   *  获取某条事故记录
   * */
  var getAccidentById = (compensationId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/compensation/${compensationId}/detail`).then(res => {
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

  var getNewsT = (newsType) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/announcement/app/list/${newsType}`).then(res => {
        resolve(res)
      })
    }, () => {
      console.log('网络请求错误')
    })
  }

  var getNewsContent = (id) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/announcement/app/${id}`).then(res => {
        resolve(res)
      })
    }, () => {
      console.log('网络请求错误')
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

  var getArchives = (driverId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/driver/app/${driverId}`).then(res => {
        resolve(res)
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

  var getQuesMore = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/ask/${ques_id}`).then((res) => {
        resolve(res)
      })
    })
  }

  var getQuesAs = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/qa/ask/${ques_id}/answers`).then(res => {
        resolve(res)
      })
    })
  }

  var postQuesAs = (ques_id, content) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/qa/ask/${ques_id}/answer?content=${content}`).then(res => {
        resolve(res)
      })
    })
  }

  var deleteQues = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.delete(`${BASE_URL}/qa/${ques_id}`).then(res => {
        resolve(res)
      })
    })
  }

  var closeQues = (ques_id) => {
    return new Promise((resolve, reject) => {
      vm.$http.put(`${BASE_URL}/qa/${ques_id}/close`).then(res => {
        resolve(res)
      })
    })
  }

  var deleteAs = (answerId) => {
    return new Promise((resolve, reject) => {
      vm.$http.delete(`${BASE_URL}/qa/answer/${answerId}`).then(res => {
        resolve(res)
      })
    })
  }

  var recommendAs = (answerId) => {
    return new Promise((resolve, reject) => {
      vm.$http.put(`${BASE_URL}/qa/answer/${answerId}/recommend`).then(res => {
        resolve(res)
      })
    })
  }

  var checkIn = (driverId, carNo) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/attendance/checkIn/driverId=${driverId}&carNo=${carNo}`).then(res => {
        resolve(res)
      })
    })
  }

  var checkOut = (driverId, carNo) => {
    return new Promise((resolve, reject) => {
      vm.$http.post(`${BASE_URL}/attendance/checkOut/driverId=${driverId}&carNo=${carNo}`).then(res => {
        resolve(res)
      })
    })
  }

  var getAttendance = (driverId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/attendance/list?driverId=${driverId}`).then(res => {
        resolve(res)
      })
    })
  }

  var sendMsg = (senderId, receiverId, content) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}//communication/make/${senderId}/${receiverId}?content=${content}`).then(res => {
        resolve(res)
      })
    })
  }

  var getAccidentType = (driverId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/compensation/report?driverId=${driverId}`).then(res => {
        resolve(res)
      })
    })
  }

  var reportAccident = (accident) => {
    return new Promise((resolve, reject) => {
      //`${BASE_URL}/compensation/report`
      vm.$http({
        url: `${BASE_URL}/compensation/report`,
        method: 'post',
        data: accident,
        transformRequest: [
          function (data) {
            //遍历accident对象中的可枚举属性
            let str = ''
            for (let item in data) {
              str += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
            }
            return str
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        resolve(res)
      })
    })
  }

  var getAccidentRecord = (driverId, status) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/compensation/${driverId}/list?status=${status}`).then(res => {
        resolve(res)
      })
    })
  }

  var getAccidentById = (compensationId) => {
    return new Promise((resolve, reject) => {
      vm.$http.get(`${BASE_URL}/compensation/${compensationId}/detail`).then(res => {
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
  getNewsT,
  getNewsContent,
  getDriverInfo,
  loginIn,
  loginOut,
  getContact,
  getQuesList,
  getQuesAs,
  postQuesAs,
  deleteQues,
  closeQues,
  deleteAs,
  recommendAs,
  checkIn,
  checkOut,
  sendMsg,
  getAttendance,
  getArchives,
  getSuperOrgId,
  commitQues,
  getQuesMore,
  getAttendanceDays,
  getHourRecord,
  getHaulRecord,
  getVolumeRecord,
  getAccidentType,
  reportAccident,
  getAccidentRecord,
  getAccidentById
}
