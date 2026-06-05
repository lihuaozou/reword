export type MotivationTone =
  | "gentle"
  | "hard"
  | "teacher"
  | "exam"
  | "comeback"
  | "mistake"
  | "checkin"
  | "night"
  | "morning";

export type MotivationScene =
  | "launch"
  | "dashboard"
  | "study_start"
  | "study_finish"
  | "wrong_answer"
  | "missed_checkin"
  | "checkin_success"
  | "review_due"
  | "night_review"
  | "morning_start";

export type MotivationQuote = {
  id: string;
  tone: MotivationTone;
  text: string;
  subtext?: string;
  scene: MotivationScene;
  intensity: 1 | 2 | 3;
};

export const motivationQuotes: MotivationQuote[] = [
  { id: "hard-01", tone: "hard", text: "你不背的单词，不会自己跑进脑子里。", subtext: "先拿下今天这一组。", scene: "dashboard", intensity: 2 },
  { id: "hard-02", tone: "hard", text: "今天逃掉的复习，明天会变成更难啃的债。", subtext: "到期词现在处理最便宜。", scene: "review_due", intensity: 2 },
  { id: "hard-03", tone: "hard", text: "别总等状态好，考研不会等你状态好。", subtext: "状态不来，就用行动叫它来。", scene: "launch", intensity: 3 },
  { id: "hard-04", tone: "hard", text: "单词不会背叛你，只有你会放弃它。", subtext: "今天别先退场。", scene: "study_start", intensity: 2 },
  { id: "hard-05", tone: "hard", text: "你现在偷的懒，最后都会变成试卷上的陌生词。", subtext: "别给考场制造盲区。", scene: "missed_checkin", intensity: 3 },
  { id: "hard-06", tone: "hard", text: "你以为只是少背几个词，其实是在给考场制造盲区。", subtext: "盲区越少，底气越多。", scene: "dashboard", intensity: 2 },
  { id: "hard-07", tone: "hard", text: "复习提醒不是摆设，是遗忘曲线在敲门。", subtext: "敲门了就处理。", scene: "review_due", intensity: 2 },
  { id: "hard-08", tone: "hard", text: "今天不想背，明天也未必想背，所以现在背。", subtext: "先开始 5 分钟。", scene: "launch", intensity: 3 },
  { id: "hard-09", tone: "hard", text: "别用“还早”骗自己，时间最擅长突然不够。", subtext: "倒计时每天都在走。", scene: "dashboard", intensity: 3 },
  { id: "hard-10", tone: "hard", text: "你可以慢，但不能每天都从零开始。", subtext: "别让节奏断掉。", scene: "missed_checkin", intensity: 2 },
  { id: "hard-11", tone: "hard", text: "今天空过去，明天不会自动补回来。", subtext: "先背 5 个，把今天留下来。", scene: "dashboard", intensity: 2 },
  { id: "hard-12", tone: "hard", text: "别把焦虑当努力，真正有用的是把词过完。", subtext: "少想一点，多背一轮。", scene: "study_start", intensity: 2 },
  { id: "hard-13", tone: "hard", text: "拖延最会伪装成准备。", subtext: "现在开始比再计划十分钟更有用。", scene: "launch", intensity: 3 },
  { id: "hard-14", tone: "hard", text: "你今天放过的词，考场不会放过你。", subtext: "把陌生变成熟悉。", scene: "review_due", intensity: 3 },
  { id: "hard-15", tone: "hard", text: "别只收藏计划，执行过才算数。", subtext: "把今天的最小任务兑现。", scene: "dashboard", intensity: 2 },

  { id: "teacher-01", tone: "teacher", text: "别骗自己说“明天开始”，你缺的不是明天，是现在这一遍。", subtext: "打开就已经赢了一半。", scene: "launch", intensity: 3 },
  { id: "teacher-02", tone: "teacher", text: "单词不是看懂就算会，能反应出来才叫会。", subtext: "测试是为了逼出反应速度。", scene: "wrong_answer", intensity: 2 },
  { id: "teacher-03", tone: "teacher", text: "今天不复习，昨天背的就等于白背一半。", subtext: "别让昨天的努力漏掉。", scene: "review_due", intensity: 3 },
  { id: "teacher-04", tone: "teacher", text: "别把努力挂嘴上，把今天这组词过完再说。", subtext: "完成之后再评价状态。", scene: "study_start", intensity: 2 },
  { id: "teacher-05", tone: "teacher", text: "你不是记忆力不行，你是重复次数不够。", subtext: "重复到自动反应才算稳。", scene: "dashboard", intensity: 2 },
  { id: "teacher-06", tone: "teacher", text: "真正拉开差距的不是一天背多少，而是该复习时你有没有出现。", subtext: "今天到期的词，今天见。", scene: "review_due", intensity: 2 },
  { id: "teacher-07", tone: "teacher", text: "现在嫌麻烦，考试时就会嫌自己不会。", subtext: "麻烦提前处理，考场就轻一点。", scene: "dashboard", intensity: 3 },
  { id: "teacher-08", tone: "teacher", text: "背单词最怕的不是慢，是断。", subtext: "今天不断，就是进步。", scene: "missed_checkin", intensity: 2 },
  { id: "teacher-09", tone: "teacher", text: "该复习的词别拖，它不会因为你逃避就自动掌握。", subtext: "复习队列就是今天的重点。", scene: "review_due", intensity: 2 },
  { id: "teacher-10", tone: "teacher", text: "今天这 20 个复习词，是在保住你昨天的努力。", subtext: "保住旧词，再学新词。", scene: "dashboard", intensity: 1 },
  { id: "teacher-11", tone: "teacher", text: "你以为自己忘了，其实是还没复现够。", subtext: "错了就复现，别急着否定自己。", scene: "wrong_answer", intensity: 1 },
  { id: "teacher-12", tone: "teacher", text: "题目不会因为你心情不好就变简单。", subtext: "先把能背的背掉。", scene: "launch", intensity: 3 },
  { id: "teacher-13", tone: "teacher", text: "清醒一点，考研拼到最后靠的是稳定输出。", subtext: "今天的输出就是这组词。", scene: "study_start", intensity: 2 },
  { id: "teacher-14", tone: "teacher", text: "不要只追求背过，能在选项里认出来才有用。", subtext: "测试错题会告诉你哪里虚。", scene: "wrong_answer", intensity: 2 },
  { id: "teacher-15", tone: "teacher", text: "你现在补的不是单词，是考场上的反应时间。", subtext: "反应快一点，阅读就稳一点。", scene: "study_finish", intensity: 2 },

  { id: "gentle-01", tone: "gentle", text: "今天只要开始 5 分钟，就比昨天的犹豫强。", subtext: "小开始也算开始。", scene: "launch", intensity: 1 },
  { id: "gentle-02", tone: "gentle", text: "不用一次背很多，先把今天该复习的词拿下。", subtext: "一步一步来。", scene: "review_due", intensity: 1 },
  { id: "gentle-03", tone: "gentle", text: "慢一点没关系，别停就行。", subtext: "稳定比爆发更可靠。", scene: "dashboard", intensity: 1 },
  { id: "gentle-04", tone: "gentle", text: "今天背的每一个词，都会在考场上替你争一分。", subtext: "别小看这一遍。", scene: "study_start", intensity: 1 },
  { id: "gentle-05", tone: "gentle", text: "你不是不行，你只是需要一个稳定的节奏。", subtext: "今天把节奏接上。", scene: "missed_checkin", intensity: 1 },
  { id: "gentle-06", tone: "gentle", text: "把今天的任务做小一点，但一定要完成。", subtext: "最小任务也有力量。", scene: "dashboard", intensity: 1 },
  { id: "gentle-07", tone: "gentle", text: "先打开，先开始，状态会在行动里回来。", subtext: "不要等到完全准备好。", scene: "launch", intensity: 1 },
  { id: "gentle-08", tone: "gentle", text: "不要因为昨天没做好，就放弃今天补回来。", subtext: "今天可以重新接上。", scene: "missed_checkin", intensity: 1 },
  { id: "gentle-09", tone: "gentle", text: "你只需要赢下今天这一小段。", subtext: "别把一年压到今天。", scene: "dashboard", intensity: 1 },
  { id: "gentle-10", tone: "gentle", text: "现在背一个，就少一个陌生词。", subtext: "一个也算数。", scene: "study_start", intensity: 1 },
  { id: "gentle-11", tone: "gentle", text: "状态低的时候，就用很小的任务保护自己。", subtext: "先复习 5 个词。", scene: "launch", intensity: 1 },
  { id: "gentle-12", tone: "gentle", text: "今天不用证明什么，把该背的词见一面就好。", subtext: "见面次数多了，就会熟。", scene: "study_start", intensity: 1 },
  { id: "gentle-13", tone: "gentle", text: "错题不是否定你，是提醒你下一轮该去哪。", subtext: "它在帮你省时间。", scene: "wrong_answer", intensity: 1 },
  { id: "gentle-14", tone: "gentle", text: "你已经开始了，这就不是空白的一天。", subtext: "继续把这组词收尾。", scene: "study_finish", intensity: 1 },
  { id: "gentle-15", tone: "gentle", text: "复习不是退回原点，是在给记忆加固。", subtext: "每一遍都算数。", scene: "review_due", intensity: 1 },

  { id: "mistake-01", tone: "mistake", text: "这个词现在错，比考场上错值。", subtext: "现在修，成本最低。", scene: "wrong_answer", intensity: 2 },
  { id: "mistake-02", tone: "mistake", text: "错题不是失败，是最准确的复习入口。", subtext: "入口找到了，就进去补。", scene: "wrong_answer", intensity: 1 },
  { id: "mistake-03", tone: "mistake", text: "你不是不会，你是还没重复到自动反应。", subtext: "再见几次就熟了。", scene: "wrong_answer", intensity: 1 },
  { id: "mistake-04", tone: "mistake", text: "这次错了，下次它就必须被你认出来。", subtext: "把它放进错题强化。", scene: "wrong_answer", intensity: 2 },
  { id: "mistake-05", tone: "mistake", text: "错一次就标红一次，直到它变成熟词。", subtext: "标红不是惩罚，是提醒。", scene: "wrong_answer", intensity: 2 },
  { id: "mistake-06", tone: "mistake", text: "真正的提分点，往往就藏在错题里。", subtext: "这道题在给你送线索。", scene: "wrong_answer", intensity: 1 },
  { id: "mistake-07", tone: "mistake", text: "不怕错，怕的是错完不回头。", subtext: "现在回头，正好。", scene: "wrong_answer", intensity: 2 },
  { id: "mistake-08", tone: "mistake", text: "这不是打击你，这是系统在告诉你该复习哪一个。", subtext: "方向比情绪更重要。", scene: "wrong_answer", intensity: 1 },
  { id: "mistake-09", tone: "mistake", text: "把它加入错题强化，下次见面必须拿下。", subtext: "错题要有下文。", scene: "wrong_answer", intensity: 2 },
  { id: "mistake-10", tone: "mistake", text: "现在发现漏洞，是好事。", subtext: "考前暴露，总比考场暴露好。", scene: "wrong_answer", intensity: 1 },

  { id: "checkin-01", tone: "checkin", text: "今天没有白过。", subtext: "你把这一天留在进度里了。", scene: "checkin_success", intensity: 1 },
  { id: "checkin-02", tone: "checkin", text: "你又赢了遗忘一次。", subtext: "连续性就是底气。", scene: "checkin_success", intensity: 2 },
  { id: "checkin-03", tone: "checkin", text: "连续打卡 X 天，别断。", subtext: "这个数字值得保住。", scene: "checkin_success", intensity: 2 },
  { id: "checkin-04", tone: "checkin", text: "今天这一点坚持，未来会变成考场上的底气。", subtext: "别小看稳定。", scene: "checkin_success", intensity: 1 },
  { id: "checkin-05", tone: "checkin", text: "完成比完美重要，今天你完成了。", subtext: "明天继续滚动。", scene: "checkin_success", intensity: 1 },
  { id: "checkin-06", tone: "checkin", text: "这不是鸡血，是你正在建立稳定性。", subtext: "稳定才最抗压。", scene: "checkin_success", intensity: 2 },
  { id: "checkin-07", tone: "checkin", text: "又多守住了一天。", subtext: "一天一天，最后会很远。", scene: "checkin_success", intensity: 1 },
  { id: "checkin-08", tone: "checkin", text: "你正在把背单词变成习惯。", subtext: "习惯比情绪可靠。", scene: "checkin_success", intensity: 1 },
  { id: "checkin-09", tone: "checkin", text: "别小看今天这十几分钟，它会累积成结果。", subtext: "结果来自重复。", scene: "checkin_success", intensity: 1 },
  { id: "checkin-10", tone: "checkin", text: "今天的任务已经兑现，明天继续。", subtext: "保持队形。", scene: "checkin_success", intensity: 1 },

  { id: "exam-01", tone: "exam", text: "倒计时不是吓你，是提醒你把今天用掉。", subtext: "今天最值钱。", scene: "dashboard", intensity: 2 },
  { id: "exam-02", tone: "exam", text: "时间会过去，背过的词会留下。", subtext: "让今天留下些什么。", scene: "launch", intensity: 1 },
  { id: "exam-03", tone: "exam", text: "上岸不是某一天突然发生，是每天少一点陌生词。", subtext: "今天也少一点。", scene: "dashboard", intensity: 1 },
  { id: "exam-04", tone: "exam", text: "阅读理解的底气，很多时候就藏在词汇量里。", subtext: "词稳，题才稳。", scene: "study_start", intensity: 1 },
  { id: "exam-05", tone: "exam", text: "别把考场上的希望，交给没复习过的运气。", subtext: "复习才是可控项。", scene: "review_due", intensity: 3 },

  { id: "comeback-01", tone: "comeback", text: "断了不可怕，可怕的是断了以后装作没事。", subtext: "今天补回来。", scene: "missed_checkin", intensity: 2 },
  { id: "comeback-02", tone: "comeback", text: "昨天没兑现，今天就把节奏接上。", subtext: "别让一次中断变成一周空白。", scene: "missed_checkin", intensity: 1 },
  { id: "comeback-03", tone: "comeback", text: "重新开始不是丢脸，是恢复控制。", subtext: "先完成最小任务。", scene: "missed_checkin", intensity: 1 },
  { id: "comeback-04", tone: "comeback", text: "别因为漏了一天，就把后面也交出去。", subtext: "今天还在你手里。", scene: "missed_checkin", intensity: 2 },
  { id: "comeback-05", tone: "comeback", text: "补救越早，损失越小。", subtext: "现在背 5 个就开始止损。", scene: "launch", intensity: 2 },

  { id: "morning-01", tone: "morning", text: "早一点开始，今天就少一点拖延。", subtext: "先把 10 个新词拿下。", scene: "morning_start", intensity: 1 },
  { id: "morning-02", tone: "morning", text: "上午背词，像给今天开了个稳局。", subtext: "开局稳，后面就不慌。", scene: "morning_start", intensity: 1 },
  { id: "night-01", tone: "night", text: "睡前复习一轮，明天醒来少忘一点。", subtext: "把今天的词收好。", scene: "night_review", intensity: 1 },
  { id: "night-02", tone: "night", text: "今晚不需要热血，只需要把到期词清掉。", subtext: "清掉就睡。", scene: "night_review", intensity: 2 },
  { id: "night-03", tone: "night", text: "别让今天带着空白结束。", subtext: "5 分钟也能补上一笔。", scene: "night_review", intensity: 2 },
];
