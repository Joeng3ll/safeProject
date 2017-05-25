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
          <span class="unready-count">{{contact.unready.length}}</span>
          <img :src="contact.pic" class="avator">
          <div class="contact-box">
            <p>{{contact.name}}</p>
            <p>{{contact.unready[contact.unready.length-1]}}</p>
          </div>
          <span>{{contact.lastDate}}</span>
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
</style>
