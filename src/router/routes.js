/**
 * Created by joeng on 2017/5/10.
 * 配置路由组件
 */
import Home from '../view/home.vue'
import Communication from '../view/communication.vue'
import Interlocution from '../view/interlocution.vue'
import Personal from '../view/personal.vue'

export default [
  {path: '', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/communication', component: Communication},
  {path: '/interlocution', component: Interlocution},
  {path: '/personal', component: Personal}
]
