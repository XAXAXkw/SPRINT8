<template>



<div class="cardo"  v-if="$store.state.showCard" @click="($store.state.showCard=false)" >
  <div class="pixo  border border-warning bg-warning">

<img :src="'https://starwars-visualguide.com/assets/img/starships/'+ (this.src) +'.jpg'"/>
</div>
<div class="row">

<div class="col-12 md-6">





<div class="sections3" >
<div class="row">
<div class="col-12">

<div class="col-12"><h1> CARD <span style="color:red">{{( $route.params.id +1)}}</span> </h1>
  <div class="laser2"></div>
</div>
<h1 style="color:black;font-size:14px">{{( $route.params.id +1)}}</h1></div>
</div>





<h1>SHIP  // . <span style="font-size: 24px;color:orange">{{ SWDATA.results[$route.params.id].name}}</span></h1>
<p style="color:aquamarine">MODEL :{{ SWDATA.results[$route.params.id].model}}</p>


<div class="sections">
   <h2>MADE IN : {{ SWDATA.results[$route.params.id].manufacturer}}</h2>
</div>
<div class="container d-flex ">

   <p>MGLT: {{ SWDATA.results[$route.params.id].MGLT}}</p> || 
      <p>Crew: {{ SWDATA.results[$route.params.id].crew}}</p> || 
      <p>Size: {{ SWDATA.results[$route.params.id].length}}mts.</p>
</div>
<div class="container "></div>


</div>


</div>






</div>


</div>

</template>

<script>
 import { mapState, mapActions } from 'vuex';
    export default {
        name:'ShipCard',
        data(){
          return{

          }
        },
        props:['src'],
        

      computed:{
            ...mapState(['SHIPS', 'SWDATA','showCard'])
        },
        methods:{
            ...mapActions(['getSwapi']),
            hideCard(){
                this.$store.state.showCard=!this.$store.state.showCard;
            }
        }
        
    }
</script>

<style lang="css" scoped>
 h1,h2,h3{
    font-size: smaller;
  }
.cardo{
  display:inline-flexbox;
width:90%;
z-index:10;
position:fixed;


}
.pixo{
  display:inline-flexbox;
width:50%;
z-index:100;

float:right;


}
.card2{
  color:rgba(74, 78, 31, 0.477);
 border-radius: 5px;
 margin:40px;
width:25px;
height:25px;



  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 10px 5px rgb(144, 142, 128);
  background-color: rgba(127, 255, 212, 0.376);


}


.article *{

min-width:300px;
min-height:100%;
  background-color:rgb(203, 255, 222) ;
}
.sections{

border-radius: 35px;
padding: 5px;
background-color:rgba(111, 119, 114, 0.727) ;
color:black
}
.sections2{
  padding: 5px;
border-radius: 35px;
background-color:rgba(0, 0, 0, 0.936) ;
color:rgb(255, 255, 255)
}
.sections3{
    box-shadow: 0px 1px 10px rgb(255, 23, 23);
      width:100%;
      border:solid  1px rgb(255, 0, 0);
      padding: 5px;


border-radius: 35px;
background-color:rgba(0, 0, 0, 0.857) ;
color:rgb(203, 255, 222);
z-index:10;

margin-top:2px !important;
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

  margin:auto;
}
p{
  font-size: small;
}


</style>