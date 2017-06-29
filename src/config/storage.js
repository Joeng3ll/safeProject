/**
 * Created by joeng on 2017/6/3.
 */

/*
 * LOGIN_INFO:登录信息 是否登录
 * USER_INFO：登录用户信息
 * WEBIM_INFO:环信登录信息 是否登录
 * USER_ACCOUNT: 用户账户信息
 * CONTACT_INFO:车队通讯录
 * QUES_TITLE:提问问题标题
 * QUES_CONTENT：提问问题内容
 *
 * */
const LOGIN_INFO = 'loginInfo'
const USER_INFO = 'user'
const USER_ACCOUNT = 'userAccount'
const CONTACT_INFO = 'contact'
const QUES_TITLE = 'question_title'
const QUES_CONTENT = 'question_content'
const WEBIM_INFO = 'webIMInfo'

// 是否登录
export function setLoginStorage(isLogin) {
  // 存登录状态时存入当前时间 ms
  let date = new Date().getTime()
  let obj = Object.assign({}, {data: isLogin, time: date})
  console.log(JSON.stringify(obj))
  window.localStorage.setItem(LOGIN_INFO, JSON.stringify(obj))
}
export function getLoginStorage() {
  // 过期时间 7小时
  const expireHour = 7
  // 当前时间 ms
  let newDate = new Date().getTime()
  // 过期时间 ms
  let expireTime = expireHour * 60 * 60 * 1000
  // 取出当前存放登录信息
  let obj = JSON.parse(window.localStorage.getItem(LOGIN_INFO) || '{}')
  // 保存登录信息时的时间
  let oldDate = obj.time ? obj.time : expireTime
  // 比较当前时间与存入时间的时间差和过期时间
  let time = oldDate - newDate
  if (time > expireTime) {
    setLoginStorage(false)
  }
  return JSON.parse(window.localStorage.getItem(LOGIN_INFO) || '{}')
}

//环信是否登录
export function setWEBIMStorage(isLogin) {
  window.localStorage.setItem(WEBIM_INFO, isLogin)
}
export function getWEBIMStorage() {
  return window.localStorage.getItem(WEBIM_INFO || 'false')
}

// 用户信息
export function setUserInfo(user) {
  window.localStorage.setItem(USER_INFO, JSON.stringify(user))
}
export function getUserInfo() {
  let user = '{}'
  return JSON.parse(window.localStorage.getItem(USER_INFO) || user)
}

// 用户账户信息
export function setUserAccount(user) {
  window.localStorage.setItem(USER_ACCOUNT, JSON.stringify(user))
}
export function getUserAccount() {
  return JSON.parse(window.localStorage.getItem(USER_ACCOUNT) || null)
}

//通讯录信息
export function setContact(contactList) {
  let arr = []
  if (contactList instanceof Array) {
    arr = contactList.map(function (item) {
      return {
        id: item.id,
        name: item.name,
        organization: item.organization,
        phone: item.phone,
        tags: item.tags,
        tel: item.tel
      }
    })
  }
  window.localStorage.setItem(CONTACT_INFO, JSON.stringify(arr))
}
export function getContact() {
  return JSON.parse(window.localStorage.getItem(CONTACT_INFO) || '[]')
}

// 问题标题
export function setQuesTitleStorage(value) {
  window.localStorage.setItem(QUES_TITLE, JSON.stringify(value))
}
export function getQuesTitleStorage() {
  if (window.localStorage.getItem(QUES_TITLE) === 'undefined') {
    setQuesTitleStorage(null)
  }
  return JSON.parse(window.localStorage.getItem(QUES_TITLE) || null)
}

// 问题内容
export function setQuesContentStorage(value) {
  window.localStorage.setItem(QUES_CONTENT, JSON.stringify(value))
}
export function getQuesContentStorage() {
  if (window.localStorage.getItem(QUES_CONTENT) === 'undefined') {
    setQuesContentStorage(null)
  }
  return JSON.parse(window.localStorage.getItem(QUES_CONTENT) || null)
}

//移除某个缓存
export function removeQuesItem() {
  window.localStorage.removeItem(QUES_TITLE)
  window.localStorage.removeItem(QUES_CONTENT)
}

