<template>
    <div>
    <div class="container">
    <div class="row">
    <div class="col-10"></div>
    <div class="col-2">
        <div class="logger"><button @click="(logged=!logged)" class="btn btn-dark text-warning m-4">LogIn</button></div></div>
    </div>
    </div>

<div class=" sections3 container bg-dark text-warning p-4 rounded d-flex-box" v-if="logged">

<div class="col"><div class="row m-4 ">

Email :<input type="text" id="email" v-model="email"/></div>
<div class="row m-4 ">

Password :<input type="password" id="password" v-model="password" /></div></div>
<div class="col">
<button class="btn btn-sm btn-warning m-4"
@click="register"
>ENTER</button>
<h6>Or Register new user HERE</h6></div>


</div>
    </div>
</template>

<script>
//import firebase from 'firebase'
    export default {
        name:'LogIn',
        data() {
            return{
              
                email:'',
                password:''
            }
        },
        methods:{
            register(e){
               // firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                e.preventDefault();
                

            }
        }
    }
</script>

<style lang="css" scoped>
.logger{
margin-right:150px;
}
.sections3{
    width:200px;
    margin-left:80%;
    position:absolute;
    z-index:20;
margin-top:55px;
padding:15px;
border-radius: 35px;
background: rgb(0,0,0);
background: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(25,25,25,1) 45%, rgba(71,71,71,1) 83%, rgba(100,112,75,1) 100%);
color:rgb(203, 255, 222);
text-align: right;;
}

</style>