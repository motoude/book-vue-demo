<template>
  <div class="floor">
    <div class="floor-header">
        <div class="floor-header-l">
            <h3 class="floor-title">{{floorlist.title}}</h3>
        </div>
        <div class="floor-header-r">
            <a :href="floorlist.url">更多&#62;</a>
        </div>
    </div>
    <div class="ranking">
        <div :class="{active:isActive1}" @click="active1">热销榜</div>
        <div :class="{active:isActive2}" @click="active2">风云榜</div>
        <div :class="{active:isActive3}" @click="active3">点击榜</div>
        <div :class="{active:isActive4}" @click="active4">推荐榜</div>
    </div>
    <div class="floor-content">
        <ul>
            <li v-for="novel in rankinglist" :key="novel.id">
                <a :href="novel.url">
                    <img :src="novel.pic" alt="" class="novel-img">
                    <h4 class="novel-title">{{novel.title}}</h4>
                    <p class="novel-anthor">{{novel.anthor}}</p>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import api from './../axios/api.js'
import './../mock.js'
export default {
    name:'floor1',
    props:{
        floorlist:{
            default:function(){
                return {
                    title:'排行榜',
                    url:'/',
                    list:6
                }
            }
        }
    },
    data(){
        return {
          isActive1:true,
          isActive2:false,
          isActive3:false,
          isActive4:false,
          rankinglist:[]
        }
    },
    created(){
        this.getRanking1()
    },
    methods:{
      active1() {
        this.getRanking1()
        this.isActive1=true,
        this.isActive2=false,
        this.isActive3=false,
        this.isActive4=false
      },
      active2() {
        this.getRanking2()
        this.isActive1=false,
        this.isActive2=true,
        this.isActive3=false,
        this.isActive4=false
      },
      active3() {
        this.getRanking3()
        this.isActive1=false,
        this.isActive2=false,
        this.isActive3=true,
        this.isActive4=false
      },
      active4() {
        this.getRanking4()
        this.isActive1=false,
        this.isActive2=false,
        this.isActive3=false,
        this.isActive4=true
      },
      getRanking1(){
        api.JH_news('/ranking1')
        .then(res => {
            console.log(res);
            this.rankinglist = res.list;
        })
      },
      getRanking2(){
        api.JH_news('/ranking2')
        .then(res => {
            console.log(res);
            this.rankinglist = res.list;
        })
      },
      getRanking3(){
        api.JH_news('/ranking3')
        .then(res => {
            console.log(res);
            this.rankinglist= res.list;
        })
      },
      getRanking4(){
        api.JH_news('/ranking4')
        .then(res => {
            console.log(res);
            this.rankinglist = res.list;
        })
      }
    }
}
</script>

<style scoped>
.floor {
    float: left;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    margin-top: 2vw;
}

.floor-header {
    float: left;
    height: 10vw;
    margin: 0 2vw;
    width: 96vw;
}
.floor-header-l{
    float: left;
    height: 10vw;
    width: 67vw;
}
.floor-title{
    margin: 0;
    padding: 0;
    font-size: 4.5vw;
    line-height: 10vw;
}
.floor-title:before{
    float: left;
    box-sizing: border-box;
    width: 3vw;
    height: 6vw;
    margin: 2vw 0;
    content: '';
    color: transparent;
    border-left: 1vw solid #ed424b;
}
.floor-header-r {
    float: left;
    width: 26vw;
}
.floor-header-r  a{
    float: right;
    text-decoration: none;
    color: rgb(138, 127, 127);
    font-size: 4vw;
    line-height: 10vw;
}
.floor-content{
    float: left;
    width: 100vw;
    height: auto;
}
.floor-content ul{
    display: block;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 2vw;
    padding:0;
    white-space: nowrap;
}
.floor-content li{
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    width: 20vw;
    margin-right:2vw;
}
.floor-content ul a{
    display: block;
    width: 100%;
    text-decoration: none;
    margin: 0;
    color: #000000;
}
.novel-img {
    display: block;
    width: 100%;
    height: 28vw;
    background-color: #ebe6e7;
}
.novel-title {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 6vw;
    font-size: 3.5vw;
    line-height: 6vw;
    font-weight: 500;
}
.novel-anthor {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 5vw;
    font-size: 3.5vw;
    line-height: 5vw;
    color: #a5a2a3;
}
ul::-webkit-scrollbar {
    display: none;
}
.ranking {
    float: left;
    height: 13vw;
    width: 100vw;
    padding: 2.5vw 2vw;
}
.ranking div{
    float: left;
    height: 6vw;
    width: 24vw;
    font-size: 4vw;
    text-align: center;
    margin: 1vw 0;
    line-height: 6vw;
    color: rgb(223, 41, 41);
    border: .1vw solid rgb(223, 41, 41);
}
.ranking div.active{
    color: rgb(255, 255, 255);
    background-color:rgb(223, 41, 41);
}
</style>

