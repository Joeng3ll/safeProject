/**
 * Created by joeng on 2017/6/16.
 * webIM 环信
 */
let conn = new WebIM.connection({
  https: WebIM.config.https,
  url: WebIM.config.xmppURL,
  isAutoLogin: WebIM.config.isAutoLogin,
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions
})

/*
 *  注册
 * */
function signIn(username, password) {
  let options = {
    username,
    password,
    nickname: username,
    appKey: WebIM.config.appkey,
    success: function (token) {
      var token = token.access_token
      console.log(token)
      console.log('signin success')
    },
    error: function (err) {
      console.log(err)
    },
    apiUrl: WebIM.config.apiURL
  }
  conn.registerUser(options)
}

/*
 * 登录
 * */
function loginIn(username, password) {
  let options = {
    apiUrl: WebIM.config.apiURL,
    username,
    password,
    appKey: WebIM.config.appkey,
    success (token) {
      console.log('login success')
      var token = token.access_token
      WebIM.utils.setCookie('webim_' + encryptUsername, token, 1)
    },
    error(err){
      console.log(err)
    }
  }
  conn.open(options)
}

export {signIn, loginIn}
