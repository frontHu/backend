<template>
  <div class="slider">
    <div class="silder-header"></div>
    <div class="slider-list">
      <ul v-for="menuItem in theModel">
        <Menu :model="menuItem"></Menu>
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
          id: "1",
          menuName: "导航1",
          menuCode: "10",
          childMenus: [
            {
              menuName: "用户管理",
              menuCode: "11",
              childMenus: [
                {
                  menuName: "11111",
                  menuCode: "12",
                  childMenus: []
                }
              ]
            },
            {
              menuName: "角色管理",
              menuCode: "12",
              childMenus: []
            },
            {
              menuName: "菜单管理",
              menuCode: "13",
              childMenus: []
            }
          ]
        },
        {
          id: "1",
          menuName: "导航2",
          menuCode: "10",
          childMenus: []
        }
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
  }
}
</style>
