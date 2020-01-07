var app = getApp()
Page({
  data: {
    phonenumber: '',    //账号；
    password: '',       //密码；
    bgimg: '/images/0.png',
    numShow: 'none',
    psdShow: 'none',
    modelInnerHtml: '123',
    loadingHidden: true,
    modalHidden: true,
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['请选择', '学生', '教师'], //下拉列表的数据
    index: 0 //选择的下拉列表下标
  },

  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },

  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

  //选择登录类型。  by小锐！  
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      inputValue: '',
      //更新头像，后面要换成我们自己的图床地址。 by小锐！
      bgimg: '/images/' + e.detail.value + '.png'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            })
            //that.update()
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },

  // 账号修改
  bindNumInput: function (e) {
    this.setData({
      numShow: 'none',
      phonenumber: e.detail.value
    })
    //console.log(this.data.phonenumber)
  },
  // 密码修改
  bindPsdInput: function (e) {
    this.setData({
      psdShow: 'none',
      password: e.detail.value
    })
    //console.log(this.data.password)
  },
  // 账号失去焦点
  numChange: function () {
    if (this.data.phonenumber == '') {
      this.setData({
        numShow: '',
        psdShow: 'none'
      })

      console.log('手机号不能为空' + this.data.numShow);
    }
  },
  // 密码失去焦点
  psdChange: function () {
    if (this.data.password == '') {
      this.setData({
        numShow: 'none',
        psdShow: ''
      })

      console.log('密码不能为空' + this.data.psdShow);
    }
  },
  // 弹窗消失
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },

  // 点击提交按钮
  loginSubmit: function (e) {
    console.log(this);
    var that = this;
    var index = this.data.index;
    if (this.data.index != 0 && this.data.phonenumber != '' && this.data.password != ''){
      //学生端,index==1,教师端,index==2.  by小锐！
      // var urlStr = 'http://localhost:8080/login/student';
      if(index==1){
        var urlStr = app.globalData.url + 'login/student' + '?' ;
      }else if(index==2){
        var urlStr = app.globalData.url + 'login/teacher' + '?' ;
      }

      //交互数据这一块！
      this.setData({
        numShow: 'none',
        psdShow: 'none',
        loadingHidden: false
      })

      //向后台清求数据的函数方法，此处便于调试先关闭！  by小锐！
      // wx.request({
      //   dataType: "json",
      //   method: "GET",
      //   //为上面修改的url。  by小锐！
      //   url: urlStr,
      //   data: {
      //     account: this.data.phonenumber,
      //     password: this.data.password
      //   },
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      //   },
      //   // 此处先省略一些验证处理，即登录成功与否，登录成功后返回用户在的数据库地址等等全局变量后续再写！ by小锐！
      //   success:function(res){
      //     //验证账户密码是否正确的！后续得改为传回的值！
      //     var flag=true;
      //     if(flag){
      //       if (index == 1) {
      //         wx.redirectTo({
      //           url: '../student/student',
      //         })
      //       }else if(index == 2){
      //         wx.redirectTo({
      //           url: '../teacher/teacher',
      //         })
      //       }
      //     }
      //   }
      // })
      
      //下面这个我先用来测试界面的，后续需要删掉！  by小锐！
      if (index == 1) {
          wx.redirectTo({
            url: '../student/student',
          })
        }else if(index == 2){
          wx.redirectTo({
            url: '../teacher/teacher',
          })
      }
    }

    //以下为各种非法输入！  by小锐！
    else if (this.data.index == 0) {
      this.setData({
        numShow: '',
        psdShow: 'none',
        modelInnerHtml: '登陆者类型不能为空',
        modalHidden: false
      })
    }
    else if (this.data.index != 0 && this.data.phonenumber == '') {
      this.setData({
        numShow: '',
        psdShow: 'none',
        modelInnerHtml: '账号不能为空',
        modalHidden: false
      })
    }
    else if (this.data.password == '' && this.data.phonenumber != '' && this.data.index != 0) {
      this.setData({
        numShow: 'none',
        psdShow: '',
        modelInnerHtml: '密码不能为空',
        modalHidden: false
      })
    }
    else {
      this.setData({
        numShow: '',
        psdShow: '',
        modelInnerHtml: '账号密码不能为空',
        modalHidden: false
      })
    }
  },

  // 点击找回密码
  RandP: function () {
    this.setData({
      modelInnerHtml: '请与辅导员联系！',
      modalHidden: false
    })
    console.log("暂不支持注册和密码找回")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})