<template>
  <div class="mycircle">
      <a href="/" class="wrap">
        <span class="title">书友圈</span>
        <span class="word">来看看书友的推荐哦</span>
        <span class="r">&#62;</span>
      </a>
  </div>
</template>
<style scoped>
.mycircle {
    width: 100vw;
    float: left;
    height: 10vw;
    margin: 2vw 0;
    padding: 0 2vw;
    background-color: rgb(255, 255, 255);
}
.wrap {
    height: 100%;
    width: 100%;
    display: block;
    float: left;
    padding:2vw;

}
.title {
    display: block;
    float: left;
    color: rgb(255, 255, 255);
    background-color: rgb(238, 18, 18);
    border: .1vw solid rgb(238, 18, 18);
    border-radius: 1vw;
    height: 100%;
    font-size: 4vw;
    line-height: 6vw;
    padding: 0 1vw;
}
.word {
    display: block;
    height: 100%;
    float: left;
    font-size: 4vw;
    line-height: 6vw;
    margin-left: 3vw;
    color: black;
}
.r {
    display: block;
    height: 100%;
    float: right;
    font-size: 7vw;
    line-height: 7vw;
    color: black;
    margin-right: 2vw;
}
</style>
