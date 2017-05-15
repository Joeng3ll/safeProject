<template>
  <div class="newsMenu-wrapper" ref="newsMenuWrapper">
    <div class="slide-box">
      <div class="center">
        <section class="item" v-for="(title,index) in newsTitleList" @click="changeNewsList(index)"
                 :class="{active:currentIndex===index}">
          {{title}}
        </section>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  const newsListPY = ['top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang']
  export default {
    data () {
      return {
        currentIndex: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.changeMenuWidth()
        this.$nextTick(() => {
          this._initBetterScroll()
        })
      })
    },
    props: ['newsTitleList'],
    methods: {
      changeMenuWidth () {
        let $slideBox = this.$refs.newsMenuWrapper.getElementsByClassName('slide-box')[0]
        let $slideItem = this.$refs.newsMenuWrapper.getElementsByClassName('item')
        let boxWidth = 0
        let slideItem = Array.from($slideItem)
        slideItem.forEach(function (item, index) {
          boxWidth += item.offsetWidth
        })
        $slideBox.style.width = boxWidth + 'px'
      },
      _initBetterScroll () {
        if (typeof this.newScroll === 'undefined') {
          this.newScroll = new BScroll(this.$refs.newsMenuWrapper, {scrollX: true, click: true})
        } else {
          this.newScroll.refresh()
        }
      },
      changeNewsList (newsTitleIndex) {
        if (newsTitleIndex === this.currentIndex) {
          return
        }
        this.$emit('changeNewsList', newsListPY[newsTitleIndex])
        this.currentIndex = newsTitleIndex
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .newsMenu-wrapper
    width 92%
    overflow hidden
    height 1.1733rem
    font-size 0
    margin 0 auto
    & > .slide-box
      height 100%
      margin 0 auto
      word-break: keep-all
      & > .center
        display: flex;
        & > .item
          display inline-block
          padding 0 .35rem 0 0
          font-size 16px
          line-height 1.1733rem
          &.active
            color rgb(213,57,60)
</style>
