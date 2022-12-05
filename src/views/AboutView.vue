<template>
  <div class="about">

    <div class="laser2"></div>
    <h1>This is the TEST ZONE</h1>

    <div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>


<div class="contenidor"></div>

<div class="card">CARD

<h1>INFO</h1>
<h2>Subtitle</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus corporis aspernatur tempora quidem eum consequatur qui amet quae sequi ratione quaerat, sint aliquid, necessitatibus porro iusto eaque velit dolores?</p>
<div class="article">
  consectetur adipisicing elit.</div>



  <div class="container">

<div class="row">

</div>

<div class="row">


<div class="col-6">
  <div class="sections">
  <h6>SECTION A</h6>
  </div>
  <div class="sections">
  <h6>SECTION A</h6>
  </div>
  <div class="sections2">
  <h6>SECTION A</h6>
  </div>
  <div class="sections3">
  <h6>SECTION A</h6>
  </div>
</div>





<div class="col-6">
<div class="card2">card:<h1>32</h1></div>
</div>
<div class="cardSm"><h1>NAME HERE 23</h1></div>
<div class="laser2"></div>
</div>



  
  </div>






</div>
    
    </div>




    <div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>

    
    </div>

    <div class="light"></div>
  </div>


</template>

<script>

import { mapState } from 'vuex'
export default {
  name:'AboutView',

  data(){
  return{ ARRAYX:[11,12,223,45,666] }
},
computed:{
  ...mapState(['SHIPS','SWDATA'])
}

}

</script>




<style>
 h1,h2,h3{
    font-size: smaller;
  }
.card{

 
  color:rgb(149, 157, 80);


    padding:6em;
    height:50%;
    width:50%;
  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 1px 5px rgb(255, 217, 0);
  width:80%;
  margin:auto;
}
.card2{
  color:rgba(74, 78, 31, 0.477);
 border-radius: 25px;
display:flexbox;
    padding:1em;
    margin:1em;
height:100px;
width:100px;
  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 10px 5px rgb(144, 142, 128);
  background-color: rgba(127, 255, 212, 0.376);


}


.article{

  background-color:rgb(203, 255, 222) ;
}
.sections{
margin-top:15px;
border-radius: 35px;
background-color:rgba(111, 119, 114, 0.727) ;
color:black
}
.sections2{
margin-top:15px;
border-radius: 35px;
background-color:rgba(0, 0, 0, 0.727) ;
color:rgb(255, 255, 255)
}
.sections3{
margin-top:15px;
border-radius: 35px;
background-color:rgb(0, 0, 0) ;
color:rgb(203, 255, 222)
}


.light{

border-radius: 35px;
height:10px !important;
width: 75px !important;


border:solid  1px rgb(203, 255, 222);
background-color:rgb(203, 255, 222) ;
box-shadow: 0px 1px 5px rgb(255, 217, 0);
width:80%;
margin:auto;
margin-top:15px;
}

.laser{
  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 1px 5px rgb(255, 217, 0);
  width:80%;
  margin:auto;
}
.laser2{
  border:solid  1px rgb(255, 34, 0);
  box-shadow: 0px 1px 10px rgb(255, 23, 23);
  width:80%;
  margin:auto;
}
p{
  font-size: xx-small;
}
</style>
