// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import QS from 'qs'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import Cookies from 'js-cookie'
//播放器相关
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import VueAxios from 'vue-axios'
import tracking from 'tracking'
Vue.use(VueAxios, axios, tracking)
Vue.config.productionTip = false
Vue.use(VideoPlayer)

Vue.prototype.$axios = axios
Vue.prototype.$qs = QS
Vue.use(ElementUI)
Vue.prototype.$cookie = Cookies
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
axios.interceptors.request.use(function (config) {
  var token = Cookies.get('token')
  config.headers['x-auth'] = token
  console.log(token)
  return config
})
axios.interceptors.response.use(function (config) {
  if (config.data.code === 1002) {
    location.href = '/'
  }
  return config
})
