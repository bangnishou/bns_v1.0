Page({
  /**
   * 页面的初始数据
   */
  data: {
    leftMenuOpen: false,
    tdata: [
      {
        a: "1",
        b: false
      },
      {
        a: "2",
        b: true
      },
      {
        a: "3",
        b: true
      }
    ],
    master: []
  },

  onShow: function () {
    this.setData({
      tdata: [
        {
          a: "11",
          b: "true"
        }
      ]
    });
  },

  //左侧导航的开关函数
  leftMenu: function () {
    this.data.leftMenuOpen ? this.setData({ leftMenuOpen: false }) : this.setData({ leftMenuOpen: true });
  },

  del: function (e) {
    let val = e.currentTarget.dataset.val;    
    for (let i = 0; i < this.data.tdata.length; i++) {
      if (this.data.tdata[i].a == val){
        this.data.tdata.splice(i, 1);
      }
    }
  }
})