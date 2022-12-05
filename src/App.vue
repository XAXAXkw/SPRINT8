<template>

  <div id="app">

  <IntroView />
   <LogIn />
    <nav>
    <div class="container"><img class="logo" src="./assets/logo.svg" /></div>
    <h1 style="font-size:small;">
      <router-link to="/">Home</router-link> |
     <router-link to="/shipscatalogue/:id">Spaceships Catalogue</router-link>  |</h1>
     <p style="font-size:small;">
      <router-link to="/about">Test Zone</router-link> | 
      <router-link to="/statedata">State DATA</router-link></p>
    </nav>
    <div class="laser2"></div>
    <router-view/> 
  </div>
</template>


<script>

import { mapState, mapActions } from 'vuex';
import LogIn from './components/LogIn.vue'
import IntroView from './views/IntroView.vue'

export default{
  name:'app',
  components:{LogIn, IntroView},
  computed:{
            ...mapState(['SHIPS', 'SWDATA'])
        },
        methods:{
            ...mapActions(['getSwapi'])
        },
  created(){
                this.getSwapi()
        },
        
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.logo{
  width:15em;

}

nav {
  padding: 15px;

}

nav a {
  font-weight: bold;
  color: #3f3f3f9d; 
  text-decoration:none;
}

nav a.router-link-exact-active {
  color:  rgb(203, 255, 222);
  text-shadow: 0px 1px 5px rgb(255, 217, 0);
}
nav a:hover {
  color:#ff0000;
  text-shadow: 0px 1px 5px rgb(255, 103, 103);
}
.laser2{
  border:solid  1px rgb(255, 34, 0);
  box-shadow: 0px 1px 10px rgb(255, 23, 23);
  width:100% !important;
  margin:auto;
}
</style>
