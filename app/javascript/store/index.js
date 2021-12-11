import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    users
  },
})