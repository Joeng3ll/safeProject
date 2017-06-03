/**
 * Created by joeng on 2017/6/2.
 */
export default {
  editTitle (context, title) {
    context.commit('editTitle', title)
  },
  editContent (context, content) {
    context.commit('editContent', content)
  },
  editOrginId (context, id) {
    context.commit('editOrginId', id)
  },
  login (context, user) {
    context.commit('login', user)
  }
}
