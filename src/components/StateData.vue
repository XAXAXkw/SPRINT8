<template>
    <div >
State Data:
<div class="container text-right">
<div class="row border border-secondary rounded rounded-3 m-2 p-2 ">
<h2>A. actions to get swapi</h2>
<p>1. create state with vuex SHIPS SWDATA </p>
<p>2. fill SWDATA & SHIPS  </p>
<p>3. import mapState, mapActions etc. </p>
<div class="container">
<h1 style="color:orange">ok state </h1>
<h2>SHIPS: {{ SHIPS.length }}</h2>
<h3>total: {{ SWDATA.count }}</h3>
</div>
</div>

<div class="laser"></div>



</div>


Display List & pagination:
<div class="container text-right">
<div class="row border border-secondary rounded rounded-3 m-2 p-2 ">
<h2>B. track by ID </h2>
<p>1. create LIST of buttons</p>
<p>2. create CARD component </p>
<p>3. set pagination with :id</p>
<div class="container">
    <h1 style="color:orange">ok state </h1>
<h2>SHIPS: {{ SHIPS.length }}</h2>
<h3>total: {{ SWDATA.count }}</h3>
</div>
</div>

<div class="laser"></div>



</div>



LogIn Module:
<div class="container text-right">
<div class="row border border-secondary rounded rounded-3 m-2 p-2 ">
<h2>C. User and Psswd </h2>
<p>1. create firebase </p>
<p>2. create LOGIN component </p>
<p>3. test inputs & SUBMIT </p>
<div class="container">
    <h1 style="color:black">pending... state </h1>
<h2>SHIPS: {{ SHIPS.length }}</h2>
<h3>total: {{ SWDATA.count }}</h3>
</div>
</div>

<div class="laser"></div>



</div>


Image and Bootstrap:
<div class="container text-right">
<div class="row border border-secondary rounded rounded-3 m-2 p-2 ">
<h2>BOOTSTRAP </h2>
<p>1. check for pics </p>
<p>2. create responsive design </p>
<p>3. Infinite Scroll </p>
<div class="container">
    <h1 style="color:black">pending... state </h1>
<h2>SHIPS: {{ SHIPS.length }}</h2>
<h3>total: {{ SWDATA.count }}</h3>
</div>
</div>

<div class="laser"></div>



</div>


    </div>



    
</template>

<script>

import { mapState, mapActions } from 'vuex';


    export default {
        name:'StateData',
        data(){
            return {} 
        },
        computed:{
            ...mapState(['SHIPS', 'SWDATA'])
        },
        methods:{
            ...mapActions(['getSwapi'])
        }
    }
</script>

<style lang="css" scoped>
.laser{
  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 1px 5px rgb(255, 217, 0);
  width:80%;
  margin:auto;
  margin-top: 25px;
}
div{
    margin:auto;
    width:300px;}
</style>