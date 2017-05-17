<template>
  <div class="star-wrapper" :class="size">
    <span v-for="starClass in starList" class="star" :class="{starClass}"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const starOn = 'starOn'
  const starHalf = 'starHalf'
  const starOff = 'starOff'
  const starNum = 5
  export default {
    data () {
      return {
        starList: []
      }
    },
    created () {
      let starListNum = this.starList.length
//      整星
      let onNum = Math.floor(this.score)
      for (let i = 0; i < onNum; i++) {
        this.starList.push(starOn)
      }
//      半星
      let halfNum = Math.floor(this.score * 2) % 2
      if (halfNum === 1) {
        this.starList.push(starHalf)
      }
//      无星
      if (starListNum < starNum) {
        let offNum = starNum - starListNum
        for (let i = 0; i < offNum; i++) {
          this.starList.push(starOff)
        }
      }
    },
    props: ['sizeNum', 'score'],
    computed: {
      size () {
        return `size-${this.sizeNum}`
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .star-wrapper
    &.size-24
      &>.star
        display inline-block
        width .5rem
        height .5rem

</style>
