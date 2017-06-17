/**
 * Created by joeng on 2017/6/2.
 */
import {setLoginStorage, setQuesTitleStorage, setQuesContentStorage, setUserAccount} from '../config/storage'
import {signIn} from '../WebIM/webIM'
export default {
  editTitle (state, title) {
    let obj = {title}
    setQuesTitleStorage(obj)
    state.ques = Object.assign(state.ques, {title})
  },
  editContent (state, content) {
    let obj = {content}
    setQuesContentStorage(obj)
    state.ques = Object.assign(state.ques, {content})
  },
  editOrginId (state, id) {
    state.ques = Object.assign(state.ques, {id})
  },
  // 登录和注销时同时取消localstorage中和vuex中的信息
  login (state, user) {
    if (user !== null) {
      setLoginStorage(true)
      setUserAccount(user)
      // 环信注册 todo 根据data类型来判断错误类型 是重复注册还是为注册成功
      signIn(user.username, user.password)
    }
  },
  loginOut (state) {
    window.localStorage.clear()
  }
}
