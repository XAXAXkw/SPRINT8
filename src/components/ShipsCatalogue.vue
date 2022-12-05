<template>


    <div>       
     <slot>
<ShipCard :src="src"/>
</slot>
    <div @click="seeCard">

    <div class="row">
    <div class="col"><h1 style="color:black;font-size:12px;">Spaceships catalogue:</h1> </div>
    <div class="col">
        <h1 style="font-size:12px;">Loaded SHIPS:<span style="color:orange">{{ SHIPS.length }}</span> </h1>
</div>
<div class="col"><h1 style="color:grey;font-size:12px;">DATA : {{ $route.params.id }}// TOTAL SHIPS:<span style="color:red">{{ SWDATA.count }}</span> </h1></div>

<router-link :to="{name:'shipscatalogue', params:{id:index}}"
v-for="(ship, index) in SHIPS" 
:key="index"


>
<div class="container m-auto p-2 " >

<div class="row">
<div class="col-12 md-2">
<div class="cardo2"><h1 style="color:black;font-size:4em">{{ index+1 }}</h1>

</div>
</div>
<div class="col12 md-2-2">    <div>
      <div class="light"></div>
      <div class="light"></div>
      <div class="light"></div>

    
    </div></div>
<div class="col-12 md-8"></div>




<div class="sections3">
    <h1>DATA  // .</h1>
 <h2><span style="font-size: 24px;color:orange">{{ ship.name}}</span></h2> 

<div><h6  style="color:grey;font-size:12px;">Model :</h6><h4>{{ship.model}}</h4></div>
</div>

</div>

</div>


</router-link>


<button @click="next" class="btn btn-warning btn-sm m-4 "> NEXT PAGE </button>

    </div>








</div>
</div>

</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import ShipCard from './ShipCard.vue'
    export default {
        name:'ShipsCatalogue',
        components:{ShipCard},
        data(){
            return{
                src:'',npage:''
            
            }
        },
      computed:{
            ...mapState(['SHIPS', 'SWDATA','showCard'])
        },
        methods:{
            ...mapActions(['getSwapi']),
            ...mapMutations(['nextSwapi']),
            seeCard(){
                this.$store.state.showCard=!this.$store.state.showCard;
                this. src= this.$route.params.id;
            },
            next(){
             
                this.npage = this.SWDATA.next;
                this.nextSwapi(this.npage)
            }
        
        }
        
    }
</script>

<style lang="css" scoped>

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
a{
     text-decoration: none;
}
 a:hover{
   
    color:aquamarine;
}
.cardo2{
    z-index:5;
    position:absolute;

  color:rgba(74, 78, 31, 0.477);
 border-radius: 25px;
display:flexbox;
    padding:1em;
    margin:1em;
height:100px;
width:100px;
  border:solid  1px rgb(203, 255, 222);
  box-shadow: 0px 10px 5px rgb(144, 142, 128);
  background-color: rgba(104, 118, 113, 0.408);


}
.cardo2:hover{
    box-shadow: 0px 10px 5px rgb(113, 106, 57);
  background-color: rgba(149, 218, 194, 0.408);
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
    width:80%;
margin-top:15px;
padding:15px;
border-radius: 35px;
background: rgb(0,0,0);
background: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(25,25,25,1) 45%, rgba(71,71,71,1) 83%, rgba(100,112,75,1) 100%);
color:rgb(203, 255, 222);
text-align: right;
box-shadow: 5px 5px 50px rgba(255, 9, 9, 0.555);
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
</style>