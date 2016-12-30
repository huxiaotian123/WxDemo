Page({
  onLoad:function(){
     console.log("!onLoad");
    wx.getSystemInfo({
      success: function(res) {
      console.log("!~~~~~");
        this.setData(
          {
           scrollview_height :"200px" 
          }
        );
      }
    })
  },
  data: {
    scrollview_height:"100px",
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
)
