<template>
  <div>
    <li class="menu">
      <router-link tag='div' :to="model.link" exact-active-class='menu-active' exact>
        <span @click="toggle(model.menuName)" :class="{'menu-son': model.parent === 1}"> 
          <img class="menu-icon" :src="model.icon" alt="">
          {{ model.menuName }}
        </span>
      </router-link>
    </li>
      <transition name='slide-fade' >
        <ul v-show="open" v-if="isFolder">
          <Menu v-for="item in model.childMenus" :model="item" :key="item.menuName" :icon="item.icon"></Menu>
        </ul>
      </transition>
  </div>
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
    toggle() {
      if (this.isFolder) {
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
  background-color: rgb(84, 92, 100);
  color: #fff;
  list-style: none;
  cursor: pointer;
  &:hover {
    background-color: rgb(67, 74, 80);
  }
  .menu-active {
    background-color: rgb(67, 74, 80);
  }
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
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
