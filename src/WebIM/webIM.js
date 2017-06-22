/**
 * Created by joeng on 2017/6/16.
 * webIM 环信
 */
import {setWEBIMStorage, getUserAccount} from '../config/storage'
let conn = new WebIM.connection({
    https: WebIM.config.https,
    apiURL: WebIM.config.apiURL,
    appKey: WebIM.config.appkey,
    url: WebIM.config.xmppURL,
    delivery: WebIM.config.delivery,
    read: WebIM.config.read,
    encrypt: WebIM.config.encrypt,
    isWindowSDK: WebIM.config.isWindowSDK,
    isAutoLogin: WebIM.config.isAutoLogin,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  }
)
/*
 *  注册
 * */
function signIn(username, password) {
  // return new Promise((resolve, reject) => {
  let options = {
    username,
    password,
    nickname: username,
    appKey: WebIM.config.appkey,
    success: function () {
      console.log('signin success')
    },
    error: function (err) {
      console.log(err)
    },
    apiUrl: WebIM.config.apiURL
  }
  conn.registerUser(options)
  // })
}

/*
 * 登录
 * */
function loginIn() {
  // 从缓存中取出已登录用户信息 用户在登录时注册环信 在跳转到home页时登录环信
  let user = getUserAccount()
  let {username, password}=user
  let options = {
    apiUrl: WebIM.config.apiURL,
    user: username,
    pwd: password,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    appKey: WebIM.config.appkey,
    // todo token登录
    // success (token) {
    //   setWEBIMStorage('true')
    //   console.log('login success')
    //   var token = token.access_token
    //   debugger
    //   WebIM.utils.setCookie('webim_' + encryptUsername, token, 1)
    // },
    // accessToken: WebIM.utils.getCookie(),
    success(token){
      window.localStorage.setItem('token', token.access_token)
      console.log('login success' + new Date())
    },
    error(err){
      console.log(err + 'error')
    }
  }
  conn.open(options)
}

/*
 *
 * 使用token登录
 *
 * */
function loginByToken() {
  let user = getUserAccount()
  let token = window.localStorage.getItem('token')
  let options = {
    apiUrl: WebIM.config.apiURL,
    user: user.username,
    accessToken: token,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    appKey: WebIM.config.appkey,
    success: function () {
      console.log('login token success')
    },
    fail: function () {
      console.log('login token error')
    }
  }
  conn.open(options)
}
/*
 * 退出连接
 * */
function close() {
  conn.close()
}

/*
 *  发送文本消息（单聊）
 * */
function sendTextPrivate() {
  var id = conn.getUniqueId();                 // 生成本地消息id
  var msg = new WebIM.message('txt', id);      // 创建文本消息
  msg.set({
    msg: 'message content',                  // 消息内容
    to: "13606711582", // 接收消息对象（用户id）
    roomType: false,
    success: function (id, serverMsgId) {
      console.log('send private text Success');
    },
    fail: function () {
      console.log('error')
    }
  })
  msg.body.chatType = 'singleChat'
  console.log(conn)
  conn.send(msg.body)
}

/*
 * 连接建立时
 * */
function onOpened() {
  conn.setPresence()
  console.log('login success')
  return message
}
/*
 * 收到文本消息
 **/
function onTextMessage(message) {
  debugger
  console.log(message)
}

export {conn, signIn, loginIn, loginByToken, close, sendTextPrivate}
