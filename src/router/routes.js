/**
 * Created by joeng on 2017/5/10.
 * 配置路由组件
 */
// import APP from '../App.vue'
import Home from 'view/home/home.vue'
import Communication from 'view/communication/communication.vue'
import Interlocution from 'view/interlocution/interlocution.vue'
import Personal from 'view/personal/personal.vue'
import Archives from 'view/personal/archives/archives.vue'
import WorkRecord from 'view/personal/workRecord/workRecord'
import AccidentRecord from 'view/personal/accidentRecord/accidentRecord.vue'
import training from 'view/personal/training/training.vue'
import test from 'view/personal/test/test.vue'
export default [
  {path: '', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/communication', component: Communication},
  {path: '/interlocution', component: Interlocution},
  {
    path: '/personal',
    component: Personal,
    children: [
      {path: 'archives', component: Archives},
      {path: 'workRecord', component: WorkRecord},
      {path: 'accidentRecord', component: AccidentRecord},
      {path: 'training', component: training},
      {path: 'test', component: test}
    ]
  }
]

