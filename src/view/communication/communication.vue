<template>
  <div class="communication-wrapper">
    <header class="header" :class="{translateClass:isShow}">
      <section class="msg icon-sec" @click="isShowContact">
        <!--<router-link to="/communication/contact">-->
        <i class="icon-tongxunlu"></i>
        <!--</router-link>-->
      </section>
      <section class="title">
        通讯
      </section>
      <section class="scan icon-sec">
        <i class="icon-saoyisao"></i>
      </section>
    </header>
    <!--搜索-->
    <section class="search" :class="{translateClass:isShow}">
      <mt-search v-model="value"></mt-search>
    </section>
    <!--通讯列表 最近联系人-->
    <article class="recentContacts-box" :class="{translateClass:isShow}" ref="recontactList">
      <div class="slide-body">
        <section class="recentContact" v-for="contact in recentContactsList" @click="intoChat(contact.id)">
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
    <footer-navigator :class="{translateClass:isShow}"></footer-navigator>
    <contact v-show="isShow" @closeContact="isShowContact" ref="contact"></contact>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from '../../components/footer/footer.vue'
  import {Search} from 'mint-ui'
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import Contact from './children/contact.vue'
  Vue.component(Search.name, Search)
  export default {
    data () {
      return {
        isShow: false,
//        isTranslate: false,
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
      'footerNavigator': Footer,
      'contact': Contact
    },
    watch: {},
    methods: {
      _initialBScroll () {
        let Body = this.$refs.recontactList
        if (this.bodyScroll === undefined) {
          this.bodyScroll = new BScroll(Body, {click: true, scrollY: true})
        } else {
          this.bodyScroll.refresh()
        }
      },
      isShowContact () {
        this.isShow = !this.isShow
        if (this.isShow === true) {
          this.$refs.contact.$refs.indexList._initialList()
          this.$nextTick(function () {
            this.$refs.contact._initialBscroll()
          })
        }
      },
//      从最近联系人列表进入某个聊天对话中
      intoChat (id) {
        this.$router.push(`communication/chat/${id}`)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .communication-wrapper
    height 100%
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
      transition all .1s
      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
          &>.icon-saoyisao
            font-size 0
      & > .title
        font-size 18px
    & > .search
      height 1.7rem
      position: fixed
      width 100%
      padding-top 1.17333rem
      background #fff
      transition all .3s
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
      transition all .3s
      & > .slide-body
        padding 0 .36rem
        & > .recentContact
          display flex
          position relative
          padding .24rem .36rem
          font-size 0
          border-bottom 1px solid #f0f0f0
          & > .unready-count
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
          & > .date
            position absolute
            top 40%
            right .2rem
            color #ccc
            font-size 12px
          & > .avator
            flex 0 0 1.17333rem
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
            /*padding .24rem 0*/
            font-size 12px
            & > .contact-name
              width 50%
              display inline-block
              font-size 14px
              margin-bottom .2rem
            & > .contact-msg
              display inline-block
              width 50%
              padding-right .4rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #ccc

  .translateClass
    transition all .3s
    transform translate3d(85%, 0, 0)
</style>
