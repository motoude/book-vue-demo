<template>
  <div class="book">
      <div class="book-wrap">
          <div class="book-header">
              <div class="book-header-l" @click="back"><icon name="mail-reply"></icon></div>
              <div class="book-header-m">书籍详情</div>
              <div class="book-header-r"><a href="/"><icon name="home"></icon></a></div>
          </div>
          <div class="book-main">
              <div class="book-main-title">
                  <div class="book-main-title-l">
                      <img src="" alt="">
                  </div>
                  <div class="book-main-title-r">
                      <h3>秦时明月刀</h3>
                      <p>木头岛</p>
                      <p>历史  333万字</p>
                      <p>连载中</p>
                  </div>
              </div>
              <div class="book-main-read">
                  <div>开始阅读</div>
                  <div>离线下载</div>
                  <div>加入书架</div>
              </div>
              <div class="book-main-des">
                  现代欢脱外科女医生悲催穿越到古代，醒来就被人贩子逼得跳车撞晕，幸得贵人相救，落魄入农家，卖卖药草，治治小病，小日子慢慢滋润。偶然救得逃亡冷酷将军，两人携手种田打BOSS。且看独立坚强、脱线欢脱的女医生，如何医（改）治（造）直男癌晚期冷面将军。
              </div>
              <div class="book-main-new">
                  <div class="book-main-icon"><icon name="clock-o"></icon></div>
                  <div class="book-main-new-title">最近</div>
                  <div class="book-main-new-text">第十一章 哈哈</div>
                  <div class="book-main-icon"><icon name="angle-right"></icon></div>
              </div>
              <div class="book-main-new">
                  <div class="book-main-icon"><icon name="th-list"></icon></div>
                  <div class="book-main-new-title">目录</div>
                  <div class="book-main-new-text">第一章 啦啦</div>
                  <div class="book-main-icon"><icon name="angle-right"></icon></div>
              </div>
          </div>
          <div class="book-comment">
                <div class="book-comment-header"><span></span>精彩评论</div>
                <ul class="book-comment-main">
                    <li v-for="n in 3" :key="n.id">
                        <div class="book-comment-main-l">
                            <img src="" alt="">
                        </div>
                        <div class="book-comment-main-r">
                            <div class="book-comment-name">
                                书友666
                            </div>
                            <div class="book-comment-text">
                                书不错
                            </div>
                        </div>
                    </li>
                </ul>
          </div>
          <div class="book-comment">
                <div class="book-comment-header"><span></span>看过这本书的人还看过下面这些</div>
                <ul class="book-comment-wrap">
                    <li v-for="n in 8" :key="n.id">
                        <img src="" alt="" class="book-comment-pic">
                        <div class="book-comment-name">
                            雪山飞刀
                        </div>
                        <div class="book-comment-text">
                            不是我写的
                        </div>
                    </li>
                </ul>
          </div>
      </div>
      <myfooter></myfooter>
  </div>
</template>
<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import myfooter from '@/components/footer'
export default {
  components: {
    Icon,
    myfooter
  },
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
}
</script>
<style scoped>
.book {
    float: left;
    background-color:rgb(246, 247, 249);
    height: auto;
    width: 100vw;
}
.book-wrap {
    float: left;
}
.book-header {
    position:fixed;
    top: 0;
    width: 100vw;
    padding: 1vw 2vw;
    float: left;
    height: 12vw;
    background-color: rgb(255, 255, 255);
    border-bottom: .1vw solid rgb(228, 226, 226);
}

