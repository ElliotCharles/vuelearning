import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchKeyword:'',
    isShow:true,
    capKey:""
  },
  mutations: {
    setKeyword(state,keyword){
        state.searchKeyword = keyword
    },
    setIsShow(state,param){
      state.isShow = param
    },
    setCapKey(state,payload){
      state.capKey = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
