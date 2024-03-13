// test.js

Page({

  /**
   * 页面的初始数据
   */


  data: {
    num: 10,
    index: 1,
    answer: 1,
    rightNum:-1,
    wrongNum:-1,
    cnindex0: 1,
    cnindex1: 1,
    cnindex2: 1,
    cnindex3: 1,
    text: [
      {
      english: "style",
      chinese: " n.行为方式,风格 "
    }],
    text1:[
      {
        english: "style",
        chinese: " n.行为方式,风格 "
      },
      {
        english: "bustle",
        chinese: "vi.忙碌，奔忙"
      },
      {
        english: "bustling",
        chinese: "a.繁忙的,熙攘的 "
      },
      {
        english: "elementary",
        chinese: "a.基本的,初级的,基础的 "
      },
      {
        english: "telling",
        chinese: "a.难忘的;有力的 "
      },
      {
        english: "lobby",
        chinese: "n.大堂,大厅  "
      },
      {
        english: "attach",
        chinese: "vt.系,贴,连接 "
      },
      {
        english: "attendant",
        chinese: "n.服务员;侍者,随从 "
      },
      {
        english: "slot",
        chinese: "n.狭缝,狭槽 "
      },
      {
        english: "vigorously",
        chinese: "ad.用力地;精力充沛地 "
      },
      {
        english: "tender",
        chinese: "a.年幼的;温柔的 "
      },
      {
        english: "not in the least  ",
        chinese: "一点也不 not at all"
      },
      {
        english: "find one's way  ",
        chinese: "到达;进入,流入 "
      },
      {
        english: "bang",
        chinese: "v.猛敲,猛击 "
      },
      {
        english: "exploratory",
        chinese: "a.探索的"
      },
      {
        english: "phenomenon",
        chinese: "n.现象 "
      },
      {
        english: "initial",
        chinese: "a.开始的,最初的 "
      },
      {
        english: "assist",
        chinese: "v.帮助 "
      },
      {
        english: "reposition",
        chinese: "vt.改变...的位置 "
      },
      {
        english: "insert",
        chinese: "vt.插入,嵌入 "
      },
      {
        english: "somewhat",
        chinese: "ad.稍微,有点 "
      },
      {
        english: "expectantly",
        chinese: "ad.期待地 "
      },
      {
        english: "await",
        chinese: "vt..等待,等候 "
      },
      {
        english: "occasion",
        chinese: "n.时刻,场合      "
      },
      {
        english: "on occasion  ",
        chinese: "有时,间或 "
      },
      {
        english: "frown",
        chinese: "v.,n.皱眉 "
      },
      {
        english: "neglect",
        chinese: "vt.忽视 "
      },
      {
        english: "parental",
        chinese: "a.父的,母的,父母的 "
      },
      {
        english: "incident",
        chinese: "n.事件"
      },
      {
        english: "relevant",
        chinese: "a.有关的,切题的 "
      },
      {
        english: "investigate",
        chinese: "v.调查;探究 "
      },
      {
        english: "throw light on ",
        chinese: "（提供新信息）帮助理解"
      },
      {
        english: "creativity",
        chinese: "n.创造力 "
      },
      {
        english: "anecdote",
        chinese: "n.趣闻,轶事     "
      },
      {
        english: "colleague",
        chinese: "n.同事 "
      },
      {
        english: "desirable",
        chinese: "a.值得向往的;称心的 "
      },
      {
        english: "accomplish",
        chinese: "vt.完成(某事) "
      },
      {
        english: "activity",
        chinese: "n.活动,行为 "
      },
      {
        english: "accomplishment",
        chinese: "n.造诣,才艺;完成,成就 "
      },
      {
        english: "in due course  ",
        chinese: "到时候,在适当的时候 "
      },
      {
        english: "sympathetically",
        chinese: "ad.同情地 "
      },
      {
        english: "critical",
        chinese: "a.至关重要的;危急的 "
      },
      {
        english: "effectively",
        chinese: "ad.有效地 "
      },
      {
        english: "self-reliance",
        chinese: "n.依靠自己,自力更生 "
      },
      {
        english: "principal",
        chinese: "a.首要的,主要的 "
      },
      {
        english: "rear",
        chinese: "v.养育,抚养 "
      },
      {
        english: "make up for  ",
        chinese: "补偿,弥补 "
      },
      {
        english: "misdeed",
        chinese: "n.不端行为 "
      },
      {
        english: "creative",
        chinese: "a.独创的 "
      },
      {
        english: "retrospect",
        chinese: " n.回顾"
      },
      {
        english: "in retrospect  ",
        chinese: "回顾 "
      },
      {
        english: "artistic",
        chinese: "a.艺术的 "
      },
      {
        english: "well-intentioned",
        chinese: "a.好意的 "
      },
      {
        english: "intention",
        chinese: "n.意图 "
      },
      {
        english: "observer",
        chinese: "n.观察者,观察员"
      },
      {
        english: "clumsily",
        chinese: "ad.笨拙地 "
      },
      {
        english: "facility",
        chinese: "n.熟练,灵巧;设备,设施 "
      },
      {
        english: "gentleness",
        chinese: "n.轻柔;优雅"
      },
      {
        english: "mold",
        chinese: "vt.塑造 "
      },
      {
        english: "performance",
        chinese: "n.表现,行为;演出,表演 "
      },
      {
        english: "tradition",
        chinese: "n.传统 "
      },
      {
        english: "continual",
        chinese: "a.不断的,一再重复的 "
      },
      {
        english: "apply",
        chinese: "vi.适用;申请 "
      },
      {
        english: "work on/at ",
        chinese: "从事 "
      },
      {
        english: "craft",
        chinese: "n.手艺;工艺 "
      },
      {
        english: "reversal",
        chinese: "n.颠倒 "
      },
      {
        english: "priority",
        chinese: "n.优先考虑的事;重点 "
      },
      {
        english: "bold",
        chinese: "a.勇敢的,无畏的 "
      },
      {
        english: "departure",
        chinese: "n.背离；出发,离开 "
      },
      {
        english: "inseparable",
        chinese: "a.不可分离的 "
      },
      {
        english: "evolve",
        chinese: "v.使逐步发展 "
      },
      {
        english: "summarize",
        chinese: "vt.总结,概述 "
      },
      {
        english: "originality",
        chinese: "n.新颖;独创性 "
      },
      {
        english: "independence",
        chinese: "n.独立,自主 "
      },
      {
        english: "contrast",
        chinese: "n.对比 "
      },
      {
        english: "culture",
        chinese: "n.文化 "
      },
      {
        english: "harbor",
        chinese: "vt.怀有 "
      },
      {
        english: "fearful",
        chinese: "a.害怕的,担心的 "
      },
      {
        english: "on the one hand..., on the other hand  ",
        chinese: "一方面...,另一方面... "
      },
      {
        english: "comparable",
        chinese: "a.类似的;可比的 "
      },
      {
        english: "promote",
        chinese: "vt.促进,推进 "
      },
      {
        english: "emerge",
        chinese: "vi.出现 "
      },
      {
        english: "pick up  ",
        chinese: "获得;学会 "
      },
      {
        english: "overstate",
        chinese: "vt.把...讲得过分，夸大 "
      },
      {
        english: "enormous",
        chinese: "a.巨大的;极大的 "
      },
      {
        english: "technological",
        chinese: "a.技术的,工艺的 "
      },
      {
        english: "innovation",
        chinese: "n.革新;新事物 "
      },
      {
        english: "exaggerate",
        chinese: "v.夸大,夸张 "
      },
      {
        english: "breakthrough",
        chinese: "n.突破 "
      },
      {
        english: "valid",
        chinese: "a.有根据的 "
      },
      {
        english: "foster",
        chinese: "vt.培养 "
      },
      {
        english: "worthwhile",
        chinese: "a.值得的 "
      },
      {
        english: "superior",
        chinese: "a.优良的;叫好的"
      }
    ],
    text2:[
      {
        english: "ringer",
        chinese: "n.摇铃人，敲钟人  "
      },
      {
        english: "confront",
        chinese: "vt.摆在…的面前，正视，应对"
      },
      {
        english: "be confronted with ",
        chinese: "面临，遭遇  "
      },
      {
        english: "doorway",
        chinese: "n.门道，门洞 "
      },
      {
        english: "donation",
        chinese: "n.捐款，捐赠物"
      },
      {
        english: "kettle",
        chinese: "n.水壶，锅 "
      },
      {
        english: "stand",
        chinese: "n.架，台，座"
      },
      {
        english: "confusion",
        chinese: "n.困惑 "
      },
      {
        english: "curiosity",
        chinese: "n.好奇心 "
      },
      {
        english: "stammer",
        chinese: "v.结结巴巴地说 "
      },
      {
        english: "no-no",
        chinese: "n.禁忌的事 "
      },
      {
        english: "deny vt",
        chinese: "否定，否认 "
      },
      {
        english: "fill out ",
        chinese: "填写"
      },
      {
        english: "fall into ",
        chinese: "属于"
      },
      {
        english: "bracket",
        chinese: "n.等级，档次 "
      },
      {
        english: "nothing more than ",
        chinese: "仅仅，不多于，不强于"
      },
      {
        english: "whim",
        chinese: "n.冲动，突然的念头 "
      },
      {
        english: "attain",
        chinese: "vt.获得，达到 "
      },
      {
        english: "wear and tear ",
        chinese: "磨损，损耗"
      },
      {
        english: "dependable",
        chinese: "a.可靠的 "
      },
      {
        english: "primarily",
        chinese: "ad.主要地  "
      },
      {
        english: "minimal",
        chinese: "a.极小的，最低限度的 "
      },
      {
        english: "exceptionally",
        chinese: "ad.罕见地，非凡地"
      },
      {
        english: "energize",
        chinese: "vt.使精力充沛 "
      },
      {
        english: "cherish",
        chinese: "vt.关爱，珍惜 "
      },
      {
        english: "poetry",
        chinese: "n.（总称）诗，诗歌 "
      },
      {
        english: "fabricate",
        chinese: "vt.虚构，捏造 "
      },
      {
        english: "tickle",
        chinese: "vt.逗乐，瘙痒逗笑"
      },
      {
        english: "emotional",
        chinese: "a.感情上的 "
      },
      {
        english: "pursuit",
        chinese: "n.追求，寻求 "
      },
      {
        english: "out of place ",
        chinese: "不自在，格格不入"
      },
      {
        english: "dated",
        chinese: "a.陈旧的，过时的 "
      },
      {
        english: "shortly after ",
        chinese: "……之后不久"
      },
      {
        english: "go south ",
        chinese: "走下坡路，失败"
      },
      {
        english: "seemingly",
        chinese: "ad.表面上，看上去 "
      },
      {
        english: "abrupt",
        chinese: "a.突然的，意外的 "
      },
      {
        english: "jolt",
        chinese: "v.使震惊  "
      },
      {
        english: "memorable",
        chinese: "a.值得纪念的，难忘的 "
      },
      {
        english: "in contrast to ",
        chinese: "与……形成对比"
      },
      {
        english: "consequence",
        chinese: "n.结果，后果 "
      },
      {
        english: "item",
        chinese: "n.一条，一项，一件 "
      },
      {
        english: "commercial",
        chinese: "n.商业广告,a商业的 "
      },
      {
        english: "high-end",
        chinese: "a.高档的，高端的 "
      },
      {
        english: "focus",
        chinese: "v.将（注意力等）集中于,n 重点，焦点 "
      },
      {
        english: "affluent",
        chinese: "a.富裕的 "
      },
      {
        english: "apron",
        chinese: "n.围裙  "
      },
      {
        english: "economically",
        chinese: "ad.经济上，节省地，节约地  "
      },
      {
        english: "economical",
        chinese: "a.节省的，节约的 "
      },
      {
        english: "genuine",
        chinese: "a.真正的  "
      },
      {
        english: "go through ",
        chinese: "经历，度过"
      },
      {
        english: "linger",
        chinese: "vi.长时间持续，磨蹭，拖延 "
      },
      {
        english: "countless",
        chinese: "a.不计其数的 "
      },
      {
        english: "individual",
        chinese: "n.个体，个人  "
      },
      {
        english: "sentiment",
        chinese: "n.祝愿，祝辞，情绪，态度  "
      },
      {
        english: "bless",
        chinese: "vt.祈求上帝保佑 "
      },
      {
        english: "thankful",
        chinese: "a.感激的，庆幸的 "
      },
      {
        english: "tangible",
        chinese: "a.有形的，可触摸的"
      }
    ],
    text3: [
      {
        english: "location",
        chinese: "n. 位置 "
      },
      {
        english: "fast-food",
        chinese: "a. 供应快餐的 "
      },
      {
        english: "guitar",
        chinese: "n. 吉他 "
      },
      {
        english: "dumb",
        chinese: "a. 愚蠢的；哑的 "
      },
      {
        english: "unison",
        chinese: "n. 一致；齐唱；齐奏 "
      },
      {
        english: "in unison  ",
        chinese: "一致地；一起 "
      },
      {
        english: "consist",
        chinese: "vi. 组成，构成 "
      },
      {
        english: "consist of  ",
        chinese: "由...组成 "
      },
      {
        english: "squat",
        chinese: "vi. 蹲  "
      },
      {
        english: "palm",
        chinese: " n. 手掌 "
      },
      {
        english: "yeah",
        chinese: "ad. （口语）是 yes"
      },
      {
        english: "typical",
        chinese: "ad.有代表性的;典型的"
      },
      {
        english: "assure",
        chinese: "vt.向（某人）保证，使确信"
      },
      {
        english: "fade",
        chinese: "vi. 褪色；变黯淡；逐渐消失 "
      },
      {
        english: "suspense",
        chinese: "n. 悬念 "
      },
      {
        english: "keep (somebody) in suspense ",
        chinese: "使产生悬念，故意迟迟不告诉 "
      },
      {
        english: "bet",
        chinese: "vt. 敢说；确信 "
      },
      {
        english: "sweetheart",
        chinese: "n.亲爱的;男（女）朋友"
      },
      {
        english: "simultaneously",
        chinese: "ad. 同时地 "
      },
      {
        english: "simultaneous",
        chinese: "a. 同时的 "
      },
      {
        english: "prom",
        chinese: "n.（高中或大学等的）班级舞会 "
      },
      {
        english: "oops",
        chinese: "int. 哎约 "
      },
      {
        english: "clench",
        chinese: "vt. 咬紧，握紧 "
      },
      {
        english: "monotone",
        chinese: "n.（语调、色彩等的）单调 "
      },
      {
        english: "hysterical",
        chinese: "a. 歇斯底里的 "
      },
      {
        english: "er",
        chinese: "int.（用于表示迟疑、沉吟）哦，厄 "
      },
      {
        english: "uh",
        chinese: "int. 嗯，唔 "
      },
      {
        english: "glorious",
        chinese: "a. 极好的；辉煌的；光荣的 "
      },
      {
        english: "dessert",
        chinese: "n.（餐后） 甜点心  "
      },
      {
        english: "recipe",
        chinese: "n. 烹饪法；秘诀 "
      },
      {
        english: "hand down  ",
        chinese: "把...传下去 "
      },
      {
        english: "at any rate  ",
        chinese: "无论如何，不管怎样 "
      },
      {
        english: "community",
        chinese: "n. 社区；社会 "
      },
      {
        english: "welfare",
        chinese: "n. 福利；幸福 "
      },
      {
        english: "mumble",
        chinese: "v. 咕哝；含糊地说 "
      },
      {
        english: "narrow down  ",
        chinese: "减少，缩小 "
      },
      {
        english: "exhaust",
        chinese: "vt. 使筋疲力尽；用完，耗尽  "
      },
      {
        english: "repeatedly",
        chinese: "ad. 反复地 "
      },
      {
        english: "come over  ",
        chinese: "（指某种感觉）刺激或影响 "
      },
      {
        english: "scheme",
        chinese: "n. 阴谋，诡计，计划"
      },
      {
        english: "jut",
        chinese: "v.（使）突出，伸出 "
      },
      {
        english: "jut out  ",
        chinese: "（使）突出，伸出 "
      },
      {
        english: "jerk",
        chinese: "vt. 猛地一扭（或一拉等）  "
      },
      {
        english: "frank",
        chinese: "a. 坦白的，直率的 "
      },
      {
        english: "know better than (that/to do something)  ",
        chinese: "明事理而不至于（做某事） "
      },
      {
        english: "humiliate",
        chinese: "vt. 羞辱；使丢脸 "
      },
      {
        english: "interference",
        chinese: "n. 干涉；干扰 "
      },
      {
        english: "constant",
        chinese: "a. 持续的，不变的 "
      },
      {
        english: "dread",
        chinese: "n. 畏惧；恐慌 "
      },
      {
        english: "patience",
        chinese: "n. 耐心，忍耐 "
      },
      {
        english: "proof",
        chinese: "n. 证据，证明 "
      },
      {
        english: "vaccination",
        chinese: "n. 疫苗接种 "
      },
      {
        english: "talented",
        chinese: "a. 有才能的；天才的  "
      },
      {
        english: "talent",
        chinese: "n. 才能；天才 "
      },
      {
        english: "twist",
        chinese: "v. 转动，扭曲，扭伤"
      },
      {
        english: "over and over ",
        chinese: "一再地，多次"
      },
      {
        english: "junior",
        chinese: "a. 较年幼的，地位较低的 "
      },
      {
        english: "angel",
        chinese: "n. 天使"
      }
    ],
    text4: [
      {
        english: "virtual",
        chinese: "a.虚拟的;实质上的 "
      },
      {
        english: "accent",
        chinese: "n.口音 "
      },
      {
        english: "interpret",
        chinese: "v.理解,解释;(做)口译 "
      },
      {
        english: "clipped",
        chinese: "a.发音快而清脆的 "
      },
      {
        english: "tone",
        chinese: "n.语气,口气,腔调 "
      },
      {
        english: "fluid",
        chinese: "a.不稳定的,可变的;n.液体"
      },
      {
        english: "",
        chinese: "stretch v.拉长,伸展 "
      },
      {
        english: "telecommuter",
        chinese: "vi.远程工作者 "
      },
      {
        english: "edit",
        chinese: "vt.编辑 "
      },
      {
        english: "via",
        chinese: "prep.通过，借助于，用"
      },
      {
        english: "Internet",
        chinese: "n.互联网 "
      },
      {
        english: "at times  ",
        chinese: "有时 "
      },
      {
        english: "groceries",
        chinese: "n.（pl.）食品杂货"
      },
      {
        english: "take in  ",
        chinese: "收进,吸收 "
      },
      {
        english: "data",
        chinese: "n.(datum的复数形式)数据,资料 "
      },
      {
        english: "spit",
        chinese: "vt.吐出 "
      },
      {
        english: "on line  ",
        chinese: "在线 "
      },
      {
        english: "symptom",
        chinese: "n.征兆;症状 "
      },
      {
        english: "aversion",
        chinese: "n.厌恶,反感 "
      },
      {
        english: "socialize",
        chinese: "vi.社交,交际 "
      },
      {
        english: "critic",
        chinese: "n.评论家;对......持批评态度的人 "
      },
      {
        english: "nightmare",
        chinese: "n.噩梦 "
      },
      {
        english: "crawl",
        chinese: "vi.爬行 "
      },
      {
        english: "interaction",
        chinese: "n.交往,相互作用 "
      },
      {
        english: "cyber-interaction",
        chinese: "n.通过网络交往 "
      },
      {
        english: "conversely",
        chinese: "ad.相反地 "
      },
      {
        english: "underwear",
        chinese: "n.内衣 "
      },
      {
        english: "but then  ",
        chinese: "但另一方面,然而 "
      },
      {
        english: "jar",
        chinese: "v.使感到不快,刺激(神经等) "
      },
      {
        english: "suck",
        chinese: "v.吸,吮 "
      },
      {
        english: "be sucked in",
        chinese: "（身不由己地）卷入 "
      },
      {
        english: "opera",
        chinese: "n.歌剧(艺术) "
      },
      {
        english: "angle",
        chinese: "n.角度,立场 "
      },
      {
        english: "in sight",
        chinese: "可看到的;临近 "
      },
      {
        english: "bad-tempered",
        chinese: "a.脾气坏的;易怒的 "
      },
      {
        english: "temper",
        chinese: "n.情绪，心情"
      },
      {
        english: "insensitive",
        chinese: "a.感觉迟钝的,麻木不仁的 "
      },
      {
        english: "sensitive",
        chinese: "a.敏感的 "
      },
      {
        english: "remark",
        chinese: "n.言辞,话语 v.说,评说 "
      },
      {
        english: "project",
        chinese: "v.以为别人也有(与自己同样的情绪) "
      },
      {
        english: "misinterpret",
        chinese: "vt.错误地理解;错误地解释 "
      },
      {
        english: "cue",
        chinese: "n.提示,暗示 "
      },
      {
        english: "doggedly",
        chinese: "ad.顽强地,坚持不懈地 "
      },
      {
        english: "routine",
        chinese: "n.例行事务,日常工作,惯例 "
      },
      {
        english: "co-worker",
        chinese: "n.同事"
      },
      {
        english: "long-term",
        chinese: "a.长期的"
      },
      {
        english: "unemployment",
        chinese: "n.失业 "
      },
      {
        english: "externally",
        chinese: "ad.从外面,在外部 "
      },
      {
        english: "external",
        chinese: "a.外面的,外部的 "
      },
      {
        english: "abuse",
        chinese: "n.滥用;虐待 "
      },
      {
        english: "crime",
        chinese: "n.(犯)罪 "
      },
      {
        english: "suicide",
        chinese: "n.自杀 "
      },
      {
        english: "restore",
        chinese: "vt.恢复 "
      },
      {
        english: "arrange",
        chinese: "vt.安排 "
      },
      {
        english: "flee",
        chinese: "v.逃走;逃离 "
      },
      {
        english: "gym",
        chinese: "n.体育馆,健身房 "
      },
      {
        english: "set apart  ",
        chinese: "使分离,使分开 "
      },
      {
        english: "appointment",
        chinese: "n.约会 "
      },
      {
        english: "laughter",
        chinese: "n.笑声 "
      },
      {
        english: "intolerable",
        chinese: "a.无法容忍的;不能容忍的 "
      },
      {
        english: "unbearable",
        chinese: "a. 不能容忍的"
      },
      {
        english: "click",
        chinese: "v.用鼠标点击 n.咔哒声 "
      },
      {
        english: "modem",
        chinese: "n.调制解调器 "
      },
      {
        english: "annoying",
        chinese: "a.讨厌的,恼人的 "
      },
      {
        english: "annoy",
        chinese: "vt.使恼怒,使烦恼 "
      },
      {
        english: "connection",
        chinese: "n.连接 "
      },
      {
        english: "tune",
        chinese: "n.曲子,曲调 "
      },
      {
        english: "password",
        chinese: "n.口令,密码 "
      }
    ],
    text5: [
      {
        english: "sweat",
        chinese: " vi. 出汗 ; n.汗水  "
      },
      {
        english: "towel",
        chinese: " n. 毛巾，手巾  "
      },
      {
        english: "pole-vault",
        chinese: " vi., n. 撑杆跳高  "
      },
      {
        english: "vault",
        chinese: " n. 撑杆跳高 ; 撑物跳跃  "
      },
      {
        english: "grace",
        chinese: " n. 优美 , 优雅 ; 雅致  "
      },
      {
        english: "gymnast",
        chinese: " n. 体操家，体操运动员  "
      },
      {
        english: "body",
        chinese: "builder  n. 健美运动员  "
      },
      {
        english: "mere",
        chinese: " a. 仅仅，只不过  "
      },
      {
        english: "fantasy",
        chinese: " n. 幻想 "
      },
      {
        english: "numerous",
        chinese: "  a. 许多的 , 无数的  "
      },
      {
        english: "excitement",
        chinese: "n. 兴奋，激动 "
      },
      {
        english: "passion",
        chinese: " n. 热情 "
      },
      {
        english: "recur",
        chinese: " vi. 再来 ; 再发生  "
      },
      {
        english: "outrun",
        chinese: "vt. 跑的比 … 快 / 好 ; 超过  "
      },
      {
        english: "locomotive",
        chinese: "n.机车，火车头"
      },
      {
        english: "soar",
        chinese: "vi.高飞，翱翔，骤升，猛增"
      },
      {
        english: "eagle",
        chinese: "n. 鹰  "
      },
      {
        english: "coincide",
        chinese: "vi. 同时发生 ; 一致  "
      },
      {
        english: "coincide with",
        chinese: "与 … 同时发生  "
      },
      {
        english: "hard-core",
        chinese: "a. 顽固不化的  "
      },
      {
        english: "core",
        chinese: "n. 核心  "
      },
      {
        english: "realist",
        chinese: "n. 现实主义者  "
      },
      {
        english: "motto",
        chinese: "n. 格言 , 座右铭 "
      },
      {
        english: "weightlifting",
        chinese: "n. 举重（运动）  "
      },
      {
        english: "alternate",
        chinese: "a. 交替的 , 轮流的  "
      },
      {
        english: "coach",
        chinese: "n. 体育运动的教练  "
      },
      {
        english: "dedication",
        chinese: "n. 奉献 , 献身  "
      },
      {
        english: "dedicate",
        chinese: "vt. 献身于 , 致力于  "
      },
      {
        english: "chore",
        chinese: "n. 家庭杂务  "
      },
      {
        english: "on one/two/several occasion(s) ",
        chinese: "有一 ( 两，几 ) 次  "
      },
      {
        english: "vain",
        chinese: "a. 虚荣的 , 自负的  "
      },
      {
        english: "bar",
        chinese: "n. 横竿 , 条块  "
      },
      {
        english: "inflate",
        chinese: "n. ( 使 ) 充气 ,( 使 ) 膨胀  "
      },
      {
        english: "mat",
        chinese: "n. 垫子 , 席子  "
      },
      {
        english: "unaware",
        chinese: "a.不知道的，未意识到的"
      },
      {
        english: "competitor",
        chinese: "n. 竞争者 , 对手  "
      },
      {
        english: "emotion",
        chinese: "n. 情感 , 感情  "
      },
      {
        english: "groan",
        chinese: "vi.叹息，呻吟"
      },
      {
        english: "be ashamed of  ",
        chinese: "因 … 感到难为情  "
      },
      {
        english: "finger-tipped",
        chinese: "a. 用手指尖的 "
      },
      {
        english: "push-up",
        chinese: "n. 俯卧撑  "
      },
      {
        english: "runway",
        chinese: "n. 跑道  "
      },
      {
        english: "startle",
        chinese: "vt. 使大吃一惊  "
      },
      {
        english: "bale",
        chinese: "n. (一）大包，（一）大捆  "
      },
      {
        english: "hay",
        chinese: "n.干草  "
      },
      {
        english: "intensity",
        chinese: "n. 强烈，剧烈，紧张  "
      },
      {
        english: "anxiety",
        chinese: "n. 忧虑，担心  "
      },
      {
        english: "tension",
        chinese: "n. 紧张，不安  "
      },
      {
        english: "tense",
        chinese: "a. 拉紧的; 神经紧张的;"
      },
      {
        english: "along with  ",
        chinese: "连同  "
      },
      {
        english: "stretch out  ",
        chinese: "伸展  "
      },
      {
        english: "upper",
        chinese: "a.上部的"
      },
      {
        english: "breeze",
        chinese: "n. 微风，轻风  "
      },
      {
        english: "deafen",
        chinese: "vt.使聋  "
      },
      {
        english: "sprint",
        chinese: "vi. 疾跑  "
      },
      {
        english: "take-off",
        chinese: "n. 起跳；起飞  "
      },
      {
        english: "effortless",
        chinese: "a. 容易的，不费力的  "
      },
      {
        english: "motion",
        chinese: "n.运动，移动"
      },
      {
        english: "eruption",
        chinese: "n. 爆发  "
      },
      {
        english: "erupt",
        chinese: "vi. 爆发  "
      },
      {
        english: "thump",
        chinese: "n. 重击声  "
      },
      {
        english: "bring (sb.) back to earth",
        chinese: "使回到现实中  "
      },
      {
        english: "in one's mind's eye",
        chinese: "在想象中  "
      },
      {
        english: "hug",
        chinese: "vt.拥抱"
      },
      {
        english: "congratulate",
        chinese: "vt. 祝贺  "
      },
      {
        english: "media",
        chinese: "n. 大众传播媒体  "
      },
      {
        english: "sponsorship",
        chinese: "n. 资助  "
      },
      {
        english: "sponsor",
        chinese: "n.赞助者，资助者;vt.资助；赞助"
      }
    ],
    text6: [
      {
        english: "miniature",
        chinese: "a.极小的，微型的"
      },
      {
        english: "herd",
        chinese: "n.兽群，牧群"
      },
      {
        english: "a herd of ",
        chinese: "一群"
      },
      {
        english: "pony",
        chinese: "n. 小型马，矮种马"
      },
      {
        english: "doll",
        chinese: "n. 玩偶，洋娃娃"
      },
      {
        english: "hard-pressed",
        chinese: "a.处于困境的，遭受强大压力的"
      },
      {
        english: "playroom",
        chinese: "n. 儿童游戏室"
      },
      {
        english: "tomboy",
        chinese: "n. 假小子，顽皮女孩"
      },
      {
        english: "ironic",
        chinese: "a.颇有讽刺意味的，令人啼笑皆非的"
      },
      {
        english: "mechanical",
        chinese: "a. 机械（方面）的，机械般的；呆板的"
      },
      {
        english: "convert",
        chinese: "v.（使）转变，（使）转化"
      },
      {
        english: "guzzle",
        chinese: "v. 猛吃，狂欢"
      },
      {
        english: "gas-guzzling",
        chinese: "a. 大量耗费汽油的，用油特多的"
      },
      {
        english: "SUV = (AmE) Sports Utility Vehicle ",
        chinese: "运动型多用途汽车"
      },
      {
        english: "Hybrid",
        chinese: "a. 混合的，杂种的n. 混合型机器，杂交动植物"
      },
      {
        english: "multivariable",
        chinese: "a. 多变量的，多元的"
      },
      {
        english: "calculus",
        chinese: "n. 微积分"
      },
      {
        english: "differential",
        chinese: "equation n. 微分方程"
      },
      {
        english: "not know/understand the first thing about",
        chinese: "对…一窍不通"
      },
      {
        english: "distinguish",
        chinese: "v. 辨认出；分辨"
      },
      {
        english: "transmission",
        chinese: "n. （机器或汽车上的）传动装置，变速器； 传输"
      },
      {
        english: "alternator",
        chinese: "n. 交流发电机"
      },
      {
        english: "mechanic",
        chinese: "a.机修工； 技工"
      },
      {
        english: "opener",
        chinese: "n. 开启工具；开瓶器，开罐器"
      },
      {
        english: "not know any better",
        chinese: "因无知而做错事情或干傻事"
      },
      {
        english: "crave",
        chinese: "v. 渴望得到"
      },
      {
        english: "decent",
        chinese: "a.像样的，相当好的；得体的"
      },
      {
        english: "can't help doing",
        chinese: "忍不住要做某事"
      },
      {
        english: "shudder",
        chinese: "v. 战栗，（因恐惧或厌恶而）发抖"
      },
      {
        english: "at a disadvantage",
        chinese: "处于不利地位"
      },
      {
        english: "when it comes to",
        chinese: "一谈到，就…而言"
      },
      {
        english: "imply",
        chinese: "v. express indirectly, suggest 暗示，含有……的意思"
      },
      {
        english: "abnormal",
        chinese: "a.  不正常的，变态的"
      },
      {
        english: "stumble",
        chinese: "v. 绊了一下，跌跌撞撞而行"
      },
      {
        english: "stumble into",
        chinese: "偶然步入"
      },
      {
        english: "grit",
        chinese: "v. 咬紧"
      },
      {
        english: "grit one's teeth",
        chinese: "咬紧牙关；下定决心"
      },
      {
        english: "algebra",
        chinese: "n. 代数"
      },
      {
        english: "indication",
        chinese: "n. 迹象，表示"
      },
      {
        english: "retake",
        chinese: "v.重（考），补（考）"
      },
      {
        english: "panic",
        chinese: "n.惊慌，恐慌v. 惊慌失措"
      },
      {
        english: "buzz",
        chinese: "v.,n.（作）嗡嗡声"
      },
      {
        english: "fluorescent",
        chinese: "a. 发荧光的"
      },
      {
        english: "fluorescent light ",
        chinese: "荧光灯，日光灯"
      },
      {
        english: "estrogen",
        chinese: "n. 雌激素"
      },
      {
        english: "thermodynamics",
        chinese: "n. 热力学"
      },
      {
        english: "femininity",
        chinese: "n.女性气质"
      },
      {
        english: "faulty",
        chinese: "a.有缺陷的"
      },
      {
        english: "premise",
        chinese: "n.前提"
      },
      {
        english: "cultural",
        chinese: "a.文化（上）的"
      },
      {
        english: "infant",
        chinese: "n. 婴儿；幼儿"
      },
      {
        english: "videogame",
        chinese: "n. 电子游戏"
      },
      {
        english: "incredibly",
        chinese: "adv. 极其，非同一般地"
      },
      {
        english: "incredible",
        chinese: "a. 令人惊讶的，难以置信的"
      },
      {
        english: "flexible",
        chinese: "a.灵活的；有弹性的"
      },
      {
        english: "leap",
        chinese: "n.&v.跳；跃"
      },
      {
        english: "a leap of faith sth",
        chinese: "冒险一试"
      },
      {
        english: "selective",
        chinese: "a.仔细挑选的，有选择的"
      }
    ],
    text7: [
      {
        english: "messiness",
        chinese: " n. 杂乱状况  "
      },
      {
        english: "massive",
        chinese: " a. 大量的，大规模的 "
      },
      {
        english: "snack",
        chinese: "n. 快餐，点心  "
      },
      {
        english: "parade",
        chinese: " n. 游行；阅兵队列  "
      },
      {
        english: "corrupt",
        chinese: "vt. 讹用，使（语言）变得不标准；腐蚀，贿赂  "
      },
      {
        english: "ban",
        chinese: " vt. 禁止，取缔 "
      },
      {
        english: "walkman",
        chinese: " n. 随身听 "
      },
      {
        english: "fascinating",
        chinese: "a. 迷人的，有极大吸引力的 "
      },
      {
        english: "strictly speaking ",
        chinese: "严格地讲"
      },
      {
        english: "invent",
        chinese: "vt.发明"
      },
      {
        english: "invention",
        chinese: "n"
      },
      {
        english: "manufacturer",
        chinese: "n. 制造商 "
      },
      {
        english: "tolerance",
        chinese: "n. 容忍，宽容；忍耐  "
      },
      {
        english: "to a (very real, certain, etc.) extent ",
        chinese: "在（极大，某种）程度上  "
      },
      {
        english: "necessity",
        chinese: "n. 必需品；必要（性） "
      },
      {
        english: "Anglo-Saxon",
        chinese: " n. 盎格鲁—萨克逊人  "
      },
      {
        english: "core",
        chinese: "n.核心，果核"
      },
      {
        english: "arouse",
        chinese: " vt. 唤起，激起  "
      },
      {
        english: "channel",
        chinese: "n. 海峡；渠道；频道  "
      },
      {
        english: "surrender",
        chinese: "v. give in 投降 "
      },
      {
        english: "for effect ",
        chinese: "为了增强效果，为了引起注意"
      },
      {
        english: "invade",
        chinese: "vt. 侵入，侵略 "
      },
      {
        english: "inhabit",
        chinese: "vt. 居住于 "
      },
      {
        english: "Welsh",
        chinese: " a., n. 威尔士语（的），威尔士人的 "
      },
      {
        english: "mystery",
        chinese: " n. 神秘的事物 "
      },
      {
        english: "theory",
        chinese: "n.学说，说法，理论"
      },
      {
        english: "Sanskrit",
        chinese: " n. 梵语 "
      },
      {
        english: "resemble",
        chinese: "vt. 与…相似  "
      },
      {
        english: "Latin",
        chinese: "n. 拉丁语 "
      },
      {
        english: "systematic",
        chinese: " a. 有系统的 "
      },
      {
        english: "descend",
        chinese: "vi. 起源于；下来 "
      },
      {
        english: "linguist",
        chinese: "n. 语言学家 "
      },
      {
        english: "come up with ",
        chinese: "想出（计划，回答等）；提出"
      },
      {
        english: "Indo-European",
        chinese: " a. 印欧语系的 "
      },
      {
        english: "scholar",
        chinese: "n. 学者 "
      },
      {
        english: "establish",
        chinese: " vt. 建立，确立 "
      },
      {
        english: "drift",
        chinese: "vi. 漂泊 "
      },
      {
        english: "climate",
        chinese: "n. 气候（区） "
      },
      {
        english: "westward",
        chinese: "a.向西（的）"
      },
      {
        english: "Germanic",
        chinese: " a. 日耳曼（人）的，日耳曼语的，德国（人）的  "
      },
      {
        english: "tribe",
        chinese: "n. 部落 "
      },
      {
        english: "pass (sth.) on to (sb.)  ",
        chinese: "将…传给… "
      },
      {
        english: "influence",
        chinese: "n. 影响  "
      },
      {
        english: "Christianity",
        chinese: " n. 基督教 "
      },
      {
        english: "Christian",
        chinese: "a. 基督教的 "
      },
      {
        english: "enrich",
        chinese: "vt. 使富裕，使丰富"
      },
      {
        english: "disciple",
        chinese: "n. 信徒，门徒 "
      },
      {
        english: "martyr",
        chinese: "n. 殉难者，烈士  "
      },
      {
        english: "Norse",
        chinese: "n.（古）斯堪的纳维亚语"
      },
      {
        english: "addition",
        chinese: " n. 增加的人（或物） "
      },
      {
        english: "Norman",
        chinese: "n.&a. 诺曼人（的），诺曼语（的），诺曼文化的 "
      },
      {
        english: "conquer",
        chinese: "v. 征服 "
      },
      {
        english: "kingly",
        chinese: " a. 国王（般）的  "
      },
      {
        english: "royal",
        chinese: "a. 国王或女王的；皇家的 "
      },
      {
        english: "sovereign",
        chinese: "a. 拥有最高统治权的，至高无上的；拥有主权的  "
      },
      {
        english: "alternative",
        chinese: "n. 供选择的东西 "
      },
      {
        english: "modify",
        chinese: "vt. 修改，更改 "
      },
      {
        english: "Renaissance",
        chinese: "n. （欧洲14-16世纪的）文艺复兴 "
      },
      {
        english: "Roman",
        chinese: "a.古罗马的，拉丁语的"
      },
      {
        english: "capsule",
        chinese: "n. 密封小容器；胶囊；航天舱  "
      },
      {
        english: "habitual",
        chinese: " a. 惯常的 "
      },
      {
        english: "catastrophe",
        chinese: "n. 大灾难 "
      },
      {
        english: "thermometer",
        chinese: " n. 温度计  "
      },
      {
        english: "cyberspace",
        chinese: "n. 网络空间，虚拟空间  "
      },
      {
        english: "settler",
        chinese: "n.移民，殖民者"
      },
      {
        english: "source",
        chinese: "n.源，来源"
      },
      {
        english: "out of control  ",
        chinese: "失去控制，不受约束  "
      },
      {
        english: "academy",
        chinese: " n. 学会，学院，研究院  "
      },
      {
        english: "put into practice  ",
        chinese: "将…付诸实施  "
      },
      {
        english: "Danish",
        chinese: "a. 丹麦（人）的，丹麦语的  "
      },
      {
        english: "respecter",
        chinese: "n.对……表示尊敬的人"
      },
      {
        english: "liberty",
        chinese: " n. 自由  "
      },
      {
        english: "strike out  ",
        chinese: "创造，开创  "
      },
      {
        english: "cultural",
        chinese: " a. 文化的 "
      },
      {
        english: "nourish",
        chinese: "vt. 滋养，培育 "
      },
      {
        english: "shoot",
        chinese: "n.嫩芽，新枝"
      },
      {
        english: "spring",
        chinese: "up 涌现"
      },
      {
        english: "preserve",
        chinese: " n. 独占的地区或范围；禁猎地 vt. 保护，保存  "
      },
      {
        english: "grammarian",
        chinese: " n. 语法学家  "
      },
      {
        english: "elite",
        chinese: "n. （总称）出类拔萃的人，精英"
      }
    ],
    text8: [
      {
        english: "harmony",
        chinese: "n. 和谐，融洽"
      },
      {
        english: "in harmony with ",
        chinese: "与……和谐"
      },
      {
        english: "surrounding",
        chinese: "n. 周围的事物，环境"
      },
      {
        english: "in the midst of ",
        chinese: "在当中，正当（某件事）发生的时候"
      },
      {
        english: "checkerboard",
        chinese: "n. 国际象棋"
      },
      {
        english: "prosperous",
        chinese: "a. 繁荣昌盛的"
      },
      {
        english: "hillside",
        chinese: "n. 山腰,山坡"
      },
      {
        english: "orchard",
        chinese: "n. 果园"
      },
      {
        english: "bloom",
        chinese: "n.（开）花"
      },
      {
        english: "come into bloom ",
        chinese: "盛开着花"
      },
      {
        english: "oak",
        chinese: "n.橡树,栎树"
      },
      {
        english: "maple",
        chinese: "n.槭树,枫树"
      },
      {
        english: "birch",
        chinese: "n.白桦树"
      },
      {
        english: "blaze",
        chinese: "n.火焰,光辉,五彩缤纷 vi.熊熊燃烧"
      },
      {
        english: "flame",
        chinese: "vi.烧得很旺;(像火一样)发光"
      },
      {
        english: "flicker",
        chinese: "vi.摇曳,闪烁"
      },
      {
        english: "backdrop",
        chinese: "n.周围景物;背景"
      },
      {
        english: "pine",
        chinese: "n.松树"
      },
      {
        english: "bark",
        chinese: "v.吠,叫"
      },
      {
        english: "mist",
        chinese: "n.薄雾,雾气"
      },
      {
        english: "laurel",
        chinese: "n.月桂树"
      },
      {
        english: "viburnum",
        chinese: "n.英蒾"
      },
      {
        english: "alder",
        chinese: "n.桤木"
      },
      {
        english: "fern",
        chinese: "n.蕨,羊齿植物"
      },
      {
        english: "feed on ",
        chinese: "以……为食"
      },
      {
        english: "berry",
        chinese: "n.浆果"
      },
      {
        english: "abundance",
        chinese: "n.充裕,丰富"
      },
      {
        english: "migrant",
        chinese: "n.候鸟,迁徙动物"
      },
      {
        english: "stream",
        chinese: "n.小河,小溪"
      },
      {
        english: "shady",
        chinese: "a.背阴的"
      },
      {
        english: "trout",
        chinese: "n.鲑鱼,鳟鱼"
      },
      {
        english: "barn",
        chinese: "n.牲口棚,谷仓"
      },
      {
        english: "blight",
        chinese: "n.破坏因素;(植物的)枯萎病"
      },
      {
        english: "creep",
        chinese: "vi.. 悄悄缓慢地走,蔓延,弥漫"
      },
      {
        english: "evil",
        chinese: "a.邪恶的 n.邪恶,罪恶"
      },
      {
        english: "spell",
        chinese: "n.魔力,着魔状态,中邪,一段时间,一阵"
      },
      {
        english: "settle on ",
        chinese: "降临,笼罩"
      },
      {
        english: "mysterious",
        chinese: "a. 不可思议的,神秘的"
      },
      {
        english: "malady",
        chinese: "n.疾病,弊病"
      },
      {
        english: "flock",
        chinese: "n.一群(禽,畜等)"
      },
      {
        english: "sicken",
        chinese: "v.生病,使恶心"
      },
      {
        english: "puzzle",
        chinese: "v.使困惑"
      },
      {
        english: "unexplained",
        chinese: "a.莫名其妙的"
      },
      {
        english: "stricken",
        chinese: "a.患病的,罹难的"
      },
      {
        english: "stillness",
        chinese: "n.寂静,静止"
      },
      {
        english: "backyard",
        chinese: "n.后花园"
      },
      {
        english: "desert",
        chinese: "vt.;离弃"
      },
      {
        english: "moribund",
        chinese: "a.垂死的"
      },
      {
        english: "violently",
        chinese: "ad.剧烈地,猛烈地"
      },
      {
        english: "throb",
        chinese: "vi.(心脏,机器等)跳动,有规律地颤动"
      },
      {
        english: "chorus",
        chinese: "n.合唱曲"
      },
      {
        english: "robin",
        chinese: "n.知更鸟"
      },
      {
        english: "catbird",
        chinese: "n北美猫鸟"
      },
      {
        english: "dove",
        chinese: "n.鸽子"
      },
      {
        english: "jay",
        chinese: "n.松鸦"
      },
      {
        english: "wren",
        chinese: "n.鹪鹩"
      },
      {
        english: "scores of ",
        chinese: "大量,许多"
      },
      {
        english: "marsh",
        chinese: "沼泽,湿地"
      },
      {
        english: "brood",
        chinese: "vi.孵卵"
      },
      {
        english: "hatch",
        chinese: "vt.(使)孵出"
      },
      {
        english: "complain",
        chinese: "vi.抱怨,投诉"
      },
      {
        english: "litter",
        chinese: "n.一窝"
      },
      {
        english: "drone",
        chinese: "vi.发出嗡嗡声"
      },
      {
        english: "blossom",
        chinese: "n.(全部)花朵 vi.开花"
      },
      {
        english: "pollination",
        chinese: "n.授粉"
      },
      {
        english: "roadside",
        chinese: "n.路边"
      },
      {
        english: "be lined with ",
        chinese: "两边……排列成行"
      },
      {
        english: "brown",
        chinese: "v.(使)变成棕(褐)色"
      },
      {
        english: "wither",
        chinese: "v.(使)枯萎"
      },
      {
        english: "vegetation",
        chinese: "n.草木,植被"
      },
      {
        english: "angler",
        chinese: "n.垂钓者"
      },
      {
        english: "gutter",
        chinese: "n.排水管,排水沟"
      },
      {
        english: "eave",
        chinese: "n.屋檐"
      },
      {
        english: "shingle",
        chinese: "n.木瓦,墙面板"
      },
      {
        english: "granular",
        chinese: "a.颗粒的"
      },
      {
        english: "patch",
        chinese: "n.块,斑"
      },
      {
        english: "witchcraft",
        chinese: "n.巫术,魔法"
      },
      {
        english: "silence",
        chinese: "vt.使缄默,压制"
      },
      {
        english: "rebirth",
        chinese: "n.再生,复生"
      },
      {
        english: "counterpart",
        chinese: "n.职能相当的人或物"
      },
      {
        english: "misfortune",
        chinese: "n.厄运,不幸"
      },
      {
        english: "grim",
        chinese: "a.阴森的,无情的,狰狞的"
      },
      {
        english: "spectre",
        chinese: "n,幽灵"
      },
      {
        english: "unnoticed",
        chinese: "a.不被察觉的"
      },
      {
        english: "tragedy",
        chinese: "n.惨案,悲剧"
      },
      {
        english: "stark",
        chinese: "a.严酷的"
      }

    ],
    num1:93,
    num2:57,
    num3:58,
    num4:68,
    num5:67,
    num6:58,
    num7:81,
    num8:86
  },
   contains: function(arr, obj) {  
    var i = arr.length;  
    while(i--) {
      if (arr[i] === obj) {
        return 1;
      }
    }  
    return 0;  
  } ,

  getIndex: function () {
    var num=0;
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
    if (this.contains(index,1)) {
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
      num=num+this.data.num2;
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
        text:temp
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
      text:temp
    })
    if(num==0){
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
    rightNum=rightNum+1;
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
          wx.redirectTo({
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
  select_over(){
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