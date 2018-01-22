<template>
 <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>
<script>
require('../../../../node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js')
require('../../../../node_modules/swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
     name: 'carrousel',
    data: function () {
    return {
        data:{

        },
        swiperOption: {
            initialSlide :0,
            pagination: '.swiper-pagination',
            loop: true,
            speed: 400,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
        }
    }
},components: {
    swiper,
    swiperSlide
  },
    
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    }
  }
</script>
