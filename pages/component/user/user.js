var param = {
  onLoad:function(){
     console.log("!onLoad");
      var that = this;
    wx.getSystemInfo({
      success: function(res) {
      console.log(res);
      var scrollheight =  res.windowHeight - 140;
        that.setData({scrollview_height:scrollheight+"px"});
      }
    })
  },
  data: {
    scrollview_height:"1000rpx",
    userInfoList: [ {
      image:'/image/name.png',
      name: 'hxt'
    },{
      image:'/image/phone.png',
      name: '18062207006'
    },
    {
      image:'/image/position.png',
      name: '房友测试组2 系统管理组-测试植物001031023'
    }],
    houseList: [ {
      image:'/image/house.png',
      name: "关注房源",
      showLine:true
     
    },{
    showLine:true,
    image:'/image/contact.png',
    name: "最近联系"
    },
    {
    showLine:true,
    image:'/image/follow.png',
    name: "最近跟进"
    },
    {
    showLine:false,
     image:'/image/view.png',
      name:"最近查看"
    }],
     customerList: [ {
      showLine:true,
      image:'/image/customer.png',
      name: "关注客源"
     
    },{
    showLine:true,
    image:'/image/contact.png',
    name: "最近联系"
    },
    {
     showLine:true,
    image:'/image/follow.png',
      name: "最近跟进"
    },
    {
      showLine:true,
     image:'/image/view.png',
      name:"最近查看"
    }]
  }, 
}

Page(param)

