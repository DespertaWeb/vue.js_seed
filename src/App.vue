<template>
  <div id="app">
    <img src="./assets/img/logo.jpg">
    <h1>TATTO SOON</h1>
    <h2>Get tattooed by the bests tattoers in the whole word!</h2>
    <h3>How it works?</h3>
    <ol>
      <li>1 - Look for your favorite tattoer or search for tatto styles</li>
      <li>2 - Blah Blah Blah Blah </li>
      <li>3 - Blah Blah Blah Blah </li>
      <li>4 - Blah Blah Blah Blah </li>
    </ol>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
