// test.js

Page({

  /**
   * 页面的初始数据
   */


  data: {
    num: 10,
    index: 1,
    answer: 1,
    rightNum: -1,
    wrongNum: -1,
    cnindex0: 1,
    cnindex1: 1,
    cnindex2: 1,
    cnindex3: 1,
    text: [
      {
        english: "style",
        chinese: " n.行为方式,风格 "
      }
      ],
    text1: [
    {
      english: "get by  ",
      chinese: "过得去"
    },
    {
      english: "frustration ",
      chinese: "挫折；令人失望"
    },
    {
      english: "suburban ",
      chinese: "郊区的"
    },
    {
      english: "suburb ",
      chinese: "郊区"
    },
    {
      english: "contentment ",
      chinese: "满足"
    },
    {
      english: "honey ",
      chinese: "蜂蜜"
    },
    {
      english: "make it ",
      chinese: "成功"
    },
    {
      english: "canoe ",
      chinese: "独木木舟"
    },
    {
      english: "sunset  ",
      chinese: "日落(n)"
    },
    {
      english: "sunrise ",
      chinese: "日出(n)"
    },
    {
      english: "hawk ",
      chinese: "鹰"
    },
    {
      english: "cornfield ",
      chinese: "玉米田"
    },
    {
      english: "haul ",
      chinese: "(用马车，卡车)搬运"
    },
    {
      english: "firewood",
      chinese: "木柴"
    },
    {
      english: "sled",
      chinese: "雪橇"
    },
    {
      english: "retile",
      chinese: "重新用瓦盖"
    },
    {
      english: "long-overdue",
      chinese: "拖了很久的"
    },
    {
      english: "overdue  ",
      chinese: "早该有的；早该发生的"
    },
    {
      english: "improvement ",
      chinese: "改进"
    },
    {
      english: "supplement",
      chinese: "补充；增加"
    },
    {
      english: "indoor",
      chinese: "室内的"
    },
    {
      english: "spray",
      chinese: "喷；洒"
    },
    {
      english: "orchard",
      chinese: "果园"
    },
    {
      english: "barn",
      chinese: "谷仓"
    },
    {
      english: "chick ",
      chinese: "小鸡"
    },
    {
      english: "typewriter ",
      chinese: "打字机"
    },
    {
      english: "freelance ",
      chinese: "自由撰稿人"
    },
    {
      english: "pursue ",
      chinese: "努力去获得，追求"
    },
    {
      english: "household",
      chinese: "家庭的；普通的；家庭"
    },
    {
      english: "oversee ",
      chinese: "看管"
    },
    {
      english: "beehive ",
      chinese: "蜂窝"
    },
    {
      english: "organ ",
      chinese: "风琴；器官"
    },
    {
      english: "stack ",
      chinese: "一堆"
    },
    {
      english: "wicked ",
      chinese: "邪恶的；坏的"
    },
    {
      english: "overflow ",
      chinese: "溢出；泛滥"
    },
    {
      english: "swamp ",
      chinese: "淹没；压倒"
    },
    {
      english: "freezer ",
      chinese: "冰柜"
    },
    {
      english: "cherry ",
      chinese: "樱桃"
    },
    {
      english: "raspberry  ",
      chinese: "覆盆子；树莓"
    },
    {
      english: "asparagus",
      chinese: "芦笋"
    },
    {
      english: "bean",
      chinese: "豆；豆形果实"
    },
    {
      english: "canned-goods ",
      chinese: "罐装品"
    },
    {
      english: "cupboard ",
      chinese: "食橱；碗橱"
    },
    {
      english: "plum ",
      chinese: "李子；梅子"
    },
    {
      english: "jelly ",
      chinese: "果子冻"
    },
    {
      english: "squash ",
      chinese: "南瓜属植物"
    },
    {
      english: "pumpkin ",
      chinese: "南瓜"
    },
    {
      english: "gallon ",
      chinese: "加仑"
    },
    {
      english: "at that point ",
      chinese: "就在那时"
    },
    {
      english: "decidedly ",
      chinese: "肯定地；无疑地"
    },
    {
      english: "blessing ",
      chinese: "祝福"
    },
    {
      english: "bless",
      chinese: "为……祝福"
    },
    {
      english: "on balance ",
      chinese: "总的来说"
    },
    {
      english: "den ",
      chinese: "兽穴"
    },
    {
      english: "illustrate ",
      chinese: "举例说明"
    },
    {
      english: "hitch",
      chinese: "用-具套住"
    },
    {
      english: "dogsled ",
      chinese: "狗拉雪橇"
    },
    {
      english: "monster ",
      chinese: "怪物；妖怪"
    },
    {
      english: "digest ",
      chinese: "文摘；摘要"
    },
    {
      english: "boundary ",
      chinese: "边界；分界线"
    },
    {
      english: "widerness ",
      chinese: "荒野；荒地"
    },
    {
      english: "generate ",
      chinese: "形成；产生"
    },
    {
      english: "dental ",
      chinese: "牙的；和牙有关的"
    },
    {
      english: "insurance ",
      chinese: "保险；保险费"
    },
    {
      english: "policy ",
      chinese: "保险单；保险契约"
    },
    {
      english: "pick up ",
      chinese: "付（帐）"
    },
    {
      english: "minor ",
      chinese: "较少的；较小的"
    },
    {
      english: "premium ",
      chinese: "保险费；奖金；奖品"
    },
    {
      english: "aside from ",
      chinese: "除了"
    },
    {
      english: "cut back ",
      chinese: "减少；削减"
    },
    {
      english: "appreciably ",
      chinese: "能够感到地，可观的"
    },
    {
      english: "lower ",
      chinese: "降低；减少"
    },
    {
      english: "dine out ",
      chinese: "外出吃饭"
    },
    {
      english: "patronize ",
      chinese: "光顾；惠顾"
    },
    {
      english: "ballet ",
      chinese: "芭蕾舞"
    },
    {
      english: "extravagant ",
      chinese: "奢侈的；浪费的"
    },
    {
      english: "suspect ",
      chinese: "怀疑"
    },
    {
      english: "solitude ",
      chinese: "孤独"
    },
    {
      english: "budget ",
      chinese: "预算"
    },
    {
      english: "requirement  ",
      chinese: "要求，必要条件"
    },
    {
      english: "scale ",
      chinese: "规模"
    },
    {
      english: "on a small",
      chinese: "/large  scale  小规模地"
    },
    {
      english: "resist ",
      chinese: "抵制"
    },
    {
      english: "temptation ",
      chinese: "诱惑（n)"
    },
    {
      english: "device ",
      chinese: "设备，装置"
    },
    {
      english: "machinery ",
      chinese: "机器，机械"
    },
    {
      english: "horsepower ",
      chinese: "马力"
    },
    {
      english: "rotary ",
      chinese: "旋转的"
    },
    {
      english: "cultivator ",
      chinese: "耕耘机"
    },
    {
      english: "rotary  cultivator ",
      chinese: "旋转式耕耘机"
    },
    {
      english: "profit",
      chinese: "利润(n&&v)"
    },
    {
      english: "invest",
      chinese: "投资"
    },
    {
      english: "primarily ",
      chinese: "主要地；起初"
    }
    ],
    text2: [{
      english: "slender",
      chinese: "苗条的；细长的"
    },
    {
      english: "settlement ",
      chinese: "新拓居地；"
    },
    {
      english: "confident",
      chinese: "有信心的；确信的"
    },
    {
      english: "give up",
      chinese: "放弃"
    },
    {
      english: "creator",
      chinese: "造物主，上帝"
    },
    {
      english: "devotion",
      chinese: "深爱的，挚爱"
    },
    {
      english: "cabin",
      chinese: "小棚屋"
    },
    {
      english: "ironically ",
      chinese: "具有讽刺意味的是"
    },
    {
      english: "symbolize",
      chinese: "象征，标志"
    },
    {
      english: "racial",
      chinese: "种族的"
    },
    {
      english: "sellout",
      chinese: "背叛者；背叛"
    },
    {
      english: "unwilling ",
      chinese: "不愿意的；勉强的"
    },
    {
      english: "stand up",
      chinese: "(for) 支持"
    },
    {
      english: "historic ",
      chinese: "历史上有名或有重要意义的"
    },
    {
      english: "site",
      chinese: "地方，位置，遗址"
    },
    {
      english: "slavery",
      chinese: "受奴役的状态；奴隶制"
    },
    {
      english: "mission",
      chinese: "特殊使命，任务"
    },
    {
      english: "courageous",
      chinese: "勇敢的，无畏的"
    },
    {
      english: "forge",
      chinese: "建立，伪造"
    },
    {
      english: "forge a signature",
      chinese: "伪造签名"
    },
    {
      english: "underground",
      chinese: "秘密的；地下的"
    },
    {
      english: "web",
      chinese: "网状物；网状组织"
    },
    {
      english: "liberate ",
      chinese: "解放"
    },
    {
      english: "authorize",
      chinese: "批准，委托"
    },
    {
      english: "civil-rights",
      chinese: "民权的"
    },
    {
      english: "civil",
      chinese: "公民的"
    },
    {
      english: "exploit ",
      chinese: "功绩，业绩"
    },
    {
      english: "unsung",
      chinese: "未赞颂过的"
    },
    {
      english: "intent",
      chinese: "坚决的"
    },
    {
      english: "be intent on(sth./doing sth)",
      chinese: "热中于，坚决要做"
    },
    {
      english: "pistol",
      chinese: "手枪"
    },
    {
      english: "decade",
      chinese: "十年"
    },
    {
      english: "foundry ",
      chinese: "铸造车间，铸造厂"
    },
    {
      english: "on the side",
      chinese: "作为兼职；秘密地"
    },
    {
      english: "capture",
      chinese: "抓捕；捕获"
    },
    {
      english: "chilly ",
      chinese: "冷的，寒飕飕的"
    },
    {
      english: "fugitive",
      chinese: "逃亡者"
    },
    {
      english: "watchman ",
      chinese: "看守人；警卫员"
    },
    {
      english: "helplessly ",
      chinese: "无能为力地"
    },
    {
      english: "pursuer ",
      chinese: "追赶者；追捕者"
    },
    {
      english: "close in",
      chinese: "(on/around) 接近；包围"
    },
    {
      english: "hurriedly ",
      chinese: "仓促地"
    },
    {
      english: "wagon",
      chinese: "四轮运货马车"
    },
    {
      english: "painful",
      chinese: "疼痛的"
    },
    {
      english: "religious ",
      chinese: "宗教的"
    },
    {
      english: "conviction ",
      chinese: "坚定的看法或信仰"
    },
    {
      english: "Quaker",
      chinese: "公谊会教徒"
    },
    {
      english: "Bible",
      chinese: "《圣经》"
    },
    {
      english: "clothe",
      chinese: "给……穿衣服"
    },
    {
      english: "naked",
      chinese: "裸体的，赤条条的"
    },
    {
      english: "converge",
      chinese: "会合；集中"
    },
    {
      english: "terminal ",
      chinese: "终点，终端机"
    },
    {
      english: "magistrate ",
      chinese: "地方行政长官；执法官"
    },
    {
      english: "impose",
      chinese: "把……强加于"
    },
    {
      english: "jail",
      chinese: "监狱"
    },
    {
      english: "imprison",
      chinese: "(vt)  关押；监禁"
    },
    {
      english: "stripe ",
      chinese: "鞭打；抽打"
    },
    {
      english: "as for",
      chinese: "至于"
    },
    {
      english: "cake",
      chinese: "覆盖"
    },
    {
      english: "powder",
      chinese: "粉；粉末"
    },
    {
      english: "bonnet",
      chinese: "女帽"
    },
    {
      english: "veil",
      chinese: "面纱"
    },
    {
      english: "transport",
      chinese: "运输"
    },
    {
      english: "runaway",
      chinese: "逃跑的（人）、"
    },
    {
      english: "disguise  ",
      chinese: "伪装，假扮"
    },
    {
      english: "funeral",
      chinese: "葬礼；丧失"
    },
    {
      english: "procession ",
      chinese: "行列；队伍"
    },
    {
      english: "abolish",
      chinese: "废除"
    },
    {
      english: "virgin",
      chinese: "未开发的"
    },
    {
      english: "harshly",
      chinese: "严厉地，苛刻 的"
    },
    {
      english: "diligently ",
      chinese: "勤奋地"
    },
    {
      english: "compel",
      chinese: "强迫，强求"
    },
    {
      english: "plantation",
      chinese: "种植园"
    },
    {
      english: "salvation ",
      chinese: "拯救；"
    },
    {
      english: "pass for",
      chinese: "被当作"
    }
    ],
    text3: [{
      english: "latch",
      chinese: "门闩"
    },
    {
      english: "on the latch",
      chinese: "门关着但没有上锁"
    },
    {
      english: "close up",
      chinese: "关闭"
    },
    {
      english: "rural",
      chinese: "农村的"
    },
    {
      english: "vulnerable",
      chinese: "易受攻击的；无防御的"
    },
    {
      english: "well-patroled ",
      chinese: "巡查严密的"
    },
    {
      english: "urban ",
      chinese: "城市的"
    },
    {
      english: "statistics ",
      chinese: "统计；统计资料"
    },
    {
      english: "dramatically ",
      chinese: "(vd)显著地；戏剧性地"
    },
    {
      english: "allegedly  ",
      chinese: "(vd)据称"
    },
    {
      english: "tranquil   ",
      chinese: "宁静的"
    },
    {
      english: "era   ",
      chinese: "纪元"
    },
    {
      english: "dead-bolt   ",
      chinese: "防盗门"
    },
    {
      english: "electronic   ",
      chinese: "电子的"
    },
    {
      english: "hook up to   ",
      chinese: "连接到"
    },
    {
      english: "patio   ",
      chinese: "露台，平台"
    },
    {
      english: "elegantly ",
      chinese: "优雅地，高雅地"
    },
    {
      english: "build in ",
      chinese: "使成为建筑物的一部分"
    },
    {
      english: "pry",
      chinese: "撬开，撬动"
    },
    {
      english: "premise",
      chinese: "(n)房屋，假设，前提"
    },
    {
      english: "surveillance",
      chinese: "(n)监视"
    },
    {
      english: "feature ",
      chinese: "给……以显著地位，突出；由……主演"
    },
    {
      english: "padlock ",
      chinese: "挂锁；扣锁"
    },
    {
      english: "psychic",
      chinese: "精神的；心灵的；心理的"
    },
    {
      english: "transformation ",
      chinese: "(n)改变，转变"
    },
    {
      english: "put up ",
      chinese: "建造，设置"
    },
    {
      english: "barrier",
      chinese: "(n)障碍"
    },
    {
      english: "barricade",
      chinese: "(vt)在……设置路障"
    }
    ],
    text4: [{
      english: "wander ",
      chinese: "(vi)漫游，闲逛，徘徊"
    },
    {
      english: "X-ray",
      chinese: ""
    },
    {
      english: "terrorist ",
      chinese: "恐怖分子"
    },
    {
      english: "terror",
      chinese: "(n)恐怖"
    },
    {
      english: "hold/keep sb. at bay ",
      chinese: "不让……逼近"
    },
    {
      english: "frisker ",
      chinese: "搜身器"
    },
    {
      english: "without/with not so much as ",
      chinese: "甚至连……都没……"
    },
    {
      english: "sideways  ",
      chinese: "斜着（的），斜向一边（的）"
    },
    {
      english: "stand for ",
      chinese: "代表"
    },
    {
      english: "be bathed in ",
      chinese: "沉浸于"
    },
    {
      english: "analyze ",
      chinese: "分析"
    },
    {
      english: "with/by a small/large margin ",
      chinese: "小/大幅度地"
    },
    {
      english: "error ",
      chinese: "错误"
    },
    {
      english: "insecure  ",
      chinese: "不安全的"
    },
    {
      english: "secure  ",
      chinese: "安全的，可靠的"
    },
    {
      english: "civilize  ",
      chinese: "开化，使文明"
    },
    {
      english: "reflection ",
      chinese: "有损声誉的事，思考；反映"
    },
    {
      english: "puzzling ",
      chinese: "令人困惑的"
    },
    {
      english: "housewife ",
      chinese: "家庭主妇"
    },
    {
      english: "rape ",
      chinese: "强奸"
    },
    {
      english: "whistle",
      chinese: "哨子"
    },
    {
      english: "self-protection ",
      chinese: "自我保护"
    },
    {
      english: "outsmart ",
      chinese: "(vt)比……精明；智胜"
    },
    {
      english: "outsmart oneself",
      chinese: "聪明反被聪明误"
    },
    {
      english: "evil ",
      chinese: "(n)邪恶"
    },
    {
      english: "legacy ",
      chinese: "(n)遗产"
    },
    {
      english: "look back on",
      chinese: "回顾"
    },
    {
      english: "in a row",
      chinese: "连续地"
    },
    {
      english: "doze off",
      chinese: "打瞌睡，打盹儿"
    },
    {
      english: "briskly",
      chinese: "轻快地"
    },
    {
      english: "patent",
      chinese: "专利"
    },
    {
      english: "frail",
      chinese: "虚弱的"
    },
    {
      english: "approve",
      chinese: "赞成；同意；批准"
    },
    {
      english: "strain",
      chinese: "使紧张；拉紧，绷紧"
    },
    {
      english: "mess",
      chinese: "脏乱状态"
    },
    {
      english: "revolutionize",
      chinese: "彻底改变"
    },
    {
      english: "atom",
      chinese: "原子"
    },
    {
      english: "molecule",
      chinese: "分子"
    },
    {
      english: "photon",
      chinese: "光子"
    },
    {
      english: "foundation",
      chinese: "基础；基本原理"
    },
    {
      english: "quantum",
      chinese: "量子"
    },
    {
      english: "relativity",
      chinese: "相对论"
    },
    {
      english: "fabric",
      chinese: "织物，织品"
    },
    {
      english: "outburst",
      chinese: "（感情等的）爆发"
    },
    {
      english: "seclude",
      chinese: "使隔离"
    },
    {
      english: "outbreak",
      chinese: "（疾病等的）爆发"
    },
    {
      english: "plague",
      chinese: "瘟疫"
    },
    {
      english: "gravitation",
      chinese: "引力"
    },
    {
      english: "historian",
      chinese: "历史学家"
    },
    {
      english: "anniversary",
      chinese: "周年纪念日"
    },
    {
      english: "bushy-haired",
      chinese: "头发浓密的"
    },
    {
      english: "superthinker",
      chinese: "超级思想家"
    },
    {
      english: "physicist",
      chinese: "物理学家"
    },
    {
      english: "unravel",
      chinese: "解决，阐明"
    },
    {
      english: "remarkable",
      chinese: "值得注意的；非凡的"
    },
    {
      english: "author",
      chinese: "著书，写作"
    },
    {
      english: "irreverent",
      chinese: "不尊敬的"
    },
    {
      english: "come to/reach a conclusion",
      chinese: "得出结论"
    },
    {
      english: "zinc",
      chinese: "锌"
    },
    {
      english: "electron",
      chinese: "电子"
    },
    {
      english: "loose",
      chinese: "松的；不受束缚的；自由的"
    },
    {
      english: "spread-out",
      chinese: "展开的；散开的"
    },
    {
      english: "particulate",
      chinese: "粒子，微粒"
    },
    {
      english: "blackbody",
      chinese: "黑体"
    },
    {
      english: "radiation",
      chinese: "辐射"
    },
    {
      english: "particle",
      chinese: "粒子，质点"
    },
    {
      english: "unify",
      chinese: "使成一体；使结合"
    },
    {
      english: "magnetism",
      chinese: "磁性；磁力"
    },
    {
      english: "optics",
      chinese: "光学"
    },
    {
      english: "beyond",
      chinese: "（any）doubt 毫无疑问"
    },
    {
      english: "electromagnetic",
      chinese: "电磁体的"
    },
    {
      english: "presence",
      chinese: "出席，到场"
    },
    {
      english: "undermine",
      chinese: "暗中破坏；逐渐损害"
    },
    {
      english: "(never)get anywhere/get nowhere",
      chinese: "一事无成"
    },
    {
      english: "flaw",
      chinese: "缺陷"
    },
    {
      english: "beholden",
      chinese: "受惠的；铭感的"
    },
    {
      english: "thesis",
      chinese: "论文"
    },
    {
      english: "advisor",
      chinese: "顾问；指导教师"
    },
    {
      english: "roam",
      chinese: "漫游"
    },
    {
      english: "accordingly",
      chinese: "因此；从而；相应的"
    },
    {
      english: "bizarre",
      chinese: "稀奇古怪的"
    },
    {
      english: "duality",
      chinese: "两重性；二元性"
    },
    {
      english: "baffle",
      chinese: "使困惑，难住"
    },
    {
      english: "disdain",
      chinese: "轻视；蔑视"
    },
    {
      english: "caution",
      chinese: "小心，谨慎"
    },
    {
      english: "intuitive",
      chinese: "直觉的"
    },
    {
      english: "believe in",
      chinese: "认为（某事）是正确的或合适的；对.....有信心"
    },
    {
      english: "intuition",
      chinese: "直觉"
    },
    {
      english: "inspiration",
      chinese: "灵感"
    },
    {
      english: "dynamo",
      chinese: "发电机"
    },
    {
      english: "arc",
      chinese: "弧光"
    },
    {
      english: "bulb",
      chinese: "灯泡"
    },
    {
      english: "high-tech",
      chinese: "高科技的"
    },
    {
      english: "at the turn of the century",
      chinese: "在世纪初"
    },
    {
      english: "silicon",
      chinese: "硅"
    },
    {
      english: "couch",
      chinese: "长沙发"
    },
    {
      english: "impressive",
      chinese: "给人以深刻印象"
    },
    {
      english: "concentration",
      chinese: "集中；专心"
    },
    {
      english: "precariously",
      chinese: "不稳的；易倒塌的"
    },
    {
      english: "inkwell",
      chinese: "墨水池"
    },
    {
      english: "backrest",
      chinese: "靠背"
    },
    {
      english: "engross",
      chinese: "使全神贯注"
    },
    {
      english: "stimulate",
      chinese: "使兴奋；刺激"
    },
    {
      english: "outlandishly",
      chinese: "奇特的"
    },
    {
      english: "passionately",
      chinese: "热情的"
    },
    {
      english: "assessment",
      chinese: "评价"
    },
    {
      english: "reality",
      chinese: "现实"
    },
    {
      english: "grotesque",
      chinese: "荒唐的"
    },
    {
      english: "credit",
      chinese: "把....归于"
    },
    {
      english: "imagination",
      chinese: "想象力"
    },
    {
      english: "orthodox",
      chinese: "正统的；传统的"
    },
    {
      english: "mightily",
      chinese: "强有力的"
    },
    {
      english: "gravity",
      chinese: "重力，引力"
    },
    {
      english: "brainpower",
      chinese: "智力，智能"
    },
    {
      english: "crinkly",
      chinese: "起皱的；波状的"
    },
    {
      english: "if anything",
      chinese: "要说有什么区别的话；甚至正相反"
    },
    {
      english: "trifle",
      chinese: "少量；少许"
    },
    {
      english: "a trifle",
      chinese: "有点儿，稍微"
    }
    ],
    text5: [{
      english: "coastguardsman",
      chinese: "海岸警卫员"
    },
    {
      english: "under way ",
      chinese: "航行中；工作中"
    },
    {
      english: "carton ",
      chinese: "硬纸盒，纸板箱"
    },
    {
      english: "bomb",
      chinese: "炸弹"
    },
    {
      english: "pad",
      chinese: "用软的材料衬垫"
    },
    {
      english: "rack",
      chinese: "炮弹架"
    },
    {
      english: "ashore",
      chinese: "在岸上"
    },
    {
      english: "traditional",
      chinese: "传统的"
    },
    {
      english: "turkey",
      chinese: "火鸡"
    },
    {
      english: "put away",
      chinese: "放好"
    },
    {
      english: "sundown",
      chinese: "日落时分"
    },
    {
      english: "afterdeck",
      chinese: "后甲板"
    },
    {
      english: "draught",
      chinese: "气流"
    },
    {
      english: "get to sth./doing sth.",
      chinese: "开始认真思考，做"
    },
    {
      english: "cob",
      chinese: "玉米；穗轴"
    },
    {
      english: "and the rest",
      chinese: "等等"
    },
    {
      english: "quest",
      chinese: "寻求"
    },
    {
      english: "in quest of",
      chinese: "寻求"
    },
    {
      english: "reverse",
      chinese: "反转"
    },
    {
      english: "verbal",
      chinese: "口头的；动词"
    },
    {
      english: "turn over",
      chinese: "考虑；思考"
    },
    {
      english: "brighten ",
      chinese: "变亮"
    },
    {
      english: "repay",
      chinese: "偿还"
    },
    {
      english: "sincere",
      chinese: "诚挚的"
    },
    {
      english: "lastingly",
      chinese: "长久地"
    },
    {
      english: "gratitude",
      chinese: "感激"
    },
    {
      english: "statement ",
      chinese: "陈述"
    },
    {
      english: "heartfelt",
      chinese: "衷心的；"
    },
    {
      english: "appreciation",
      chinese: "感谢，欣赏"
    },
    {
      english: "agricultural",
      chinese: "农业的；农艺的"
    },
    {
      english: "mechanical",
      chinese: "机械的；机械学的"
    },
    {
      english: "hometown",
      chinese: "故乡；"
    },
    {
      english: "at sea",
      chinese: "在海上航行"
    },
    {
      english: "specific",
      chinese: "明确的；"
    },
    {
      english: "behalf",
      chinese: "利益"
    },
    {
      english: "on sb.'s behalf",
      chinese: "为了的利益；代表(某人）"
    },
    {
      english: "instance",
      chinese: "实例"
    },
    {
      english: "uppermost",
      chinese: "最高的"
    },
    {
      english: "impress",
      chinese: "使重视"
    },
    {
      english: "boyhood",
      chinese: "少年时代"
    },
    {
      english: "quiz",
      chinese: "测验"
    },
    {
      english: "diminish",
      chinese: "（使）变小；（使）减少"
    },
    {
      english: "expose",
      chinese: "暴露"
    },
    {
      english: "be exposed to",
      chinese: "暴露于；与……接触"
    },
    {
      english: "immerse",
      chinese: "使沉浸在"
    },
    {
      english: "be immersed in",
      chinese: "沉浸在"
    },
    {
      english: "awareness",
      chinese: "察觉"
    },
    {
      english: "marvelous",
      chinese: "不可思议的；美妙的"
    },
    {
      english: "prayer",
      chinese: "祈祷"
    },
    {
      english: "assemble",
      chinese: "集合；装配"
    },
    {
      english: "considerate",
      chinese: "体贴的"
    },
    {
      english: "sprinkle",
      chinese: "洒"
    },
    {
      english: "stardust ",
      chinese: "梦幻"
    },
    {
      english: "unload",
      chinese: "将货物卸下"
    },
    {
      english: "cargo ",
      chinese: "货物"
    },
    {
      english: "reload  ",
      chinese: "再装"
    },
    {
      english: "recede",
      chinese: "退去；变得模糊"
    },
    {
      english: "rendezvous",
      chinese: "会合"
    },
    {
      english: "accord",
      chinese: "使符合"
    },
    {
      english: "topmost",
      chinese: "最高的"
    },
    {
      english: "loudspeaker",
      chinese: "喇叭"
    },
    {
      english: "rasp ",
      chinese: "发出；锉，刮"
    },
    {
      english: "hundred-odd",
      chinese: "一百多个"
    },
    {
      english: "odd",
      chinese: "稍多于；单数的"
    },
    {
      english: "shipmate ",
      chinese: "同船水手；"
    },
    {
      english: "deck",
      chinese: "甲板"
    },
    {
      english: "cluster",
      chinese: "群；簇"
    },
    {
      english: "seaman ",
      chinese: "海员，水手"
    },
    {
      english: "bulge",
      chinese: "鼓胀"
    },
    {
      english: "fistful",
      chinese: "一把"
    },
    {
      english: "bark",
      chinese: "吠叫"
    },
    {
      english: "successive",
      chinese: "连续的；"
    },
    {
      english: "in turn",
      chinese: "挨个地；"
    },
    {
      english: "amid ",
      chinese: "在……当中"
    },
    {
      english: "humble",
      chinese: "使谦卑；"
    },
    {
      english: "undergo",
      chinese: "经过；"
    },
    {
      english: "swift",
      chinese: "迅疾的，即时的"
    },
    {
      english: "reassurance",
      chinese: "放心；确信"
    },
    {
      english: "appreciate",
      chinese: "赏识；重视"
    },
    {
      english: "bring back",
      chinese: "回想起"
    },
    {
      english: "in a flash",
      chinese: "一瞬间"
    },
    {
      english: "weep",
      chinese: "流（泪），（为…而）；哭泣"
    },
    {
      english: "diaper",
      chinese: "尿布；"
    },
    {
      english: "being",
      chinese: "生命；人"
    },
    {
      english: "go about ",
      chinese: "表现；忙于；着手"
    },
    {
      english: "in secret",
      chinese: "秘密地；"
    },
    {
      english: "quote",
      chinese: "引用；引述"
    },
    {
      english: "mightily ",
      chinese: "在很大程度上；非常"
    },
    {
      english: "paramout",
      chinese: "最主要的；"
    },
    {
      english: "stationery ",
      chinese: "信纸信封；文具"
    }
    ],
    text6: [{
      english: "brick ",
      chinese: "砖"
    },
    {
      english: "studio",
      chinese: "画室；照相室；工作室"
    },
    {
      english: "chicory",
      chinese: "菊苣"
    },
    {
      english: "salad",
      chinese: "生菜；色拉"
    },
    {
      english: "bishop ",
      chinese: "主教"
    },
    {
      english: "sleeve",
      chinese: "衣袖"
    },
    {
      english: "bishop sleeve",
      chinese: "灯笼袖"
    },
    {
      english: "in tune",
      chinese: "和谐的（地）"
    },
    {
      english: "joint",
      chinese: "共同的；共有的"
    },
    {
      english: "pneumonia",
      chinese: "肺炎"
    },
    {
      english: "stalk",
      chinese: "潜行；偷偷接近"
    },
    {
      english: "here and there",
      chinese: "各处"
    },
    {
      english: "icy",
      chinese: "极冷的"
    },
    {
      english: "victim ",
      chinese: "牺牲者；受害的人"
    },
    {
      english: "scarcely",
      chinese: "几乎没有；几乎不"
    },
    {
      english: "scarce",
      chinese: "不充足的；难得的"
    },
    {
      english: "hallway",
      chinese: "门厅；过道"
    },
    {
      english: "bushy",
      chinese: "密生的；丛生的"
    },
    {
      english: "eyebrow",
      chinese: "眉毛"
    },
    {
      english: "bosh",
      chinese: "胡说；无意义的话"
    },
    {
      english: "carriage",
      chinese: "载人的马车"
    },
    {
      english: "subtract",
      chinese: "减去；扣除"
    },
    {
      english: "curative",
      chinese: "能治病的"
    },
    {
      english: "merry ",
      chinese: "愉快的"
    },
    {
      english: "bedclothes",
      chinese: "床上用品"
    },
    {
      english: "backward",
      chinese: "倒着"
    },
    {
      english: "bare",
      chinese: "裸露的"
    },
    {
      english: "dreary",
      chinese: "沉闷的；阴沉的"
    },
    {
      english: "ivy",
      chinese: "常春藤"
    },
    {
      english: "vine",
      chinese: "藤"
    },
    {
      english: "in a whisper",
      chinese: "低声地"
    },
    {
      english: "nonsense",
      chinese: "废话"
    },
    {
      english: "turn loose",
      chinese: "放手；放纵"
    },
    {
      english: "miner",
      chinese: "矿工"
    },
    {
      english: "painter",
      chinese: "画家"
    },
    {
      english: "beard",
      chinese: "胡须"
    },
    {
      english: "look the part",
      chinese: "看上去很像"
    },
    {
      english: "gin ",
      chinese: "杜松子酒"
    },
    {
      english: "to excess ",
      chinese: "过度"
    },
    {
      english: "masterpiece",
      chinese: "杰作；代表作"
    },
    {
      english: "fragile",
      chinese: "易碎的；虚弱的"
    },
    {
      english: "for the rest",
      chinese: "至于其它"
    },
    {
      english: "fierce ",
      chinese: "凶猛的；愤怒的"
    },
    {
      english: "mock",
      chinese: "嘲弄；取笑"
    },
    {
      english: "softness ",
      chinese: "软弱；意志不坚定"
    },
    {
      english: "dimly",
      chinese: "暗淡地，模糊不清的"
    },
    {
      english: "canvas",
      chinese: "画布"
    },
    {
      english: "easel ",
      chinese: "画架"
    },
    {
      english: "fancy",
      chinese: "幻想；胡思乱想"
    },
    {
      english: "stream",
      chinese: "流"
    },
    {
      english: "hear of",
      chinese: "听说"
    },
    {
      english: "persistent",
      chinese: "持续的；一再发生的"
    },
    {
      english: "mingle",
      chinese: "混合"
    },
    {
      english: "upturned",
      chinese: "翻转的；倒着放的"
    },
    {
      english: "kettle",
      chinese: "烧水用的壶"
    },
    {
      english: "pull up ",
      chinese: "拉起"
    },
    {
      english: "wearily ",
      chinese: "疲倦地；劳累地"
    },
    {
      english: "lo",
      chinese: "看，瞧"
    },
    {
      english: "stand out",
      chinese: "显著"
    },
    {
      english: "wear away",
      chinese: "流逝；磨损"
    },
    {
      english: "twilight",
      chinese: "暮色；黄昏"
    },
    {
      english: "lone",
      chinese: "孤独的"
    },
    {
      english: "cling ",
      chinese: "抓紧"
    },
    {
      english: "cling to ",
      chinese: "紧紧抓住"
    },
    {
      english: "merciless",
      chinese: "无慈悲心的"
    },
    {
      english: "call to ",
      chinese: "呼唤"
    },
    {
      english: "gas",
      chinese: "煤气"
    },
    {
      english: "stove",
      chinese: "火炉"
    },
    {
      english: "sin",
      chinese: "罪孽；罪过"
    },
    {
      english: "hand-mirror",
      chinese: "带手柄的小镜子"
    },
    {
      english: "pillow",
      chinese: "枕头"
    },
    {
      english: "sit up ",
      chinese: "坐起来"
    },
    {
      english: "acute",
      chinese: "急性的；严重的"
    },
    {
      english: "be wet through ",
      chinese: "湿透的"
    },
    {
      english: "lantern",
      chinese: "灯笼"
    },
    {
      english: "palette",
      chinese: "调色板"
    },
    {
      english: "flutter ",
      chinese: "飘动，晃动"
    }
    ],
    text7: [{
      english: "salesman",
      chinese: "推销员"
    },
    {
      english: "linger",
      chinese: "留恋徘徊，磨蹭"
    },
    {
      english: "weatherman ",
      chinese: "气象报告员"
    },
    {
      english: "surgeon",
      chinese: "外科医生"
    },
    {
      english: "scar",
      chinese: "伤疤"
    },
    {
      english: "feel like",
      chinese: "想要"
    },
    {
      english: "battlefield",
      chinese: "战场"
    },
    {
      english: "dignity",
      chinese: "尊严"
    },
    {
      english: "cripple",
      chinese: "使跛的，受伤致残"
    },
    {
      english: "betray",
      chinese: "背叛"
    },
    {
      english: "gain on",
      chinese: "逼近"
    },
    {
      english: "tremble",
      chinese: "颤抖"
    },
    {
      english: "slacks",
      chinese: "宽松裤"
    },
    {
      english: "tan",
      chinese: "棕褐色的"
    },
    {
      english: "entryway ",
      chinese: "入口"
    },
    {
      english: "briefcase",
      chinese: "公文包"
    },
    {
      english: "kick up",
      chinese: "踢起；扬起"
    },
    {
      english: "tilt ",
      chinese: "（使）倾斜"
    },
    {
      english: "lean",
      chinese: "屈身，倾斜"
    },
    {
      english: "brochure",
      chinese: "小册子"
    },
    {
      english: "clip-op",
      chinese: "用夹子夹牢"
    },
    {
      english: "clip",
      chinese: "夹子，别针"
    },
    {
      english: "delivery ",
      chinese: "分娩；投递"
    },
    {
      english: "section ",
      chinese: "部分"
    },
    {
      english: "cerebral",
      chinese: "脑的"
    },
    {
      english: "palsy",
      chinese: "麻痹，瘫痪"
    },
    {
      english: "cerebral palsy ",
      chinese: "大脑性麻痹"
    },
    {
      english: "disorder",
      chinese: "失调；混乱"
    },
    {
      english: "transfer",
      chinese: "调动，转移"
    },
    {
      english: "limitation",
      chinese: "缺陷；局限"
    },
    {
      english: "apply for",
      chinese: "申请"
    },
    {
      english: "Co.",
      chinese: "公司"
    },
    {
      english: "representative",
      chinese: "代表"
    },
    {
      english: "literature",
      chinese: "宣传资料"
    },
    {
      english: "pledge",
      chinese: "保证，许诺"
    },
    {
      english: "retail",
      chinese: "零售"
    },
    {
      english: "transit",
      chinese: "通行；过境"
    },
    {
      english: "mall",
      chinese: "购物中心"
    },
    {
      english: "strain",
      chinese: "损伤；使劳损"
    },
    {
      english: "joint",
      chinese: "关节"
    },
    {
      english: "useless",
      chinese: "无用的；无效的"
    },
    {
      english: "limb",
      chinese: "肢；树枝"
    },
    {
      english: "waist",
      chinese: "腰"
    },
    {
      english: "off balance",
      chinese: "不平衡"
    },
    {
      english: "toddler",
      chinese: "学步儿童"
    },
    {
      english: "shoeshine ",
      chinese: "擦皮鞋"
    },
    {
      english: "lace",
      chinese: "花边；鞋带"
    },
    {
      english: "territory",
      chinese: "活动范围；领土"
    },
    {
      english: "on the phone",
      chinese: "在打电话"
    },
    {
      english: "spice",
      chinese: "调料"
    },
    {
      english: "register",
      chinese: "被注意到，登记，发生效力"
    },
    {
      english: "laundry",
      chinese: "洗好的衣服"
    },
    {
      english: "profitable",
      chinese: "有利可图的"
    },
    {
      english: "off one's feet",
      chinese: "躺着；坐着"
    },
    {
      english: "VCR ",
      chinese: "录像机"
    },
    {
      english: "antenna",
      chinese: "天线"
    },
    {
      english: "solitary",
      chinese: "单独的，孤独的"
    },
    {
      english: "oven",
      chinese: "烤箱"
    },
    {
      english: "commission",
      chinese: "佣金，回扣"
    },
    {
      english: "surgery",
      chinese: "外科手术"
    },
    {
      english: "be laid up",
      chinese: "(with) 卧床休养"
    },
    {
      english: "checkbook",
      chinese: "支票簿"
    },
    {
      english: "recipient",
      chinese: "接受人"
    },
    {
      english: "signature",
      chinese: "签名"
    },
    {
      english: "scrawl",
      chinese: "潦草地写"
    },
    {
      english: "unreadable",
      chinese: "枯燥的，无法读的"
    },
    {
      english: "lash",
      chinese: "鞭打；猛烈打击"
    },
    {
      english: "in time ",
      chinese: "及时，最终"
    },
    {
      english: "go off",
      chinese: "停止"
    },],
    text8: [{
      english: "clone ",
      chinese: "克隆；无性繁殖"
    },
    {
      english: "brilliant",
      chinese: "极聪明的；才华横溢的；非凡的"
    },
    {
      english: "complication",
      chinese: "并发症；复杂情况"
    },
    {
      english: "diabetes",
      chinese: "糖尿病"
    },
    {
      english: "eyesight",
      chinese: "视力"
    },
    {
      english: "horrify",
      chinese: "使恐惧；使感惊骇"
    },
    {
      english: "Korean",
      chinese: "朝鲜的；朝鲜人"
    },
    {
      english: "fraudulent",
      chinese: "欺骗的；诈骗的"
    },
    {
      english: "embryonic",
      chinese: "胚胎的；萌芽期的"
    },
    {
      english: "fraud",
      chinese: "欺骗；骗子"
    },
    {
      english: "focus on",
      chinese: "集中于"
    },
    {
      english: "reproductive",
      chinese: "生殖的；繁殖的"
    },
    {
      english: "ethical",
      chinese: "伦理的；道德的；合乎道德的"
    },
    {
      english: "standpoint",
      chinese: "立场；观点"
    },
    {
      english: "issue",
      chinese: "问题，议题；争论点"
    },
    {
      english: "miscarriage",
      chinese: "流产，小产"
    },
    {
      english: "stillbirth",
      chinese: "死胎，死产"
    },
    {
      english: "fetal",
      chinese: "胎儿的"
    },
    {
      english: "anomaly",
      chinese: "畸形；不规则；反常"
    },
    {
      english: "therapeutic",
      chinese: "治疗的；治疗学的"
    },
    {
      english: "tremendous",
      chinese: "极大的，巨大的；极好的"
    },
    {
      english: "potential",
      chinese: "可能性；潜力，潜能"
    },
    {
      english: "in some ways",
      chinese: "在某种程度上"
    },
    {
      english: "make the most of",
      chinese: "充分利用，尽量利用"
    },
    {
      english: "replicate",
      chinese: "复现，复制"
    },
    {
      english: "roadmap",
      chinese: "路线图；公路交通图"
    },
    {
      english: "legislation",
      chinese: "法律，法规；立法"
    },
    {
      english: "in place",
      chinese: "适当的，恰当的；在合适的位置"
    },
    {
      english: "disapproval",
      chinese: "不赞同；反对"
    },
    {
      english: "result from",
      chinese: "是...的结果，由于...而发生"
    },
    {
      english: "dissuade",
      chinese: "劝阻"
    },
    {
      english: "legislate",
      chinese: "立法；用立法实现"
    },
    {
      english: "cellular",
      chinese: "细胞的；由细胞组成的"
    },
    {
      english: "firestorm",
      chinese: "大爆发"
    },
    {
      english: "come forward",
      chinese: "自告奋勇；主动争取；自愿作证"
    },
    {
      english: "consent",
      chinese: "同意；允许"
    },
    {
      english: "donate",
      chinese: "献出，捐赠"
    },
    {
      english: "procedure",
      chinese: "程序；步骤"
    },
    {
      english: "no more than",
      chinese: "至多，不超过，仅仅"
    },
    {
      english: "transplant",
      chinese: "移植"
    },
    {
      english: "in reality",
      chinese: "事实上，实际上"
    },
    {
      english: "transcendent",
      chinese: "卓越的；特别的"
    },
    {
      english: "microscope",
      chinese: "显微镜"
    },
    {
      english: "blastocyst",
      chinese: "胚泡"
    },
    {
      english: "misconception",
      chinese: "错误挂念；误解"
    },
    {
      english: "embryo",
      chinese: "胚胎"
    },
    {
      english: "skepticism",
      chinese: "怀疑态度"
    },
    {
      english: "analysis",
      chinese: "分析"
    },
    {
      english: "by necessity",
      chinese: "由于客观情况的需要；为情势所迫"
    },
    {
      english: "Pope",
      chinese: "教皇"
    },
    {
      english: "opponent",
      chinese: "对手；敌手"
    },
    {
      english: "condemn",
      chinese: "谴责；责备；指责"
    },
    {
      english: "in a sense",
      chinese: "在某种意义上"
    },
    {
      english: "contentious",
      chinese: "引起争论的；有争议性的"
    },
    {
      english: "logical",
      chinese: "合乎逻辑的；推理正确的"
    },
    {
      english: "implant",
      chinese: "植入；一直"
    },
    {
      english: "fetus",
      chinese: "胚儿；胚胎"
    }
    ],
    num1: 93,
    num2: 75,
    num3: 28,
    num4: 118,
    num5: 90,
    num6: 77,
    num7: 69,
    num8: 56
  },
  contains: function (arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) {
        return 1;
      }
    }
    return 0;
  },

  getIndex: function () {
    var num = 0;
    var index = getApp().globalData.bookUnit;
    var temp1 = this.data.text1;
    var temp2 = this.data.text2;
    var temp3 = this.data.text3;
    var temp4 = this.data.text4;
    var temp5 = this.data.text5;
    var temp6 = this.data.text6;
    var temp7 = this.data.text7;
    var temp8 = this.data.text8;
    var temp = [];
    if (this.contains(index, 1)) {
      temp = temp.concat(temp1);
      this.setData({
        text: temp
      })
      num = num + this.data.num1;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 2)) {
      temp = temp.concat(temp2);
      this.setData({
        text: temp
      })
      num = num + this.data.num2;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 3)) {
      temp = temp.concat(temp3);
      this.setData({
        text: temp
      })
      num = num + this.data.num3;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 4)) {
      temp = temp.concat(temp4);
      this.setData({
        text: temp
      })
      num = num + this.data.num4;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 5)) {
      temp = temp.concat(temp5);
      this.setData({
        text: temp
      })
      num = num + this.data.num5;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 6)) {
      temp = temp.concat(temp6);
      this.setData({
        text: temp
      })
      num = num + this.data.num6;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 7)) {
      temp = temp.concat(temp7);
      this.setData({
        text: temp
      })
      num = num + this.data.num7;
      this.setData({
        num: num
      })
    }
    if (this.contains(index, 8)) {
      temp = temp.concat(temp8);
      this.setData({
        text: temp
      })
      num = num + this.data.num8;
      this.setData({
        num: num
      })
    }
    this.setData({
      text: temp
    })
    if (num == 0) {
      wx.showModal({
        cancelText: '好的',
        confirmText: '还是好的',
        title: '什么都没选？？？',
        content: '不测单词，那就测测人品吧'
      })
    }

  },
  //产生随机索引序列RandomArray(全局变量)
  RandomGenerate:function (){
    var wordArray = new Array(this.data.num)
      .fill(0)
      .map((v, i) => i )
      .sort(() => (0.5 - Math.random()));
      this.setData({
        RandomArray:wordArray
      });
  },

  //页面渲染（包括初始化和每一次选对后）
  changeText: function () {
    //console.log(index),
    let wordArray=this.data.RandomArray.slice()
      this.setData({
        answer: Math.floor(Math.random() * 4)
      }),
      wordArray.filter((v,i)=>v !=this.data.RandomArray[this.data.index]);//排除答案的索引序列
      wordArray.sort(() => (0.5 - Math.random()))
      .filter((v,i)=>i<4)
      console.log("答案所在选项：",this.data.answer)
      this.setData({
        cnindex0: 0 == this.data.answer ? this.data.RandomArray[this.data.index] : wordArray[0]
      }),
      this.setData({
        cnindex1: 1 == this.data.answer ? this.data.RandomArray[this.data.index] : wordArray[1]
      }),
      this.setData({
        cnindex2: 2 == this.data.answer ? this.data.RandomArray[this.data.index] : wordArray[2]
      }),
      this.setData({
        cnindex3: 3 == this.data.answer ? this.data.RandomArray[this.data.index] : wordArray[3]
      })
  },

  checkYES: function () {
    this.setData({
      index:this.data.index+1
    });
    if(this.data.index>=this.data.num){
      wx.navigateTo({
        url: '../endPage/endPage',
      })
    };

    this.changeText();
    var rightNum = getApp().globalData.rightNum;
    rightNum = rightNum + 1;
    getApp().globalData.rightNum = rightNum;
    this.setData({
      rightNum: getApp().globalData.rightNum,
    })
    this.setData({
      wrongNum: getApp().globalData.wrongNum
    })
  },
  checkNO: function () {
    let errorword=this.data.text[this.data.RandomArray[this.data.index]];
    this.addErrorWordToCloud(errorword.english,errorword.chinese);
    wx.showModal({
      cancelText: '我玩够了',
      confirmText: '好的',
      title: '回答错误',
      content: '要不要再想想？',
      success: function (res) {
        if (res.cancel) {
          wx.navigateTo({
            url: '../endPage/endPage',
          })
        }
      }
    })
    
    var wrongNum = getApp().globalData.wrongNum;
    wrongNum = wrongNum + 1;
    getApp().globalData.wrongNum = wrongNum;
    this.setData({
      rightNum: getApp().globalData.rightNum
    })
    this.setData({
      wrongNum: getApp().globalData.wrongNum
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env: 'cloud1-9g3cfsud0e4d1f22' // 你的云开发环境ID
    })
    this.getIndex();
    this.RandomGenerate();
    this.changeText();
    this.setData({
      rightNum: getApp().globalData.rightNum
    })
    this.setData({
      wrongNum: getApp().globalData.wrongNum
    });
    
  },
  //调用云函数，将错题记录上传云数据库
  addErrorWordToCloud: function(word, meaning) {
    wx.cloud.callFunction({
      name: 'addErrorWordToCloud',
      data: {
        word: word,
        meaning: meaning
      },
      success: res => {
        console.log('错误单词已添加到云数据库')
      },
      fail: err => {
        console.error('添加错误单词到云数据库失败：', err)
      }
    })
  },
    
  select1() {
    if (0 == this.data.answer) {
      this.checkYES();
    }
    else {
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
  select_over() {
    wx.redirectTo({
      url: '../endPage/endPage',
    })
  },
})