<template>
  <div>
  <my-carrousel></my-carrousel>
  </div>
</template>

<script>
import Carrousel from './newsComp/swiper'
export default{
  name:'swiper',
  components:{
    'my-carrousel':Carrousel
  }
}
</script>

<style>

</style>