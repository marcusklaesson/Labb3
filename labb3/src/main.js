import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './components/Home.vue'
import SuperHeroes from './components/SuperHeroes.vue'

Vue.use(VueRouter)


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



new Vue({
  render: h => h(App),
  store,
  router

}).$mount('#app')
