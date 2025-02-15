/**
 * 签文等级枚举
 */
const SignLevel = {
    BEST: '上上',      // 上上签
    GOOD: '上',       // 上签
    NORMAL: '中',     // 中签
    BAD: '下',        // 下签
    WORST: '下下'     // 下下签
};
 
/**
 * 签文数据
 * @type {Array<Object>}
 */
const signs = [
    // 1-10
    {
        id: 1,
        name: "乾元",
        level: SignLevel.BEST,
        poem: "天门开紫气，\n祥云拥日来。\n万里春光好，\n乾坤福已催。",
        explanation: "此签为上上签，象征天地交泰。紫气东来，预示祥瑞降临；祥云拥日，暗示贵人相助；春光遍野，表明吉运已至。",
        interpretation: "运势昌隆，诸事亨通。正如春回大地，生机勃发，若能持身以正，必有意外之喜。事业、姻缘、功名皆宜。",
        advice: "诚信立身，广结善缘。面对机遇当把握，遇事宜刚柔并济。善待他人者，必得天眷。"
    },
    // ... 其他签文数据 ...
    {
        id: 2,
        name: "暗礁", // 下
        level: SignLevel.BAD,
        poem: "潭深藏碧玉，\n石老长青苔。\n且待春光到，\n峰头雪尽开。",
        explanation: "此签为中签。涧水流石，自成风景。虽处幽僻，却见真趣。",
        interpretation: "运势平平，宜守不宜进。安守本分，自有好处。",
        advice: "守正待时，勿急勿躁。机缘自至，不必强求。"
    },
    {
        id: 3,
        name: "青萍", // 中
        level: SignLevel.NORMAL,
        poem: "寒潭藏利刃，\n秋水映清光。\n时运虽未显，\n终见锋芒扬。",
        explanation: "此签为中签。青萍剑临水而立，剑气森然。看似平淡，实则暗藏玄机。",
        interpretation: "运势平稳中带有变数。守静待时，终有小成。若能耐得住寂寞，必有所获。",
        advice: "稳扎稳打，循序渐进。不可好高骛远，应当脚踏实地。"
    },
    {
        id: 4,
        name: "玄枯", // 下下
        level: SignLevel.WORST,
        poem: "乌云蔽明月，\n枯藤缠古松。\n寒霜侵骨冷，\n且守岁寒容。",
        explanation: "此签为下下签。寒云密布，枯木盘结。当前境遇至暗，需耐心等待。",
        interpretation: "运势极差，诸事不顺。如深冬枯木，暂无生机。",
        advice: "静守勿动，避开风险。守得云开，方见月明。"
    },
    {
        id: 5,
        name: "云瑞", // 上
        level: SignLevel.GOOD,
        poem: "祥云翔紫极，\n瑞气动三才。\n福星临命位，\n喜气满楼台。",
        explanation: "此签为上签，祥云瑞气，五色纷呈。三光同照，预示着诸事皆顺。",
        interpretation: "运势向好，诸事皆宜。有贵人相助，能化险为夷。宜开展新事业，亦可谋求婚姻。",
        advice: "把握机会，持续向前。但需谨记居安思危，不可过于乐观。"
    },
    {
        id: 6,
        name: "石泉", // 中
        level: SignLevel.NORMAL,
        poem: "山泉穿石出，\n苔痕绕碧川。\n宁静深谷里，\n自有乐天年。",
        explanation: "此签为中签。石上清泉，源源不绝。虽无大志，却见恒心。",
        interpretation: "运势平稳，宜守成。循序渐进，终有所成。",
        advice: "持之以恒，循序渐进。不必躁进，自有收获。"
    },
    {
        id: 7,
        name: "羇旅", // 下
        level: SignLevel.BAD,
        poem: "孤云天际望，\n游子倚楼寒。\n归路虽漫漫，\n来日见春颜。",
        explanation: "此签为下签。身处异乡，前途未卜。虽有困顿，终有归期。",
        interpretation: "运势欠佳，诸事不顺。暂时难见光明，需耐心等待。",
        advice: "随遇而安，保持希望。时运未至，且守且行。"
    },
    {
        id: 8,
        name: "瑶光", // 上上
        level: SignLevel.GOOD,
        poem: "瑶台明月照，\n玉露沐青莲。\n金榜题名日，\n天门为尔开。",
        explanation: "此签为上上签，瑶台月色象征至高荣耀。玉露青莲暗示品格高洁，金榜题名预示功名将至。",
        interpretation: "前程似锦，功名在望。贵人青眼，逢凡事皆有神助。宜进取，可谋事。",
        advice: "守正持恒，不忘初心。机遇自会眷顾，切勿因得意而忘形。"
    },
    {
        id: 9,
        name: "离乱", // 下下
        level: SignLevel.WORST,
        poem: "暴雨摧残柳，\n狂风折断梅。\n浮萍随水去，\n难问岸边开。",
        explanation: "此签为下下签。风雨飘摇，乾坤混沌。处境艰难，需随遇而安。",
        interpretation: "运势至低，诸事不顺。如风雨中的落叶，难以自主。",
        advice: "随遇而安，避开祸端。不可妄动，当守且待。"
    },
    {
        id: 10,
        name: "兰芷", // 中
        level: SignLevel.NORMAL,
        poem: "幽谷暗香远，\n清风送素馨。\n淡泊无人识，\n天知品自清。",
        explanation: "此签为中签。兰芷幽香，暗香浮动。处境虽平淡，却自有一番气质。",
        interpretation: "运势平平，但可守成。宜修身养性，不宜冒进。待时而动，自有收获。",
        advice: "守正待时，涵养德行。不必强求，随缘而安。"
    },
    // 11-20
    {
        id: 11,
        name: "灵芝", // 上
        level: SignLevel.GOOD,
        poem: "紫芝生玉洞，\n甘露降金台。\n仙人投手诏，\n福禄两相陪。",
        explanation: "此签为上签，瑶草灵芝皆为祥瑞之兆。金井玉阶暗示富贵之象，仙人赐福更显吉祥。",
        interpretation: "运势甚佳，尤其利于健康与福寿。经商者有财运，求职者得贵人。",
        advice: "心存善念，广结善缘。事业顺遂之时，更要注意养生保健。"
    },
    {
        id: 12,
        name: "寒蓬", // 下
        level: SignLevel.BAD,
        poem: "北风卷落木，\n古道影孤松。\n长夜风霜重，\n寒枝待晓钟。",
        explanation: "此签为下签。秋风萧瑟，落叶飘零。境遇困顿，需持守待时。",
        interpretation: "运势不佳，诸事受阻。宜避不宜进，当守不当为。",
        advice: "安守本分，避开风险。时运未济，不可强求。"
    },
    {
        id: 13,
        name: "烟雨", // 中
        level: SignLevel.NORMAL,
        poem: "江南三月天，\n烟雨绕楼台。\n不求名利事，\n静听春禽来。",
        explanation: "此签为中签。烟雨蒙蒙，春意渐浓。时运平稳，暗含机遇。",
        interpretation: "运势平和，渐有生机。如春雨润物，静待花开。",
        advice: "耐心等待，涵养德行。机缘自至，不必强求。"
    },
    {
        id: 14,
        name: "昏墨", // 下下
        level: SignLevel.WORST,
        poem: "浓雾锁长空，\n昏鸦噪林梢。\n前程迷漫处，\n且向近边逃。",
        explanation: "此签为下下签。天色昏暗，日月无光。处境困顿，需审时度势。",
        interpretation: "运势极差，诸事不顺。如浓雾遮日，难见光明。",
        advice: "谨慎为上，守待为要。不可妄动，当思退守。"
    },
    {
        id: 15,
        name: "景星", // 上上
        level: SignLevel.GOOD,
        poem: "景星流彩处，\n瑞气满乾坤。\n喜从天外降，\n福到眼前存。",
        explanation: "此签为上上签，景星示现，瑞气盈门。天降祥瑞，福运亨通。占此签者，当喜当贺。",
        interpretation: "运势极佳，诸事顺遂。如同景星庆云，预示着非凡机遇。功名、财运、姻缘皆有喜事。",
        advice: "谦虚谨慎，勿骄勿躁。福气虽好，更应积德行善。"
    },
    {
        id: 16,
        name: "松筠", // 中
        level: SignLevel.NORMAL,
        poem: "冰霜凝翠色，\n烈雪试苍枝。\n心镜澄如水，\n前程渐可期。",
        explanation: "此签为中签。松筠耐寒，彰显坚毅品格。虽遇寒霜，愈显挺拔。",
        interpretation: "运势平稳，宜守不宜进。持守正道，自有转机。切忌急躁冒进。",
        advice: "持守正道，砥砺品性。静待佳音，不可妄动。"
    },
    {
        id: 17,
        name: "征途", // 下
        level: SignLevel.BAD,
        poem: "暮烟迷古道，\n征马踏寒沙。\n莫问前程远，\n不如近处家。",
        explanation: "此签为下签。暮色苍茫，前路难明。当前境遇不顺，需谨慎行事。",
        interpretation: "运势低迷，诸事不顺。远行不利，谋事难成。宜守旧，避新求。",
        advice: "安分守己，稳妥为上。不宜远行，不可冒进。"
    },
    {
        id: 18,
        name: "琳琅", // 上
        level: SignLevel.GOOD,
        poem: "金阙传钟韵，\n宝台生瑞光。\n贵人垂青目，\n玉带自来昌。",
        explanation: "此签为上签，琳琅玉树寓意富贵荣华。宝器生光，表示有贵人赏识。",
        interpretation: "运势正佳，尤其适合婚姻、交际。贵人相助，能得意外之财。",
        advice: "善待有缘人，珍惜贵人援手。切莫因小失大，应懂得取舍。"
    },
    {
        id: 19,
        name: "绝途", // 下下
        level: SignLevel.BAD,
        poem: "峭壁当前立，\n深渊在脚边。\n归途迷雾里，\n待到月华圆。",
        explanation: "此签为下下签。山穷水尽，四顾茫然。处境至困，需持重守待。",
        interpretation: "运势极差，诸事阻滞。如入绝境，难见出路。",
        advice: "守静待变，避祸为上。不可妄动，当思退守。"
    },
    {
        id: 20,
        name: "溪桃", // 中
        level: SignLevel.NORMAL,
        poem: "幽谷藏桃树，\n春风动碧波。\n野趣胜尘世，\n花开自清和。",
        explanation: "此签为中签。溪畔桃花，自然天成。虽非显达，却见真趣。",
        interpretation: "运势平稳，无忧无喜。宜随遇而安，不必强求。",
        advice: "随缘而处，保持本真。不必攀比，自有妙处。"
    },
    // 21-30
    {
        id: 21,
        name: "竹素", // 中
        level: SignLevel.NORMAL,
        poem: "山静月华明，\n风清露气新。\n素心常寂寞，\n终得养天真。",
        explanation: "此签为中签。竹色清雅，泉声澄净。虽无大志，却有閒适之趣。",
        interpretation: "运势平和，无忧无喜。宜修身养性，勿妄进取。",
        advice: "安心守己，淡泊名利。清心寡欲，自得其乐。"
    },
    {
        id: 22,
        name: "秋蓬", // 下
        level: SignLevel.BAD,
        poem: "西风吹旧垒，\n败叶舞空庭。\n飘零随大势，\n难觅旧时荣。",
        explanation: "此签为下签。秋蓬飘零，无有定所。处境飘摇，难见稳定。",
        interpretation: "运势欠佳，诸事不定。如秋蓬飘零，难以安定。",
        advice: "暂避锋芒，守待时机。不可妄动，当思退守。"
    },
    {
        id: 23,
        name: "玄鹤", // 上
        level: SignLevel.GOOD,
        poem: "白云开远岫，\n丹顶舞清晨。\n玉简承仙诏，\n青云步步新。",
        explanation: "此签为上签，玄鹤展翅，直上青云。仙缘可得，预示着难得机遇。",
        interpretation: "运势上佳，尤其利于求学、晋升。有意外之喜，贵人提携。",
        advice: "把握机会，勤学上进。贵人提携之时，更应努力不懈。"
    },
    {
        id: 24,
        name: "飘零", // 下下
        level: SignLevel.BAD,
        poem: "断雁叫寒天，\n孤舟泊暮烟。\n浮萍无定处，\n难认旧林边。",
        explanation: "此签为下下签。狂风落叶，飘零无依。处境飘摇，需随遇而安。",
        interpretation: "运势至低，诸事不顺。如落叶飘零，难以自主。",
        advice: "随遇而安，守静为要。不可强求，当避则避。"
    },
    {
        id: 25,
        name: "云岚", // 中
        level: SignLevel.NORMAL,
        poem: "烟霭绕青峰，\n岚光映碧空。\n暂时天色暗，\n终见彩云封。",
        explanation: "此签为中签。云雾缭绕，若隐若现。时运虽未明朗，却暗藏机缘。",
        interpretation: "运势平稳，有喜有忧。目前虽不明朗，但坚持则终见光明。",
        advice: "耐心等待，保持希望。云开见日，指日可待。"
    },
    {
        id: 26,
        name: "林雁", // 中
        level: SignLevel.NORMAL,
        poem: "南来双雁过，\n风送故乡书。\n他日归程近，\n长空认旧初。",
        explanation: "此签为中签。林间飞雁，传递信息。虽暂未得志，终有归期。",
        interpretation: "运势平平，暂时受阻。守待佳音，终有转机。",
        advice: "保持耐心，守候机缘。不必强求，静待时机。"
    },
    {
        id: 27,
        name: "秋蝉", // 下
        level: SignLevel.BAD,
        poem: "残阳照衰柳，\n寒露湿蝉声。\n往事休回首，\n且向静中听。",
        explanation: "此签为下签。秋蝉悲鸣，日暮西沉。当前境遇不顺，需忍耐度过。",
        interpretation: "运势不佳，诸事皆困。如秋蝉迎寒，需待时运复转。",
        advice: "忍耐为上，静待春来。不可强求，当思退守。"
    },
    {
        id: 28,
        name: "虹霓", // 上
        level: SignLevel.GOOD,
        poem: "长虹横碧落，\n彩气贯三清。\n今朝逢胜会，\n万里路堪行。",
        explanation: "此签为上签，彩虹跨空，瑞气盈天。吉星高照，表示好运将至。",
        interpretation: "运势极好，诸事顺遂。适合开展新事业，亦宜求职谋事。",
        advice: "踏实进取，把握机遇。但需戒骄戒躁，方能善始善终。"
    },
    {
        id: 29,
        name: "悬磬", // 下下
        level: SignLevel.BAD,
        poem: "危楼临断崖，\n古木挂寒萝。\n莫问前程事，\n且寻退路多。",
        explanation: "此签为下下签。危楼欲倾，处境维艰。需谨慎自持，避免灾祸。",
        interpretation: "运势极差，诸事不顺。如危楼之上，岌岌可危。",
        advice: "谨慎为要，守静为上。不可妄动，需避风险。"
    },
    {
        id: 30,
        name: "溪馨", // 中
        level: SignLevel.NORMAL,
        poem: "碧水通幽径，\n青苔染石阶。\n无心争世利，\n自在有天才。",
        explanation: "此签为中签。溪水清澈，芳草萋萋。生活平淡，却自有一番风味。",
        interpretation: "运势平稳，宜守成。虽无大起大落，但保持平稳即是福。",
        advice: "安于本分，持守正道。不必羡慕他人，自有乐趣。"
    },
    // 31-40
    {
        id: 31,
        name: "玉泉", // 上
        level: SignLevel.GOOD,
        poem: "碧岩流清润，\n玉带绕仙家。\n春光方灿烂，\n前程喜气遮。",
        explanation: "此签为上签，玉泉清澈，仙境降祥。春日融融，预示着美好前程。",
        interpretation: "运势向好，诸事皆宜。尤其适合开展新事业，谋求新发展。",
        advice: "保持进取，稳步向前。贵人相助之时，更要努力不懈。"
    },
    {
        id: 32,
        name: "暗渡", // 下
        level: SignLevel.BAD,
        poem: "孤舟横夜水，\n寒月隐沙汀。\n慎勿轻举步，\n静待天将明。",
        explanation: "此签为下签。暗夜独渡，前路难明。处境艰难，需谨慎而行。",
        interpretation: "运势低迷，诸事不顺。如暗夜渡江，难见对岸。",
        advice: "谨慎行事，不可冒进。等待时机，暂避风头。"
    },
    {
        id: 33,
        name: "山棠", // 中
        level: SignLevel.NORMAL,
        poem: "春雨润山棠，\n暗香引蝶来。\n野趣胜庭院，\n清风自徘徊。",
        explanation: "此签为中签。山中海棠，自开自落。虽非显贵，却也闲适。",
        interpretation: "运势平平，但无灾祸。随遇而安，自得其乐。",
        advice: "知足常乐，随缘而处。不必强求，自有天意。"
    },
    {
        id: 34, 
        name: "长夜", // 下下
        level: SignLevel.BAD,
        poem: "阴云遮夜月，\n寒鸟噪疏林。\n未见东方白，\n遥闻钟声深。",
        explanation: "此签为下下签。长夜漫漫，前路难明。处境至暗，需耐心等待。",
        interpretation: "运势极低，诸事不顺。如漫漫长夜，难见天明。",
        advice: "守静待旦，不可妄动。耐心等待，方见曙光。"
    },
    {
        id: 35,
        name: "涧蕙", // 中
        level: SignLevel.NORMAL,
        poem: "幽兰临碧水，\n暗香袭暮云。\n无心求世赏，\n自有天相亲。",
        explanation: "此签为中签。涧边幽兰，暗香浮动。虽处幽僻，自有天眷。",
        interpretation: "运势平和，无惊无险。守己待时，自有福报。",
        advice: "安守本分，修身养性。不必张扬，静待时机。"
    },
    {
        id: 36, 
        name: "林泉", // 中
        level: SignLevel.NORMAL,
        poem: "山深云气起，\n松下听流泉。\n闲居无人识，\n明月照心田。",
        explanation: "此签为中签。林深泉静，适意怡然。虽不显达，却有闲适之趣。",
        interpretation: "运势平顺，无喜无忧。宜修身养性，暂避锋芒。",
        advice: "顺其自然，莫强求进。静待时机，自有转机。"
    },
    {
        id: 37,
        name: "阨塞", // 下下
        level: SignLevel.BAD,
        poem: "古洞藏寒雾，\n荒烟锁暮天。\n归程迷失处，\n不如旧林边。",
        explanation: "此签为下下签。穷谷阨塞，进退维谷。处境困顿，需谨慎自持。",
        interpretation: "运势至低，诸事不顺。如入穷谷，难见出路。",
        advice: "守静为要，不可妄动。等待时机，方可脱困。"
    },
    {
        id: 38,
        name: "霞绮", // 中
        level: SignLevel.NORMAL,
        poem: "朝霞映碧海，\n彩云绕玉楼。\n风光虽易逝，\n且喜片时游。",
        explanation: "此签为中签。朝霞绚丽，彩云缭绕。景色虽美，终是短暂。",
        interpretation: "运势平稳，暂得安宁。切莫贪恋眼前之利，应思长远。",
        advice: "珍惜当下，勿恋虚华。守正待时，方为上策。"
    },
    {
        id: 39,
        name: "沉沦", // 下下
        level: SignLevel.BAD,
        poem: "暗礁藏险滩，\n独木渡惊湍。\n归帆迷远浦，\n随波任去还。",
        explanation: "此签为下下签。暗流汹涌，失去方向。处境危险，需随遇而安。",
        interpretation: "运势极差，诸事不顺。如入暗流，难以自主。",
        advice: "随遇而安，避祸为上。不可强求，当守且待。"
    },
    {
        id: 40,
        name: "月桂", // 中
        level: SignLevel.NORMAL,
        poem: "桂魄飘香夜，\n银辉满广庭。\n丹台星斗近，\n玉树露华明。",
        explanation: "此签为中签。月光清澈，桂香四溢。时运平稳，暗含机遇。",
        interpretation: "运势平和，渐有起色。如待月圆，终见光明。切忌急躁。",
        advice: "耐心等待，保持希望。机缘将至，需有准备。"
    },
    // 41-45
    {
        id: 41,
        name: "幽冥", // 下下
        level: SignLevel.BAD,
        poem: "寒烟迷古道，\n暮雨湿青苔。\n前路无光处，\n不如故径回。",
        explanation: "此签为下下签。幽谷昏暗，前路难明。处境至暗，需守静待变。",
        interpretation: "运势极低，诸事不顺。如入幽谷，难见光明。",
        advice: "守静为要，避祸为上。不可妄动，当思退守。"
    },
    {
        id: 42,
        name: "清芬", // 中
        level: SignLevel.NORMAL,
        poem: "绿竹含新雨，\n幽兰吐远芳。\n无人知淡泊，\n花落自芬芳。",
        explanation: "此签为中签。幽草暗香，自然天成。虽无显赫，却见真趣。",
        interpretation: "运势平稳，宜守旧业。无需强求，随缘而行。",
        advice: "安守本分，静待时机。不必羡慕他人，自有妙处。"
    },
    {
        id: 43,
        name: "和风", // 中
        level: SignLevel.NORMAL,
        poem: "东风拂山岳，\n细雨润芳苗。\n且待春光暖，\n枝头绿意饶。",
        explanation: "此签为中签。春风细雨，滋润万物。时运平和，渐有生机。",
        interpretation: "运势平稳，潜藏生机。虽无大利，却能安稳度日。",
        advice: "稳扎稳打，循序渐进。莫贪快速，当思根本。"
    },
    {
        id: 44,
        name: "涧石", // 中
        level: SignLevel.NORMAL,
        poem: "潭深藏碧玉，\n石老长青苔。\n且待春光到，\n峰头雪尽开。",
        explanation: "此签为中签。涧水流石，自成风景。虽处幽僻，却见真趣。",
        interpretation: "运势平平，宜守不宜进。安守本分，自有好处。",
        advice: "守正待时，勿急勿躁。机缘自至，不必强求。"
    },
    {
        id: 45,
        name: "烟萝", // 中
        level: SignLevel.NORMAL,
        poem: "远岭藏云雪，\n晴岚绕翠屏。\n长空看鸟度，\n终见月华明。",
        explanation: "此签为中签。烟雾缭绕，若隐若现。前路虽远，终有光明。",
        interpretation: "运势平稳，暂时蒙蔽。保持耐心，终见光明。",
        advice: "保持耐心，勿起妄念。时机未到，且安心守。"
    }
];

