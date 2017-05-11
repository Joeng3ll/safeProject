import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Mode from '../config/env'
Vue.use(Router)

export default new Router({
  mode: Mode,
  routes
})
