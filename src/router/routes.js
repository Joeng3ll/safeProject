/**
 * Created by joeng on 2017/5/10.
 * 配置路由组件
 */
// import APP from '../App.vue'
import Home from 'view/home/home.vue'
import Honor from 'view/home/children/honor'
import Accident from 'view/home/children/accident'
import News from 'view/home/children/news.vue'
import Communication from 'view/communication/communication.vue'
import Interlocution from 'view/interlocution/interlocution.vue'
import Personal from 'view/personal/personal.vue'
import Archives from 'view/personal/archives/archives.vue'
import WorkRecord from 'view/personal/workRecord/workRecord'
import AccidentRecord from 'view/personal/accidentRecord/accidentRecord.vue'
import AccidentDetail from 'view/personal/accidentRecord/accidentDetail.vue'
import ReportAccident from 'view/personal/accidentRecord/reportAccident.vue'
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
import Announce from 'view/announce/announce'
import EveryAnnounce from 'view/announce/children/everyAnnounce'

export default [
  {path: '', redirect: '/home'},
  {path: '/login', component: Login},
  {path: '/home', component: Home},
  // 荣誉
  {
    path: '/honor',
    meta: {
      requireAuth: true
    },
    component: Honor
  },
  // 事故通报
  {
    path: '/accident',
    meta: {
      requireAuth: true
    },
    component: Accident
  },
  {
    path: '/news/:id',
    meta: {
      requireAuth: true
    },
    component: News
  },
  {
    path: '/communication',
    component: Communication,
    // 需要路由验证全县
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: ':id',
        meta: {
          requireAuth: true
        },
        component: ContactProfile
      }
    ]
  },
  // 通讯
  {
    path: '/communication/chat/:id',
    meta: {
      requireAuth: true
    },
    component: Chat
  },
  {
    path: '/interlocution',
    component: Interlocution,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'askTitle',
        meta: {
          requireAuth: true
        },
        component: AskTitle
      },
      {
        path: 'askContent',
        meta: {
          requireAuth: true
        },
        component: AskContent
      },
      {
        path: 'askOrg',
        meta: {
          requireAuth: true
        },
        component: AskOrg
      },
      {
        path: 'qa/:id',
        meta: {
          requireAuth: true
        },
        component: EveryQues
      }
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
      {
        path: 'archives',
        meta: {
          requireAuth: true
        },
        component: Archives
      },
      // 我的考勤记录
      {
        path: 'workRecord',
        component: WorkRecord,
        meta: {
          requireAuth: true
        },
        children: [
          // 工时记录、运程记录、运量记录
          {
            path: 'hourRecord',
            meta: {
              requireAuth: true
            },
            component: hourRecord
          },
          {
            path: 'haulRecord',
            meta: {
              requireAuth: true
            },
            component: haulRecord
          },
          {
            path: 'volumeRecord',
            meta: {
              requireAuth: true
            },
            component: volumeRecord
          },
          {
            path: ':id',
            meta: {
              requireAuth: true
            },
            component: dayAttendance
          }
        ]
      },
      // 我的培训
      {
        path: 'training',
        meta: {
          requireAuth: true
        },
        component: training
      },
      // 我的考试
      {
        path: 'test',
        meta: {
          requireAuth: true
        },
        component: test
      }
    ]
  },
  // 我的事故记录
  {
    path: '/accidentRecord',
    meta: {
      requireAuth: true
    },
    component: AccidentRecord
  },
  // 我的事故详细
  {
    path: '/accidentRecordContent/:id',
    meta: {
      requireAuth: true
    },
    component: AccidentDetail
  },
  // 事故上报
  {
    path: '/reportAccident',
    meta: {
      requireAuth: true
    },
    component: ReportAccident
  },
  // 通知信息
  {
    path: '/announce',
    component: Announce,
    meta: {
      requireAuth: true
    },
    children: []
  },
//  通知消息详情
  {
    path: '/announce/:id',
    component: EveryAnnounce,
    meta: {
      requireAuth: true
    }
  }
]

