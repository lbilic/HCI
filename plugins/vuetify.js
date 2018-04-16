import Vue from 'vue'
import Vuetify from 'vuetify'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Vuetify)
Vue.use(VueChartkick, {adapter: Chart})