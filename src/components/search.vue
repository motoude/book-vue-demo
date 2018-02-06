<template>
  <div class="search">
        <a href="/">
            <icon name="search"></icon>
            小v书城
        </a>
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
.search{
    float: left;
    width: 96vw;
    height: 8vw;
    margin: 2vw;
}
.search a{
    display: block;
    float: left;
    height: 8vw;
    width: 100%;
    background-color: rgb(255, 255, 255);
    text-align: center;
    font-size: 4vw;
    line-height: 8vw;
    color: rgb(146, 141, 141);
}
.fa-icon{
    width: 1em;
    height: 1em;
    vertical-align: -.25ex;
}
</style>
