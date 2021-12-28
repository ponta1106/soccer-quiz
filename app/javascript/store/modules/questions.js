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
  },
  updateQuestion: (state, updateQuestion) => {
    const index = state.questions.findIndex(question => {
      return question.id == updateQuestion.id
    })
    state.questions.splice(index, 1, updateQuestion)
  },
  deleteQuestion: (state, deleteQuestion) => {
    state.questions = state.questions.filter(question => {
      return question.id != deleteQuestion.id
    })
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
  updateQuestion({ commit }, question) {
    return axios.patch(`questions/${question.id}`, question)
      .then(res => {
        commit('updateQuestion', res.data)
      })
  },
  deleteQuestion({ commit }, question) {
    return axios.delete(`questions/${question.id}`)
      .then(res => {
        commit('deleteQuestion', res.data)
      })
  }

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
