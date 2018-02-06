<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/base.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:rgb(246, 247, 249);

  height: auto;
  width: 100vw;
  float: left;

}
</style>
