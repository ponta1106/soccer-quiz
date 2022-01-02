import axios from '../../plugins/axios'

const state = {
  users: [],
  authUser: null
}

const getters =  {
  users: state => state.users,
  authUser: state => state.authUser
}

const mutations = {
  setUsers: (state, users) => {
    state.users = users
  },
  setAuthUser: (state, authUser) => {
    state.authUser = authUser
  },
};

const actions = {
  fetchUsers({ commit }) {
    return axios.get('users')
      .then(res => {
        commit('setUsers', res.data)
      })
      .catch(err => {
        console.log(err.response)
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      })
  },
  async loginUser({ commit }, user) {
    const sessionsResponse = await axios.post('sessions', user)
    localStorage.auth_token = sessionsResponse.data.token
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.auth_token}`

    const userResponse = await axios.get('users/me')
    commit('setAuthUser', userResponse.data)
  },
  logoutUser({ commit }) {
    localStorage.removeItem('auth_token')
    axios.defaults.headers.common['Authorization'] = ''
    commit('setAuthUser', null)
  },
  async fetchAuthUser({ commit, state }) {
    if (!localStorage.auth_token) return null
    if (state.authUser) return state.authUser

    const userResponse = await axios.get('users/me')
      .catch((err) => {
        return null
      })
    if (!userResponse) return null

    const authUser = userResponse.data
    if (authUser) {
      commit('setAuthUser', authUser)
      return authUser
    } else {
      commit('setAuthUser', null)
      return null
    }
  },
  updateUser({ commit, state }, user) {
    return axios.patch(`users/${state.authUser.id}`, user)
      .then(res => {
        commit('setAuthUser', res.data)
      })
      .catch(err => {
        console.log(err.response)
        alert('通信に失敗しました。インターネットが繋がっているか確認し、再度実行してください。')
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}