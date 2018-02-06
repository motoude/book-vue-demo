<template>
  <div class="nav">
      <ul class="nav-wrap">
          <li class="nav-item">
              <div class="nav-img"><icon name="list"></icon></div>
              <div class="nav-word">分类</div>
          </li>
           <li class="nav-item">
              <div class="nav-img"><icon name="signal"></icon></div>
              <div class="nav-word">排行榜</div>
          </li>
           <li class="nav-item">
              <div class="nav-img"><icon name="paper-plane-o"></icon></div>
              <div class="nav-word">免费</div>
          </li>
           <li class="nav-item">
              <div class="nav-img"><icon name="book"></icon></div>
              <div class="nav-word">完本</div>
          </li>
           <li class="nav-item">
              <div class="nav-img"><icon name="fire"></icon></div>
              <div class="nav-word">大神</div>
          </li>
      </ul>
  </div>
</template>
<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
  components: {
    Icon
  }
}
</script>
<style scoped>
.nav {
    width: 100vw;
    height: 20vw;
    background-color: rgb(255, 255, 255);
    float: left;
    padding: 3vw 2vw;
}
.nav-wrap{
    list-style: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.nav-item {
    height: 100%;
    width: 19.2vw;
    padding: 0 2.1vw;
    float: left;
}
.nav-img{
    width: 100%;
    height: 60%;
    padding: 1vw 30%;
}
.fa-icon{
    width: 100%;
    height: 100%;
    color: rgb(223, 41, 41);
}
.nav-word{
    width: 100%;
    height: 40%;
    font-size: 4vw;
    line-height: 100%;
    text-align:center;
}
</style>
