/**
 * Created by joeng on 2017/6/2.
 */
import {setLoginStorage, setQuesTitleStorage, setQuesContentStorage} from '../config/storage'
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
      state.isLogin = true
    }
  },
  loginOut (state) {
    setLoginStorage(false)
    state.isLogin = false
  }
}
