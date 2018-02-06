<template>
  <div class="header">
      <div class="h-logo">小V书城</div>
      <div class="h-nav">
        <div class="h-nav-l" :class="{active:isActive}" @click="activel">男生</div>
        <div class="h-nav-r" :class="{active:!isActive}" @click="activer">女生</div>
      </div>
      <div class="h-my">
        <div><icon name="reorder"></icon></div>
        <div><icon name="user-o"></icon></div>
      </div>
  </div>
</template>
<script>
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
export default {
  components: {
    Icon
  },
  data(){
    return {
      isActive:true
    }
  },
  methods:{
    activer() {
      this.isActive = false
      this.$router.push({path:'/'})
    },
    activel() {
      this.isActive = true
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>
.header{
  width: 100vw;
  height: 13vw;
  padding:2vw;
  margin: 0;
  float: left;
  background-color: rgb(246, 247, 249);
}
.h-logo{
  float: left;
  font-size: 5vw;
  line-height: 9vw;
  width: 33vw;
  height: 9vw;
}
.h-nav{
  float: left;
  font-size: 4vw;
  line-height: 7vw;
  width: 26vw;
  margin:1vw 2vw;
  height: 7vw;
}
.h-nav div{
  width: 50%;
  float: left;
  text-align: center;
  border: .2vw solid rgb(209, 22, 22);
  background-color:transparent;
  color: rgb(209, 22, 22);
}

.h-nav-l{
  border-top-left-radius:2vw;
  border-bottom-left-radius: 2vw;
}
.h-nav-r{
  border-top-right-radius:2vw;
  border-bottom-right-radius: 2vw;
}
.h-nav .active{
  background-color: rgb(209, 22, 22);
  color: rgb(255, 255, 255);
}
.h-my{
  float: left;
  width: 33vw;
  height: 9vw;
  padding-left: 10vw;
}
.h-my div{
  float: right;
  height: 9vw;
  width: auto;
  margin: 0 2vw;
}
.fa-icon{
  width: 5vw;
 height: 6vw;
 margin:1.5vw 1vw;
 color: rgb(209, 22, 22);
}
</style>

