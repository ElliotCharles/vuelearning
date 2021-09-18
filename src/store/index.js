import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchKeyword:'',
    isShow:true
  },
  mutations: {
    setKeyword(state,keyword){
        state.searchKeyword = keyword
    },
    setIsShow(state,param){
      state.isShow = param
    }
  },
  actions: {
  },
  modules: {
  }
})
