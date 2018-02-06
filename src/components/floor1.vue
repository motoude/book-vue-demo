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
    <div class="floor-content">
        <ul>
            <li v-for="novel in floorlist.list" :key="novel.id">
                <a href="/book">
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
export default {
    name:'floor1',
    props:{
        floorlist:{
            default:function(){
                return {
                    title:'小v书城',
                    url:'/',
                    list:6
                }
            }
        }
    }
}
</script>

<style scoped>
.floor {
    float: left;
    width: 100vw;
    background-color: rgb(255, 255, 255);
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
</style>

