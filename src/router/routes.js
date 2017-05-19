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
import hourRecord from 'view/personal/workRecord/hourRecord'
import haulRecord from 'view/personal/workRecord/haulRecord'
import volumeRecord from 'view/personal/workRecord/volumeRecord'

export default [
  {path: '', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/communication', component: Communication},
  {path: '/interlocution', component: Interlocution},
  {
    path: '/personal',
    component: Personal,
    children: [
      // 我的档案
      {path: 'archives', component: Archives},
      // 我的考勤记录
      {
        path: 'workRecord',
        component: WorkRecord,
        children: [
          // 工时记录、运程记录、运量记录
          {path: 'hourRecord', component: hourRecord},
          {path: 'haulRecord', component: haulRecord},
          {path: 'volumeRecord', component: volumeRecord}
        ]
      },
      // 我的事故记录
      {path: 'accidentRecord', component: AccidentRecord},
      // 我的培训
      {path: 'training', component: training},
      // 我的考试
      {path: 'test', component: test}
    ]
  }
]

