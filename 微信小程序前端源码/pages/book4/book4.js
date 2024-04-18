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
      }],
    text1: [{
      english: "alliance",
      chinese: " n.联盟"
    },
    {
      english: "campaign",
      chinese: " n.战役，运动"
    },
    {
      english: "conquest",
      chinese: " n.战胜，征服"
    },
    {
      english: "crucial",
      chinese: " adj.重要的"
    },
    {
      english: "decisive",
      chinese: " adj.决定性的"
    },
    {
      english: "declaration",
      chinese: " n.公告"
    },
    {
      english: "efficient",
      chinese: " adj.有效率的"
    },
    {
      english: "engage",
      chinese: " v.吸引"
    },
    {
      english: "heroic",
      chinese: " adj.英勇的"
    },
    {
      english: "instruct",
      chinese: " v.指导，命令"
    },
    {
      english: "invasion",
      chinese: " n.入侵"
    },
    {
      english: "launch",
      chinese: " v.发动"
    },
    {
      english: "limp",
      chinese: " v.一瘸一拐地走"
    },
    {
      english: "minus",
      chinese: " v.减"
    },
    {
      english: "occupation",
      chinese: " n.职业，占有"
    },
    {
      english: "offensive",
      chinese: " adj.冒犯的"
    },
    {
      english: "raw",
      chinese: " adj.阴冷的"
    },
    {
      english: "reckon",
      chinese: " v.计算，认为"
    },
    {
      english: "region",
      chinese: " n.地区"
    },
    {
      english: "render",
      chinese: " v.使成为"
    },
    {
      english: "resistance",
      chinese: " n.抵抗"
    },
    {
      english: "siege",
      chinese: " v.围攻"
    },
    {
      english: "stroke",
      chinese: " n. 一击;打击"
    },
    {
      english: "toll",
      chinese: " v.征收 n.通行费"
    },
    {
      english: "underestimate",
      chinese: " v.低估"
    },
    {
      english: "weaken",
      chinese: " v.使虚弱"
    },
    {
      english: "aboard",
      chinese: " adv.在船/飞机上"
    },
    {
      english: "ambitious",
      chinese: " adj.雄心勃勃的"
    },
    {
      english: "boast",
      chinese: " v.吹嘘"
    },
    {
      english: "cancel",
      chinese: " v.取消"
    },
    {
      english: "concern",
      chinese: " v.关心"
    },
    {
      english: "contest",
      chinese: " v.争辩"
    },
    {
      english: "objective",
      chinese: " adj.客观的"
    },
    {
      english: "obstacle",
      chinese: " n.障碍,干扰"
    },
    {
      english: "responsible",
      chinese: " adj.负责的"
    },
    {
      english: "secure",
      chinese: " adj.安全的"
    },
    {
      english: "stiff",
      chinese: " adj. 严厉的；呆板的；坚硬的"
    },
    {
      english: "withstand",
      chinese: " v.抵抗；耐得住，禁得起"
    },
    {
      english: "at the cost of",
      chinese: " 以…为代价"
    },
    {
      english: "be faced of",
      chinese: " 面对"
    },
    {
      english: "be/get bogged down",
      chinese: " 陷入困境"
    },
    {
      english: "bide one’s time",
      chinese: " 等待时机"
    },
    {
      english: "bring to a halt",
      chinese: " 使停止"
    },
    {
      english: "catch sb. off guard",
      chinese: "  趁某人不备"
    },
    {
      english: "drag on",
      chinese: " 拖延"
    },
    {
      english: "be engaged in",
      chinese: "(doing) sth.  参加；从事于"
    },
    {
      english: "in the case of",
      chinese: " 在…的情况下"
    },
    {
      english: "press on/ahead",
      chinese: " 继续进行"
    },
    {
      english: "reckon with",
      chinese: " 处理"
    },
    {
      english: "stand/get/be in the way",
      chinese: " 妨碍"
    },
    {
      english: "take a gamble",
      chinese: " 冒险,从事"
    },
    {
      english: "take its/a toll",
      chinese: " 造成损失"
    },
    {
      english: "thanks to",
      chinese: " 幸亏"
    },
    {
      english: "turn the tide",
      chinese: " 扭转局势"
    },
    {
      english: "call off",
      chinese: " 取消"
    },
    {
      english: "due to",
      chinese: " 由于"
    },
    {
      english: "hold out",
      chinese: " 提供"
    },
    {
      english: "in case",
      chinese: " 万一"
    },
    {
      english: "on the eve of",
      chinese: " 在…前夕"
    },
    {
      english: "pay off",
      chinese: " 取得好结果"
    },
    {
      english: "prior to",
      chinese: " 在…之前"
    }
],
    text2: [{
      english: "alert",
      chinese: " v.使警觉"
    },
    {
      english: "apart",
      chinese: " adj.分离的"
    },
    {
      english: "application",
      chinese: " n.应用,申请"
    },
    {
      english: "approximately",
      chinese: " adv.大约,近似地"
    },
    {
      english: "automate",
      chinese: " v.使自动化"
    },
    {
      english: "bunch",
      chinese: " n.群,串"
    },
    {
      english: "calculate",
      chinese: " v.计算"
    },
    {
      english: "computerize",
      chinese: " v.使电脑化"
    },
    {
      english: "correlate",
      chinese: " v.使相互有关联"
    },
    {
      english: "decrease",
      chinese: " v.减少"
    },
    {
      english: "detect",
      chinese: " v.观察,发现"
    },
    {
      english: "eliminate",
      chinese: " v.消除,排除"
    },
    {
      english: "expansion",
      chinese: " n.扩张"
    },
    {
      english: "frequency",
      chinese: " n.频率"
    },
    {
      english: "hazard",
      chinese: " v.赌运气"
    },
    {
      english: "incorporate",
      chinese: " v.包含,吸收,合并"
    },
    {
      english: "lane",
      chinese: " n.小巷,航线,车道"
    },
    {
      english: "lucrative",
      chinese: " adj.有利可图的"
    },
    {
      english: "magnetic",
      chinese: " adj.有磁性/吸引力"
    },
    {
      english: "monotonous",
      chinese: " adj.单调,无变化的"
    },
    {
      english: "mount",
      chinese: " v. 安装，架置；增加,爬上"
    },
    {
      english: "orbit",
      chinese: " n.轨道,眼眶"
    },
    {
      english: "prototype",
      chinese: " n.原型,标准,模范"
    },
    {
      english: "remote",
      chinese: " adj.遥远的,偏僻的"
    },
    {
      english: "satellite",
      chinese: " n.人造卫星"
    },
    {
      english: "signal",
      chinese: " n.信号;v.标志"
    },
    {
      english: "steer",
      chinese: " v.控制,引导,驾驶"
    },
    {
      english: "vapor",
      chinese: " n.蒸汽,烟雾"
    },
    {
      english: "vibrate",
      chinese: " v.震动,颤动"
    },
    {
      english: "accommodate",
      chinese: " v.适应,调节"
    },
    {
      english: "address",
      chinese: " v.着手解决"
    },
    {
      english: "affordable",
      chinese: " adj.支付得起的"
    },
    {
      english: "component",
      chinese: " n.元件,组件"
    },
    {
      english: "costly",
      chinese: " adj.昂贵的"
    },
    {
      english: "equivalent",
      chinese: " n.等价物"
    },
    {
      english: "exposure",
      chinese: " v.暴露"
    },
    {
      english: "feasible",
      chinese: " adj.可行的,可能的"
    },
    {
      english: "implement",
      chinese: " v.贯彻,执行"
    },
    {
      english: "mature",
      chinese: " v.成熟"
    },
    {
      english: "realistic",
      chinese: " adj.真实的"
    },
    {
      english: "resume",
      chinese: " v.继续 n.简历"
    },
    {
      english: "select",
      chinese: " v.选择"
    },
    {
      english: "shift",
      chinese: " v.转移"
    },
    {
      english: "stress",
      chinese: " n.压力v.使紧张"
    },
    {
      english: "enroute",
      chinese: "  n.在途中"
    },
    {
      english: "there by",
      chinese: " adv.因此,从而"
    },
    {
      english: "be poised to",
      chinese: "(do)   做好准备随时"
    },
    {
      english: "get/be struck in",
      chinese: "(sth.)   停留,被阻塞"
    },
    {
      english: "in the air",
      chinese: " 悬而未决;在空气中"
    },
    {
      english: "send out",
      chinese: " 发送信号"
    },
    {
      english: "start up",
      chinese: " 发动,启动;开始"
    },
    {
      english: "take control of",
      chinese: " 控制"
    },
    {
      english: "turn",
      chinese: "(sth.)into a reality  使…成为现实"
    },
    {
      english: "at the start of",
      chinese: " 在…的开始"
    },
    {
      english: "by means of",
      chinese: " 用，依靠"
    },
    {
      english: "in cooperation with",
      chinese: " 合作"
    }
],
    text3: [{
      english: "applicant",
      chinese: " n.申请人,求职者"
    },
    {
      english: "barely",
      chinese: " adv.仅够,几乎没有"
    },
    {
      english: "beforehand",
      chinese: " adv.事先"
    },
    {
      english: "blurt",
      chinese: " v.不加思考地说出"
    },
    {
      english: "chuckle",
      chinese: " v.咯咯的笑"
    },
    {
      english: "endeavor",
      chinese: " n.&v.努力,尽力"
    },
    {
      english: "generously",
      chinese: " adv.慷慨地"
    },
    {
      english: "grill",
      chinese: " v.盘问,烧烤"
    },
    {
      english: "inadequate",
      chinese: " adj. 不充足的;不适当的"
    },
    {
      english: "incidentally",
      chinese: " adv.顺便提起地"
    },
    {
      english: "measurable",
      chinese: " adj.可测量的"
    },
    {
      english: "partner",
      chinese: " n.搭档,同伙"
    },
    {
      english: "physically",
      chinese: " adj.身体上的"
    },
    {
      english: "preparation",
      chinese: " n.准备,预备"
    },
    {
      english: "prospective",
      chinese: " adj.预期的"
    },
    {
      english: "respond",
      chinese: " v.回答"
    },
    {
      english: "rude",
      chinese: " adj.粗鲁的"
    },
    {
      english: "sparkle",
      chinese: " v. 闪耀，闪烁;显露"
    },
    {
      english: "structure",
      chinese: " n.构造,结构"
    },
    {
      english: "taxi",
      chinese: " v. 乘出租车;在水面滑行"
    },
    {
      english: "veteran",
      chinese: " n.老兵"
    },
    {
      english: "administration",
      chinese: " n.管理,行政部门"
    },
    {
      english: "benign",
      chinese: " adj.仁慈的"
    },
    {
      english: "brand",
      chinese: " n.商标"
    },
    {
      english: "carve",
      chinese: " v.雕刻"
    },
    {
      english: "clatter",
      chinese: " v.卡塔卡塔的响"
    },
    {
      english: "coil",
      chinese: " v.盘绕"
    },
    {
      english: "fright",
      chinese: " n.惊骇,吃惊"
    },
    {
      english: "intricate",
      chinese: " adj.复杂的,错综的"
    },
    {
      english: "lengthen",
      chinese: " v.使变长"
    },
    {
      english: "messenger",
      chinese: " n.信使"
    },
    {
      english: "mortal",
      chinese: " adj. 致命的;终有一死的"
    },
    {
      english: "pregnant",
      chinese: " adj.怀孕的,妊娠的"
    },
    {
      english: "quiver",
      chinese: " v.颤抖"
    },
    {
      english: "scrap",
      chinese: " n.小块,少许"
    },
    {
      english: "tear",
      chinese: " v.撕碎"
    },
    {
      english: "unable",
      chinese: " adj.不能的"
    },
    {
      english: "as i see it",
      chinese: " 在我看来"
    },
    {
      english: " (as) the saying goes",
      chinese: " 俗话说"
    },
    {
      english: "beyond one’s wildest dreams",
      chinese: " 无论如何也想不到地"
    },
    {
      english: "follow up",
      chinese: " 采取进一步行动"
    },
    {
      english: "from one’s/the standpoint",
      chinese: "(of)   从…的观点来看"
    },
    {
      english: "go after",
      chinese: " 努力争取"
    },
    {
      english: "in sb.'s hands",
      chinese: " 为某人所有"
    },
    {
      english: "in the neighborhood of",
      chinese: " 大约"
    },
    {
      english: "make a difference",
      chinese: " 产生影响"
    },
    {
      english: "take/have a crack at",
      chinese: " 尝试"
    },
    {
      english: "come at",
      chinese: " 向…走来;袭击"
    },
    {
      english: "get in",
      chinese: " 被接纳或录用"
    },
    {
      english: "put in a word",
      chinese: "(for sb.)   为(某人)说情"
    },
    {
      english: "take on",
      chinese: " 雇用"
    }
],
    text4: [{
      english: "academic",
      chinese: " n.学者;adj.学术的"
    },
    {
      english: "accelerate",
      chinese: " v.使…加速"
    },
    {
      english: "advantageous",
      chinese: " adj.有利的"
    },
    {
      english: "aspire",
      chinese: " v.渴望得到"
    },
    {
      english: "asset",
      chinese: " n.财产;优势"
    },
    {
      english: "center",
      chinese: " v.置于中央"
    },
    {
      english: "considerable",
      chinese: " adj.相当大的"
    },
    {
      english: "contradiction",
      chinese: " adj.矛盾"
    },
    {
      english: "displace",
      chinese: " v.取代…的位置"
    },
    {
      english: "divorce",
      chinese: " v.使分离，离婚"
    },
    {
      english: "domestic",
      chinese: " adj.本国的"
    },
    {
      english: "earnest",
      chinese: " adj.诚挚的"
    },
    {
      english: "economy",
      chinese: " n.经济;经济制度"
    },
    {
      english: "elsewhere",
      chinese: " adv.在别处"
    },
    {
      english: "endorse",
      chinese: " v.赞同,认可"
    },
    {
      english: "entitle",
      chinese: " v.给…题名"
    },
    {
      english: "erase",
      chinese: " v.擦掉,抹掉"
    },
    {
      english: "establishment",
      chinese: " n.当权派"
    },
    {
      english: "facilitate",
      chinese: " v.使容易"
    },
    {
      english: "forefront",
      chinese: " n.最前面"
    },
    {
      english: "growth",
      chinese: " n.生长"
    },
    {
      english: "increasingly",
      chinese: " adv.在别处"
    },
    {
      english: "investment",
      chinese: " n.投资"
    },
    {
      english: "landmark",
      chinese: " adj.有重大意义的"
    },
    {
      english: "network",
      chinese: " v. 沟通;交际"
    },
    {
      english: "outlook",
      chinese: " n. 前景，展望;观点，见解"
    },
    {
      english: "overtake",
      chinese: " v.赶上;超过"
    },
    {
      english: "patriotic",
      chinese: " adj.爱国的"
    },
    {
      english: "pendulum",
      chinese: " n.摆;钟摆"
    },
    {
      english: "strengthen",
      chinese: " v.加强"
    },
    {
      english: "unlike",
      chinese: " adj.不像"
    },
    {
      english: "vanish",
      chinese: " v.不见;不复存在"
    },
    {
      english: "witness",
      chinese: " n.目击者v.目击"
    },
    {
      english: "advantage",
      chinese: " n.好处"
    },
    {
      english: "currency",
      chinese: " n.货币"
    },
    {
      english: "fatigue",
      chinese: " n.疲劳"
    },
    {
      english: "globalize",
      chinese: " v.使全球化"
    },
    {
      english: "herald",
      chinese: " v.预报；预示"
    },
    {
      english: "inherent",
      chinese: " adj. 天生;内在的,固有的"
    },
    {
      english: "namely",
      chinese: " adv.就是，即;换句话说"
    },
    {
      english: "originate",
      chinese: " v.发源，开始"
    },
    {
      english: "participation",
      chinese: " n.参与"
    },
    {
      english: "software",
      chinese: " n.软件"
    },
    {
      english: "stable",
      chinese: " adj.稳定的"
    },
    {
      english: "subsidy",
      chinese: " n.补贴"
    },
    {
      english: "a handful of",
      chinese: " 少数的"
    },
    {
      english: "a variety of",
      chinese: " 多种多样的"
    },
    {
      english: "at odds with",
      chinese: " 与…相冲突/争吵"
    },
    {
      english: "be committed to",
      chinese: " 承诺,忠于"
    },
    {
      english: "let alone",
      chinese: " 更不用说"
    },
    {
      english: "make no/little difference",
      chinese: " 无影响"
    },
    {
      english: "strike a balance",
      chinese: " 求得平衡"
    },
    {
      english: "sweep aside",
      chinese: " 不理会"
    },
    {
      english: "a majority of",
      chinese: " 多数，大半"
    },
    {
      english: "add to",
      chinese: " 增加"
    },
    {
      english: "blow up",
      chinese: " 炸毁"
    },
    {
      english: "phase out",
      chinese: " 逐步取消"
    },
    {
      english: "in evidence",
      chinese: " 显而易见的"
    },
    {
      english: "take advantage of",
      chinese: " 利用"
    },
    {
      english: "you bet",
      chinese: " 的确；当然"
    }
],
    text5: [{
      english: "affectionate",
      chinese: " adj.充满深情的"
    },
    {
      english: "broke",
      chinese: " adj. 破产的;缺乏资金的"
    },
    {
      english: "candid",
      chinese: " adj. 公正的;直言不讳的"
    },
    {
      english: "capable",
      chinese: " adj.能干的"
    },
    {
      english: "constitution",
      chinese: " n.宪法"
    },
    {
      english: "current",
      chinese: " n.水流"
    },
    {
      english: "deceptive",
      chinese: " adj. 欺诈的，骗人的;靠不住的"
    },
    {
      english: "definite",
      chinese: " adj.明确的"
    },
    {
      english: "hitherto",
      chinese: " adv.迄今为止"
    },
    {
      english: "insane",
      chinese: " adj.蠢极的"
    },
    {
      english: "instinct",
      chinese: " n.本能，直觉"
    },
    {
      english: "mild",
      chinese: " adj.温和的"
    },
    {
      english: "oddly",
      chinese: " adv.奇特地"
    },
    {
      english: "pawn",
      chinese: " v.抵押"
    },
    {
      english: "rub",
      chinese: " v.摩擦"
    },
    {
      english: "sip",
      chinese: " v.小口抿"
    },
    {
      english: "spicy",
      chinese: " adj.下流的;辛辣的"
    },
    {
      english: "stroke",
      chinese: " v.轻抚"
    },
    {
      english: "transparent",
      chinese: " adj.透明的"
    },
    {
      english: "trim",
      chinese: " v.击败"
    },
    {
      english: "vacancy",
      chinese: " n.空缺"
    },
    {
      english: "vanity",
      chinese: " n.虚荣"
    },
    {
      english: "wrinkle",
      chinese: " v.使起皱纹"
    },
    {
      english: "assumption",
      chinese: " n.假定"
    },
    {
      english: "dump",
      chinese: " v.倾倒"
    },
    {
      english: "fate",
      chinese: " n.命运"
    },
    {
      english: "guilt",
      chinese: " n.内疚"
    },
    {
      english: "layer",
      chinese: " n.层"
    },
    {
      english: "literally",
      chinese: " adv. 逐字地; 确实地;简直"
    },
    {
      english: "shaky",
      chinese: " adj.颤抖的"
    },
    {
      english: "sheer",
      chinese: " adj.全然的,纯粹的. "
    },
    {
      english: "be/go",
      chinese: "(all) to pieces  崩溃，垮掉"
    },
    {
      english: "down and out",
      chinese: " 穷困潦倒"
    },
    {
      english: "drive at",
      chinese: " 意指，要说"
    },
    {
      english: "for sb.’s",
      chinese: "(own) part/the part of  对……来说"
    },
    {
      english: "go broke",
      chinese: " 一文不值，破产"
    },
    {
      english: "in a way",
      chinese: " 在某种程度上"
    },
    {
      english: "in accordance with",
      chinese: " 与……一致"
    },
    {
      english: "in bad/good condition",
      chinese: " 情况好/坏"
    },
    {
      english: "oddly enough",
      chinese: " 说来奇怪"
    },
    {
      english: "something of",
      chinese: " 某种程度上"
    },
    {
      english: "stick to",
      chinese: " 坚持"
    },
    {
      english: "be taken aback",
      chinese: " 吃一惊"
    },
    {
      english: "turn up",
      chinese: " 出现，来到"
    },
    {
      english: "with",
      chinese: "(a) bad/good grace  勉强地/欣然的"
    },
    {
      english: "at one time or another",
      chinese: " 在某个时期；曾经"
    },
    {
      english: "be overwhelmed with",
      chinese: " 被(某种感情)深深控制"
    },
    {
      english: "by far",
      chinese: " 大大地"
    },
    {
      english: "come to grips with",
      chinese: " 处理；对付"
    },
    {
      english: "conjure up",
      chinese: " 弄出，变出"
    },
    {
      english: "get to one's feet",
      chinese: " 站起来"
    },
    {
      english: "get/keep under control",
      chinese: " 控制住"
    },
    {
      english: "pass judgment on",
      chinese: " 评判；评定；说三道四"
    },
    {
      english: "reach for",
      chinese: " 伸出手拿"
    },
    {
      english: "teach sb.",
      chinese: " a lesson  给某人一个教训"
    },
    {
      english: "think up",
      chinese: " 想出；设计出"
    },
    {
      english: "well up",
      chinese: " 涌出，涌现；涌上心头"
    }
],
    text6: [{
      english: "Appalling",
      chinese: " adj. 可怕的；令人震惊的 v. 使惊愕"
    },
    {
      english: "appliance",
      chinese: " n. 器具；器械；装置"
    },
    {
      english: "Bewilder",
      chinese: " vt. 使迷惑，使不知所措"
    },
    {
      english: "Burden",
      chinese: " n. 负担；责任；船的载货量 vt. 使负担"
    },
    {
      english: "Comparative",
      chinese: " adj. 比较的；相当的 n. 比较级；对手"
    },
    {
      english: "Confine",
      chinese: " n. 界限，边界 vt. 限制；禁闭"
    },
    {
      english: "Convention",
      chinese: " n. 大会；惯例"
    },
    {
      english: "Cope",
      chinese: " vi. 处理；对付；竞争  n. 长袍"
    },
    {
      english: "Cram",
      chinese: " vt. 填满，塞满  n. 死记硬背"
    },
    {
      english: "Decorate",
      chinese: " v. 装饰；布置"
    },
    {
      english: "Discontent",
      chinese: " n. 不满  adj. 不满的"
    },
    {
      english: "Distribution",
      chinese: " n. 分布；分配"
    },
    {
      english: "Divert",
      chinese: " v. 转移"
    },
    {
      english: "Evade",
      chinese: " v. 逃避；规避；逃脱"
    },
    {
      english: "Explosion",
      chinese: " n. 爆炸；爆发；激增"
    },
    {
      english: "Famine",
      chinese: " n. 饥荒；饥饿，奇缺"
    },
    {
      english: "Fax",
      chinese: " v/n. 传真"
    },
    {
      english: "Forecast",
      chinese: " v/n. 预报，预测；预示"
    },
    {
      english: "Fraction",
      chinese: " n. 分数；部分；小部分；稍微"
    },
    {
      english: "Frontier",
      chinese: " n. 前沿；边界；国境  adj. 边界的；开拓的"
    },
    {
      english: "Futile",
      chinese: " adj. 无用的；无效的"
    },
    {
      english: "Honorary",
      chinese: " adj. 荣誉的；名誉的  n. 名誉学位"
    },
    {
      english: "Minute",
      chinese: " n.分钟；片刻；备忘录  vt. 将…记录下来"
    },
    {
      english: "Multiply",
      chinese: " vt. 乘；使增加；使繁殖"
    },
    {
      english: "Nurture",
      chinese: " v. 养育；鼓励；培植"
    },
    {
      english: "Oblige",
      chinese: " v. 迫使；义务"
    },
    {
      english: "Offspring",
      chinese: " n. 后代，子孙；产物"
    },
    {
      english: "Perception",
      chinese: " n. 知觉；感觉；洞察力"
    },
    {
      english: "Prosperity",
      chinese: " n. 繁荣，成功"
    },
    {
      english: "Provoke",
      chinese: " v. 驱使；激怒"
    },
    {
      english: "Reaction",
      chinese: " n. 反应"
    },
    {
      english: "Remedy",
      chinese: " v/n. 补救；治疗"
    },
    {
      english: "Shortage",
      chinese: " n. 缺乏；不足"
    },
    {
      english: "Streamline",
      chinese: " v. 使合理化  n. 流线；流线型"
    },
    {
      english: "Toil",
      chinese: " n. 辛苦；苦工  vi. 辛苦工作；艰难地行进"
    },
    {
      english: "browse",
      chinese: " v/n. 浏览；吃草"
    },
    {
      english: "caption",
      chinese: " n. 标题；字幕  vt. 加上说明；加上标题"
    },
    {
      english: "confess",
      chinese: " v/n. 承认；坦白；忏悔；供认"
    },
    {
      english: "dedicate",
      chinese: " vt. 致力；献身；题献"
    },
    {
      english: "endurance",
      chinese: " n. 忍耐力；耐久"
    },
    {
      english: "opt",
      chinese: " vi. 选择"
    },
    {
      english: "parallel",
      chinese: " n. 平行线  vt. 使平行  adj. 平行的"
    },
    {
      english: "possess",
      chinese: " vt. 控制；持有；拥有"
    },
    {
      english: "suspend",
      chinese: " vt.推迟；使暂停  vi. 悬浮；禁赛"
    },
    {
      english: "temporal",
      chinese: " adj. 暂时的；现世的  n. 世间万物"
    },
    {
      english: "thrill",
      chinese: " n. 激动；紧张  vt. 使…激动；"
    },
    {
      english: "waterproof",
      chinese: " adj. 防水的，不透水的  vt. 使防水"
    },
    {
      english: "Be doomed to",
      chinese: " 注定；注定要"
    },
    {
      english: "By nature",
      chinese: " 天生地；生性"
    },
    {
      english: "Eat into",
      chinese: " 侵蚀"
    },
    {
      english: "Keep sb. up with sth.",
      chinese: " 跟上；不落后；赶上"
    },
    {
      english: "On the go",
      chinese: " 忙个不停，四处奔走"
    },
    {
      english: "Point the way to sth.",
      chinese: " 指出某事的方法，指明通往目的地的路"
    },
    {
      english: "Pour in",
      chinese: " 大量地涌入，倾倒；蜂拥而来"
    },
    {
      english: "Large quantities of",
      chinese: " 大量…"
    },
    {
      english: "Set about",
      chinese: " 着手；开始做…"
    },
    {
      english: "Switch off",
      chinese: " （用开关）关掉；切断（电源）"
    },
    {
      english: "Waste away",
      chinese: " 日渐衰弱；日益消瘦"
    },
    {
      english: "back and forth",
      chinese: " 反复地，来回地"
    },
    {
      english: "crash down",
      chinese: " v. 朝下猛撞"
    },
    {
      english: "in a rush",
      chinese: " 急急忙忙地，急速地"
    },
    {
      english: "make haste",
      chinese: " 赶紧"
    },
    {
      english: "no wonder",
      chinese: " 难怪"
    },
    {
      english: "on the wing",
      chinese: " 在飞行中；奔波着"
    },
    {
      english: "run the risk of",
      chinese: " 冒…的风险"
    },
    {
      english: "under pressure",
      chinese: " 面临压力，在压力之下"
    }
],
    text7: [{
      english: "accomplice",
      chinese: " n. 同谋者，共犯"
    },
    {
      english: "ally",
      chinese: " n. 同盟；伙伴  vt. 使联盟；使联合"
    },
    {
      english: "armed",
      chinese: " adj. 武装的"
    },
    {
      english: "chaos",
      chinese: " n.混沌（状态）  adj.混乱，纷乱；无秩序"
    },
    {
      english: "clear",
      chinese: " adj. 清楚的；清澈的  vt. 通过；清除"
    },
    {
      english: "coat",
      chinese: " n. 外套  vt. 覆盖…的表面"
    },
    {
      english: "coup",
      chinese: " n.妙计；出乎意料的行动  vt. 使…颠倒，倾斜"
    },
    {
      english: "crystal",
      chinese: " n.水晶  adj.透明的"
    },
    {
      english: "debris",
      chinese: " n. 碎片，残骸"
    },
    {
      english: "denounce",
      chinese: " vt. 谴责；告发；公然抨击；通告废除"
    },
    {
      english: "divine",
      chinese: " adj. 神圣的；极好的  vt. 占卜；预言"
    },
    {
      english: "dusk",
      chinese: " n. 黄昏；幽暗  adj. 微暗的"
    },
    {
      english: "explosive",
      chinese: " adj. 爆炸的；爆发性的  n. 炸药；爆炸物"
    },
    {
      english: "fanatic",
      chinese: " n. 狂热入迷者；盲信者  adj. 狂热的；盲信的"
    },
    {
      english: "farewell",
      chinese: " n. 告别；再会"
    },
    {
      english: "grief",
      chinese: " n.忧伤；不幸"
    },
    {
      english: "heal",
      chinese: " v. 治愈，痊愈；和解"
    },
    {
      english: "hijack",
      chinese: " v/n. 抢劫；敲诈"
    },
    {
      english: "illusion",
      chinese: " n. 幻觉；错误的观念或信仰"
    },
    {
      english: "memorial",
      chinese: " n. 纪念碑；纪念物  adj. 记忆的；纪念的"
    },
    {
      english: "mood",
      chinese: " n. 情绪，语气；气氛"
    },
    {
      english: "mourn",
      chinese: " v. 哀悼；忧伤；服丧"
    },
    {
      english: "nerve",
      chinese: " n. 神经；勇气  vt. 鼓起勇气"
    },
    {
      english: "perish",
      chinese: " vt. 使麻木；毁坏  vi. 死亡；毁灭；腐烂；枯萎"
    },
    {
      english: "revenge",
      chinese: " n. 报复；复仇  vt. 报复"
    },
    {
      english: "revolve",
      chinese: " vi.循环出现；反复考虑  vt. 使…旋转，循环"
    },
    {
      english: "sacred",
      chinese: " adj. 神的；神圣的；宗教的；庄严的"
    },
    {
      english: "shatter",
      chinese: " v. 粉碎；打碎  n. 碎片"
    },
    {
      english: "solidarity",
      chinese: " n. 团结，团结一致"
    },
    {
      english: "sting",
      chinese: " n. 刺痛；刺激  vt. 刺；驱使"
    },
    {
      english: "topple",
      chinese: " v. 倾倒；倒塌；颠覆"
    },
    {
      english: "tragic",
      chinese: " adj. 悲剧的；悲痛的，不幸的"
    },
    {
      english: "void",
      chinese: " adj. 空的；无效的；无人的  n. 空虚；空间"
    },
    {
      english: "wreckage",
      chinese: " n. （失事船或飞机等的）残骸"
    },
    {
      english: "aggravate",
      chinese: " v. 加重；使恶化；激怒"
    },
    {
      english: "arrangement",
      chinese: " n. 布置；整理；准备"
    },
    {
      english: "collective",
      chinese: " adj. 集体的；共同的  n. 集团；集合体"
    },
    {
      english: "consequent",
      chinese: " n. 结果  adj. 随之发生的；作为结果的"
    },
    {
      english: "conservation",
      chinese: " n. 保存，保持；保护"
    },
    {
      english: "conservative",
      chinese: " adj. 保守的  n. 保守派"
    },
    {
      english: "dependent",
      chinese: " adj. 依靠的；取决于…的  n. 依赖他人者"
    },
    {
      english: "destruction",
      chinese: " n. 破坏，毁灭；摧毁"
    },
    {
      english: "disrupt",
      chinese: " vt. 破坏；使中断  adj.中断的"
    },
    {
      english: "distort",
      chinese: " v. 扭曲；失真；变形"
    },
    {
      english: "indebted",
      chinese: " （indebt的过去分词）v/adj. 负债；受恩惠"
    },
    {
      english: "justify",
      chinese: " vi. 证明合法；整理版面  vt.替…辩护"
    },
    {
      english: "pose",
      chinese: " vt. 造成，形成；摆姿势  vi. 摆姿势"
    },
    {
      english: "proclaim",
      chinese: " vt. 宣告，公布；声明；表明；赞扬"
    },
    {
      english: "revise",
      chinese: " v/n. 修正；复习；校订"
    },
    {
      english: "stain",
      chinese: " v. 沾污；污染；给…着色  n. 污点；瑕疵；着色剂"
    },
    {
      english: "blot out",
      chinese: " 完全清除（思想、记忆等）；遮盖"
    },
    {
      english: "bring down",
      chinese: " 降低；打倒，打死；击落"
    },
    {
      english: "fill/step into sb.’s shoes",
      chinese: " 接替某人的职务"
    },
    {
      english: "in the aftermath of",
      chinese: " 在……之后"
    },
    {
      english: "in the space of",
      chinese: " 在…距离内"
    },
    {
      english: "in",
      chinese: "(great/crystal) detail  详细地；具体地"
    },
    {
      english: "long before/after",
      chinese: " 在…以前很久/之后"
    },
    {
      english: "pick at",
      chinese: " 吃得很少；挑毛病；指责"
    },
    {
      english: "take/have/get revenge on",
      chinese: " 报复"
    },
    {
      english: "think back on",
      chinese: " 回想起"
    },
    {
      english: "a long way from sth.",
      chinese: " 距…很长的路程"
    },
    {
      english: "leave behind",
      chinese: " 留下；遗留；超过"
    },
    {
      english: "take stock of sth.",
      chinese: " 观察；估量"
    },
    {
      english: "track down",
      chinese: " 追捕"
    }
],
    text8: [{
      english: "bare",
      chinese: " adj. 空的；赤裸的  vt. 露出，使赤裸"
    },
    {
      english: "dart",
      chinese: " vt. 投掷；飞奔  n. 飞镖，标枪"
    },
    {
      english: "disembark",
      chinese: " vi. 登陆，下车；上岸  vt. 使…登陆，上岸"
    },
    {
      english: "dissolve",
      chinese: " v. 溶解；分解"
    },
    {
      english: "fleet",
      chinese: " adj. 快速的，敏捷的  n. 舰队；小河  vi. 飞逝"
    },
    {
      english: "fringe",
      chinese: " n. 边缘  adj. 边缘的；附加的"
    },
    {
      english: "fuss",
      chinese: " vi. 小题大作；焦燥  n. 大惊小怪"
    },
    {
      english: "glide",
      chinese: " v. 滑翔；滑行"
    },
    {
      english: "heap",
      chinese: " v. 堆；堆积  n. 堆；许多"
    },
    {
      english: "heave",
      chinese: " v. 举起；起伏；投掷"
    },
    {
      english: "hollow",
      chinese: " adj. 空的；虚伪的  n. 洞；山谷；窟窿"
    },
    {
      english: "hop",
      chinese: " v. 单足跳跃（跳行）  vt. 搭乘"
    },
    {
      english: "hush",
      chinese: " v/n. 安静；肃静；缄默"
    },
    {
      english: "illumine",
      chinese: " v. 照明，点亮；启发"
    },
    {
      english: "loop",
      chinese: " v. 打环；翻筋斗  n. 环；圈"
    },
    {
      english: "mute",
      chinese: " adj.沉默的  vt. 减弱…的声音，使柔和"
    },
    {
      english: "opaque",
      chinese: " adj. 不透明的；不传热的；迟钝的  n. 不透明物"
    },
    {
      english: "paddle",
      chinese: " n. 划桨  vt. 拌；搅；划桨"
    },
    {
      english: "repute",
      chinese: " n. 名誉；声望"
    },
    {
      english: "slap",
      chinese: " v. 拍击；掌击  n.掌击；拍打声"
    },
    {
      english: "slump",
      chinese: " vi. 下降；倒下  vt. 使降低，衰落；使倒下"
    },
    {
      english: "smear",
      chinese: " vt. 诽谤；弄脏  n.诽谤；污点；涂片"
    },
    {
      english: "spectacular",
      chinese: " adj. 壮观的，惊人的；公开展示的"
    },
    {
      english: "strip",
      chinese: " n. 带；条状"
    },
    {
      english: "stuff",
      chinese: " n. 东西；材料；填充物   vt. 塞满；填满"
    },
    {
      english: "swarm",
      chinese: " v. 挤满；云集  n. 蜂群；一大群"
    },
    {
      english: "tangle",
      chinese: " n. 纠纷；混乱状态  vt. 使纠缠；处于混乱状态"
    },
    {
      english: "thrash",
      chinese: " v. 打；使逆行；猛烈摆动"
    },
    {
      english: "trail",
      chinese: " vt. 追踪；落后于  n. 小径；尾部；踪迹"
    },
    {
      english: "warm",
      chinese: " adj. 温暖的；热情的  v. 同情；激动；变温暖"
    },
    {
      english: "bound",
      chinese: " adj. 有义务的；受约束的  v. 束缚  n. 范围；跳跃"
    },
    {
      english: "dash",
      chinese: " v. 猛冲；撞击"
    },
    {
      english: "emigrate",
      chinese: " v. 移民"
    },
    {
      english: "gear",
      chinese: " n. 齿轮；传动装置"
    },
    {
      english: "glimpse",
      chinese: " v. 瞥见  n. 一瞥，一看 "
    },
    {
      english: "refresh",
      chinese: " v. 更新；使……恢复"
    },
    {
      english: "snatch",
      chinese: " v. 夺得  n. 抢夺；抓举"
    },
    {
      english: "surf",
      chinese: " v. 在…冲浪  n. 海浪，拍岸浪 "
    },
    {
      english: "at the edge of",
      chinese: " 在…的边缘"
    },
    {
      english: "be dying to do/for sth.",
      chinese: " 渴望、急切去做某事"
    },
    {
      english: "get one’s hands on",
      chinese: " 占有；得到，找到"
    },
    {
      english: "in",
      chinese: "(all) silence  静静地，默默地，无声地"
    },
    {
      english: "in flocks",
      chinese: " 成群结队"
    },
    {
      english: "in the heart of",
      chinese: " 在…中央"
    },
    {
      english: "night after night",
      chinese: " 夜复一夜"
    },
    {
      english: "day after day",
      chinese: " 日复一日"
    },
    {
      english: "now…now…",
      chinese: " 时而…时而…"
    },
    {
      english: "out of range",
      chinese: " 超出范围"
    },
    {
      english: "out of sight",
      chinese: " 在视野之外；在看不见的地方"
    },
    {
      english: "out of the way",
      chinese: " 不挡道；荒谬的；已被处置的"
    },
    {
      english: "take apart",
      chinese: " 拆开；拆卸(机器等)；使…分开"
    },
    {
      english: "at the foot of",
      chinese: " 在…（山）脚下；在…的下部"
    },
    {
      english: "carve out",
      chinese: " 创业；开拓；雕刻"
    },
    {
      english: "embark on",
      chinese: " 从事，着手；登上船"
    },
    {
      english: "hit the road",
      chinese: " 出发，上路；开始流浪"
    },
    {
      english: "in action",
      chinese: " 起作用"
    },
    {
      english: "live up to",
      chinese: " 无愧于；做到；符合"
    },
    {
      english: "meet up with",
      chinese: " 偶遇；碰面；符合标准"
    },
    {
      english: "on wheels",
      chinese: " 顺利，顺畅"
    },
    {
      english: "pop in",
      chinese: " 出去；偶尔来访；突然出现"
    },
    {
      english: "stop off",
      chinese: " 中途停留"
    },
    {
      english: "wind/snake one’s way",
      chinese: " 蜿蜒前行"
    }
],
    num1: 61,
    num2: 56,
    num3: 54,
    num4: 60,
    num5: 57,
    num6: 66,
    num7: 64,
    num8: 62
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