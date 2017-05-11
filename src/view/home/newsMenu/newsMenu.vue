<template>
  <div class="newsMenu-wrapper" ref="newsMenuWrapper">
    <div class="slide-box">
      <section class="item">
        天下的奇闻
      </section>
      <section class="item">
        天下奇闻
      </section>
      <section class="item">
        天下的的奇闻
      </section>
      <section class="item">
        天下奇闻
      </section>
      <section class="item">
        天下奇闻
      </section>
      <section class="item">
        天下奇闻
      </section>
      <section class="item">
        天下奇闻
      </section>
      <section class="item">
        天下奇闻
      </section>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(() => {
        this.changeMenuWidth()
        this.$nextTick(() => {
          this._initBetterScroll()
        })
      })
    },
    methods: {
      changeMenuWidth () {
        let $slideBox = this.$refs.newsMenuWrapper.getElementsByClassName('slide-box')[0]
        let $slideItem = this.$refs.newsMenuWrapper.getElementsByClassName('item')
        let itemNum = $slideItem.length
        $slideBox.style.width = itemNum * ($slideItem[0].offsetWidth) + 'px'
      },
      _initBetterScroll () {
        if (typeof this.newScroll === 'undefined') {
          this.newScroll = new BScroll(this.$refs.newsMenuWrapper, {scrollX: true})
        } else {
          this.newScroll.refresh()
        }
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
      & > .item
        display inline-block
        padding 0 .35rem 0 0
        font-size 14px
        line-height 1.1733rem
</style>
