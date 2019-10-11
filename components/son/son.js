// components/son/son.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    grade:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 向父组件发送值
    sendMesgToFather: function () {
      this.data.grade = this.data.grade + 1
      console.log("sendMesgToFather son.js 向父组件发送值====this.data.grade:" + this.data.grade);
      this.triggerEvent('sonSendEvent', this.data.grade)
    }

  },
  ready: function () {
    // console.log("this.data.grade====", this.data.grade);
    // this.triggerEvent("sendEvent", "我来自子组件的ready生命周期"); 
  },


})
