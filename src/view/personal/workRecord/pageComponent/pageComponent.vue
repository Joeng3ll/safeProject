<template>
  <div class="headerComponent-wrapper">
    <header class="header">
      <router-link to="/personal/workRecord">
        <i class="icon-left icon-msnui-menu-left"></i>
      </router-link>
      <p class="text">
        <slot></slot>
      </p>
    </header>
    <aside class="state-wrapper">
      <section class="state-item">
        <slot name="state-item-one"></slot>

      </section>
      <section class="state-item">
        <slot name="state-item-two"></slot>
      </section>
      <section class="state-item">
        <slot name="state-item-three"></slot>
      </section>
    </aside>
    <slot name="content"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerComponent-wrapper
    position fixed
    width 100%
    top 0
    left 0
    bottom 0
    background #f0f0f0
    & > .header
      position relative
      width 100%
      height 1.17333rem
      line-height 1.17333rem
      background rgb(58, 153, 240)
      text-align center
      color #fff
      & > a
        color #fff
        & > .icon-left
          position absolute
          left .48rem
      & > .text
        font-size 18px
        display inline
    & > .state-wrapper
      padding .36rem 0
      background rgb(58, 153, 240)
      font-size 0
      & > .state-item
        display inline-block
        width 33%
        text-align center
        &:not(:last-child)
          border-right 1px solid #fff
</style>
