import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Home from './components/Home.vue'
import SuperHeroes from './components/SuperHeroes.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
    component: SuperHeroes,
    path: '/Superheroes'
  }, {
    component: Home,
    path: '/'
  }]
})



const store = new Vuex.Store({
  state: {
    someValue: true
  }
})
const mutations = {
  setBoolean(state, someValue) {
    state.someValue = someValue
  }
}
new Vue({
  render: h => h(App),
  mutations,
  router,
  store,
}).$mount('#app')
