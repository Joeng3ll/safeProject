<template>
  <div class="accidentRecord-wrapper">
    <header class="header">
      <section class="msg icon-sec">
        <router-link to="/personal" class="icon-box">
          <i class="icon-msnui-menu-left icon"></i>
        </router-link>
      </section>
      <section class="title" @click="test()">
        事故记录
      </section>
      <section class="scan icon-sec">

      </section>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .accidentRecord-wrapper
    min-height 100%
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
      box-shadow .01rem .01rem .01rem #ccc
      & > section
        display inline-block
        line-height 1.1733rem
        &.icon-sec
          padding 0 .48rem
          & > .icon-box
            & > .icon
              color #fff
      & > .title
        font-size 18px

</style>
