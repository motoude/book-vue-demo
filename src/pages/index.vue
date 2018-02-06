<template>
  <div class="index">
      <myheader></myheader>
      <carousel  :carousels="carousels" :inv="invTime"></carousel>
      <search></search>
      <mynav></mynav>
      <bcircle></bcircle>  
      <floor1  :floorlist="booklist"></floor1>
      <div class="recommend">
        <div class="recommend-l">大神新书</div>
        <div class="recommend-r">大神新书.真</div>
      </div>
      <floor1 :floorlist="booklist1"></floor1>
      <floor2></floor2>
      <floor4></floor4>
      <floor3></floor3>
      <myfooter></myfooter>
  </div>
</template>
<script>
import api from './../axios/api.js'
import './../mock.js'
import myheader from '@/components/myheader'
import search from '@/components/search'
import carousel from '@/components/carousel'
import floor1 from '@/components/floor1'
import mynav from '@/components/navbar'
import bcircle from '@/components/circle'
import floor2 from '@/components/floor2'
import floor3 from '@/components/floor3'
import floor4 from '@/components/floor4'
import myfooter from '@/components/footer'
export default {
  components: {
      myheader,
      floor1,
      carousel,
      search,
      mynav,
      bcircle,
      floor2,
      floor3,
      floor4,
      myfooter
  },
  data (){
    return {
      carousels: [],
      invTime: 3000,
      booklist:[],
      booklist1:[],
    }
  },
  created(){
    this.getCarousels();
    this.getbook();
    this.getbook1()
  },
  methods: {
    getCarousels(){
     api.JH_news('/carousellist')
      .then(res => {
        console.log(res);
        this.carousels = res.list;
      })
    },
    getbook(){
     api.JH_news('/booklist')
      .then(res => {
        console.log(res);
        this.booklist = res;
      })
    },
    getbook1(){
     api.JH_news('/booklist1')
      .then(res => {
        console.log(res);
        this.booklist1 = res;
      })
    }
  }
}
</script>
<style scoped>
.index{
  height: auto;
  width: 100vw;
  float: left;
}
.recommend {
  float: left;
  width: 100vw;
  height: 10vw;
  padding: 2vw;

}
.recommend div{
  width: 40vw;
  margin: 0 4vw;
  float: left;
  height: 6vw;
  font-size: 4vw;
  line-height: 6vw;
  text-align: center;
  border:.2vw solid rgb(223, 41, 41);
  border-radius: 3vw;
}
</style>
