<template>
  <div class="personal-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <msg-cmp :msgCount="10"></msg-cmp>
      </section>
      <section class="title">
        我
      </section>
      <section class="scan icon-sec">
        <i class="icon-saoyisao"></i>
      </section>
    </header>
    <article class="body">
      <!--我的信息开始-->
      <section class="body-item">
        <img :src="driver.photo" class="avator">
        <div class="personal-card">
          <p class="name">{{driver.realName}}</p>
          <section class="star-level">
            <star :sizeNum="36" :score="driver.star"></star>
          </section>
        </div>
        <i class="icon-iconfontright-copy icon"></i>
      </section>
      <!--我的信息结束-->
      <!--菜单栏开始-->
      <!--我的档案-->
      <router-link to="/personal/archives" class="tab-box">
        <tab :iconClass="archives.iconClass" :text="archives.text" :colorClass="archives.colorClass"
             class="menu-item"></tab>
      </router-link>
      <!--我的考勤记录-->
      <router-link to="/personal/workRecord" class="tab-box">
        <tab :iconClass="workRecord.iconClass" :text="workRecord.text" :colorClass="workRecord.colorClass"
             class="menu-item"></tab>
      </router-link>
      <!--我的事故记录-->
      <router-link to="/accidentRecord" class="tab-box">
        <tab :iconClass="accidentRecord.iconClass" :text="accidentRecord.text" :colorClass="accidentRecord.colorClass"
             class="menu-item"></tab>
      </router-link>
      <!--我的培训-->
      <router-link to="/personal/training" class="tab-box">
        <tab :iconClass="training.iconClass" :text="training.text" :colorClass="training.colorClass"
             class="menu-item"></tab>
      </router-link>
      <!--我的考试-->
      <router-link to="/personal/test" class="tab-box">
        <tab :iconClass="test.iconClass" :text="test.text" :colorClass="test.colorClass" class="menu-item"></tab>
      </router-link>
      <!--注销登录-->
      <div class="loginOut-box" @click="toLoginOut">
        <tab :iconClass="loginOutTab.iconClass" :text="loginOutTab.text" :colorClass="loginOutTab.colorClass"
             class="menu-item loginOut"></tab>
      </div>
      <!--菜单栏结束-->
    </article>
    <footer-navigator></footer-navigator>
    <loading ref="loadCpt"></loading>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Footer from 'components/footer/footer.vue'
  import MsgCmp from 'components/msgComponent/msgComponent.vue'
  import Star from 'components/star/star.vue'
  import Tab from 'components/tab/tab.vue'
  import Store from '../../vuex/index'
  import {getDriverInfo, loginOut} from '../../service/getData'
  import Loading from '../../components/loading/loading.vue'
  const archives = {
    'colorClass': 'green',
    'iconClass': 'icon-dangan',
    'text': '我的档案'
  }
  const workRecord = {
    'colorClass': 'degreen',
    'iconClass': 'icon-kaoqinyuanshijilu',
    'text': '我的考勤记录'
  }
  const accidentRecord = {
    'colorClass': 'red',
    'iconClass': 'icon-trafficaccident',
    'text': '我的事故记录'
  }
  const training = {
    'colorClass': 'purple',
    'iconClass': 'icon-peixun',
    'text': '我的培训'
  }
  const test = {
    'colorClass': 'grew',
    'iconClass': 'icon-kaoshi',
    'text': '我的考试'
  }
  const loginOutTab = {
    'colorClass': 'grew',
    'iconClass': 'icon-jieshu',
    'text': '注销登录'
  }
  export default {
    data () {
      return {
        driver: Object,
        archives,
        workRecord,
        accidentRecord,
        training,
        test,
        loginOutTab
      }
    },
    mounted () {
      this.$refs.loadCpt.openLoading()
      getDriverInfo().then((res) => {
        this.driver = res
//        默认头像 如果照片为空则使用默认头像
        if (this.driver.photo === null) {
          this.driver.photo = 'http://08.imgmini.eastday.com/mobile/20170607/20170607122123_3ca1c7688b197ceb6e91a522153fa95f_1_mwpm_03200403.jpeg'
        }
      }).then(() => {
        this.$refs.loadCpt.closeLoading()
      })
    },
    components: {
      'msgCmp': MsgCmp,
      'star': Star,
      'tab': Tab,
      'footerNavigator': Footer,
      'loading': Loading
    },
    methods: {
      toLoginOut () {
        Store.dispatch('loginOut')
        loginOut()
        this.$router.replace('/home')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personal-wrapper
    position fixed
    top 0
    bottom 0
    width 100%
    left 0
    background #f0f0f0
    & > .header
      position: fixed
      width 100%
      display flex
      justify-content space-between
      height 1.1733rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff

      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
          font-size 0
          & > .icon-saoyisao
            font-size 0
      & > .title
        font-size 18px

    & > .body
      padding-top 1.1733rem
      & > .body-item
        position relative
        padding .28rem .56rem
        margin-top .48rem
        margin-bottom 1rem
        background #fff
        font-size 0
        & > .avator
          display inline-block
          width 1.73333rem
          height 1.73333rem
          border-radius 50%
          margin-right .24rem
          vertical-align top
        & > .personal-card
          display inline-block
          padding .3833rem .1rem
          & > .name
            font-size 16px
            margin-bottom .2rem
          & > .star-level
            & > .text
              font-size 12px
              display inline-block
            & > .star-wrapper
              display inline-block
        & > .icon
          position absolute
          right .48rem
          top 40%
          color #ccc
      & > .tab-box
        display block
        &:nth-child(2n+1)
          margin-top 1rem
        &:nth-child(2n)
          margin-top .2rem

      & > .loginOut-box
        & > .loginOut
          margin-top .5rem
          color #ccc
          & > .icon-box
            background #D8DFE2
          & > .icon-iconfontright-copy
            font-size 0
</style>
