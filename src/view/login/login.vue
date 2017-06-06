<template>
  <div class="login-wrapper">
    <article class="login-box">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </article>
    <aside class="login_btn" @click="login()">
      Login In
    </aside>
    <!--错误信息提示-->
    <section class="err-box">
      {{err}}
    </section>
    <loading ref="loadCpt"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Field} from 'mint-ui'
  import Vue from 'vue'
  import {loginIn} from 'service/getData'
  import store from '../../vuex/index'
  import Loading from '../../components/loading/loading.vue'
  Vue.component(Field.name, Field)
  export default {
    data () {
      return {
        username: '',
        password: '',
        user: {},
        err: ''
      }
    },
    methods: {
      login () {
//        let that = this
        console.log(this)
        this.user.username = this.username
        this.user.password = this.password
        if (this.user.username === '' || this.user.password === '') {
          this.err = '用户名或密码不能为空!!'
          return
        } else {
//          this.$refs.loadCpt.openLoading()
          loginIn(this.user).then((res) => {
            if (res.success === false) {
              this.err = `${res.error}!!`
            } else {
              store.dispatch('login', this.user)
              this.$router.replace('/home')
            }
          }, () => {
            this.err = '网络请求错误'
          })
//          this.$refs.loadCpt.closeLoading()
        }
      }
    },
    components: {
      'loading': Loading
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-wrapper
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    background -moz-linear-gradient(top, rgba(223, 252, 249, 1), rgba(223, 252, 249, 0.1))
    background -o-linear-gradient(top, rgba(223, 252, 249, 1), rgba(223, 252, 249, 0.1))
    background -webkit-linear-gradient(top, rgba(223, 252, 249, 1), rgba(223, 252, 249, 0.1))
    & > .login-box
      position fixed
      top 40%
      width 80%
      left 7%
      padding 3%
      border 2px solid rgba(40, 201, 212, 0.8)
      border-radius .2rem
      color rgba(40, 201, 212, 0.9)
      & > .mint-cell
        background transparent
        & > .mint-cell-wrapper
          background transparent
          & > .mint-cell-value
            & > input
              color rgba(40, 201, 212, 0.9)
              background transparent
    & > .login_btn
      position fixed
      top 65%
      left 6%
      width 80%
      padding .24rem .48rem
      text-align center
      font-size 18px
      border-radius .3rem
      color #fff
      background rgb(240, 60, 107)
    & > .err-box
      position fixed
      top 75%
      width 100%
      font-size 16px
      color red
      text-align center
</style>
