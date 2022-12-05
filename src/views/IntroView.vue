<template>
<div v-if="intro" @click="(intro=false)">


 <h1 class="byline" id="byline">The Sprint 8 Awakens</h1>
    <div class="pic">
    <img src="../assets/universe.jpg" />
    </div>

    <div class="laser"></div>
    <div class="laser"></div>

    <div class="wrapper">

    <router-link to="/">
    
 
   <div class="starwars-demo" >
   <div  > <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" class="star">

    <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" class="wars">
  
   </div> 
  </div>     </router-link></div></div>
</template>

<script>


	// Find the H2

    export default {
        name:'IntroView',
        data(){
            return{
                intro:true, 
            }
        }
    }
</script>

<style lang="css" >
/* Animation properties */

.pic{
  margin:0px!important;
  padding:0px !important;
    position: absolute;
    z-index:10;
    display: flex;
  width: 100%;
  height: 100%;
background-color: #000;
border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 1px 5px rgb(255, 217, 0);
}

.wrapper{
    position:fixed;
    z-index:20;
    margin:auto;
    padding:25px;
margin-top:5em;


  
}

.laser{
  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 1px 5px rgb(255, 217, 0);
  width:100% !important;
  margin-top:100px;

  z-index:50;
  position:absolute;
}


.star {
  animation: star 10s ease-out infinite;
  max-width:1200px
}
.wars {
  animation: wars 10s ease-out infinite;
  max-width:1200px
}
.byline span {  margin-top: 5em;
  animation: ease-in-out 10s linear infinite;
  z-index:20;
  
}
.byline {

  animation: ease-in-out 10s linear infinite;
  z-index:50;
  position:absolute;
  text-shadow: 0px 1px 5px rgb(255, 217, 0);
}

/* Keyframes */
@keyframes star {
  0% {
    opacity: 0;
    transform: scale(
        0.5) translateY(-0.75em);
  }
  20% {
    opacity: 1;
  }
  89% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(-1000em);
  }
}

@keyframes wars {
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(0.5em);
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(-1000em);
  }
}





/* Make the 3D work on the container */
.starwars-demo {

margin:auto;
margin-top:5em;
}

/* General styles and layout */


.starwars-demo {
  height: 17em;
  left: 50%;
  position: absolute;
  top: 53%;
  transform: translate(-50%, -50%);
  width: 34em;
}

.byline span {
  display: inline-block;
}

img {
  width: 100%;
}

.star, .wars, .byline {
  position: absolute;
}

.star {
  top: -0.75em;
}

.wars {
  bottom: -0.5em;
}

.byline {
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.25em;
padding:50px;
  letter-spacing: 0.4em;
margin:auto;
  text-align: center;
  text-transform: uppercase;
  top: 25px;
}

/*** Media queries for adjusting to different screen sizes ***/

@media only screen and (max-width: 600px) {
  .starwars-demo {
    font-size: 10px;
  }
}

@media only screen and (max-width: 480px) {
  .starwars-demo {
    font-size: 7px;
  }
}


</style>