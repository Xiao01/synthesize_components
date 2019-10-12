// components/observers/observers.js
Component({
  observers:{
    'numberA1,numberB1': function (numberA1, numberB1){
      this.setData({
        sum1:numberA1 +numberB1
      })
    }
  },
  attached:function(){
    this.setData({
      numberA1:1,
      numberB1:2,
    })
  }
})
