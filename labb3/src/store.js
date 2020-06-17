import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        someValue: 0
    },
    mutations: {
        someValue(state) {
            state.someValue += 1
        }
    },
    actions: {
    },
    modules: {
    }
})