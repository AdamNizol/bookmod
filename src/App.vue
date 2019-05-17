<template>
  <div id="app">
    <Book></Book>
  </div>
</template>

<script>
import Book from './components/Book.vue'

export default {
  name: 'app',
  components: {
    Book
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
</style>
