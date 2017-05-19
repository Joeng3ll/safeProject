<template>
  <div class="workRecord-wrapper">
    <header-cpt :text="header.text"></header-cpt>
    <article class="body">
      <!--日历插件开始-->
      <div id="calendar-container"></div>
      <!--日历插件结束-->
      <router-link to="/personal" class="nav-item">
        <tab :text="hourTab.text" :iconClass="hourTab.iconClass" :colorClass="hourTab.colorClass"></tab>
      </router-link>
      <router-link to="/personal" class="nav-item">
        <tab :text="haulTab.text" :iconClass="haulTab.iconClass" :colorClass="haulTab.colorClass"></tab>
      </router-link>
      <router-link to="/personal" class="nav-item">
        <tab :text="haulTab.text" :iconClass="hourTab.iconClass" :colorClass="hourTab.colorClass"></tab>
      </router-link>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/header/header'
  import Calendar from 'mob-calendar'
  import {getAttendanceDays} from 'service/getData'
  import Tab from 'components/tab/tab'
  //  头部dom组件信息
  const header = {
    text: '我的考勤记录'
  }
  //  TAB:我的工时记录
  const hourTab = {
    'iconClass': 'icon-gongshixitong',
    'text': '我的工时记录',
    'colorClass': 'red'
  }
  //  tab:我的运程记录
  const haulTab = {
    'iconClass': 'icon-daoluyunshuhuoyunliang',
    'text': '我的运程记录',
    'colorClass': 'red'
  }
  export default {
    data () {
      return {
        header,
        attendanceDays: [],
        attendanceDaysFormat: [],
        hourTab,
        haulTab
      }
    },
    mounted () {
      getAttendanceDays().then(res => {
        Object.assign(this.attendanceDays, res.attendance_days)
//        Array.map返回的是一个新数组
        this.attendanceDaysFormat = this.attendanceDays.map((item) => {
          return {
            stamp: item,
            className: 'calendar-active'
          }
        })
      }).then(() => {
        //  因为和挂载的dom对象有关所以要在mounted生命周期之后 并且必须在this.attendanceDaysFormat参数被赋值之后，而then()方式可以保证先后顺序
        this._initialCalendar()
      })
    },
    computed: {
//       格式化传入的日期 用来给传入的日期添加特殊的样式
//      attendanceDaysFormat () {
//        let arr = []
//        let len = this.attendanceDays.length
//        console.log(this.attendanceDays, this.attendanceDays.length)
//        for (let i = 0; i < len; i++) {
//          arr.push({
//            'stamp': this.attendanceDays[i],
//            'className': 'calendar-active'
//          })
//          console.log('hehe')
//        }
//        return this.attendanceDays.length
//      }
    },
    methods: {
      _initialCalendar () {
        let _this = this
        console.log(_this.attendanceDaysFormat.length)
        if (this.calendar === undefined) {
          this.calendar = new Calendar({
            clickTarget: 'target',
            container: 'calendar-container',
            angle: 6,
            isMask: false,
            beginTime: [],
            endTime: [],
            recentTime: [2017, 5, 18],
            isSundayFirst: true,
            isShowNeighbor: false,
            isToggleBtn: true,
            isChinese: true,
            monthType: 3,
            canViewDisabled: false,
//            初次渲染时给特殊日期指定样式
            beforeRenderArr: _this.attendanceDaysFormat,
//           选择某个日子的回调
            success: function (item, arr, cal) {
              console.log(_this)
              cal.hideBackground()
            },
//           日历切换后的回调 ?
            switchRender: function (year, month, cal) {
              cal.renderCallbackArr(_this.attendanceDaysFormat)
            }
          })
        }
      }
    },
    components: {
      'headerCpt': Header,
      'tab': Tab
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .workRecord-wrapper
    position fixed
    z-index 101
    width 100%
    top 0
    left 0
    bottom 0
    background #f0f0f0
    font-size 0
    & > .body
      & > #calendar-container
        margin-bottom 1.5rem
      & > .nav-item
        display block
        &:first-child
          margin-top 1rem
        & > .tab-wrapper
          &:nth-child(1)
            margin-top .2rem

  /*日历插件中样式*/
  /*考勤通过的日子*/
  .calendar-active
    color #000
    & > i
      background rgb(248, 153, 74)

  /*不在当前视图中考勤通过的日子*/
  #calendar-container
    & > .calendar-block
      & > .calendar-title
        background #3a99f0
        color #fff
        & > span
          color #fff

  .calendar-item-body li
    background #3a99f0 !important
    font-size 12px
    color #fff !important

  /*日一二三四五六*/
  .calendar-item
    background #3a99f0 !important
    color #f0f0f0 !important
    & > .calendar-item-title span
      font-size 12px
      color #fff !important
</style>
