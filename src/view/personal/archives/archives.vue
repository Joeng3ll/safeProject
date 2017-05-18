<template>
  <div class="archives-wrapper">
    <header-cpt :text="header.text"></header-cpt>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/header/header'
  const header = {
    text: '我的档案'
  }
  export default {
    data () {
      return {
        header
      }
    },
    components: {
      'headerCpt': Header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .archives-wrapper
    position fixed
    top 0
    left 0
    bottom 0
    background #fff
    width 100%
    z-index 101
</style>
