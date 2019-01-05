import Vue from 'vue'
import Vuex from 'vuex'
// 用户相关
import users from './modules/users'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    users
  }
})
export default store
