import Vue from 'vue'
import Vuex from 'vuex'
import catelog from './modules/catelog'
// import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name1: name,
    info: '123',
    count: 1
  },
  mutations: {
    getName(state, info) {
      console.log(state, info);
      state.name1 = info
      localStorage.setItem('key', state.name1)
    },
    // testMutations(state, info) {
    //   console.log(1111, state, info);
    //   state.info = info
    // }
    testMutations(state, payload) {
      console.log(1111, state, payload);
      state.info = payload.amount
      state.count = payload.count
    }
  },
  getters: {
    getLevel(state) {
      if (state.count === 0) {
        return '普通会员'
      } else {
        return '年费会员'
      }
    },
    getNameByGetters(state, info) {
      let NameByUser = ''
      NameByUser = state.name1
      let c = 0
      c += state.count
      return NameByUser, c
    }
  },
  actions: {
    // test(context, info) {
    //   console.log(context, '66666');
    //   context.commit('testMutations', info)
    // }
    test(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('testMutations', payload)
          resolve();
        }, 2000);
      });
    }
  },
  modules: {
    catelog
  },
  // getters
})
export default store
