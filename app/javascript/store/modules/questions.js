import axios from '../../plugins/axios.js'

const state = {
  questions: [],
};

const getters = {
  questions: state => state.questions,
};

const mutations = {
  setQuestions: (state, questions) => {
    state.questions = questions
  },
  addQuestion: (state, question) => {
    state.questions.push(question)
  }
};

const actions = {
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
