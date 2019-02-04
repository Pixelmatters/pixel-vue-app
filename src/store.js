import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    async getPosts(context) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      context.commit('setPosts', posts)
    }
  }
})
