// test.js

Page({

  /**
   * 页面的初始数据
   */
  

  data: {
    num :196,
    index: 1,
    answer:1,
    cnindex0: 1,
    cnindex1: 1,
    cnindex2: 1,
    cnindex3: 1,
    text: [
      {
        english: "alliance",
        chinese: "n.联盟 "
      },
      {
        english: "campaign",
        chinese: "n.战役，运动 "
      },
      {
        english: "conquest",
        chinese: "n.战胜，征服 "
      },
      {
        english: "crucial",
        chinese: "adj.重要的 "
      },
      {
        english: "decisive",
        chinese: "adj.决定性的 "
      },
      {
        english: "declaration",
        chinese: "n.公告 "
      },
      {
        english: "efficient",
        chinese: "adj.有效率的 "
      },
      {
        english: "engage",
        chinese: "v.吸引 "
      },
      {
        english: "heroic",
        chinese: "adj.英勇的 "
      },
      {
        english: "instruct",
        chinese: "v.指导，命令 "
      },
      {
        english: "invasion",
        chinese: "n.入侵 "
      },
      {
        english: "launch",
        chinese: "v.发动 "
      },
      {
        english: "limp ",
        chinese: "v.一瘸一拐地走 "
      },
      {
        english: "minus ",
        chinese: "v.减 "
      },
      {
        english: "occupation",
        chinese: "n.职业，占有 "
      },
      {
        english: "offensive",
        chinese: "adj.冒犯的 "
      },
      {
        english: "raw ",
        chinese: "adj.阴冷的 "
      },
      {
        english: "reckon",
        chinese: "v.计算，认为 "
      },
      {
        english: "region",
        chinese: "n.地区 "
      },
      {
        english: "render",
        chinese: "v.使成为 "
      },
      {
        english: "resistance",
        chinese: "n.抵抗 "
      },
      {
        english: "siege ",
        chinese: "v.围攻 "
      },
      {
        english: "stroke",
        chinese: "n.打击 "
      },
      {
        english: "toll ",
        chinese: "v.征收 "
      },
      {
        english: "underestimat",
        chinese: "v.低估 "
      },
      {
        english: "weaken",
        chinese: "v.使虚弱 "
      },
      {
        english: "aboard",
        chinese: "adv.在船/飞机上 "
      },
      {
        english: "ambitious",
        chinese: "adj.雄心勃勃的 "
      },
      {
        english: "boast ",
        chinese: "v.吹嘘 "
      },
      {
        english: "cancel",
        chinese: "v.取消 "
      },
      {
        english: "concern",
        chinese: "v.关心 "
      },
      {
        english: "contest",
        chinese: "v.争辩 "
      },
      {
        english: "objective",
        chinese: "adj.客观的 "
      },
      {
        english: "obstacle",
        chinese: "n.障碍,干扰 "
      },
      {
        english: "responsible",
        chinese: "adj.负责的 "
      },
      {
        english: "secure",
        chinese: "adj.安全的 "
      },
      {
        english: "stiff ",
        chinese: "adj.呆板;坚硬的 "
      },
      {
        english: "withstand",
        chinese: "v.抵抗 "
      },
      {
        english: "alert ",
        chinese: "v.使警觉 "
      },
      {
        english: "apart ",
        chinese: "adj.分离的 "
      },
      {
        english: "application",
        chinese: "n.应用,申请 "
      },
      {
        english: "approximately",
        chinese: "adv.大约,近似地 "
      },
      {
        english: "automate",
        chinese: "v.使自动化 "
      },
      {
        english: "bunch",
        chinese: "n.群,串 "
      },
      {
        english: "calculate",
        chinese: "v.计算 "
      },
      {
        english: "computerize",
        chinese: "v.使电脑化 "
      },
      {
        english: "correlate",
        chinese: "v.使相互有关联 "
      },
      {
        english: "decrease",
        chinese: "v.减少 "
      },
      {
        english: "detect",
        chinese: "v.观察,发现 "
      },
      {
        english: "eliminate",
        chinese: "v.消除,排除 "
      },
      {
        english: "expansion",
        chinese: "n.扩张 "
      },
      {
        english: "frequency",
        chinese: "n.频率 "
      },
      {
        english: "hazard",
        chinese: "v.赌运气 "
      },
      {
        english: "incorporate",
        chinese: "v.包含,吸收,合并 "
      },
      {
        english: "lane ",
        chinese: "n.小巷,航线,车道 "
      },
      {
        english: "lucrative",
        chinese: "adj.有利可图的 "
      },
      {
        english: "magnetic",
        chinese: "adj.有磁性/吸引力 "
      },
      {
        english: "monotonous",
        chinese: "adj.单调,无变化的 "
      },
      {
        english: "mount",
        chinese: "v.增加,爬上 "
      },
      {
        english: "orbit ",
        chinese: "n.轨道,眼眶 "
      },
      {
        english: "prototype",
        chinese: "n.原型,标准,模范 "
      },
      {
        english: "remote",
        chinese: "adj.遥远的,偏僻的 "
      },
      {
        english: "satellite",
        chinese: "n.人造卫星 "
      },
      {
        english: "signal ",
        chinese: "n.信号;v.标志 "
      },
      {
        english: "steer ",
        chinese: "v.控制,引导,驾驶 "
      },
      {
        english: "vapor ",
        chinese: "n.蒸汽,烟雾 "
      },
      {
        english: "vibrate",
        chinese: "v.震动,颤动 "
      },
      {
        english: "accommodat",
        chinese: "v.适应,调节 "
      },
      {
        english: "address",
        chinese: "v.着手解决 "
      },
      {
        english: "affordable",
        chinese: "adj.支付得起的 "
      },
      {
        english: "component",
        chinese: "n.元件,组件 "
      },
      {
        english: "costly ",
        chinese: "adj.昂贵的 "
      },
      {
        english: "equivalent",
        chinese: "n.等价物 "
      },
      {
        english: "exposure",
        chinese: "v.暴露 "
      },
      {
        english: "feasible",
        chinese: "adj.可行的,可能的 "
      },
      {
        english: "implement",
        chinese: "v.贯彻,执行 "
      },
      {
        english: "mature",
        chinese: "v.成熟 "
      },
      {
        english: "realistic",
        chinese: "adj.真实的 "
      },
      {
        english: "resume",
        chinese: "v.继续 "
      },
      {
        english: "select",
        chinese: "v.选择 "
      },
      {
        english: "shift",
        chinese: "v.转移 "
      },
      {
        english: "stress",
        chinese: "n.压力 v.使紧张 "
      },
      {
        english: "thereby",
        chinese: "adv.因此,从而"
      },
      {
        english: "applicant",
        chinese: "n.申请人,求职者 "
      },
      {
        english: "barely",
        chinese: "adv.仅够,几乎没有 "
      },
      {
        english: "beforehand",
        chinese: "adv.事先 "
      },
      {
        english: "blurt",
        chinese: "v.不加思考地说出 "
      },
      {
        english: "chuckle",
        chinese: "v.咯咯的笑 "
      },
      {
        english: "endeavor",
        chinese: "n.&v.努力,尽力 "
      },
      {
        english: "generously",
        chinese: "adv.慷慨地 "
      },
      {
        english: "grill",
        chinese: "v.盘问,烧烤 "
      },
      {
        english: "inadequate",
        chinese: "adj.不适当的 "
      },
      {
        english: "incidentally",
        chinese: "adv.顺便提起地 "
      },
      {
        english: "measurable",
        chinese: "adj.可测量的 "
      },
      {
        english: "partner",
        chinese: "n.搭档,同伙 "
      },
      {
        english: "physically",
        chinese: "adj.身体上的 "
      },
      {
        english: "preparation",
        chinese: "n.准备,预备 "
      },
      {
        english: "prospective",
        chinese: "adj.预期的 "
      },
      {
        english: "respond",
        chinese: "v.回答 "
      },
      {
        english: "rude",
        chinese: "adj.粗鲁的 "
      },
      {
        english: "sparkle",
        chinese: "v.显露 "
      },
      {
        english: "structure",
        chinese: "n.构造,结构 "
      },
      {
        english: "taxi",
        chinese: "v.在水面滑行 "
      },
      {
        english: "veteran",
        chinese: "n.老兵 "
      },
      {
        english: "administratio",
        chinese: "n.管理,行政部门 "
      },
      {
        english: "benign",
        chinese: "adj.仁慈的 "
      },
      {
        english: "brand",
        chinese: "n.商标 "
      },
      {
        english: "carve",
        chinese: "v.雕刻 "
      },
      {
        english: "clatter",
        chinese: "v.卡塔卡塔的响 "
      },
      {
        english: "coil",
        chinese: "v.盘绕 "
      },
      {
        english: "fright",
        chinese: "n.惊骇,吃惊 "
      },
      {
        english: "intricate",
        chinese: "adj.复杂的,错综的 "
      },
      {
        english: "lengthen",
        chinese: "v.使变长 "
      },
      {
        english: "messenger",
        chinese: "n.信使 "
      },
      {
        english: "mortal",
        chinese: "adj.终有一死的 "
      },
      {
        english: "pregnant",
        chinese: "adj.怀孕的,妊娠的 "
      },
      {
        english: "quiver",
        chinese: "v.颤抖 "
      },
      {
        english: "scrap",
        chinese: "n.小块,少许 "
      },
      {
        english: "tear",
        chinese: "v.撕碎 "
      },
      {
        english: "unable",
        chinese: "adj.不能的 "
      },
      {
        english: "academic",
        chinese: "n.学者;adj.学术的 "
      },
      {
        english: "accelerate",
        chinese: "v.使…加速 "
      },
      {
        english: "advantageous",
        chinese: "adj.有利的 "
      },
      {
        english: "aspire ",
        chinese: "v.渴望得到 "
      },
      {
        english: "asset ",
        chinese: "n.财产;优势 "
      },
      {
        english: "center",
        chinese: "v.置于中央 "
      },
      {
        english: "considerable",
        chinese: "adj.相当大的 "
      },
      {
        english: "contradiction",
        chinese: "adj.矛盾 "
      },
      {
        english: "displace",
        chinese: "v.取代…的位置 "
      },
      {
        english: "divorce",
        chinese: "v.使分离，离婚 "
      },
      {
        english: "domestic",
        chinese: "adj.本国的 "
      },
      {
        english: "earnest",
        chinese: "adj.诚挚的 "
      },
      {
        english: "economy",
        chinese: "n.经济;经济制度 "
      },
      {
        english: "elsewhere",
        chinese: "adv.在别处 "
      },
      {
        english: "endorse",
        chinese: "v.赞同,认可 "
      },
      {
        english: "entitle",
        chinese: "v.给…题名 "
      },
      {
        english: "erase ",
        chinese: "v.擦掉,抹掉 "
      },
      {
        english: "establishment",
        chinese: "n.当权派 "
      },
      {
        english: "facilitate",
        chinese: "v.使容易 "
      },
      {
        english: "forefront",
        chinese: "n.最前面 "
      },
      {
        english: "growth",
        chinese: "n.生长 "
      },
      {
        english: "increasingly",
        chinese: "adv.在别处 "
      },
      {
        english: "investment",
        chinese: "n.投资 "
      },
      {
        english: "landmark",
        chinese: "adj.有重大意义的 "
      },
      {
        english: "network",
        chinese: "v.交际 "
      },
      {
        english: "outlook",
        chinese: "n.观点，看法 "
      },
      {
        english: "overtake",
        chinese: "v.赶上;超过 "
      },
      {
        english: "patriotic",
        chinese: "adj.爱国的 "
      },
      {
        english: "pendulum",
        chinese: "n.摆;钟摆 "
      },
      {
        english: "strengthen",
        chinese: "v.加强 "
      },
      {
        english: "unlike ",
        chinese: "adj.不像 "
      },
      {
        english: "vanish",
        chinese: "v.不见;不复存在 "
      },
      {
        english: "witness",
        chinese: "n.目击者 v.目击 "
      },
      {
        english: "advantage",
        chinese: "n.好处 "
      },
      {
        english: "currency",
        chinese: "n.货币 "
      },
      {
        english: "fatigue",
        chinese: "n.疲劳 "
      },
      {
        english: "globalize",
        chinese: "v.使全球化 "
      },
      {
        english: "herald",
        chinese: "v.预报；预示 "
      },
      {
        english: "inherent",
        chinese: "adj.内在,固有的 "
      },
      {
        english: "namely",
        chinese: "adv.就是，即 "
      },
      {
        english: "originate",
        chinese: "v.发源，开始 "
      },
      {
        english: "participation",
        chinese: "n.参与 "
      },
      {
        english: "software",
        chinese: "n.软件 "
      },
      {
        english: "stable",
        chinese: "adj.稳定的 "
      },
      {
        english: "subsidy",
        chinese: "n.补贴 "
      },
      {
        english: "affectionate",
        chinese: "adj.充满爱的 "
      },
      {
        english: "broke ",
        chinese: "adj.一文不值的 "
      },
      {
        english: "candid",
        chinese: "adj.直言不讳的 "
      },
      {
        english: "capable",
        chinese: "adj.能干的 "
      },
      {
        english: "constitution",
        chinese: "n.宪法 "
      },
      {
        english: "current",
        chinese: "n.水流 "
      },
      {
        english: "deceptive",
        chinese: "adj.靠不住的 "
      },
      {
        english: "definite",
        chinese: "adj.明确的 "
      },
      {
        english: "hitherto",
        chinese: "adv.迄今为止 "
      },
      {
        english: "insane",
        chinese: "adj.蠢极的 "
      },
      {
        english: "instinct",
        chinese: "n.本能，直觉 "
      },
      {
        english: "mild ",
        chinese: "adj.温和的 "
      },
      {
        english: "oddly ",
        chinese: "adv.奇特地 "
      },
      {
        english: "pawn ",
        chinese: "v.抵押 "
      },
      {
        english: "rub ",
        chinese: "v.摩擦 "
      },
      {
        english: "sip ",
        chinese: "v.小口抿 "
      },
      {
        english: "spicy ",
        chinese: "adj.下流的;辛辣的 "
      },
      {
        english: "stroke",
        chinese: "v.轻抚 "
      },
      {
        english: "transparent",
        chinese: "adj.透明的 "
      },
      {
        english: "trim ",
        chinese: "v.击败 "
      },
      {
        english: "vacancy",
        chinese: "n.空缺 "
      },
      {
        english: "vanity ",
        chinese: "n.虚荣 "
      },
      {
        english: "wrinkle",
        chinese: "v.使起皱纹 "
      },
      {
        english: "assumption",
        chinese: "n.假定 "
      },
      {
        english: "dump ",
        chinese: "v.倾倒 "
      },
      {
        english: "fate ",
        chinese: "n.命运 "
      },
      {
        english: "guilt ",
        chinese: "n.内疚 "
      },
      {
        english: "layer ",
        chinese: "n.层 "
      },
      {
        english: "literally",
        chinese: "adv.简直 "
      },
      {
        english: "shaky ",
        chinese: "adj.颤抖的 "
      },
      {
        english: "sheer ",
        chinese: "adj.全然的,纯粹的"
      },
    ] 
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      index: ((Math.ceil((Math.random()*100)*100))%this.data.num)
    }),
    this.setData({
      answer: ((Math.ceil((Math.random() * 100) * 100)) % 4)
    }),
    this.setData({
      cnindex0: 0 == this.data.answer ? this.data.index : (this.data.index + Math.ceil(Math.random() * 100)) % this.data.num
    }),
    this.setData({
      cnindex1: 1 == this.data.answer ? this.data.index : (this.data.index + Math.ceil(Math.random() * 100)) % this.data.num
    }),
    this.setData({
      cnindex2: 2 == this.data.answer ? this.data.index : (this.data.index + Math.ceil(Math.random() * 100)) % this.data.num
    }),
    this.setData({
      cnindex3: 3 == this.data.answer ? this.data.index : (this.data.index + Math.ceil(Math.random() * 100)) % this.data.num
    })
  },
  checkYES: function () {
    wx.redirectTo({
      url: '../test2/yemian',
    })
  },
  checkNO: function () {
    wx.showModal({
      cancelText: '我玩够了',
      confirmText: '好的',
      title: '回答错误',
      content: '要不要再想想？',
      success: function (res) {
        if (res.cancel) {
            wx.redirectTo({
              url: '../index/index',
            })
        }
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.changeText()
  },

  select1() {
    if (0 == this.data.answer){
      this.checkYES();
    }
    else{
      this.checkNO();
    }
  },
  select2() {
    if (1 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
  },
  select3() {
    if (2 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
  },
  select4() {
    if (3 == this.data.answer) {
      this.checkYES();
    }
    else {
      this.checkNO();
    }
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