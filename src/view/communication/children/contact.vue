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
              <i class="icon-Group"></i>
            </div>
            <span class="text">群聊</span>
          </section>
          <!--车队长-->
          <section class="contact-item" v-if="company.chiefDriver===''">
            <p class="index">车队长</p>
            <p class="item-text">
              {{company.chiefDriver}}({{company.chiefDriver.chiefDriverTel}})
            </p>
          </section>
          <section class="contact-item">
            <p class="index">上级组织</p>
            <p class="item-text">
              {{parentOrg.name}}
            </p>
            <p class="item-text second">
              ({{parentOrg.tel}})
            </p>
          </section>
          <!--<section class="contact-item">-->
          <!--<p class="index">维修部</p>-->
          <!--<p class="item-text">-->
          <!--维修部（123243234）-->
          <!--</p>-->
          <!--</section>-->
          <!--维修部-->
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
  import {getContact} from '../../../service/getData'
  import {getUserInfo, setContact} from '../../../config/storage'
  export default {
    data () {
      return {
//          todo 车队长
        chiefLeader: {},
//        车队通讯录
        contactList: [],
//        协会
        association: {},
//        交警
        trafficPolice: {},
//        交警大队领导
        trafficePoliceLeader: {},
//        公司
        company: {},
//        上级组织
        parentOrg: {}
      }
    },
    created () {
      let orgId = getUserInfo().organizationId
      if (orgId) {
        getContact(orgId).then(res => {
          res = res.data
          this.company = res.company
          this.parentOrg = res.parentOrg
          this.contactList = Object.assign(this.contactList, res.drivers)
          setContact(this.contactList)
        })
      }
    },
    methods: {
      closeContact () {
        this.$router.replace('/communication')
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
          & > .contact-item
            & > .index
              line-height 16px
              padding 0 .24rem
              background #f0f0f0
              font-size 12px
              color #989898
            & > .item-text
              padding .36rem
              font-size 16px
              &.second
                padding-top 0
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
