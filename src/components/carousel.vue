<template>
  <div class="carousel" @mouseover="clearInv" @mouseout="runInv">
    <div class="carousel-img">
      <a href="/book">
      <transition name="carousel-trans">
        <img v-if="isShow" :src="carousels[nowIndex].pic" :alt="carousels[nowIndex].alt">
      </transition>
      <transition name="carousel-trans-old">
        <img v-if="!isShow" :src="carousels[nowIndex].pic" :alt="carousels[nowIndex].alt">
      </transition>
      </a>
    </div>
    <ul class="carousel-pages">
      <li v-for="(item,index) in carousels" :key="index" @click="goto(index)">
        <div :class="{on: index===nowIndex}"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    carousels:Array,
    inv: {
      type: Number,
      default: 1000
    }
  },
  data (){
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex===0){
        return this.carousels.length-1
      }
      else {
        return this.nowIndex-1
      }
    },
    nextIndex (){
      if (this.nowIndex == this.carousels.length -1){
        return 0
      }
      else {
        return this.nowIndex +1
      } 
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      },this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
mounted () {
    this.runInv();
  }
}
</script>

<style scoped>
.carousel-trans-enter-active {
  transition: all 1s;
}
.carousel-trans-enter {
  transform: translateX(80vw);
}
.carousel-trans-old-leave-active {
  transition: all 1s;
  transform: translateX(-100vw);
}
.carousel{
  position: relative;
  margin: 0;
  width: 100vw;
  height: 50vw;
  overflow: hidden;
}
.carousel h2 {
  position: absolute;
  height: 8vw;
  width: 100vw;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  text-align: left;
  padding-left: 2vw;
  font-size: 4vw;
  line-height: 8vw;
  margin: 0;
}
.carousel-img {
  width: 100vw;
  height: 50vw;
}
.carousel-img img {
  position: absolute;
  width: 100vw;
  height: 50vw;
  top: 0;
  left: 0;
}
.carousel-pages {
  position: absolute;
  bottom: 0;
  left: 35vw;
  width: 30vw;
  height: 8vw;
  margin: 0;
  list-style: none;
  padding: 0 1vw;
}
.carousel-pages li {
  display: inline-block;
  padding: 0 2.7vw;
  cursor: pointer;
  color: #fff;
  width:7vw;
}
.carousel-pages li div {
  border: .1vw solid rgb(255, 255, 255);
  width: 1.6vw;
  height:1.6vw;
  border-radius: 1.5vw;
  background-color: rgb(255, 255, 255);
}
.carousel-pages li .on {
  background-color: rgb(202, 198, 198);
  border: .1vw solid rgb(202, 198, 198);
}
</style>
