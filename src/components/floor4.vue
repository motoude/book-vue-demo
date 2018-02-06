<template>
  <div class="floor">
    <div class="floor-header">
        <div class="floor-header-l">
            <h3 class="floor-title">{{overlist.title}}</h3>
        </div>
        <div class="floor-header-r">
            <a :href="overlist.url">更多&#62;</a>
        </div>
    </div>
    <div class="floor-content">
        <ul>
            <li v-for="novel in overlist.list" :key="novel.id">
                <a :href="novel.url">
                    <img :src="novel.pic" alt="" class="novel-img novel-l">
                    <div class="novel-r">
                        <h4 class="novel-title">{{novel.title}}</h4>
                        <p class="novel-introduce">{{novel.introduce}}</p>
                        <p class="novel-anthor">{{novel.anthor}}</p>
                    </div>
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
    data(){
        return {
            overlist:{}
        }
    },
    created(){
        this.getlist()
    },
    methods:{
      getlist(){
        api.JH_news('/overlist')
        .then(res => {
            console.log(res);
            this.overlist = res;
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
    float: left;
    position: relative;
    margin:  2vw 2vw 0 2vw;
    padding:0;
}
.floor-content li{
    display: block;
    float: left;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    width: 96vw;
    padding:2vw 0;
    border-bottom: .1vw solid rgb(219, 217, 217);
}
.floor-content ul a{
    display: block;
    float: left;
    width: 100%;
    text-decoration: none;
    margin: 0;
    color: #000000;
}

.novel-img {
    display: block;
    float: left;
    width: 20vw;
    height: 28vw;
    background-color: #ebe6e7;
}
.novel-r {
    display: block;
    width: 76vw;
    float: left;
    height: 28vw;
    background-color: #ffffff;
    padding: 0 2vw;
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
.novel-introduce {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 17vw;
    font-size: 3.5vw;
    line-height: 5.8vw;
    color: #a5a2a3;
    overflow: hidden;
   display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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
</style>