.book-header-r,.book-header-l{
    width: 10vw;
    height: 10vw;
    padding: 2vw;
    float: left;
}
.book-header-m{
    width: 76vw;
    height: 10vw;
    float: left;
    text-align: center;
    font-size: 4.5vw;
    line-height: 10vw;
}
.fa-icon{
    width: 100%;
    height: 100%;
    color: rgb(223, 41, 41);
}
.book-main {
    width: 100vw;
    height: auto;
    float: left;
    padding: 2vw;
    margin-top: 12vw;
    background-color: rgb(255, 255, 255);
}
.book-main-title {
    width: 100%;
    float: left;
}
.book-main-title-l {
    width: 30%;
    height: 40vw;
    float: left;
    background-color: rgb(252, 58, 58);
}
.book-main-title-r {
    width: 70%;
    height: 40vw;
    float: left;
    padding: 0 2vw;
}
.book-main-title-r h3{
    width: 100%;
    height: 10vw;
    float: left;
    margin: 0;
    padding: 0;
    font-size: 5vw;
    line-height: 10vw;
    font-weight: 500;
}
.book-main-title-r p{
    width: 100%;
    height: 10vw;
    float: left;
    margin: 0;
    padding: 0;
    font-size: 4vw;
    line-height: 10vw;
    font-weight: 500;
    color: rgb(145, 141, 141);
}
.book-main-read {
    width: 96vw;
    height: 10vw;
    margin: 3vw 0;
    height: auto;
    float: left;
    background-color: rgb(255, 255, 255);
}
.book-main-read div{
    float: left;
    height: 8vw;
    width: 26vw;
    margin: 1vw 3vw;
    font-size: 4vw;
    line-height: 8vw;
    text-align: center;
    border: .2vw solid rgb(185, 24, 24);
    border-radius: 2vw;
    background-color: rgb(185, 24, 24);
    color: rgb(255, 255, 255);
}
.book-main-des{
    float: left;
    font-size: 4vw;
    line-height: 6vw;
    color: rgb(168, 156, 156);
}
.book-main-new {
    width: 96vw;
    height: 10vw;
    margin: 2vw 0;
    float: left;
}
.book-main-new div{
    height: 10vw;
    float: left;
}
.book-main-new .book-main-icon{
    height: 10vw;
    width: 10vw;
    padding: 2vw;
    float: left;
}
.book-main-icon .fa-icon{
    color: rgb(139, 137, 137);
}
.book-main-new .book-main-new-title{
    height: 10vw;
    width: 10vw;
    padding: 2vw 0;
    float: left;
    text-align: center;
    font-size: 4vw;
    line-height: 6vw;
}
.book-main-new .book-main-new-text{
    height: 10vw;
    width: 66vw;
    padding: 2vw;
    float: left;
    text-align: left;
    font-size: 4vw;
    line-height: 6vw;
    color: rgb(194, 189, 189);
}
.book-comment {
    margin-top: 2vw;
    float: left;
    width: 100vw;
    padding: 0 2vw;
    background-color: rgb(255, 255, 255);
}
.book-comment-header{
    width: 100%;
    height: 10vw;
    font-size: 4vw;
    line-height: 10vw;
}
.book-comment-header span{
    display: block;
    float: left;
    width: 1vw;
    height: 5vw;
    margin: 2.5vw 0;
    margin-right: 2vw;
    background-color: rgb(207, 8, 8);
}
.book-comment-main {
    list-style: none;
    margin: 0;
    padding: 0; 
    float: left;  
    width: 100%;
}
.book-comment-main li{
    float: left;  
    width: 100%;
    margin-top: 2vw;
    height: 20vw;
    border-bottom: .1vw solid rgb(194, 191, 191);
}
.book-comment-main li:last-child{
    border-bottom: none;
}
.book-comment-main-l{
    width: 15%;
    height: 20vw;
    float: left;
    padding: 2vw;
}
.book-comment-main-l img{
    float: left;
    width: 100%;
    height: 100%;
    background-color: rgb(184, 28, 28);
}
.book-comment-main-r{
    width: 85%;
    height: 20vw;
    padding: 2vw;
    float: left;
}
.book-comment-name{
    width: 100%;
    float: left;
    font-size: 4vw;
    line-height: 6vw;
    color: rgb(143, 140, 140);
}
.book-comment-text{
    width: 100%;
    float: left;
    font-size: 4vw;
    line-height: 6vw;
}
.book-comment-wrap{
    list-style: none;
    margin: 0;
    padding: 0; 
    float: left;  
    width: 100%; 
}
.book-comment-wrap li{
    list-style: none;
    margin: 0;
    padding: 0 2vw; 
    float: left;  
    width: 25%; 
    height: auto;
}
.book-comment-pic{
    margin: 0;
    padding: 0; 
    float: left;  
    width: 100%; 
    height: 25vw;
    background-color: rgb(134, 15, 15);
}
</style>
