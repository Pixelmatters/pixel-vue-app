import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {

  },
  actions: {
    async getPosts(context) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      context.commit('setPosts', posts)
    }
  }
})
