<template>
  <div class="home-wrapper">
    <header class="header">
      <section class="msg">
        <msg-cmp :msgCount="10"></msg-cmp>
      </section>
      <section class="title">
        首页
      </section>
      <section class="scan">
        <i class="icon-xiaoxi"></i>
      </section>
    </header>
    <!--新闻导航开始-->
    <nav class="news-nav">
      <news-menu :newsTitleList="newsTitleList"></news-menu>
    </nav>
    <!--新闻导航结束-->
    <article class="body">
      <div class="slide-body">
        <!--新闻banner图开始-->
        <aside class="news-banner swiper-container" ref="swiperContainer">
          <!--swiper滑动部分开始-->
          <div class="swiper-wrapper">
            <img :src="currentNews.thumbnail_pic_s" class="swiper-slide news-pic">
            <img :src="currentNews.thumbnail_pic_s02" class="swiper-slide news-pic">
            <img :src="currentNews.thumbnail_pic_s03" class="swiper-slide news-pic">
          </div>
          <!--swiper滑动部分结束-->
          <section class="swiper-pagination"></section><!--swiper分页-->
          <!--新闻标题-->
          <section class="news-title">
            <p class="title-text">{{currentNews.title}}</p>
          </section>
        </aside>
        <!--新闻banner图结束-->
        <!--二级菜单 表彰奖励、事故通报开始-->
        <nav class="nav-wrapper">
          
        </nav>
        <!--二级菜单 表彰奖励、事故通报结束-->
      </div>
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import MsgCmp from '../../components/msgComponent/msgComponent.vue'
  import NewsMenu from './newsMenu/newsMenu.vue'
  import getData from '../../service/getData'
  import Swiper from 'swiper'
  const newsTitleList = ['头条', '社会', '国内', '国际', '娱乐', '体育', '军事', '科技', '财经', '时尚']
  const newsListPY = ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang']
  export default {
    data () {
      return {
        newsTitleList: newsTitleList,
        currentNews: Object
      }
    },
    created () {
      getData.getNews(newsListPY[0]).then((res) => {
        this.currentNews = res[0]
      })
      this.$nextTick(() => {
        this._initialSwiper()
      })
    },
    methods: {
      _initialSwiper () {
//        let $pic = this.$refs.swiperContainer.getElementsByClassName('news-pic')
        let $pic = this.$refs.swiperContainer.getElementsByClassName('swiper-slide')
        let $swipWrapper = this.$refs.swiperContainer.getElementsByClassName('swiper-wrapper')[0]
        let picNum = $pic.length
        $swipWrapper.style.width = picNum * 100 + '%'
        console.log($pic.length)
        if (typeof this.swiper === 'undefined') {
          this.swiper = new Swiper(this.$refs.swiperContainer, {
            direction: 'horizontal',
            pagination: '.swiper-pagination'
          })
        }
      }
    },
    components: {
      'msgCmp': MsgCmp,
      'newsMenu': NewsMenu
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
    & > .header
      display flex
      justify-content space-between
      height 1.1733rem
      padding 0 .48rem
      background rgb(58, 153, 240)
      font-size 0
      color #fff
      & > section
        display inline-block
        line-height 1.1733rem
      & > .title
        font-size 18px
    & > .news-nav
      background rgb(248, 248, 248)
      box-shadow 0px 0px 5px rgba(0, 0, 0, 0.1)
    & > .body
      & > .slide-body
        & > .news-banner
          width 100%
          height 6rem
          position relative
          font-size 0
          overflow hidden
          & > .swiper-wrapper
            width auto
            height 100%
            & > .news-pic
              display inline-block
              height 100%
          & > .swiper-pagination
            position absolute
            bottom .35rem
            right .3rem
            z-index 100
            font-size 0
            & > .swiper-pagination-bullet
              display inline-block
              width .2rem
              height .2rem
              background #bbbbbb
              border-radius 100%
              &:not(:last-child)
                margin-right .1rem
              &.swiper-pagination-bullet-active
                background #fff
          & > .news-title
            width 100%
            background rgba(0, 0, 0, 0.4)
            & > .title-text
              font-size 14px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              padding .3rem 1.7rem .3rem .3rem
            color #fff
          & > .news-title
            position absolute
            bottom 0

</style>
