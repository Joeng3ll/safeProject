/**
 * Created by joeng on 2017/5/10.
 * 配置路由组件
 */
// import APP from '../App.vue'
import Home from '../view/home/home.vue'
import Communication from '../view/communication/communication.vue'
import Interlocution from '../view/interlocution/interlocution.vue'
import Personal from '../view/personal/personal.vue'
// import Login from '../view/login/login.vue'

export default [
  {path: '', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/communication', component: Communication},
  {path: '/interlocution', component: Interlocution},
  {path: '/personal', component: Personal}
]
// export default [
//   {
//     path: '',
//     component: APP,
//     children: [
//       {path: '', redirect: '/home'},
//       {path: '/home', component: Home},
//       {path: '/communication', component: Communication},
//       {path: '/interlocution', component: Interlocution},
//       {path: '/personal', component: Personal}
//     ]
//   }
// ]
