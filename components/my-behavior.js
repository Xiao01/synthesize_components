module.exports=Behavior({
  behaviors:[],
  properties:{
    myBehaviorProperty:{
      type:String
    }
  },
  data:{
    myBehaviorData:{},
    count:1
  },
  attached:function(){},
  methods:{
    myBehaviorMethod:function(){
      console.log('count:' + this.data.count)
    }
  }
})