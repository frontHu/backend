<template>
  <div class="home">
    <Slider></Slider>
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

<style scoped>
  .home {
    width: 100%;
    height: 100%;
  }
</style>