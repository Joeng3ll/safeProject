/**
 * Created by joeng on 2017/6/2.
 */
import {setStorage, setQuesTitleStorage} from '../config/storage'
export default {
  editTitle (state, title) {
    setQuesTitleStorage(title)
    state.ques = Object.assign(state.ques, {title})
  },
  editContent (state, content) {
    state.ques = Object.assign(state.ques, {content})
  },
  editOrginId (state, id) {
    state.ques = Object.assign(state.ques, {id})
  },
  login (state, user) {
    if (user !== null) {
      setStorage(user.username)
      state.user.username = user.username
    }
  }
}
