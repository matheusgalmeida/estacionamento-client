<script lang="ts">
import { defineComponent } from 'vue';
import HomeView from '@/views/HomeView.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomeView,
  },
});

</script>

<template>
<nav>
  <router-link to="/">
    <img alt="Logo" width="24" height="24" src="@/assets/logo.png"/>
  </router-link>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/cadastrarcondutor">Cadastrar Condutor</router-link>
  </div>
  </nav>
<router-view/>
</template>

<style lang="scss">
#app {
  font-family: -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
}

nav {
  background-color:none;
  width: 100%;
  height: 55px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
a {
    font-size: 14px;
    font-weight: 400;
    list-style: none;
    text-decoration: none;
    color: #616161;
    margin-right: 10px;
    margin-left: 10px;
    &.router-link-exact-active {
      color: #35abe1;
    }
}
}
/*Reset css*/
*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  background-color:#1e1f1e;
}


</style>
