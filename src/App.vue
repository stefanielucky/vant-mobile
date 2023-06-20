<template>
  <div id="app">
    <SliderDelete></SliderDelete>
    <UpLoaderView></UpLoaderView>
    <Button type="primary">主要按钮</Button>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SliderDelete from './view/SliderDelete'
import UpLoaderView from './view/UpLoader'
import { Button } from 'vant'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SliderDelete,
    UpLoaderView,
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
