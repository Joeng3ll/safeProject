<template>
  <div class="archives-wrapper">
    <header-cpt :text="header.text"></header-cpt>
    <article class="archives-body">
      <!--基本信息开始-->
      <section class="item">
        <header class="item-header">
          基本信息
        </header>
        <article class="item-body">

        </article>
      </section>
      <!--基本信息结束-->
    </article>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from 'components/header/header'
  import {getArchives} from 'service/getData'
  const header = {
    text: '我的档案'
  }
  export default {
    data () {
      return {
        header
      }
    },
    created () {
      getArchives()
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
