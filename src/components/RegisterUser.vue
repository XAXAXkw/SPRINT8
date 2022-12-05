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

<div class="col"><div class="row m-4 ">User :<input /></div>
<div class="row m-4 ">Password :<input /></div></div>
<div class="col"><button class="btn btn-sm btn-warning m-4">Register</button>
<h6>Back to LOGIN</h6></div>


</div>
    </div>
</template>

<script>
    export default {
        name:'RegisterUser',
        data() {
            return{
                user:'',psswd:null,logged:false
            }
        },
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