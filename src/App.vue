<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
  <order-menu></order-menu>
  <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import orderMenu from './components/orderMenu'

export default {
  name: 'App',
  components: {
	  HelloWorld,
	  orderMenu
  }
}
</script>

<style>
html {
  /* font-size: 30px; */
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
