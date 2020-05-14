
let Superheroes = Vue.component('Superheroes', {
    template: `
    <div>

    <searchBar></searchBar>

    </div>
    `

})

let Home = Vue.component('home', {
    props: ['mainTitle'],
    template: '<h1>{{ mainTitle }}</h1>'

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
Vue.component('searchBar', {
    computed: {
        searchInfo() {
            return this.$store.state.searchInfo
        }
    },



    data() {

        return {

            hero: [],
            name: '',
            fullname: '',
            strength: '',
            weight: '',
            height: '',
            intelligence: '',
            speed: '',
            durability: '',
            placeOfBirth: '',
            image: ''


        }

    },
    methods: {
        onEnter() {
            this.fetchHeroes()
        },
        fetchHeroes() {

            fetch('https://www.superheroapi.com/api.php/1579352398907728/search/' + this.hero)
                .then(response => response.json())
                .then(result => {
                    this.hero = result
                    this.name = 'Name: ' + this.hero.results[0].name
                    this.fullname = 'Fullname: ' + this.hero.results[0].biography['full-name']
                    this.placeOfBirth = 'Place of birth: ' + this.hero.results[0].biography['place-of-birth']
                    this.strength = 'Strength: ' + this.hero.results[0].powerstats.strength
                    this.speed = 'Speed: ' + this.hero.results[0].powerstats.speed
                    this.durability = 'Durability: ' + this.hero.results[0].powerstats.durability
                    this.intelligence = 'Intelligence: ' + this.hero.results[0].powerstats.intelligence
                    this.weight = 'Weight: ' + this.hero.results[0].appearance.weight[1]
                    this.height = 'Height: ' + this.hero.results[0].appearance.height[1]
                    this.image = this.hero.results[0].image.url
                    this.hero = ''
                })
        }

    },




    template: `
    
    <div>
    <p>{{ searchInfo }}<a href="https://superheroapi.com/ids.html" target="_blank">SuperHeroApi</a></p>
    
    <input v-model="hero" v-on:keyup.enter="onEnter" placeholder="Superhero search">
    <p>{{name}}</p>
    <p>{{fullname}}</p>
    <p>{{placeOfBirth}}</p>
    <p>{{strength}}</p>
    <p>{{speed}}</p>
    <p>{{durability}}</p>
    <p>{{intelligence}}</p>
    <p>{{weight}}</p>
    <p>{{height}}</p>
    <img id="image" :src="image">
    </div>
    `,

})
let state = {
    searchInfo: 'Follow this link to see all superheroes to search for: '

}


let store = new Vuex.Store({
    state

})


new Vue({
    el: '#app',
    router,
    store

})
