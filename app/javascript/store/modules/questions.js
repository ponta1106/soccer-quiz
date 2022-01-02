import axios from '../../plugins/axios.js'

const state = {
  questions: [],
  isLoading: true,
};

const getters = {
  questions: state => state.questions,
  isLoading: state => state.isLoading,
};

const mutations = {
  setQuestions: (state, questions) => {
    state.questions = questions
  },
  loadingStatus: (state, result) => {
    state.isLoading = result
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
        commit ('loadingStatus', true)
        commit('setQuestions', res.data)
        commit ('loadingStatus', false)
      })
      .catch(err => {
        console.log(err.response)
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      })
  },
  createQuestion({ commit }, question) {
    return axios.post('questions', question)
      .then(res => {
        commit ('loadingStatus', true)
        commit('addQuestion', res.data)
        commit ('loadingStatus', false)
      })
      .catch(err => {
        console.log(err.response)
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      })
  },
  updateQuestion({ commit }, question) {
    return axios.patch(`questions/${question.id}`, question)
      .then(res => {
        commit ('loadingStatus', true)
        commit('updateQuestion', res.data)
        commit ('loadingStatus', false)
      })
      .catch(err => {
        console.log(err.response)
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      })
  },
  deleteQuestion({ commit }, question) {
    return axios.delete(`questions/${question.id}`)
      .then(res => {
        commit ('loadingStatus', true)
        commit('deleteQuestion', res.data)
        commit ('loadingStatus', false)
      })
      .catch(err => {
        console.log(err.response)
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
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
