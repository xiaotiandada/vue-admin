// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import locale from 'element-ui/lib/locale/lang/en'

import '@/styles/index.less' // global css

import store from './store'

import '@/icons' // icons
import '@/permission' // permission control

Vue.config.productionTip = false
Vue.use(ElementUI, {
  locale
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
