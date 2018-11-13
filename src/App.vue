<template>
  <div id="app">

    <order-menu></order-menu>

  </div>
</template>

<script>
import orderMenu from './components/orderMenu'

export default {
  name: 'App',
  components: {
	  orderMenu
  }
}
</script>

<style>


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
