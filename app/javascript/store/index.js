import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
  },
  getters: {
    questions: state => state.questions,
  },
  mutations: {
    setQuestions: (state, questions) => {
      state.questions = questions
    },
    addQuestion: (state, question) => {
      state.questions.push(question)
    }
  },
  actions: {
    fetchQuestions({ commit }) {
      return axios.get('questions')
        .then(res => {
          commit('setQuestions', res.data)
        })
        .catch(err => console.log(err.response));
    },
    createQuestion({ commit }, question) {
      return axios.post('questions', question)
        .then(res => {
          commit('addQuestion', res.data)
        })
    },
  }
})