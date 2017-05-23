<template>
  <page>
    {{this.$route}}
    <div slot="state-item-one" class="item-box">
    </div>
    <div slot="state-item-two" class="item-box">
    </div>
    <div slot="state-item-three" class="item-box">
    </div>
    <!--考勤信息-->
    <article slot="content" class="record-body" ref="haulRecordBody">
      <div class="slide-body">
        <section v-for="day in attendanceDays" class="record-item">
          <header class="date">{{day.date}}</header>
          <div class="item-box">
            <div class="item">
              <span class="icon-box work"><i class="icon icon-licheng"></i></span>
              <span class="title">日运程</span>
              <span class="time">{{day.day_haul}}</span>
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
//  import {getHaulRecord} from 'service/getData'
  import BScroll from 'better-scroll'
  export default {
    /*
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
//      getHaulRecord().then((res) => {
//        res = res.transport_record
//        this.yearHour = res.year_haul
//        this.monthHour = res.month_haul
//        this.attendanceDays = Object.assign(this.attendanceDays, res.attendance_days)
//        this.$nextTick(() => {
//          this._initialBscroll()
//        })
//      }, (error) => {
//        console.log(`ajax error:${error}`)
//      })
    },
    methods: {
      _initialBscroll () {
        if (this.hrecordScroll === undefined) {
          this.hrecordScroll = new BScroll(this.$refs.haulRecordBody, {scrollY: true})
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
                font-size 12px
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
