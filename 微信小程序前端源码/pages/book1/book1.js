// test.js

Page({

  /**
   * 页面的初始数据
   */


  data: {
    num: 0,
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
      }],
    text1: [ {
        english: "off and on",
        chinese: "断断续续地，有时"
      },
      {
        english: "take hold",
        chinese: "生根，确立"
      },
      {
        english: "associate",
        chinese: "使联系起来，使联想"
      },
      {
        english: "assignment",
        chinese: "（分配的）工作，任务，作业"
      },
      {
        english: "turn out",
        chinese: "编写，制作"
      },
      {
        english: "paragraph ",
        chinese: "段落"
      },
      {
        english: "agony",
        chinese: "(身心的)极度痛苦"
      },
      {
        english: "assign",
        chinese: "分配，分派"
      },
      {
        english: "cheerless",
        chinese: "阴郁的，沉闷的"
      },
      {
        english: "tedious",
        chinese: "乏味的，冗长的"
      },
      {
        english: "reputation",
        chinese: "名声，名誉"
      },
      {
        english: "inability",
        chinese: "无能，无力"
      },
      {
        english: "inspire",
        chinese: "激励，鼓舞"
      },
      {
        english: "formal",
        chinese: "刻板的，拘谨的，正式的，正规的"
      },
      {
        english: "rigid",
        chinese: "一成不变的，严格的"
      },
      {
        english: "out of date",
        chinese: "过时的"
      },
      {
        english: "excessively",
        chinese: "过分地"
      },
      {
        english: "prim",
        chinese: "古板的，拘谨的，循规蹈矩的，整洁的"
      },
      {
        english: "severe",
        chinese: "朴素的，严重的，剧烈的"
      },
      {
        english: "wavy",
        chinese: "波形的，波浪形的"
      },
      {
        english: "necktie",
        chinese: "领带"
      },
      {
        english: "pointed",
        chinese: "有尖的，尖的"
      },
      {
        english: "jaw",
        chinese: "颌，颚"
      },
      {
        english: "comic",
        chinese: "滑稽的，喜剧的，连环漫画（册）"
      },
      {
        english: "antique",
        chinese: "古物，古玩"
      },
      {
        english: "tackle",
        chinese: "处理，应付"
      },
      {
        english: "informal",
        chinese: "（指讲话，文字）口语体的，非正式的"
      },
      {
        english: "essay",
        chinese: "散文，小品文，论说文"
      },
      {
        english: "distribute",
        chinese: "分发，分配，分送"
      },
      {
        english: "finally",
        chinese: "最终，终于"
      },
      {
        english: "face up to",
        chinese: "勇敢地接受或对付"
      },
      {
        english: "scan",
        chinese: "浏览，粗略地看"
      },
      {
        english: "spaghetti",
        chinese: "意大利式细面条"
      },
      {
        english: "title",
        chinese: "标题，题目，给...加标题，加题目于"
      },
      {
        english: "extraordinary",
        chinese: "不同寻常的，奇特的"
      },
      {
        english: "sequence",
        chinese: "一连串相关的事物，次序，顺序"
      },
      {
        english: "image",
        chinese: "形象，印象，（图）像"
      },
      {
        english: "vivid",
        chinese: "生动的，逼真的"
      },
      {
        english: "adult",
        chinese: "成年人，成年动物"
      },
      {
        english: "recall",
        chinese: "回想起，回忆起"
      },
      {
        english: "social",
        chinese: "社会的，社交的，交谊的"
      },
      {
        english: "respectable",
        chinese: "可敬的，体面的，文雅的"
      },
      {
        english: "put down",
        chinese: "写下"
      },
      {
        english: "recapture",
        chinese: "再现，再次经历"
      },
      {
        english: "relive",
        chinese: "再体验，重温"
      },
      {
        english: "violate",
        chinese: "违背，违反"
      },
      {
        english: "compose",
        chinese: "创作"
      },
      {
        english: "turn in",
        chinese: "交（作业）"
      },
      {
        english: "command",
        chinese: "命令，指令"
      },
      {
        english: "discipline",
        chinese: "惩罚，处分，纪律"
      },
      {
        english: "what’s more",
        chinese: "而且，此外，更有甚者"
      },
      {
        english: "contempt",
        chinese: "轻视，轻蔑"
      },
      {
        english: "ridicule",
        chinese: "嘲笑，嘲弄，被戏弄"
      },
      {
        english: "open-hearted",
        chinese: "诚挚的"
      },
      {
        english: "enjoyment",
        chinese: "愉快，欢乐，满意"
      },
      {
        english: "hold back",
        chinese: "控制（感情，眼泪等）"
      },
      {
        english: "avoid",
        chinese: "避免"
      },
      {
        english: "demonstration",
        chinese: "表明，证明"
      },
      {
        english: "calling",
        chinese: "职业，使命"
      },
      {
        english: "career",
        chinese: "生涯，事业，职业"
      },
      {
        english: "seal",
        chinese: "印章，图章"
      },
      {
        english: "essence",
        chinese: "本质，精髓"
      },
    ],
    text2: [
      {
        english: "be lost in（lose oneself in）",
        chinese: "专心致志于"
      },
      {
        english: "windshield",
        chinese: "（汽车的）挡风玻璃"
      },
      {
        english: "cab",
        chinese: "出租车"
      },
      {
        english: "available",
        chinese: "可用的，可得到的"
      },
      {
        english: "apologetically",
        chinese: "道歉的，带有歉意的"
      },
      {
        english: "or something",
        chinese: "诸如此类的事"
      },
      {
        english: "go ahead",
        chinese: "继续，开始"
      },
      {
        english: "know/learn by heart",
        chinese: "记住，能背出"
      },
      {
        english: "on the road",
        chinese: "在旅途中"
      },
      {
        english: "estimate",
        chinese: "估计"
      },
      {
        english: "might/may (just)as well",
        chinese: "不妨，（也）无妨"
      },
      {
        english: "not much of a",
        chinese: "不太好的"
      },
      {
        english: "keep up",
        chinese: "保持"
      },
      {
        english: "correspondence",
        chinese: "通信（联系），信件"
      },
      {
        english: "practically",
        chinese: "自始至终，一直"
      },
      {
        english: "neighborhood",
        chinese: "街坊，四邻"
      },
      {
        english: "kind/sort of",
        chinese: "有几分，有点儿"
      },
      {
        english: "lose touch（with sb）",
        chinese: "失去联系"
      },
      {
        english: "guy",
        chinese: "家伙，伙计"
      },
      {
        english: "a couple of",
        chinese: "几个，一对，一双"
      },
      {
        english: "tough",
        chinese: "不幸的，困难的，坚固的，坚强的"
      },
      {
        english: "on one’s mind",
        chinese: "记挂在心头"
      },
      {
        english: "keep in touch（with）",
        chinese: "（与...）保持联系，保持接触"
      },
      {
        english: "come up",
        chinese: "(尤指意想不到地)发生，出现"
      },
      {
        english: "shrug",
        chinese: "耸（肩）"
      },
      {
        english: "urge",
        chinese: "力劝，催促"
      },
      {
        english: "postpone",
        chinese: "推迟，使延期"
      },
      {
        english: "reference",
        chinese: "提及，谈到，参考，查阅"
      },
      {
        english: "absolutely",
        chinese: "完全地，极其"
      },
      {
        english: "reunion",
        chinese: "（家人，朋友，同事等久别后的）重聚"
      },
      {
        english: "go by",
        chinese: "（时间）逝去"
      },
      {
        english: "hang out",
        chinese: "闲荡，徘徊"
      },
      {
        english: "every now and then",
        chinese: "有时"
      },
      {
        english: "mostly",
        chinese: "几乎全部，多半，大体"
      },
      {
        english: "awful",
        chinese: "非常的，极大的，可怕的，糟糕的"
      },
      {
        english: "choke",
        chinese: "（使）窒息，堵塞"
      },
      {
        english: "choke up",
        chinese: "(因激动等)哽得说不出话，堵塞"
      },
      {
        english: "destination",
        chinese: "目的地"
      },
      {
        english: "skip",
        chinese: "略过，跳过，跳跃"
      },
      {
        english: "sorrowful",
        chinese: "伤心的，悲伤的"
      },
      {
        english: "in the distance",
        chinese: "在(相当)远处 "
      },
      {
        english: "unpack",
        chinese: "打开"
      },
      {
        english: "right away",
        chinese: "立刻，马上"
      },

    ],
    text3: [{
      english: "likely",
      chinese: "可能的,可能"
    },
    {
      english: "privileged",
      chinese: "有特权的"
    },
    {
      english: "privilege",
      chinese: "特权"
    },
    {
      english: "minority",
      chinese: "少数"
    },
    {
      english: "do without",
      chinese: "没有...而设法对付过去"
    },
    {
      english: "highly",
      chinese: "很，非常"
    },
    {
      english: "risky",
      chinese: "危险的，有风险的"
    },
    {
      english: "nasty",
      chinese: "令人难受的"
    },
    {
      english: "brutish",
      chinese: "野兽般的，野蛮的"
    },
    {
      english: "anyway",
      chinese: "不管怎么说"
    },
    {
      english: "put/turn the clock back",
      chinese: "倒退，开倒车"
    },
    {
      english: "cut off",
      chinese: "切断，中断，切下，剪下"
    },
    {
      english: "competition",
      chinese: "竞争，比赛"
    },
    {
      english: "bring about",
      chinese: "引起，导致"
    },
    {
      english: "moreover",
      chinese: "而且，再者"
    },
    {
      english: "inquiring",
      chinese: "好问的，爱探索的"
    },
    {
      english: "inquire",
      chinese: "询问"
    },
    {
      english: "global",
      chinese: "世界的，全球的"
    },
    {
      english: "suppress",
      chinese: "抑制，压制"
    },
    {
      english: "initiative",
      chinese: "首创精神，主动"
    },
    {
      english: "inventiveness",
      chinese: "发明才能，创造力"
    },
    {
      english: "slow down",
      chinese: "减慢"
    },
    {
      english: "rate",
      chinese: "速度，比率"
    },
    {
      english: "ensure",
      chinese: "保证，确保"
    },
    {
      english: "democratic",
      chinese: "民主的"
    },
    {
      english: "informed",
      chinese: "有知识的，了解情况的，明智的"
    },
    {
      english: "inform",
      chinese: "告诉，通知"
    },
    {
      english: "at the moment",
      chinese: "此刻，目前"
    },
    {
      english: "in two minds",
      chinese: "犹豫不决，三心二意"
    },
    {
      english: "steady",
      chinese: "平稳的，稳定的"
    },
    {
      english: "evident",
      chinese: "明显的"
    },
    {
      english: "cartoon",
      chinese: "漫画，动画片"
    },
    {
      english: "element",
      chinese: "成分，元素"
    },
    {
      english: "astronomy",
      chinese: "天文学"
    },
    {
      english: "series",
      chinese: "连续，系列，系列节目"
    },
    {
      english: "fiction",
      chinese: "小说，虚构"
    },
    {
      english: "harness",
      chinese: "驾驭，利用"
    },
    {
      english: "background",
      chinese: "背景"
    },
    {
      english: "acid",
      chinese: "酸（性的），酸味的（物质）"
    },
    {
      english: "greenhouse",
      chinese: "温室"
    },
    {
      english: "nuclear",
      chinese: "原子核的，核心的"
    },
    {
      english: "weapon",
      chinese: "武器"
    },
    {
      english: "genetic",
      chinese: "基因的，遗传（学）的"
    },
    {
      english: "engineering",
      chinese: "工程，工程学"
    },
    {
      english: "basis",
      chinese: "基础"
    },
    {
      english: "lie in",
      chinese: "在于"
    },
    {
      english: "rote",
      chinese: "死记硬背"
    },
    {
      english: "learn by rote",
      chinese: "死记硬背地学习"
    },
    {
      english: "relevance",
      chinese: "相关，关联"
    },
    {
      english: "in terms of",
      chinese: "从...方面（或角度）来说，按照，根据"
    },
    {
      english: "equation",
      chinese: "等式，方程（式）"
    },
    {
      english: "brief",
      chinese: "简洁的，短暂的"
    },
    {
      english: "mathematical",
      chinese: "数学的"
    },
    {
      english: "halve",
      chinese: "将...减半"
    },
    {
      english: "tend",
      chinese: "倾向，趋向"
    },
    {
      english: "in the form of",
      chinese: "呈...的形状，以...形式"
    },
    {
      english: "precise",
      chinese: "精确的"
    },
    {
      english: "qualitative",
      chinese: "定性的，性质上的"
    },
    {
      english: "grasp",
      chinese: "掌握，了解"
    },
    {
      english: "concept",
      chinese: "概念"
    },
    {
      english: "sufficient",
      chinese: "充分的，足够的"
    },
    {
      english: "convey",
      chinese: "传达，表达"
    },
    {
      english: "diagram",
      chinese: "图表，图解"
    },
    {
      english: "framework",
      chinese: "框架，结构"
    },
    {
      english: "molecular",
      chinese: "分子的"
    },
    {
      english: "transistor",
      chinese: "晶体管，晶体管收音机"
    },
    {
      english: "put across",
      chinese: "解释清楚，使被理解"
    },
    {
      english: "proportion",
      chinese: "比例，部分"
    },
    {
      english: "truly",
      chinese: "真正地，确实地"
    },
    {
      english: "magic",
      chinese: "魔术，魔力"
    },
    {
      english: "fit into",
      chinese: "适合，符合，属于"
    },
    {
      english: "producer",
      chinese: "（电影，电视片等的）制片人，生产者，制造人"
    },
    {
      english: "responsibility",
      chinese: "责任"
    },
    {
      english: "educate",
      chinese: "教育"
    },
    {
      english: "entertain",
      chinese: "给...以欢乐，招待"
    },
    {
      english: "hence",
      chinese: "因此，从此"
    },
    {
      english: "contact",
      chinese: "与...接触"
    },
    {
      english: "alien",
      chinese: "外国的，陌生的"
    },
    {
      english: "civilization",
      chinese: "文明"
    },
],
    text4: [{
      english: "driveway",
      chinese: "宅旁私家车道"
    },
    {
      english: "mow",
      chinese: "修剪（草坪），刈（草）"
    },
    {
      english: "lawn",
      chinese: "草地，草坪"
    },
    {
      english: "comprehend",
      chinese: "理解,了解,领会 "
    },
    {
      english: "turn away",
      chinese: "拒绝帮忙，不让...进入"
    },
    {
      english: "weed",
      chinese: "除去...的杂草，除草，杂草，野草"
    },
    {
      english: "assume",
      chinese: "假设，以为"
    },
    {
      english: "compliment",
      chinese: "赞扬，赞美的言辞或行为"
    },
    {
      english: "work out",
      chinese: "制定出，解决，算出"
    },
    {
      english: "weekly",
      chinese: "每周的，一周一次的"
    },
    {
      english: "clean up",
      chinese: "打扫，清除"
    },
    {
      english: "do with",
      chinese: "对待，处理"
    },
    {
      english: "determination",
      chinese: "决心，决定"
    },
    {
      english: "personnel",
      chinese: "人事部门，全体人员，全体职员"
    },
    {
      english: "apprentice",
      chinese: "学徒"
    },
    {
      english: "capacity",
      chinese: "能力，才能"
    },
    {
      english: "blueprint",
      chinese: "蓝图"
    },
    {
      english: "micrometer",
      chinese: "测微计，千分尺"
    },
    {
      english: "precision",
      chinese: "精密，精确（性）"
    },
    {
      english: "turn down",
      chinese: "拒绝"
    },
    {
      english: "skilled",
      chinese: "熟练的，有技巧的，技术性的"
    },
    {
      english: "grinder",
      chinese: "磨工"
    },
    {
      english: "grind",
      chinese: "磨，磨碎，碾碎"
    },
    {
      english: "instrument",
      chinese: "工具，器械，仪器"
    },
    {
      english: "for sale",
      chinese: "待售"
    },
    {
      english: "wreck",
      chinese: "残破物，（尤指失事船只，飞机等的）残骸"
    },
    {
      english: "call on",
      chinese: "拜访"
    },
    {
      english: "banker",
      chinese: "银行家，银行高级职员"
    },
    {
      english: "loan",
      chinese: "借，贷，贷款"
    },
    {
      english: "character",
      chinese: "（人的）品德，品质，性格"
    },
    {
      english: "damn",
      chinese: "丝毫"
    },
    {
      english: "reluctantly",
      chinese: "勉强地"
    },
    {
      english: "mortgage",
      chinese: "抵押借款，按揭"
    },
    {
      english: "down payment",
      chinese: "定金，（分期付款的）初付款额"
    },
    {
      english: "discard",
      chinese: "抛弃"
    },
    {
      english: "odds and ends",
      chinese: "零星杂物，琐碎物品"
    },
    {
      english: "screen",
      chinese: "纱门，纱窗，屏，荧屏"
    },
    {
      english: "hardware",
      chinese: "五金器具，（计算机的）硬件"
    },
    {
      english: "spot",
      chinese: "地点，斑点"
    },
    {
      english: "confidence",
      chinese: "信心"
    },
    {
      english: "amaze",
      chinese: "使惊愕，使诧异"
    },
    {
      english: "amazement",
      chinese: "惊愕，诧异"
    },
    {
      english: "diet",
      chinese: "日常饮食"
    },
    {
      english: "send for",
      chinese: "派人去叫，召唤，派人去取"
    },
    {
      english: "hunt",
      chinese: "寻找，打猎，猎取"
    },
    {
      english: "abandon",
      chinese: "抛弃，放弃"
    },
    {
      english: "property",
      chinese: "（房）地产，财产"
    },
    {
      english: "shed",
      chinese: "小屋，棚"
    },
    {
      english: "sometime",
      chinese: "某个时候"
    },
    {
      english: "sponsor",
      chinese: "为...做保证人，主办，发起，保证人，主办人，发起人"
    },
    {
      english: "amuse",
      chinese: "逗乐，给...提供娱乐"
    },
    {
      english: "approach",
      chinese: "接近"
    },
    {
      english: "millionaire",
      chinese: "百万富翁"
    },
    {
      english: "pass away",
      chinese: "去世"
    },
    {
      english: "check on",
      chinese: "检查，调查，察看"
    },
    {
      english: "handle",
      chinese: "管理，处理，操纵"
    },
    {
      english: "livable",
      chinese: "适于居住的"
    },
    {
      english: "homey",
      chinese: "舒适的，像家一样的"
    },
    {
      english: "stature",
      chinese: "身材，身高，境界"
    },
    {
      english: "industrialist",
      chinese: "工业家，实业家"
    },
    {
      english: "route",
      chinese: "路线，路程"
    },
    {
      english: "principle",
      chinese: "信条，原则，原理"
    },
    {
      english: "vision",
      chinese: "远见，视觉，视力"
    },
    {
      english: "optimism",
      chinese: "乐观，乐观主义"
    },
    {
      english: "above all",
      chinese: "最重要的是"
    },
    {
      english: "integrity",
      chinese: "正直，完整"
    },
    {
      english: "rung",
      chinese: "（梯子的）横档，梯级"
    },
    {
      english: "basement",
      chinese: "地下室"
    },
    {
      english: "giant",
      chinese: "巨大的，巨人"
    },
    {
      english: "balance",
      chinese: "平衡，余额"
    },
    {
      english: "balance sheet",
      chinese: "资产负债表"
    },
    {
      english: "decimal",
      chinese: "小数"
    },
],
    text5: [{
      english: "obituary",
      chinese: "讣告"
    },
    {
      english: "die of",
      chinese: "死于"
    },
    {
      english: "coronary",
      chinese: "冠状动脉的"
    },
    {
      english: "thrombosis",
      chinese: "血栓（形成）"
    },
    {
      english: "acquaintance",
      chinese: "相识的人，（略微的)了解"
    },
    {
      english: "instantly",
      chinese: "立刻，马上"
    },
    {
      english: "workaholic",
      chinese: "工作狂"
    },
    {
      english: "classic",
      chinese: "典范，典型，典型的"
    },
    {
      english: "day off",
      chinese: "休息日"
    },
    {
      english: "conceivably",
      chinese: "可想到的，可想象的"
    },
    {
      english: "retire",
      chinese: "退休"
    },
    {
      english: "executive",
      chinese: "（企业等中的）行政领导，管理人员"
    },
    {
      english: "extracurricular",
      chinese: "课外的"
    },
    {
      english: "monthly",
      chinese: "每月的，每月一次的"
    },
    {
      english: "golf",
      chinese: "高尔夫球运动"
    },
    {
      english: "salad",
      chinese: "色拉，凉拌蔬菜"
    },
    {
      english: "overweight",
      chinese: "肥胖的，超重的，过重的"
    },
    {
      english: "survivor",
      chinese: "遗留的家属，幸存者，生还者"
    },
    {
      english: "survive",
      chinese: "比...活得长，经历...后幸存"
    },
    {
      english: "marketable",
      chinese: "适合市场需求的，可出售的"
    },
    {
      english: "mother",
      chinese: "抚育（孩子）"
    },
    {
      english: "give up",
      chinese: "放弃"
    },
    {
      english: "compete",
      chinese: "竞争，对抗"
    },
    {
      english: "compete against/with",
      chinese: "与...竞争，与...对抗"
    },
    {
      english: "care for",
      chinese: "照看，照顾"
    },
    {
      english: "dearly",
      chinese: "非常地"
    },
    {
      english: "beloved",
      chinese: "深爱的，亲爱的"
    },
    {
      english: "eldest",
      chinese: "第一个出生的，年龄最大的"
    },
    {
      english: "manufacturer",
      chinese: "（尤指用机器）大量制造"
    },
    {
      english: "funeral",
      chinese: "葬礼"
    },
    {
      english: "embarrass",
      chinese: "使尴尬，使局促不安"
    },
    {
      english: "newly",
      chinese: "新近地"
    },
    {
      english: "married",
      chinese: "结婚的，已婚的"
    },
    {
      english: "odd",
      chinese: "临时的，不固定的"
    },
    {
      english: "grass",
      chinese: "大麻"
    },
    {
      english: "grab at",
      chinese: "抓住，夺得"
    },
    {
      english: "favorite",
      chinese: "特别受喜爱的人（或物），最喜欢的"
    },
    {
      english: "stay up",
      chinese: "醒着，不去睡"
    },
    {
      english: "board",
      chinese: "为...提供膳宿，搭伙，寄宿"
    },
    {
      english: "widow",
      chinese: "寡妇"
    },
    {
      english: "deceased",
      chinese: "死的"
    },
    {
      english: "the deceased",
      chinese: "已死的人"
    },
    {
      english: "replace",
      chinese: "代替，取代"
    },
    {
      english: "look sb in the eye",
      chinese: "直视某人"
    },
    {
      english: "bitter",
      chinese: "愤怒的，委屈的，怨恨的"
    },
    {
      english: "straighten out",
      chinese: "解决"
    },
    {
      english: "finance",
      chinese: "财政，金融，财源，财力"
    },
    {
      english: "stock",
      chinese: "股票，证券，公债"
    },
    {
      english: "option",
      chinese: "期权，选择"
    },
    {
      english: "stock option",
      chinese: "股票期权，优价认股权"
    },
    {
      english: "and all that",
      chinese: "诸如此类的"
    },
    {
      english: "heart-attack",
      chinese: "心脏病发作"
    },
    {
      english: "natural",
      chinese: "非常适合的人"
    },
    {
      english: "pick out",
      chinese: "辨认出，分辨出"
    },
    {
      english: "lineup",
      chinese: "（为接受检查等而排列的）一行人，一排人"
    },
    {
      english: "discreet",
      chinese: "谨慎的，（言行）审慎的"
    },
    {
      english: "inquiry",
      chinese: "打听，询问"
    },
    {
      english: "replacement",
      chinese: "接替者，替代物"
    },
    {
      english: "ask around",
      chinese: "四处打听"
    },
],
    text6: [{
      english: "valentine",
      chinese: "情人"
    },
    {
      english: "make one’s way",
      chinese: "走去"
    },
    {
      english: "grand",
      chinese: "宏伟的，壮丽的"
    },
    {
      english: "absorb",
      chinese: "完全吸收住...的注意，吸收"
    },
    {
      english: "margin",
      chinese: "页边空白"
    },
    {
      english: "reflect",
      chinese: "反映，显示"
    },
    {
      english: "thoughtful",
      chinese: "深思的，体贴的"
    },
    {
      english: "insightful",
      chinese: "具有洞察力的"
    },
    {
      english: "insight",
      chinese: "洞察力"
    },
    {
      english: "previous",
      chinese: "早先的，先前的"
    },
    {
      english: "locate",
      chinese: "找到...的位置，使坐落于"
    },
    {
      english: "correspond",
      chinese: "通信"
    },
    {
      english: "ship",
      chinese: "（尤指用船）运送"
    },
    {
      english: "overseas",
      chinese: "去（在）国外（的），去（在）海外（的）"
    },
    {
      english: "fertile",
      chinese: "肥沃的，富饶的"
    },
    {
      english: "romance",
      chinese: "爱情故事，风流韵事"
    },
    {
      english: "bud",
      chinese: "发芽，萌芽，（枝叶的）芽，花蕾"
    },
    {
      english: "haunt",
      chinese: "使担忧，使苦恼，（鬼魂）常出没于"
    },
    {
      english: "take a chance (on sth)",
      chinese: "碰运气，冒险"
    },
    {
      english: "disgust",
      chinese: "使厌烦，使反感"
    },
    {
      english: "whichever",
      chinese: "无论哪个或哪些"
    },
    {
      english: "lapel",
      chinese: "（西服上衣的）翻领"
    },
    {
      english: "sustain",
      chinese: "支持，使（努力等）持续下去，保持"
    },
    {
      english: "unfailing",
      chinese: "永恒的，无穷的"
    },
    {
      english: "slim",
      chinese: "苗条的，细小的，微小的"
    },
    {
      english: "curl",
      chinese: "鬈发"
    },
    {
      english: "chin",
      chinese: "下巴，颏"
    },
    {
      english: "provocative",
      chinese: "挑逗的，挑衅的"
    },
    {
      english: "curve",
      chinese: "（使）弯曲"
    },
    {
      english: "go sb’s way",
      chinese: "与某人同路"
    },
    {
      english: "murmur",
      chinese: "轻声说，咕哝"
    },
    {
      english: "more than a little",
      chinese: "很，非常"
    },
    {
      english: "ankle",
      chinese: "踝，踝节部"
    },
    {
      english: "thrust",
      chinese: "挤入，插入，猛推"
    },
    {
      english: "heel",
      chinese: "（鞋，袜等的）后跟，脚后跟，踵"
    },
    {
      english: "split",
      chinese: "（使）裂开，破裂"
    },
    {
      english: "keen",
      chinese: "强烈的，热切的"
    },
    {
      english: "longing",
      chinese: "渴望"
    },
    {
      english: "companion",
      chinese: "陪伴"
    },
    {
      english: "uphold",
      chinese: "支持，维护"
    },
    {
      english: "sensible",
      chinese: "通情达理的，理智的"
    },
    {
      english: "kindly",
      chinese: "亲切的，和蔼的，仁慈的"
    },
    {
      english: "glow",
      chinese: "光亮，光辉"
    },
    {
      english: "hesitate",
      chinese: "踌躇，犹豫"
    },
    {
      english: "grip",
      chinese: "握紧，紧握"
    },
    {
      english: "leather",
      chinese: "（动物的）皮，皮革"
    },
    {
      english: "identify",
      chinese: "识别"
    },
    {
      english: "grateful",
      chinese: "感激的"
    },
    {
      english: "be grateful to(sb)for(sth) ",
      chinese: "为某事感激某人 "
    },
    {
      english: "square",
      chinese: "挺直（肩膀）"
    },
    {
      english: "salute",
      chinese: "（向...)行举手礼"
    },
    {
      english: "lieutenant",
      chinese: "海军上尉，陆军中尉"
    },
    {
      english: "broaden",
      chinese: "（使）变宽，（使）扩大"
    },
    {
      english: "wisdom",
      chinese: "智慧，明智"
    },
    {
      english: "in response to",
      chinese: "作为对...的回应"
    },
],
    text7: [{
      english: "extensively",
      chinese: "广泛地，大量地"
    },
    {
      english: "intelligence",
      chinese: "智力"
    },
    {
      english: "intelligent",
      chinese: "聪明的，有才智的"
    },
    {
      english: "controversy",
      chinese: "争论，争议"
    },
    {
      english: "surround",
      chinese: "围绕，包围"
    },
    {
      english: "consciousness",
      chinese: "意识"
    },
    {
      english: "explore",
      chinese: "探究，探索"
    },
    {
      english: "obvious",
      chinese: "明显的"
    },
    {
      english: "vet",
      chinese: "兽医"
    },
    {
      english: "keeper",
      chinese: "（动物园的）饲养员"
    },
    {
      english: "encounter",
      chinese: "遇到，遭遇"
    },
    {
      english: "reveal",
      chinese: "展示，揭露"
    },
    {
      english: "convince",
      chinese: "使确信，使信服"
    },
    {
      english: "feat",
      chinese: "技艺，业绩，功绩"
    },
    {
      english: "captivity",
      chinese: "被俘，监禁，束缚"
    },
    {
      english: "dominant",
      chinese: "统治的，占优势的"
    },
    {
      english: "species",
      chinese: "物种"
    },
    {
      english: "planet",
      chinese: "行星"
    },
    {
      english: "make a deal",
      chinese: "达成交易"
    },
    {
      english: "conservationist",
      chinese: "自然资源保护论者"
    },
    {
      english: "gorilla",
      chinese: "大猩猩"
    },
    {
      english: "suspicious",
      chinese: "可疑的，猜疑的"
    },
    {
      english: "peanut",
      chinese: "花生"
    },
    {
      english: "only to",
      chinese: "结果却，不料"
    },
    {
      english: "blank",
      chinese: "有表情的，空白的"
    },
    {
      english: "negotiate",
      chinese: "谈判，协商"
    },
    {
      english: "stake",
      chinese: "奖品，奖金，赌注"
    },
    {
      english: "pineapple",
      chinese: "凤梨，菠萝"
    },
    {
      english: "relieve",
      chinese: "使减轻痛苦或焦虑等，减轻（痛苦或焦虑等）"
    },
    {
      english: "orangutan",
      chinese: "猩猩"
    },
    {
      english: "undertake",
      chinese: "从事，承担（任务等）"
    },
    {
      english: "anthropologist",
      chinese: "人类学者"
    },
    {
      english: "figure out",
      chinese: "理解，推断出"
    },
    {
      english: "extend",
      chinese: "延伸，伸展，扩大，加长"
    },
    {
      english: "dealing",
      chinese: "交易，买卖"
    },
    {
      english: "chip",
      chinese: "薄片，碎片，集成电路片"
    },
    {
      english: "expand",
      chinese: "扩大，扩展"
    },
    {
      english: "switch",
      chinese: "转换，变换"
    },
    {
      english: "foil",
      chinese: "金属薄片，箔"
    },
    {
      english: "virtuous",
      chinese: "有道德的，善良的"
    },
    {
      english: "promptly",
      chinese: "立即地"
    },
    {
      english: "stem",
      chinese: "茎，（树）干，（叶）梗"
    },
    {
      english: "whale",
      chinese: "鲸"
    },
    {
      english: "cooperate",
      chinese: "合作，协作"
    },
    {
      english: "behaviorist",
      chinese: "行为主义者"
    },
    {
      english: "in sb’s interest(s)",
      chinese: "为了某人的利益"
    },
    {
      english: "go far",
      chinese: "帮助很大，很有成效"
    },
    {
      english: "consultant",
      chinese: "顾问"
    },
    {
      english: "behavior",
      chinese: "举止，行为"
    },
    {
      english: "assess",
      chinese: "评估，估量"
    },
    {
      english: "judgment",
      chinese: "判断，意见，看法"
    },
    {
      english: "mate",
      chinese: "配偶，伙伴，同事"
    },
    {
      english: "thrive",
      chinese: "茁壮成长，兴旺"
    },
    {
      english: "at first",
      chinese: "起先"
    },
    {
      english: "stretcher",
      chinese: "担架"
    },
    {
      english: "emergency",
      chinese: "紧急情况，突然事件"
    },
    {
      english: "go wrong",
      chinese: "有毛病的，出故障"
    },
    {
      english: "halt",
      chinese: "停住，停止"
    },
    {
      english: "throw up",
      chinese: "呕吐"
    },
    {
      english: "apparently",
      chinese: "明显地"
    },
    {
      english: "size up",
      chinese: "估量，判断"
    },
    {
      english: "release",
      chinese: "释放"
    },
    {
      english: "slide",
      chinese: "（使）滑动"
    },
    {
      english: "primate",
      chinese: "灵长目动物"
    },
    {
      english: "evidence",
      chinese: "证据，迹象"
    },
    {
      english: "deceive",
      chinese: "欺骗"
    },
    {
      english: "inaccessible",
      chinese: "达不到的，难得到的"
    },
    {
      english: "original",
      chinese: "最初的，原始的"
    },
    {
      english: "colony",
      chinese: "（生长在同一地方的动物或植物）群，群体，殖民地gaze+凝视，注视"
    },
    {
      english: "give in",
      chinese: "让步，屈服，投降"
    },
    {
      english: "underneath",
      chinese: "在（...）下面，在（...）底下"
    },
    {
      english: "pea-brained",
      chinese: "笨的"
    },
    {
      english: "turtle",
      chinese: "（海）龟"
    },
    {
      english: "survival",
      chinese: "生存，幸存"
    },
    {
      english: "disaster",
      chinese: "灾难"
    },
    {
      english: "wipe out",
      chinese: "消灭，消除"
    },
    {
      english: "dinosaur",
      chinese: "恐龙"
    },
    {
      english: "horizon",
      chinese: "眼界，见识，地平线"
    },
],
    text8: [{
      english: "fable",
      chinese: "寓言"
    },
    {
      english: "teenager",
      chinese: "青少年"
    },
    {
      english: "run out of",
      chinese: "用完，耗尽"
    },
    {
      english: "file",
      chinese: "档案，卷宗"
    },
    {
      english: "folder",
      chinese: "文件夹"
    },
    {
      english: "drugstore",
      chinese: "（兼营杂货的）药房"
    },
    {
      english: "handful",
      chinese: "一把，少量"
    },
    {
      english: "modestly",
      chinese: "不太多，不太大，适中"
    },
    {
      english: "upset",
      chinese: "使苦恼，使心烦意乱"
    },
    {
      english: "ignorant",
      chinese: "无知的，不知道的"
    },
    {
      english: "ignorance",
      chinese: "无知，愚昧"
    },
    {
      english: "senior",
      chinese: "（大学或中学）毕业班的学生"
    },
    {
      english: "private",
      chinese: "私人的，私有的"
    },
    {
      english: "slice",
      chinese: "部分，（薄薄的）一片"
    },
    {
      english: "calculation",
      chinese: "计算"
    },
    {
      english: "nonexistent",
      chinese: "不存在的"
    },
    {
      english: "chill",
      chinese: "（使）变冷，（使）不寒而栗"
    },
    {
      english: "indifference",
      chinese: "漠不关心"
    },
    {
      english: "sum",
      chinese: "总结，概述，合计"
    },
    {
      english: "sum up",
      chinese: "总结，概括"
    },
    {
      english: "financial",
      chinese: "财政的，金融的"
    },
    {
      english: "accumulate",
      chinese: "积累，积聚"
    },
    {
      english: "ancestor",
      chinese: "祖先，祖宗"
    },
    {
      english: "intellectual",
      chinese: "智力的"
    },
    {
      english: "affect",
      chinese: "影响"
    },
    {
      english: "industrial",
      chinese: "工业的"
    },
    {
      english: "function",
      chinese: "运作，起作用，作用，功能"
    },
    {
      english: "idle",
      chinese: "懒散的，空闲的"
    },
    {
      english: "jam",
      chinese: "发生故障，卡住，堵塞"
    },
    {
      english: "break down",
      chinese: "停止运转，失败，垮了"
    },
    {
      english: "drive（sth）home(to sb)",
      chinese: "使清楚无误地理解"
    },
    {
      english: "humble",
      chinese: "谦卑的，卑微的"
    },
    {
      english: "dramatize",
      chinese: "将...改编为剧本，将...戏剧化"
    },
    {
      english: "headphone",
      chinese: "头戴式受话器，耳机"
    },
    {
      english: "portable",
      chinese: "便携（式）的，手提（式）的"
    },
    {
      english: "peasant",
      chinese: "农民，雇农"
    },
    {
      english: "county",
      chinese: "（英国的）郡，（美国的）县"
    },
    {
      english: "hut",
      chinese: "小屋，棚屋"
    },
    {
      english: "search for",
      chinese: "寻找"
    },
    {
      english: "poverty",
      chinese: "贫穷，贫困"
    },
    {
      english: "leisure",
      chinese: "空闲，闲暇"
    },
    {
      english: "luxury",
      chinese: "奢侈品，奢华，奢侈"
    },
    {
      english: "mill",
      chinese: "工厂，制造厂"
    },
    {
      english: "subway",
      chinese: "地铁"
    },
    {
      english: "better off",
      chinese: "更富有，更舒服"
    },
    {
      english: "foe",
      chinese: "敌人"
    },
    {
      english: "scare",
      chinese: "（使）惊慌，（使）恐惧"
    },
    {
      english: "foxhole",
      chinese: "散兵坑（小型掩体）"
    },
    {
      english: "wake up",
      chinese: "醒了"
    },
    {
      english: "porter",
      chinese: "（旅馆，火车站等的）搬行李工人，搬运工人"
    },
    {
      english: "complex",
      chinese: "复杂的"
    },
    {
      english: "manual",
      chinese: "体力的，手工做的"
    },
    {
      english: "slum",
      chinese: "贫民窟"
    },
    {
      english: "plumbing",
      chinese: "（水，煤气等）管道设施"
    },
    {
      english: "privacy",
      chinese: "（不受干扰的）独处，隐私，隐秘"
    },
    {
      english: "trash",
      chinese: "垃圾，废物"
    },
    {
      english: "befriend",
      chinese: "帮助，以朋友态度对待"
    },
    {
      english: "swear",
      chinese: "发誓，宣誓"
    },
    {
      english: "make a living by",
      chinese: "靠...维持生计"
    },
    {
      english: "miracle",
      chinese: "奇迹"
    },
    {
      english: "faculty",
      chinese: "官能"
    },
    {
      english: "contemptible",
      chinese: "令人鄙视的，可轻蔑的"
    },
    {
      english: "coward",
      chinese: "懦夫"
    },
],
    num1: 62,
    num2: 43,
    num3: 79,
    num4: 72,
    num5: 59,
    num6: 55,
    num7: 78,
    num8: 63
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
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    var wordArray = new Array(this.data.num)
      .fill(0)
      .map((v, i) => i + 1)
      .sort(() => 0.5 - Math.random())
      .filter((v, i) => i < 5);
    this.setData({
      index: wordArray[0]
    }),
      this.setData({
        answer: ((Math.ceil((Math.random() * 100) * 100)) % 4)
      }),
      this.setData({
        cnindex0: 0 == this.data.answer ? this.data.index : wordArray[1]
      }),
      this.setData({
        cnindex1: 1 == this.data.answer ? this.data.index : wordArray[2]
      }),
      this.setData({
        cnindex2: 2 == this.data.answer ? this.data.index : wordArray[3]
      }),
      this.setData({
        cnindex3: 3 == this.data.answer ? this.data.index : wordArray[4]
      })
  },
  checkYES: function () {
    this.changeText();
    var rightNum = getApp().globalData.rightNum;
    rightNum = rightNum + 1;
    getApp().globalData.rightNum = rightNum;
    this.setData({
      rightNum: getApp().globalData.rightNum
    })
    this.setData({
      wrongNum: getApp().globalData.wrongNum
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
    this.changeText();
    this.getIndex();
    this.changeText();
    this.setData({
      rightNum: getApp().globalData.rightNum
    })
    this.setData({
      wrongNum: getApp().globalData.wrongNum
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