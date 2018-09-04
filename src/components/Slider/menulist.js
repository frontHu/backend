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
    link: "/home/article",
    // childMenus: [{
    //   id: '2-1',
    //   menuName: '前端小栈',
    //   parent: 1,
    //   icon: require('./../../assets/icon2-1.png'),
    //   link: "/home/article",
    // }, {
    //   id: '2-2',
    //   menuName: '其他东东',
    //   parent: 1,
    //   icon: require('./../../assets/icon2-2.png'),
    //   link: "/home/article",
    // }]
  },{
    id: '3',
    menuName: '我的草稿箱',
    parent: -1,
    icon: require('./../../assets/icon2-2.png'),
    link: "/home/trash"
  }
]