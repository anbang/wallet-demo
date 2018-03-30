<template>
  <div id="app">
    <Header></Header>
    <div id="bodyer">
      <img src="./assets/logo.png" class="czr-logo">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'App',
  components:{Header,Footer}
}
</script>

<style>
.czr-logo{width: 100px;margin: 10px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#bodyer{min-height: 300px;}
</style>
