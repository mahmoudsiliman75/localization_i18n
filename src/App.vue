<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" /> <br>
    <icon name="facebook-square" />
    <icon name="twitter-square" />
    <icon name="linkedin" />
    <icon name="youtube-square" />
    <icon name="instagram-square" />
    <icon name="whatsapp-square" />
    <icon name="user-circle" />
    <icon name="dollar-sign" />
    <icon name="at" />
    <icon name="hashtag" />
    <icon name="award" size="30px" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
