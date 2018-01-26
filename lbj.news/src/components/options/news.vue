<template>
  <div>
  <my-carrousel id="carousel"></my-carrousel>
  <amateur-news  id="news"></amateur-news>
  </div>
</template>

<script>
import Carrousel from './newsComp/swiper'
import New from './newsComp/new'
export default{
  name:'news',
  components:{
    'my-carrousel':Carrousel,
    'amateur-news':New
  }
}
</script>

<style>
#news{
    padding-left:10px;
}
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