<template>
  <div class="slider">
    <div class="silder-header"></div>
    <div class="slider-list">
      <ul class="slider-item" v-for="(menuItem, index) in theModel" :key="index">
        <Menu :model="menuItem" :icon="menuItem.icon"></Menu>
      </ul>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "Slider",
  data() {
    return {
      theModel: [
        
        {
          id: "2",
          menuName: "这是我的文章",
          icon: require('./../../assets/icon2.png'),
          childMenus: [{
            id: '2-1',
            menuName: '前端小栈',
            icon: require('./../../assets/icon2-1.png'),
            parent: 1
          }, {
            id: '2-2',
            menuName: '其他东东',
            icon: require('./../../assets/icon2-2.png'),
            parent: 1
          }]
        },
        {
          id: "1",
          menuName: "写一篇文章",
          icon: require('./../../assets/icon1.png')
        },
      ]
    };
  },
  components: {
    Menu: Menu
  }
};
</script>

<style scoped lang='scss'>
.slider {
  width: 256px;
  height: 100%;
  background-color: rgb(84, 92, 100); //67,74,80
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  .silder-header {
    width: 100%;
    height: 64px;
    background-color: #002140;
  }
  .slider-list {
    padding: 10px 0;
    height: 100%;
    .slider-item {
      display: block;
    }
  }
}
</style>
