<template>
  <div id="app">
    <SliderDelete></SliderDelete>
    <Button type="primary">主要按钮</Button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SliderDelete from './view/SliderDelete'
import { Button } from 'vant'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SliderDelete,
    Button
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
