//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/index1.png",
      "selectedIconPath": "/images/index.png",
      "text": "主页",
      "pop":""
    },
    {
      "current": 0,
      "pagePath": "/pages/grid/grid",
      "iconPath": "/images/more1.png",
      "selectedIconPath": "/images/more.png",
      "text": "更多",
      "pop": "2"
    }
  ]
}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  
  bindData[bindName] = otabbar
  console.log("bindData:  " + JSON.stringify(bindData))
  that.setData({ bindData });
   
}


module.exports = {
  tabbar: tabbarmain,
  
}