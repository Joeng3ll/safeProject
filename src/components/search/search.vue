<template>
  <div class="search-wrapper">
    <mt-search v-model="value">
    </mt-search>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Search} from 'mint-ui'
  import Vue from 'vue'
  Vue.component(Search.name, Search)
  export default {
    data () {
      return {
        value: ''
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.search-wrapper
  height 1.6rem
  font-size 14px
</style>
