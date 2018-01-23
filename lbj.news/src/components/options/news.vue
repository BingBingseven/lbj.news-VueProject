<template>
  <div>
  <my-carrousel id="carousel"></my-carrousel>
  <Amateur-news></Amateur-news>
  </div>
</template>

<script>
import Carrousel from './newsComp/swiper'
import News from './newsComp/new'
export default{
  name:'swiper',
  components:{
    'my-carrousel':Carrousel,
    'Amateur-news':News
  }
}
</script>

<style>
#carousel{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  margin-top:-10px;
  padding:0;
}
ul,li {
  margin: 0;
  padding:0;
}
li{
  list-style:none;
}
</style>