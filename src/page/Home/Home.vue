<template>
  <div class="home">
    <div class="home-slider">
      <Slider></Slider>
    </div>
    <div class="home-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Slider from './../../components/Slider/Slider.vue'
  export default {
    name: 'Home',
    components: {
      Slider: Slider
    }
  }
</script>

<style scoped lang='scss'>
  .home {
    width: 100%;
    height: 100%;
    .home-slider {
      width: 256px;
      height: 100%;
      background-color: rgb(84, 92, 100); //67,74,80
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
    }
    .home-main {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-left: 256px;
    }
  }
</style>