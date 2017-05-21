<template>
  <page>
    我的工时记录
    <div slot="state-item-one" class="item-box">
      <p class="year">2017<span>年</span></p>
      <p class="month">05<span>月</span><i class="icon-xiangxia"></i></p>
    </div>
    <div slot="state-item-two" class="item-box">
      <p class="item-name">年工时</p>
      <p class="item-content">{{yearHour}}<span>小时</span></p>
    </div>
    <div slot="state-item-three" class="item-box">
      <p class="item-name">月工时</p>
      <p class="item-content">{{monthHour}}<span>小时</span></p>
    </div>
    <!--考勤信息-->
    <article slot="content" class="record-body" ref="hourRecordBody">
      <div class="slide-body">
        <section v-for="day in attendanceDays" class="record-item">
          <header class="date">{{day.date}}</header>
          <div class="item-box">
            <div class="item">
              <span class="icon-box work"><i class="icon icon-shangban"></i></span>
              <span class="title">上班时间</span>
              <span class="time">{{day.work_time}}</span>
            </div>
            <div class="item">
              <span class="icon-box leave"><i class="icon icon-xiaban"></i></span>
              <span class="title">下班时间</span>
              <span class="time">{{day.leave_time}}</span>
            </div>
            <div class="item">
              <span class="icon-box check"><i class="icon icon-gongzuo"></i></span>
              <span class="title">工作时间</span>
              <span class="time">{{day.check_time}}</span>
            </div>
          </div>
        </section>
        <aside class="no-more">
          没有更多了
        </aside>
      </div>
    </article>
  </page>
</template>

<script type="text/ecmascript-6">
  import PageCpt from './pageComponent/pageComponent.vue'
  import {getHourRecord} from 'service/getData'
  import BScroll from 'better-scroll'
  export default {
    /*
     * yearHour:年工时
     * monthHour:月工时
     * attendanceDays:考勤天数
     *
     * */
    data () {
      return {
        yearHour: 0,
        monthHour: 0,
        attendanceDays: []
      }
    },
    created () {
      getHourRecord().then((res) => {
        res = res.transport_record
        this.yearHour = res.year_hour
        this.monthHour = res.month_hour
        this.attendanceDays = Object.assign(this.attendanceDays, res.attendance_days)
        this.$nextTick(() => {
          this._initialBscroll()
        })
      }, (error) => {
        console.log(`ajax error:${error}`)
      })
    },
    methods: {
      _initialBscroll () {
        if (this.hrecordScroll === undefined) {
          this.hrecordScroll = new BScroll(this.$refs.hourRecordBody, {scrollY: true})
          console.log(this.hrecordScroll)
        } else {
          this.hrecordScroll.refresh()
        }
      }
    },
    components: {
      'page': PageCpt
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .item-box
    color #fff
    & > .year
      font-size 12px
      margin-bottom .3rem
      & > span
        margin-left .1rem
        font-size 10px
    & > .month
      font-size 24px
      padding-left .5rem
      & > span
        &:first-child
          margin-left .1rem
          margin-right .2rem
          font-size 12px
      & > .xiangxia
        font-size 12px
    & > .item-name
      font-size 12px
      margin-bottom .3rem
    & > .item-content
      font-size 24px
      padding-left .5rem
      & > span
        margin-left .1rem
        font-size 12px

  .record-body
    position fixed
    width 100%
    top 3.1rem
    bottom 0
    overflow hidden
    & > .slide-body
      padding-bottom .48rem
      & > .record-item
        background #fff
        margin-top .2rem
        & > .date
          padding .24rem .36rem
          color #ccc
          border-bottom 1px solid #f0f0f0
          font-size 12px
        & > .item-box
          padding-bottom .2rem
          & > .item
            padding .24rem .36rem
            color #ccc
            & > .icon-box
              display inline-flex
              width .74667rem
              height .74667rem
              margin-right .2rem
              justify-content center
              align-items center
              border-radius 50%
              font-size .58667rem
              &.work
                background rgb(248, 153, 74)
              &.leave
                background rgb(44, 148, 246)
              &.check
                background rgb(86, 217, 138)
              & > .icon
                color #fff
            & > .title
              font-size 14px
              margin-right .3rem
            & > .time
              font-size 14px
      &>.no-more
        padding .24rem 0
        color #ccc
        text-align center
        font-size 14px
</style>
