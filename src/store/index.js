import Vue from 'vue'
import Vuex from 'vuex'
import catelog from './modules/catelog'
// import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: name
  },
  mutations: {
    getName(state, info) {
      console.log(state, info);
      state.name = info
      localStorage.setItem('key', state.name)
    }
  },
  getters: {
    getNameByGetters(state) {
      let NameByUser = ''
      NameByUser = state.name
      return NameByUser
    }
  },
  modules: {
    catelog
  },
  // getters
})
export default store
