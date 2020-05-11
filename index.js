
let Superheroes = Vue.component('Superheroes', {
    template: `
    <div>
    <search></search>

    </div>
    `

})

let Home = Vue.component('home', {
    template: '<h1>Home</h1>'
})

let router = new VueRouter({
    routes: [{
        component: Superheroes,
        path: '/Superheroes'
    }, {
        component: Home,
        path: '/'
    }]
})
Vue.component('search', {
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        onEnter() {
            this.msg = 'funkar?'
        }
    },
    template: '<input :value="msg" v-on:keyup.enter="onEnter" placeholder="Superhero search">'
})

new Vue({

    el: '#app',
    router
})





// new Vue({
//     created() {
//         this.search()
//     },
//     data: {
//         joke: 'Laddar ett skämt',
//         data: { msg: '' }
//     },
//     methods: {
//         search: function () {
//             fetch('https://icanhazdadjoke.com/', {
//                 headers: {
//                     // Request JSON
//                     Accept: 'application/json'
//                 }
//             })
//                 .then(response => response.json())
//                 .then(result => {
//                     this.joke = result.joke
//                 })
//         },
//         onEnter: function () {
//             this.msg = 'on enter event';
//         }
//     },


//     el: '#app',
//     router
// })

