<template>
  <div class="footer">
      <div class="t">
          <div class="active">触屏版</div>
          <div>电脑版</div>
          <div>反馈</div>
      </div>
      <div class="b">
          Copyright © 2017-2020 xiaov.com
      </div>
  </div>
</template>
<style scoped>
.footer {
    float: left;
    width: 100vw;
    height: 60vw;
    background-color: rgb(255, 255, 255);
    margin-top: 2vw;
}
.t{
    height: 10vw;
    margin: 10vw 5vw;
}
.t div{
    width: 30vw;
    float: left;
    text-align: center;
    line-height: 10vw;
    font-size: 4vw;
    color: rgb(194, 193, 191);
}
div.active{
    color: black;
}
.b {
    width: 100vw;
    padding: 0 5vw;
    text-align: center;
    font-size: 4vw;
    line-height: 10vw;
    color: rgb(194, 193, 191);
}
</style>
