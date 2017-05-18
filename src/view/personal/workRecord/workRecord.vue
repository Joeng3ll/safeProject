<template>
  <div class="workRecord-wrapper">
    <header-cpt :text="header.text"></header-cpt>
    <article class="body">
      <!--日历插件开始-->
      <div id="container"></div>
      <!--日历插件结束-->
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/header/header'
  import Calendar from 'mob-calendar'
  import {getAttendanceDays} from 'service/getData'
  //  头部dom组件信息
  const header = {
    text: '我的考勤记录'
  }
  const testObj = [{
    stamp: 1495728000000,
    className: 'calendar-active'
  }, {
    stamp: 1493913600000,
    className: 'calendar-active'
  }]
  export default {
    data () {
      return {
        header,
        attendanceDays: [],
        attendanceDaysFormat: [],
        testObj
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
            container: 'container',
            angle: 6,
            isMask: false,
            beginTime: [],
            endTime: [],
            recentTime: [2017, 5, 18],
            isSundayFirst: true,
            isShowNeighbor: true,
            isToggleBtn: true,
            isChinese: true,
            monthType: 3,
            canViewDisabled: false,
//            初次渲染时给特殊日期指定样式
            beforeRenderArr: this.attendanceDaysFormat,
//           选择某个日子的回调
            success: function (item, arr, cal) {
              console.log(item, arr)
              cal.hideBackground()
            },
//           日历切换后的回调
            switchRender: function (year, month, cal) {
              var data = [{
                'stamp': 1507737600000,
                'className': 'able1'
              }]
              cal.renderCallbackArr(data)
            }
          })
        } else {
          this.calendar.renderCallbackArr(this.attendanceDaysFormat)
        }
      }
    },
    components: {
      'headerCpt': Header
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
    background #fff

  /*日历插件中样式*/
  /*考勤通过的日子*/
  .calendar-active
    background red

  /*不在当前视图中考勤通过的日子*/
  .able1
    background green
</style>