/**
 * Fisher-Yates 洗牌算法
 * @param {Array} array 要打乱的数组
 * @returns {Array} 打乱后的数组
 */
const shuffleArray = (array) => {
    const crypto = require('crypto');
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const randomBytes = crypto.randomBytes(4);
        const j = randomBytes.readUInt32BE(0) % (i + 1);
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};

/**
 * 获取随机签文
 * @param {string} clientId - 客户端标识（IP或会话ID）
 * @returns {Object} 随机签文对象
 */
const getRandomSign = (clientId = '') => {
    // 使用多个随机源
    const crypto = require('crypto');
    const now = new Date();
    
    // 组合多个随机因素
    const factors = [
        now.getTime().toString(),           // 当前时间戳
        clientId,                           // 客户端标识
        process.hrtime.bigint().toString(), // 高精度时间
        crypto.randomBytes(16).toString('hex') // 随机字节
    ].join('');
    
    // 生成种子
    const seed = crypto.createHash('sha256').update(factors).digest();
    
    // 使用种子生成随机数
    const randomNumber = seed.readBigUInt64BE(0);
    
    // 先打乱签文数组
    const shuffledSigns = shuffleArray(signs);
    
    // 使用随机数选择签文
    const index = Number(randomNumber % BigInt(shuffledSigns.length));
    
    return shuffledSigns[index];
};

/**
 * 根据ID获取签文
 * @param {string} id - 签文ID
 * @returns {Object|null} 签文对象
 */
const getSignById = (id) => {
    return signs.find(sign => sign.id === parseInt(id)) || null;
};

/**
 * 获取指定等级的签文
 * @param {string} level - 签文等级
 * @returns {Array} 签文列表
 */
const getSignsByLevel = (level) => {
    return signs.filter(sign => sign.level === level);
};

/**
 * 搜索签文
 * @param {string} keyword - 搜索关键词
 * @returns {Array} 签文列表
 */
const searchSigns = (keyword) => {
    if (!keyword) return [];
    const lowerKeyword = keyword.toLowerCase();
    return signs.filter(sign => 
        sign.name.toLowerCase().includes(lowerKeyword) ||
        sign.poem.toLowerCase().includes(lowerKeyword) ||
        sign.explanation.toLowerCase().includes(lowerKeyword)
    );
};

/**
 * 获取所有签文
 * @returns {Array} 签文列表
 */
const getAllSigns = () => {
    return [...signs];
};

module.exports = {
    SignLevel,
    getRandomSign,
    getSignById,
    getSignsByLevel,
    searchSigns,
    getAllSigns
}; 