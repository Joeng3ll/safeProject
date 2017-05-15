<template>
  <div class="loading-wrapper" v-show="isShow">
  </div>
</template>

<script type="text/ecmascript-6">
  import {Indicator} from 'mint-ui'
  export default {
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      openLoading () {
        this.isShow = true
        Indicator.open({
          text: '加载中...',
          spinnerType: 'double-bounce'
        })
      },
      closeLoading () {
        this.isShow = false
        Indicator.close()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loading-wrapper
    position fixed
    top 1.1733rem
    left 0
    width 100%
    bottom 0
    background rgba(255, 255, 255, 0.2)
</style>
