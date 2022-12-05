<template>

    <div>
    <img src='../assets/bkg.jpg' />
    </div>

</template>

<script>
    export default {
        name:'SplashPage'
    }
</script>

<style lang="css" scoped>

.screener{
    background-image:url('../assets/bkg.jpg');
    background-repeat:no-repeat;
    z-index:-10;
    min-width: 100%;
    min-height: 100%;
    position:absolute;
    
}
img{
    width: 100%;
  height: auto;
}

</style>