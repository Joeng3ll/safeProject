/**
 * Created by joeng on 2017/6/2.
 */
import {setStorage, setQuesTitleStorage, setQuesContentStorage} from '../config/storage'
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
  login (state, user) {
    if (user !== null) {
      setStorage(user)
      state.user = user
    }
  },
  loginOut (state) {
    setStorage(null)
    state.user = null
  }
}
