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
import dayAttendance from 'view/personal/workRecord/dayAttendance'
import ContactProfile from 'view/communication/children/contactProfile'
import Chat from 'view/communication/children/chat'
import AskTitle from 'view/interlocution/children/askTitle'
import AskContent from 'view/interlocution/children/askContent'
import AskOrg from 'view/interlocution/children/askOrg'
import EveryQues from 'view/interlocution/children/everyQues'
import Login from 'view/login/login'

export default [
  {path: '', redirect: '/home'},
  {path: '/login', component: Login},
  {path: '/home', component: Home},
  {
    path: '/communication',
    component: Communication,
    // 需要路由
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: ':id',
        component: ContactProfile
      },
      {
        path: 'chat/:id',
        component: Chat
      }
    ]
  },
  {
    path: '/interlocution',
    component: Interlocution,
    meta: {
      requireAuth: true
    },
    children: [
      {path: 'askTitle', component: AskTitle},
      {path: 'askContent', component: AskContent},
      {path: 'askOrg', component: AskOrg},
      {path: 'qa/:id', component: EveryQues}
    ]
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      requireAuth: true
    },
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
          {path: 'volumeRecord', component: volumeRecord},
          {path: ':id', component: dayAttendance}
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

