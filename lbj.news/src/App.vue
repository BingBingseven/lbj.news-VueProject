<template>
  <div id="app">
    <app-head class="page"></app-head>
    <keep-alive>
      <router-view id="subject"></router-view>
    </keep-alive>
    <app-foot></app-foot>
  </div>
</template>

<script>
import AppHead from '@/components/head'
import AppFoot from '@/components/foot'
export default {
  name: 'app',
  components:{
    'app-head':AppHead,
    'app-foot':AppFoot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding:0;
}
#subject{
  margin-top:90px;
  margin-bottom:60px;
  z-index:1;
}

</style>
