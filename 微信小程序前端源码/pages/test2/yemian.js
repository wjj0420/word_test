// yemian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 441,
    index: 1,
    answer: 1,
    cnindex0: 1,
    cnindex1: 1,
    cnindex2: 1,
    cnindex3: 1,
    text: [
      {
        english: "get by",
        chinese: "  过得去"
      },
      {
        english: "frustration",
        chinese: " 挫折；令人失望"
      },
      {
        english: "suburban",
        chinese: " 郊区的"
      },
      {
        english: "suburb",
        chinese: " 郊区"
      },
      {
        english: "contentment",
        chinese: " 满足"
      },
      {
        english: "honey",
        chinese: " 蜂蜜"
      },
      {
        english: "make it",
        chinese: " 成功"
      },
      {
        english: "canoe",
        chinese: " 独木木舟"
      },
      {
        english: "sunset",
        chinese: "  日落(n)"
      },
      {
        english: "sunrise",
        chinese: " 日出(n)"
      },
      {
        english: "hawk",
        chinese: " 鹰"
      },
      {
        english: "cornfield",
        chinese: " 玉米田"
      },
      {
        english: "haul",
        chinese: " (用马车，卡车)搬运"
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
        english: "overdue",
        chinese: "  早该有的；早该发生的"
      },
      {
        english: "improvement",
        chinese: " 改进"
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
        english: "chick",
        chinese: " 小鸡"
      },
      {
        english: "typewriter",
        chinese: " 打字机"
      },
      {
        english: "freelance",
        chinese: " 自由撰稿人"
      },
      {
        english: "pursue",
        chinese: " 努力去获得，追求"
      },
      {
        english: "household",
        chinese: "家庭的；普通的；家庭"
      },
      {
        english: "oversee",
        chinese: " 看管"
      },
      {
        english: "beehive",
        chinese: " 蜂窝"
      },
      {
        english: "organ",
        chinese: " 风琴；器官"
      },
      {
        english: "stack",
        chinese: " 一堆"
      },
      {
        english: "wicked",
        chinese: " 邪恶的；坏的"
      },
      {
        english: "overflow",
        chinese: " 溢出；泛滥"
      },
      {
        english: "swamp",
        chinese: " 淹没；压倒"
      },
      {
        english: "freezer",
        chinese: " 冰柜"
      },
      {
        english: "cherry",
        chinese: " 樱桃"
      },
      {
        english: "raspberry",
        chinese: "  悬钩子；树莓"
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
        english: "canned-goods",
        chinese: " 罐装品"
      },
      {
        english: "cupboard",
        chinese: " 食橱；碗橱"
      },
      {
        english: "plum",
        chinese: " 李子；梅子"
      },
      {
        english: "jelly",
        chinese: " 果子冻"
      },
      {
        english: "squash",
        chinese: " 南瓜属植物"
      },
      {
        english: "pumpkin",
        chinese: " 南瓜"
      },
      {
        english: "gallon",
        chinese: " 加仑"
      },
      {
        english: "at that point",
        chinese: " 就在那时"
      },
      {
        english: "decidedly",
        chinese: " 肯定地；无疑地"
      },
      {
        english: "blessing",
        chinese: " 祝福"
      },
      {
        english: "bless",
        chinese: "为……祝福"
      },
      {
        english: "on balance",
        chinese: " 总的来说"
      },
      {
        english: "den",
        chinese: " 兽穴"
      },
      {
        english: "illustrate",
        chinese: " 举例说明"
      },
      {
        english: "hitch",
        chinese: "用-具套住"
      },
      {
        english: "dogsled",
        chinese: " 狗拉雪橇"
      },
      {
        english: "monster",
        chinese: " 怪物；妖怪"
      },
      {
        english: "digest",
        chinese: " 文摘；摘要"
      },
      {
        english: "boundary",
        chinese: " 边界；分界线"
      },
      {
        english: "widerness",
        chinese: " 荒野；荒地"
      },
      {
        english: "generate",
        chinese: " 形成；产生"
      },
      {
        english: "dental",
        chinese: " 牙的；和牙有关的"
      },
      {
        english: "insurance",
        chinese: " 保险；保险费"
      },
      {
        english: "policy",
        chinese: " 保险单；保险契约"
      },
      {
        english: "pick up",
        chinese: " 付（帐）"
      },
      {
        english: "minor",
        chinese: " 较少的；较小的"
      },
      {
        english: "premium",
        chinese: " 保险费；奖金；奖品"
      },
      {
        english: "aside from",
        chinese: " 除了"
      },
      {
        english: "cut back",
        chinese: " 减少；削减"
      },
      {
        english: "appreciably",
        chinese: " 能够感到地，可观的"
      },
      {
        english: "lower",
        chinese: " 降低；减少"
      },
      {
        english: "dine out",
        chinese: " 外出吃饭"
      },
      {
        english: "patronize",
        chinese: " 光顾；惠顾"
      },
      {
        english: "ballet",
        chinese: " 芭蕾舞"
      },
      {
        english: "extravagant",
        chinese: " 奢侈的；浪费的"
      },
      {
        english: "suspect",
        chinese: " 怀疑"
      },
      {
        english: "solitude",
        chinese: " 孤独"
      },
      {
        english: "budget",
        chinese: " 预算"
      },
      {
        english: "requirement",
        chinese: "  要求，必要条件"
      },
      {
        english: "scale",
        chinese: " 规模"
      },
      {
        english: "on a small",
        chinese: "/large  scale  小规模地"
      },
      {
        english: "resist",
        chinese: " 抵制"
      },
      {
        english: "temptation",
        chinese: " 诱惑（n)"
      },
      {
        english: "device",
        chinese: " 设备，装置"
      },
      {
        english: "machinery",
        chinese: " 机器，机械"
      },
      {
        english: "horsepower",
        chinese: " 马力"
      },
      {
        english: "rotary",
        chinese: " 旋转的"
      },
      {
        english: "cultivator",
        chinese: " 耕耘机"
      },
      {
        english: "rotary",
        chinese: " cultivator  旋转式耕耘机"
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
        english: "primarily",
        chinese: " 主要地；起初"
      },
      {
        english: "slender",
        chinese: "苗条的；细长的"
      },
      {
        english: "settlement",
        chinese: " 新拓居地；"
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
        english: "ironically",
        chinese: " 具有讽刺意味的是"
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
        english: "unwilling",
        chinese: " 不愿意的；勉强的"
      },
      {
        english: "stand up",
        chinese: "(for) 支持"
      },
      {
        english: "historic",
        chinese: " 历史上有名或有重要意义的"
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
        english: "liberate",
        chinese: " 解放"
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
        english: "exploit",
        chinese: " 功绩，业绩"
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
        english: "foundry",
        chinese: " 铸造车间，铸造厂"
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
        english: "chilly",
        chinese: " 冷的，寒飕飕的"
      },
      {
        english: "fugitive",
        chinese: "逃亡者"
      },
      {
        english: "watchman",
        chinese: " 看守人；警卫员"
      },
      {
        english: "helplessly",
        chinese: " 无能为力地"
      },
      {
        english: "pursuer",
        chinese: " 追赶者；追捕者"
      },
      {
        english: "close in",
        chinese: "(on/around) 接近；包围"
      },
      {
        english: "hurriedly",
        chinese: " 仓促地"
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
        english: "religious",
        chinese: " 宗教的"
      },
      {
        english: "conviction",
        chinese: " 坚定的看法或信仰"
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
        chinese: "给……衣服"
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
        english: "terminal",
        chinese: " 终点，终端机"
      },
      {
        english: "magistrate",
        chinese: " 地方行政长官；执法官"
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
        english: "stripe",
        chinese: " 鞭打；抽打"
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
        english: "disguise",
        chinese: "  伪装，假扮"
      },
      {
        english: "funeral",
        chinese: "葬礼；丧失"
      },
      {
        english: "procession",
        chinese: " 行列；队伍"
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
        english: "diligently",
        chinese: " 勤奋地"
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
        english: "salvation",
        chinese: " 拯救；"
      },
      {
        english: "pass for",
        chinese: "被当作"
      },
      {
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
        chinese: "农村"
      },
      {
        english: "vulnerable",
        chinese: "易受攻击的；无防御的"
      },
      {
        english: "well-patroled",
        chinese: " 巡查严密的"
      },
      {
        english: "urban",
        chinese: " 城市的"
      },
      {
        english: "statistics",
        chinese: " 统计；统计资料"
      },
      {
        english: "dramatically",
        chinese: " (vd)显著地；戏剧性地"
      },
      {
        english: "allegedly",
        chinese: "  (vd)据称"
      },
      {
        english: "tranquil",
        chinese: "   宁静的"
      },
      {
        english: "era",
        chinese: "   纪元"
      },
      {
        english: "dead-bolt",
        chinese: "   防盗门"
      },
      {
        english: "electronic",
        chinese: "   电子的"
      },
      {
        english: "hook up to",
        chinese: "   连接到"
      },
      {
        english: "patio",
        chinese: "   露台，平台"
      },
      {
        english: "elegantly",
        chinese: " 优雅地，高雅地"
      },
      {
        english: "build in",
        chinese: " 使成为建筑物的一部分"
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
        english: "feature",
        chinese: " 给……以显著地位，突出；由……主演"
      },
      {
        english: "padlock",
        chinese: " 挂锁；扣锁"
      },
      {
        english: "psychic",
        chinese: "精神的；心灵的；心理的"
      },
      {
        english: "transformation",
        chinese: " (n)改变，转变"
      },
      {
        english: "put up",
        chinese: " 建造，设置"
      },
      {
        english: "barrier",
        chinese: "(n)障碍"
      },
      {
        english: "barricade",
        chinese: "(vt)在……设置路障"
      },
      {
        english: "wander",
        chinese: " (vi)漫游，闲逛，徘徊"
      },
      {
        english: "X-ray",
        chinese: ""
      },
      {
        english: "terrorist",
        chinese: " 恐怖分子"
      },
      {
        english: "terror",
        chinese: "(n)恐怖"
      },
      {
        english: "hold/keep sb. at bay",
        chinese: " 不让……逼近"
      },
      {
        english: "frisker",
        chinese: " 搜身器"
      },
      {
        english: "without/with not so much as",
        chinese: " 甚至连……都没……"
      },
      {
        english: "sideways",
        chinese: "  斜着（的），斜向一边（的）"
      },
      {
        english: "stand for",
        chinese: " 代表"
      },
      {
        english: "be bathed in",
        chinese: " 沉浸于"
      },
      {
        english: "analyze",
        chinese: " 分析"
      },
      {
        english: "with/by a small/large margin",
        chinese: " 小/大幅度地"
      },
      {
        english: "error",
        chinese: " 错误"
      },
      {
        english: "insecure",
        chinese: "  不安全的"
      },
      {
        english: "secure",
        chinese: "  安全的，可靠的"
      },
      {
        english: "civilize",
        chinese: "  开化，使文明"
      },
      {
        english: "reflection",
        chinese: " 有损声誉的事，思考；反映"
      },
      {
        english: "puzzling",
        chinese: " 令人困惑的"
      },
      {
        english: "housewife",
        chinese: " 家庭主妇"
      },
      {
        english: "rape",
        chinese: " 强奸"
      },
      {
        english: "whistle",
        chinese: "哨子"
      },
      {
        english: "self-protection",
        chinese: " 自我保护"
      },
      {
        english: "outsmart",
        chinese: " (vt)比……精明；智胜"
      },
      {
        english: "outsmart oneself",
        chinese: "聪明反被聪明误"
      },
      {
        english: "evil",
        chinese: " (n)邪恶"
      },
      {
        english: "legacy",
        chinese: " (n)遗产"
      },
      {
        english: "look back on",
        chinese: "回顾"
      },
      {
        english: "watery",
        chinese: "潮湿的"
      },
      {
        english: "extraterrestrial",
        chinese: "外星人；"
      },
      {
        english: "pessimist",
        chinese: "悲观主义者"
      },
      {
        english: "pessimistic",
        chinese: "悲观的"
      },
      {
        english: "crisscross",
        chinese: "交叉往返于"
      },
      {
        english: "on account of",
        chinese: " 由于"
      },
      {
        english: "sheriff",
        chinese: " 行政司法长官；县治安官"
      },
      {
        english: "deputy",
        chinese: "副职；副手"
      },
      {
        english: "work up",
        chinese: " 准备；整理"
      },
      {
        english: "ranch",
        chinese: " 大农场"
      },
      {
        english: "pension",
        chinese: " 退职金；养老金；"
      },
      {
        english: "disable",
        chinese: "使残废"
      },
      {
        english: "veteran",
        chinese: "退伍军人；富有经验的"
      },
      {
        english: "complicated",
        chinese: "复杂的；难解的；"
      },
      {
        english: "taxman",
        chinese: "税务员"
      },
      {
        english: "approachable",
        chinese: " 平易近人的；亲切的"
      },
      {
        english: "saucer",
        chinese: "碟状物；飞碟；茶碟"
      },
      {
        english: "knock off",
        chinese: "下班"
      },
      {
        english: "hit the sack",
        chinese: "睡觉"
      },
      {
        english: "curse",
        chinese: "诅咒；咒骂"
      },
      {
        english: "go over",
        chinese: "核对；研究"
      },
      {
        english: "column",
        chinese: "列；栏；专栏；柱"
      },
      {
        english: "rocket",
        chinese: "火箭"
      },
      {
        english: "bug",
        chinese: "张大；使突出；虫子；故障"
      },
      {
        english: "complexion",
        chinese: " 面色；肤色"
      },
      {
        english: "apiece",
        chinese: " 每人"
      },
      {
        english: "observation",
        chinese: " 观察，观测"
      },
      {
        english: "locality",
        chinese: "地点；位置"
      },
      {
        english: "isolate",
        chinese: "使隔离；使孤立"
      },
      {
        english: "adopt",
        chinese: "采用；收养"
      },
      {
        english: "mode",
        chinese: "方式；模式；"
      },
      {
        english: "appearance",
        chinese: "外貌"
      },
      {
        english: "go for",
        chinese: "喜欢"
      },
      {
        english: "blink",
        chinese: "闪烁"
      },
      {
        english: "regardless of",
        chinese: " 不顾"
      },
      {
        english: "nationality",
        chinese: "国籍；民族"
      },
      {
        english: "arrangement",
        chinese: "安排"
      },
      {
        english: "organization",
        chinese: "组织；机构；团体"
      },
      {
        english: "supreme",
        chinese: "最高的；极度的"
      },
      {
        english: "come around",
        chinese: "  拜访"
      },
      {
        english: "hell",
        chinese: " 见鬼；该死；地狱；苦境"
      },
      {
        english: "leave alone",
        chinese: "不打扰；听其自然"
      },
      {
        english: "garbage",
        chinese: "废话；垃圾；"
      },
      {
        english: "heave",
        chinese: "举起；升起"
      },
      {
        english: "wit",
        chinese: "智力；才智"
      },
      {
        english: "make like",
        chinese: "假装；装扮作"
      },
      {
        english: "knock down",
        chinese: "撞倒；拆毁"
      },
      {
        english: "catch sight of",
        chinese: " 一眼看见；瞥见"
      },
      {
        english: "shiny",
        chinese: "有光泽的；闪耀的，"
      },
      {
        english: "fade out",
        chinese: "逐渐消失"
      },
      {
        english: "Venusian",
        chinese: " 金星人"
      },
      {
        english: "dope",
        chinese: " 笨蛋"
      },
      {
        english: "coastguardsman",
        chinese: "海岸警卫员"
      },
      {
        english: "under way",
        chinese: " 航行中；工作中"
      },
      {
        english: "carton",
        chinese: " 硬纸盒，纸板箱"
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
        english: "brighten",
        chinese: " 变亮"
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
        english: "statement",
        chinese: " 陈述"
      },
      {
        english: "heartfelt",
        chinese: "衷心的；"
      },
      {
        english: "appreciation",
        chinese: "感谢"
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
        english: "on behalf of sb.",
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
        chinese: "变小；减少"
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
        english: "stardust",
        chinese: " 梦幻"
      },
      {
        english: "unload",
        chinese: "将货物卸下"
      },
      {
        english: "cargo",
        chinese: " 货物"
      },
      {
        english: "reload",
        chinese: "  再装"
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
        english: "rasp",
        chinese: " 发出；锉，刮"
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
        english: "shipmate",
        chinese: " 同船水手；"
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
        english: "seaman",
        chinese: " 海员，水手"
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
        english: "amid",
        chinese: " 在……当中"
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
        chinese: "迅疾的即时的"
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
        chinese: "流泪；"
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
        english: "go about",
        chinese: " 表现；忙于；着手"
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
        english: "mightily",
        chinese: " 在很大程度上；非常"
      },
      {
        english: "paramout",
        chinese: "最主要的；"
      },
      {
        english: "stationery",
        chinese: " 信纸信封；文具"
      },
      {
        english: "brink",
        chinese: " 砖"
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
        english: "bishop",
        chinese: " 主教"
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
        chinese: "和谐的"
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
        english: "victim",
        chinese: " 牺牲者；受害的人"
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
        english: "merry",
        chinese: " 愉快的"
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
        english: "gin",
        chinese: " 杜松子酒"
      },
      {
        english: "to excess",
        chinese: " 过度"
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
        english: "fierce",
        chinese: " 凶猛的；愤怒的"
      },
      {
        english: "mock",
        chinese: "嘲弄；取笑"
      },
      {
        english: "softness",
        chinese: " 软弱；意志不坚定"
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
        english: "easel",
        chinese: " 画架"
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
        english: "pull up",
        chinese: " 拉起"
      },
      {
        english: "wearily",
        chinese: " 疲倦地；劳累地"
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
        english: "cling",
        chinese: " 抓紧"
      },
      {
        english: "cling to",
        chinese: " 紧紧抓住"
      },
      {
        english: "merciless",
        chinese: "无慈悲心的"
      },
      {
        english: "call to",
        chinese: " 呼唤"
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
        english: "sit up",
        chinese: " 坐起来"
      },
      {
        english: "acute",
        chinese: "急性的；严重的"
      },
      {
        english: "be wet through",
        chinese: " 湿透的"
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
        english: "flutter",
        chinese: " 飘动，晃动"
      },

    ] 
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      index: ((Math.ceil((Math.random() * 100) * 100)) % this.data.num)
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
      url: '../test/test',
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