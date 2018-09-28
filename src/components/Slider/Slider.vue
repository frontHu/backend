<template>
  <div class="slider">
    <div class="silder-header">
      <img src='./../../assets/logo-twitch.png' alt="">
      Blog
    </div>
    <div class="slider-list">
      <ul class="slider-item" v-for="(menuItem, index) in theModel" :key="index">
        <Menu :model="menuItem" :icon="menuItem.icon" :key="menuItem.id"></Menu>
      </ul>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import menulist from './menulist.js'
export default {
  name: "Slider",
  data() {
    return {
      theModel: menulist
    };
  },
  components: {
    Menu: Menu
  }
};
</script>

<style scoped lang='scss'>
.slider {
  width: 100%;
  height: 100%;
  .silder-header {
    width: 100%;
    height: 64px;
    background-color: #002140;
    line-height: 64px;
    padding-left: 20px;
    img {
      width: 36px;
      vertical-align: middle;
    }
  }
  .slider-list {
    padding: 10px 0;
    height: 100%;
    .slider-item {
      padding: 0;
      display: block;
    }
  }
}
</style>
