const app = getApp()


Page({
    data: {
        grids: [0, 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12]
    },
onLoad: function () {
  app.globalData.template.tabbar("tabBar", 1, this)
  }

});