<template>
  <div class="contact-wrapper">
    <!--遮罩-->
    <div class="mask"></div>
    <!--通讯录内容-->
    <article class="contact-content">
      <header class="header">
        通讯录
      </header>
      <!--搜索-->
      <search class="search"></search>
      <!--通讯录列表-->
      <div class="contact-list" ref="contactList">
        <div class="slide-body">
          <!--群聊-->
          <section class="group-chat">
            <div class="icon-box">
              <i class="icon-wode"></i>
            </div>
            <span class="text">群聊</span>
          </section>
          <div class="contact-list-cpt">
            <index-list :list="contactList" ref="indexList" @intoListProfile="intoProfile"></index-list>
          </div>
        </div>
      </div>
    </article>
    <!--某个联系人详细资料-->
    <!--<router-view></router-view>-->
    <!--通讯录侧栏-->
    <aside class="contact-aside">
      <span class="icon-box" @click="closeContact">
        <i class="icon-tongxunlu"></i>
      </span>
    </aside>
  </div>
</template>

<script type="text/ecmascript-6">
  import Search from 'components/search/search'
  import IndexList from 'components/indexList/indexList'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        contactList: [
          {name: '张三', id: 1}, {name: '李四', id: 2},
          {name: '王五', id: 3}, {name: '赵六', id: 4},
          {name: '李八', id: 5}, {name: '李三', id: 6},
          {name: '王四', id: 7}, {name: '陈二', id: 8},
          {name: '孙一', id: 9}, {name: '钱二', id: 10},
          {name: '吴三', id: 7}, {name: '宋吴', id: 8}
        ]
      }
    },
    methods: {
      closeContact () {
        this.$emit('closeContact')
      },
      _initialBscroll () {
        let Body = this.$refs.contactList
        if (this.bodyScroll === undefined) {
          this.bodyScroll = new BScroll(Body, {click: true, scrollY: true})
        } else {
          this.bodyScroll.refresh()
        }
      },
//      进入某个联系人资料 设置路由
      intoProfile (id) {
        this.$router.push(`/communication/${id}`)
        this.$router
      }
    },
    components: {
      'search': Search,
      'indexList': IndexList
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact-wrapper
    position fixed
    font-size 0
    /*header头部的z-index为100*/
    z-index 100
    width 100%
    top 0
    bottom 0
    left 0
    right 0
    /*    background rgba(7, 17, 27, 0.8)*/
    & > .contact-content
      position relative
      min-height 100%
      z-index 100
      display inline-block
      width 85%
      background #fff
      & > .header
        position fixed
        z-index 100
        width 85%
        height 1.17333rem
        line-height 1.1733rem
        text-align center
        font-size 16px
        color #fff
        background rgb(58, 153, 240)
      & > .search
        margin-top 1.1733rem
      & > .contact-list
        position fixed
        width 85%
        top 2.8rem
        bottom 0
        background #fff
        & > .slide-body
          & > .group-chat
            padding .24rem
            & > .text
              font-size 14px
            & > .icon-box
              display inline-block
              width .88rem
              height .88rem
              line-height .88rem
              margin-right .2rem
              text-align center
              color #fff
              border-radius .1rem
              background palevioletred
    & > .contact-aside
      position relative
      vertical-align top
      display inline-block
      width 15%
      height 100%
      & > .icon-box
        display inline-block
        position fixed
        z-index: 100
        top .2rem
        right .40rem
        color #fff
    & > .mask
      position fixed
      z-index 100
      top 0
      bottom 0
      left 0
      right 0
      background rgba(7, 17, 27, 0.8)
</style>
