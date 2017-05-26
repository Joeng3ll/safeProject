<template>
  <div class="communication-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <i class="icon-tongxunlu"></i>
      </section>
      <section class="title">
        通讯
      </section>
      <section class="scan icon-sec">
        <i class="icon-saoyisao"></i>
      </section>
    </header>
    <!--搜索-->
    <section class="search">
      <mt-search v-model="value"></mt-search>
    </section>
    <!--通讯列表 最近联系人-->
    <article class="recentContacts-box" ref="recontactList">
      <div class="slide-body">
        <section class="recentContact" v-for="contact in recentContactsList">
          <span class="unready-count" v-if="contact.unready.length>0">{{contact.unready.length}}</span>
          <img :src="contact.pic" class="avator">
          <div class="contact-box">
            <p class="contact-name">{{contact.name}}</p>
            <span class="contact-msg">{{contact.unready[contact.unready.length-1]}}</span>
          </div>
          <span class="date">{{contact.lastDate}}</span>
        </section>
      </div>
    </article>
    <!--footer-->
    <footer-navigator></footer-navigator>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '../../components/footer/footer.vue'
  import {Search} from 'mint-ui'
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  Vue.component(Search.name, Search)
  export default {
    data () {
      return {
        value: '',
        recentContactsList: [
          {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: []
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['无：呵呵呵呵呵呵呵呵呵呵呵呵呵呵', 'mmmm', '无：呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵饿电视里看到发生纠纷']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }, {
            id: 1111,
            pic: 'http://08.imgmini.eastday.com/mobile/20170518/20170518092658_4954e954900ab71c12a7910df7323870_1_mwpm_03200403.jpeg',
            name: '杨玲利',
            lastMsg: 'hello',
            lastDate: '昨天',
            unready: ['heelo', 'mmmm', 'lll']
          }
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initialBScroll()
      })
    },
    components: {
      'footerNavigator': Footer
    },
    methods: {
      _initialBScroll () {
        let Body = this.$refs.recontactList
        if (this.bodyScroll === undefined) {
          this.bodyScroll = new BScroll(Body, {click: true, scrollY: true})
        } else {
          this.bodyScroll.refresh()
        }
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .communication-wrapper
    & > .header
      display flex
      justify-content space-between
      position fixed
      z-index 100
      width 100%
      height 1.1733rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff

      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
      & > .title
        font-size 18px
    & > .search
      height 1.7rem
      position: fixed
      width 100%
      padding-top 1.17333rem
      background #fff
      & > .mint-search
        & > .mint-searchbar
          &.mint-searchbar-cancel
            color rgb(58, 153, 240) !important
    & > .recentContacts-box
      position fixed
      top 2.8733rem
      bottom 1.30667rem
      left 0
      right 0
      overflow: hidden
      background #fff
      & > .slide-body
        padding 0 .36rem
        & > .recentContact
          display flex
          position relative
          padding .24rem .36rem
          font-size 0
          border-bottom 1px solid #f0f0f0
          &>.unready-count
            position absolute
            top 50%
            margin-top -.2rem
            margin-left -.6rem
            display inline-block
            width .4rem
            height .4rem
            line-height .4rem
            font-size 12px
            float left
            text-align center
            color #fff
            background red
            border-radius 100%
          &>.date
            position absolute
            top 40%
            right .2rem
            color #ccc
            font-size 12px
          & > .avator
            width 1.17333rem
            height 1.17333rem
            margin-right .2rem
            border-radius 50%
            display inline-block
          & > .contact-box
            flex 1
            flex-direction column
            -webkit-flex-direction column
            justify-content center
            -webkit-justify-content center
            padding .24rem 0
            font-size 12px
            &>.contact-name
              width 100%
              display inline-block
              font-size 14px
              margin-bottom .2rem
            &>.contact-msg
              display inline-block
              width 50%
              padding-right .4rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #ccc
</style>
