<template>
  <div class="home-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <msg-cmp :msgCount="10"></msg-cmp>
      </section>
      <section class="title">
        首页
      </section>
      <section class="scan icon-sec">
        <i class="icon-saoyisao"></i>
      </section>
    </header>
    <!--新闻导航开始-->
    <nav class="news-nav">
      <news-menu :newsTitleList="newsTitleList" @changeNewsList="changeNewsList"></news-menu>
    </nav>
    <!--新闻导航结束-->
    <article class="body" ref="newsBody">
      <div class="slide-body">
        <mt-loadmore :top-method="loadTop" ref="loadmore">
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
          <!--二级菜单开始-->
          <nav class="nav-wrapper">
            <!--表彰奖励-->
            <section class="nav-item-box">
              <div class="nav-item">
                <div class="icon-box">
                  <i class="icon-iconfontjiangli icon"></i>
                </div>
                <div class="nav-text">
                  <p>表彰奖励</p>
                  <span>honor</span>
                </div>
              </div>
            </section>
            <!--事故通报-->
            <section class="nav-item-box">
              <div class="nav-item">
                <div class="icon-box accident">
                  <i class="icon-jiaotongshigu icon"></i>
                </div>
                <div class="nav-text">
                  <p>事故通报</p>
                  <span>accident</span>
                </div>
              </div>
            </section>
          </nav>
          <!--二级菜单结束-->
          <!--新闻列表开始-->
          <div class="news-list">
            <section class="news-item" v-for="news in newsList">
              <!--新闻主图-->
              <div class="img-box"><img :src="news.thumbnail_pic_s" class="news-img"></div>
              <!--新闻内容-->
              <div class="news-content">
                <p class="news-title">{{news.title}}</p>
                <div class="news-footer">
                  <p class="news-from">{{news.author_name}}</p>
                  <span class="news-date">{{news.date}}</span>
                </div>
              </div>
            </section>
          </div>
          <!--新闻列表结束-->
        </mt-loadmore>
      </div>
    </article>
    <!--loading-->
    <loading ref="loadCpt"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import MsgCmp from '../../components/msgComponent/msgComponent.vue'
  import Loading from '../../components/loading/loading.vue'
  import NewsMenu from './newsMenu/newsMenu.vue'
  import {getNews} from '../../service/getData'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {Loadmore} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore)
  const newsTitleList = ['头条', '社会', '国内', '国际', '娱乐', '体育', '军事', '科技', '财经', '时尚']
  const newsListPY = ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang']
  export default {
    data () {
      return {
        newsTitleList: newsTitleList,
        currentNews: Object,
        newsList: [],
        currentNewsTitle: newsListPY[0],
        allLoaded: false
//        onTopLoaded: false
      }
    },
    created () {
//      this.$refs.loadCpt.openLoading()
      getNews(newsListPY[0]).then((res) => {
        this.newsList = Object.assign(this.newsList, res)
//       不显示已经在banner里出现的新闻
        this.newsList.shift()
        this.currentNews = res[0]
//        this.$nextTick(() => {
//          this._initialBScroll()
//        })
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
        if (typeof this.swiper === 'undefined') {
          this.swiper = new Swiper(this.$refs.swiperContainer, {
            direction: 'horizontal',
            pagination: '.swiper-pagination'
          })
        }
      },
      _initialBScroll () {
        let $newsBody = this.$refs.newsBody
        if (this.bodyScroll === undefined) {
          this.bodyScroll = new BScroll($newsBody, {click: true, scrollY: true})
        } else {
          this.bodyScroll.refresh()
        }
      },
      changeNewsList (newsTitle) {
        this.currentNewsTitle = newsTitle
//        if (this.currentNewsTitle !== newsTitle) {
        this.$refs.loadCpt.openLoading()
//        }
        getNews(newsTitle).then((res) => {
          this.newsList = Object.assign(this.newsList, res)
          this.newsList.shift()
          this.currentNews = res[0]
        }).then(() => {
          this.$refs.loadCpt.closeLoading()
        })
      },
      loadTop () {
        this.changeNewsList(this.currentNewsTitle)
        this.$refs.loadmore.onTopLoaded()
      }
    },
    components: {
      'msgCmp': MsgCmp,
      'newsMenu': NewsMenu,
      'loading': Loading
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
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

    & > .news-nav
      position fixed
      width 100%
      z-index 100
      top 1.1733rem
      background rgb(248, 248, 248)
      box-shadow 0px 0px 5px rgba(0, 0, 0, 0.1)
    & > .body
      width 100%
      top: 2.3466rem
      padding-bottom: 1.30667rem
      padding-top: 2.34rem
      z-index: -1
      background: #fff
      & > .slide-body
        & > .mint-loadmore
          & > .mint-loadmore-content
            & > .news-banner
              width 100%
              height 5.5rem
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
                bottom .4rem
                right .3rem
                z-index 100
                font-size 0
                & > .swiper-pagination-bullet
                  display inline-block
                  padding .08rem
                  background #bbbbbb
                  border-radius 100%
                  &:not(:last-child)
                    margin-right .1rem
                  &.swiper-pagination-bullet-active
                    border-radius 50%
                    background #fff
              & > .news-title
                width 100%
                background rgba(0, 0, 0, 0.4)
                & > .title-text
                  font-size 16px
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  letter-spacing .02rem
                  padding .3rem 1.7rem .3rem .3rem
                  color #f0f0f0
              & > .news-title
                position absolute
                bottom 0

            & > .nav-wrapper
              display flex
              & > .nav-item-box
                flex 1
                text-align center
                border-bottom .01rem solid #dddddd
                & > .nav-item
                  display flex
                  justify-content center
                  padding .2933rem
                  &:first-child
                    border-left .01rem solid #dddddd
                  & > .icon-box
                    padding .2933rem
                    margin-right .2rem
                    background rgb(208, 55, 64)
                    border-radius 50%
                    &.accident
                      background rgb(110, 128, 162)
                    & > .icon
                      font-size 24px
                      color #f0f0f0
                  & > .nav-text
                    display flex
                    flex-direction column
                    justify-content center
                    -webkit-justify-content center
                    align-items center
                    -webkit-align-items center
                    & > p
                      font-size 16px
                    & > span
                      margin-top .1rem
                      color #ccc
            & > .news-list
              & > .news-item
                position relative
                font-size 0
                padding .3733rem .48rem
                &:not(:last-child)
                  border-bottom 1px solid #f0f0f0
                & > .img-box
                  display inline-block
                  width 35%
                  height 2.6125rem
                  & > img
                    display inline-block
                    width 100%
                    height 100%
                & > .news-content
                  vertical-align top
                  width 60%
                  display inline-block
                  padding .1rem 0 0 .24rem
                  & > .news-title
                    font-size 14px
                    letter-spacing .01rem
                    line-height 18px
                  & > .news-footer
                    width 55%
                    font-size 12px
                    color #ccc
                    position absolute
                    display flex
                    align-items center
                    justify-content space-between
                    bottom .40667rem
                    & > .news-from
                      display inline-block
                      width 30%
                      white-space nowrap
                      overflow hidden
                      text-overflow ellipsis
                    & > .news-date
                      float right
</style>

