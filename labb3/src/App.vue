<template>
  <div id="app">
    <Home title="The ultimate superhero search"></Home>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/SuperHeroes">SuperHeroes</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import Home from "./components/Home.vue";
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
</style>
