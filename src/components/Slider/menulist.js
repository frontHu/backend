export default [
  {
    id: "1",
    menuName: "写一篇文章",
    parent: -1,
    icon: require('./../../assets/icon1.png'),
    link: "/home/markdown",
  },
  {
    id: "2",
    menuName: "我的文章库",
    parent: -1,
    icon: require('./../../assets/icon2.png'),
    link: "/home/article"
  },{
    id: '3',
    menuName: '我的草稿箱',
    parent: -1,
    icon: require('./../../assets/icon3.png'),
    link: "/home/trash"
  }, {
    id: '4',
    menuName: '我的友链',
    parent: -1,
    icon: require('./../../assets/icon4.png'),
    link: '/home/friends'
  }
]