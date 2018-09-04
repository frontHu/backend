<template>
  <li>
    <span >
      <i v-if="!isFolder" class="icon file-text">●</i>
      {{ model.menuName }}
      <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
    </span>
    <ul v-show="open" v-if="isFolder">
      <Menu v-for="item in model.childMenus" :model="item" :key="item.menuId"></Menu>
    </ul>
  </li>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      open: false,
    }
  },
  props: ['model'],
  computed: {
    isFolder() {
      return this.model.childMenus && this.model.childMenus.length
    }
  },
  methods: {
    toggle(msg,menuUrl,menuPath) {
      if(this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
  background-color: rgb(67, 74, 80);
  padding-left: 20px;
  color: #fff;
}
</style>
