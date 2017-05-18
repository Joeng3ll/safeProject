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
  //  头部dom组件信息
  const header = {
    text: '我的考勤记录'
  }
  export default {
    data () {
      return {
        header
      }
    },
    mounted () {
//  因为和挂载的dom对象有关所以要在mounted生命周期之后
      this._initialCalendar()
    },
    methods: {
      _initialCalendar () {
        if (this.calendar === undefined) {
          this.calendar = new Calendar({
            clickTarget: 'target',
            container: 'container',
            angle: 6,
            isMask: false,
            beginTime: [],
            endTime: [2018, 1, 13],
            recentTime: [2018, 1, 2],
            isSundayFirst: true,
            isShowNeighbor: true,
            isToggleBtn: true,
            isChinese: true,
            monthType: 3,
            canViewDisabled: false,
//            初次渲染时给特殊日期指定样式
            beforeRenderArr: [{
              stamp: 1515686400000,
              className: 'able'
            }],
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
        }
        console.log(this.calendar)
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
    width 100%
    top 0
    left 0
    bottom 0
    background #fff

  /*日历插件中样式*/
  /*考勤通过的日子*/
  .able
    background red

  /*不在当前视图中考勤通过的日子*/
  .able1
    background green
</style>
