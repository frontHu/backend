<template>
  <li class="menu">
    <div 
      @click="toggle(model.menuName)" 
      :class="{'menu-son': model.parent === 1}"
    > 
      <img class="menu-icon" :src="model.icon" alt="">
      {{ model.menuName }}
    </div>
    <!-- <transition name="slide-fade" mode="out-in"> -->
      <ul v-show="open" v-if="isFolder">
        <Menu v-for="item in model.childMenus" :model="item" :key="item.menuId" :icon="item.icon"></Menu>
      </ul>
    <!-- </transition> -->
  </li>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      open: false
    };
  },
  props: ["model", "icon"],
  computed: {
    isFolder() {
      return this.model.childMenus && this.model.childMenus.length;
    }
  },
  methods: {
    toggle(msg) {
      console.log(this.icon, "cio");
      if (this.isFolder) {
        console.log(111);
        this.open = !this.open;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
  background-color: rgb(67, 74, 80);
  // padding-left: 10px;
  color: #fff;
  list-style: none;
  cursor: pointer;
  .menu-son {
    margin-left: 20px;
  }
  .menu-icon {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateX(10px);
  opacity: 0;
  height: auto;
}
</style>
