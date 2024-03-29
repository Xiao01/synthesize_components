// components/father/father.js
Component({
  /**
   * 组件的属性列表
   */
  // properties: {

  // },

  /**
   * 组件的初始数据
   */
  // data: {
  //   rank: 1,
  // },

  /**
   * 组件的方法列表
   */
  // methods: {
   
    
  //   // 向调用页面发送值
  //   indexSendEvent: function (res) {
  //     console.log("indexSendEvent father.js接收从子组件传过来的值----" + res.detail )
  //     this.setData({
  //       rank: res.detail
  //     })
  //     this.triggerEvent("fatherSendEvent", res.detail); // sendEvent自定义名称事件
  //   }
  // },
  relations:{
    './../son/son':{
      type:'child',
      linked:function(target){
        console.log('[father]]  linked:',target)
      },
      linkChanged:function(target){
        console.log('[father]] linkChanged:',target)
      },
      unlinked:function(target){
        console.log('[father]] unlinked:',target)
      }
    },
    './../son1/son1': {
      type: 'child',
      linked: function (target) {
        console.log('[father]]  linked:', target)
      },
      linkChanged: function (target) {
        console.log('[father]] linkChanged:', target)
      },
      unlinked: function (target) {
        console.log('[father]] unlinked:', target)
      }
    }
  },
  methods:{
    _getAllLi:function(){
      var nodes = this.getRelationNodes('./../son/son')
      console.log(nodes)
      var nodes1 = this.getRelationNodes('./../son1/son1')
      console.log(nodes1)
    }
  },
  ready:function(){
    this._getAllLi()
  }
})
