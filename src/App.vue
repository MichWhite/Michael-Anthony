
<template>
  <div id="app">
    <router-view/>
    <Navigation>Navigation</Navigation>
  </div>
</template>

<script>
import Navigation from './components/Nav';
import { Carousel, Slide } from 'vue-carousel';

export default {
name: 'app',
components: {
    'Navigation': Navigation,
     Carousel,
    Slide
  
  }
 }


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
p{
  padding:10px;
}

.container{
  background-color:white;
}
p{
  text-align:left;
}



h2{
  padding: 1px;
    margin: 0 auto;
    text-align: centers;
    color: #2e86c1;
}
html, body
{
    width: 100%;
    height: 100%;
        background-attachment: fixed;
 background-repeat: repeat;
 background-image: url("assets/pattern.png");
}


</style>