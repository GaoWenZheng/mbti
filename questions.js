const mbtiQuestions_part1 = [
    [
      "在社交场合，你通常会？",
      ["独钓寒江雪", "柳宗元《江雪》", "I:0.9,T:0.8"],
      ["沉舟侧畔千帆过，病树前头万木春", "刘禹锡《酬乐天扬州初逢席上见赠》", "E:0.8,N:0.7"],
      ["曾经沧海难为水，除却巫山不是云", "元稹《离思五首》", "F:0.8,N:0.7"],
      ["随风潜入夜，润物细无声", "杜甫《春夜喜雨》", "I:0.8,F:0.7"]
    ],
    [
      "面对新的挑战时，你倾向于？",
      ["不畏浮云遮望眼，自缘身在最高层", "王安石《登飞来峰》", "N:0.8,T:0.7"],
      ["会当凌绝顶，一览众山小", "杜甫《望岳》", "E:0.9,J:0.8"],
      ["欲穷千里目，更上一层楼", "王之涣《登鹳雀楼》", "N:0.7,P:0.8"],
      ["宝剑锋从磨砺出，梅花香自苦寒来", "李商隐《杂纂》", "J:0.9,S:0.8"]
    ],
    [
      "在做决定时，你更重视？",
      ["问君能有几多愁，恰似一江春水向东流", "李煜《虞美人》", "F:0.9,N:0.8"],
      ["胡马依北风，越鸟巢南枝", "韦应物《淮上喜会梁州故人》", "T:0.8,S:0.7"],
      ["千里之行，始于足下", "老子《道德经》", "J:0.9,S:0.8"],
      ["蝴蝶飞来蝴蝶飞去，此间花花世界", "苏轼《春日》", "P:0.8,N:0.7"]
    ],
    [
      "在工作中，你更喜欢？",
      ["众里寻他千百度，蓦然回首，那人却在灯火阑珊处", "辛弃疾《青玉案》", "N:0.9,F:0.8"],
      ["衣带渐宽终不悔，为伊消得人憔悴", "柳永《凤栖梧》", "J:0.8,F:0.7"],
      ["落花人独立，微雨燕双飞", "晏殊《破阵子》", "I:0.8,P:0.7"],
      ["纸上得来终觉浅，绝知此事要躬行", "陆游《冬夜读书示子聿》", "S:0.9,J:0.8"]
    ],
    [
      "休闲时光，你更愿意？",
      ["采菊东篱下，悠然见南山", "陶渊明《饮酒》", "I:0.9,P:0.8"],
      ["大漠孤烟直，长河落日圆", "王维《使至塞上》", "N:0.8,I:0.7"],
      ["且将新火试新茶，诗酒趁年华", "苏轼《望江南》", "E:0.8,P:0.7"],
      ["醉翁之意不在酒，在乎山水之间也", "欧阳修《醉翁亭记》", "N:0.7,F:0.8"]
    ],
    [
      "面对矛盾时，你通常会？",
      ["横看成岭侧成峰，远近高低各不同", "苏轼《题西林壁》", "P:0.8,F:0.7"],
      ["人生自古谁无死，留取丹心照汗青", "文天祥《过零丁洋》", "T:0.9,J:0.8"],
      ["寻寻觅觅，冷冷清清，凄凄惨惨戚戚", "李清照《声声慢》", "F:0.9,N:0.8"],
      ["粗缯大布裹生涯，腹有诗书气自华", "苏轼《和董传留别》", "T:0.8,I:0.7"]
    ],
    [
      "在人际交往中，你更倾向于？",
      ["海内存知己，天涯若比邻", "王勃《送杜少府之任蜀州》", "E:0.9,F:0.8"],
      ["举杯邀明月，对影成三人", "李白《月下独酌》", "I:0.8,N:0.7"],
      ["桃花潭水深千尺，不及汪伦送我情", "李白《赠汪伦》", "F:0.9,E:0.8"],
      ["相逢何必曾相识", "刘禹锡《石头城》", "T:0.8,I:0.7"]
    ],
    [
      "处理任务时，你习惯？",
      ["不识庐山真面目，只缘身在此山中", "苏轼《题西林壁》", "N:0.9,P:0.8"],
      ["千淘万漉虽辛苦，吹尽狂沙始到金", "刘禹锡《浪淘沙》", "J:0.9,S:0.8"],
      ["乱石穿空，惊涛拍岸", "苏轼《赤壁赋》", "N:0.8,P:0.7"],
      ["事了拂衣去，深藏功与名", "陶渊明《归去来兮辞》", "I:0.8,T:0.7"]
    ],
    [
      "对于规则和计划，你的态度是？",
      ["行云流水，天涯任我游", "李白《行路难》", "P:0.9,N:0.8"],
      ["逆水行舟，不进则退", "荀子《劝学》", "J:0.9,T:0.8"],
      ["莫听穿林打叶声，何妨吟啸且徐行", "王维《竹里馆》", "P:0.8,F:0.7"],
      ["不以规矩，不能成方圆", "《孟子》", "J:0.9,S:0.8"]
    ],
    [
      "在面对压力时，你会？",
      ["长风破浪会有时，直挂云帆济沧海", "李白《行路难》", "N:0.9,E:0.8"],
      ["宁静致远", "诸葛亮《诫子书》", "I:0.8,J:0.7"],
      ["一蓑烟雨任平生", "苏轼《定风波》", "P:0.9,F:0.8"],
      ["不以物喜，不以己悲", "范仲淹《岳阳楼记》", "T:0.9,J:0.8"]
    ]
  ];
  const mbtiQuestions_part2 = [
    [
      "在追求理想时，你更倾向于？",
      ["路漫漫其修远兮，吾将上下而求索", "屈原《离骚》", "N:0.9,J:0.8"],
      ["功名富贵若长在，汉水亦应西北流", "杜甫《咏怀古迹》", "T:0.8,S:0.7"],
      ["晴空一鹤排云上，便引诗情到碧霄", "刘禹锡《送李中丞归汉阳别业》", "N:0.9,F:0.8"],
      ["志不强者智不达", "诸葛亮《诫子书》", "J:0.9,T:0.8"]
    ],
    [
      "处理问题时，你习惯？",
      ["山重水复疑无路，柳暗花明又一村", "陆游《游山西村》", "N:0.8,P:0.7"],
      ["业精于勤，荒于嬉", "韩愈《进学解》", "J:0.9,S:0.8"],
      ["望天门山，天门中断楚江开", "李白《望天门山》", "N:0.8,P:0.7"],
      ["不畏严寒苦，开花结新实", "陆游《冬夜读书示子聿》", "J:0.8,S:0.7"]
    ],
    [
      "在生活态度上，你更认同？",
      ["梅须逊雪三分白，雪却输梅一段香", "卢梅坡《雪梅》", "F:0.8,N:0.7"],
      ["宁可枝头抱香死，何曾吹落北风中", "郑思肖《画菊》", "T:0.9,J:0.8"],
      ["人间有味是清欢", "苏轼《浣溪沙》", "F:0.8,P:0.7"],
      ["醉里挑灯看剑，梦回吹角连营", "辛弃疾《破阵子》", "N:0.8,T:0.7"]
    ],
    [
      "在团队合作中，你更看重？",
      ["同是天涯沦落人，相逢何必曾相识", "白居易《琵琶行》", "F:0.9,E:0.8"],
      ["尽道隋堤杨柳好，却道胜过北堤杨", "韩愈《春雪》", "T:0.8,S:0.7"],
      ["碧玉妆成一树高，万条垂下绿丝绦", "贺知章《咏柳》", "N:0.8,F:0.7"],
      ["荣辱不惊，闲看庭前花开花落", "佚名《修行》", "T:0.9,I:0.8"]
    ],
    [
      "面对变化时，你通常会？",
      ["旧时王谢堂前燕，飞入寻常百姓家", "刘禹锡《金陵五题·台城》", "P:0.8,S:0.7"],
      ["泪眼问花花不语，乱红飞过秋千去", "欧阳修《蝶恋花》", "F:0.9,N:0.8"],
      ["物来顺应，未来不迎，当时不杂，既过不恋", "丹山《静坐常思己过》", "P:0.9,T:0.8"],
      ["天下事有难易乎？为之，则难者亦易矣", "彭端淑《为学》", "J:0.8,T:0.7"]
    ],
    [
      "在处理细节时，你倾向于？",
      ["蜗角虚名，蝇头微利", "苏轼《赤壁赋》", "N:0.9,P:0.8"],
      ["事非经过不知难，成如容易却艰辛", "韩愈《石鼓歌》", "S:0.9,J:0.8"],
      ["缺月挂疏桐，漏断人初静", "李商隐《夜雨寄北》", "N:0.8,F:0.7"],
      ["大道至简，大器晚成", "老子《道德经》", "N:0.8,P:0.7"]
    ],
    [
      "在做选择时，你更看重？",
      ["兴尽晚回舟，误入藕花深处", "杨万里《小池》", "P:0.8,F:0.7"],
      ["风萧萧兮易水寒，壮士一去兮不复还", "《战国策》", "T:0.9,J:0.8"],
      ["月上柳梢头，人约黄昏后", "欧阳修《生查子》", "F:0.8,N:0.7"],
      ["人生自是有情痴，此恨不关风与月", "欧阳修《玉楼春》", "F:0.9,N:0.8"]
    ],
    [
      "在接受新事物时，你会？",
      ["莫等闲，白了少年头，空悲切", "岳飞《满江红》", "J:0.8,S:0.7"],
      ["问渠那得清如许，为有源头活水来", "朱熹《观书有感》", "N:0.9,P:0.8"],
      ["桃花春色暖先开，明媚谁人不看来", "王安石《桃花》", "E:0.8,F:0.7"],
      ["读书破万卷，下笔如有神", "杜甫《奉赠韦左丞丈二十二韵》", "J:0.9,T:0.8"]
    ],
    [
      "在表达方式上，你更倾向于？",
      ["此情无计可消除，才下眉头，却上心头", "李清照《一剪梅》", "F:0.9,N:0.8"],
      ["羌笛何须怨杨柳，春风不度玉门关", "王之涣《凉州词》", "T:0.8,S:0.7"],
      ["千山鸟飞绝，万径人踪灭", "柳宗元《江雪》", "I:0.9,T:0.8"],
      ["无可奈何花落去，似曾相识燕归来", "晏殊《浣溪沙》", "F:0.8,N:0.7"]
    ],
    [
      "在处理矛盾时，你会？",
      ["东风无力百花残", "李商隐《春雨》", "F:0.8,P:0.7"],
      ["位卑未敢忘忧国，事定犹须待阖棺", "陆游《病起书怀》", "T:0.9,J:0.8"],
      ["小楼昨夜又东风，故国不堪回首月明中", "李商隐《锦瑟》", "F:0.9,N:0.8"],
      ["宁鸣而死，不默而生", "司马迁《报任安书》", "T:0.9,J:0.8"]
    ]
  ];
  const mbtiQuestions_part3 = [
    [
      "在面对困境时，你会？",
      ["山回路转不见君，雪上空留马行处", "岑参《白雪歌送武判官归京》", "I:0.8,N:0.7"],
      ["天生我材必有用，千金散尽还复来", "李白《将进酒》", "E:0.9,P:0.8"],
      ["绿树阴浓夏日长，楼台倒影入池塘", "高骈《山亭夏日》", "P:0.8,F:0.7"],
      ["咬定青山不放松，立根原在破岩中", "郑燮《竹石》", "J:0.9,T:0.8"]
    ],
    [
      "在学习新知识时，你偏好？",
      ["少年易学老难成，一寸光阴不可轻", "朱熹《劝学诗》", "J:0.9,S:0.8"],
      ["远看山有色，近听水无声", "王维《画》", "N:0.8,P:0.7"],
      ["纸上学来终觉浅，绝知此事要躬行", "陆游《冬夜读书示子聿》", "S:0.9,J:0.8"],
      ["学然后知不足，教然后知困", "《礼记》", "N:0.8,T:0.7"]
    ],
    [
      "在人生目标上，你更看重？",
      ["安得广厦千万间，大庇天下寒士俱欢颜", "杜甫《茅屋为秋风所破歌》", "F:0.9,E:0.8"],
      ["一年明月今宵多，人生由命非由他", "苏轼《临江仙》", "T:0.8,P:0.7"],
      ["采菊东篱下，悠然见南山", "陶渊明《饮酒》", "I:0.9,P:0.8"],
      ["位卑未敢忘忧国", "陆游《夜泊船》", "J:0.9,T:0.8"]
    ],
    [
      "在处理关系时，你倾向于？",
      ["无情无意草木春", "李贺《金铜仙人辞汉歌》", "T:0.9,I:0.8"],
      ["相逢一笑泯恩仇", "李白《赠汪伦》", "F:0.8,E:0.7"],
      ["人生如逆旅，我亦是行人", "苏轼《临江仙》", "I:0.8,N:0.7"],
      ["落红不是无情物，化作春泥更护花", "龚自珍《己亥杂诗》", "F:0.9,N:0.8"]
    ],
    [
      "在做计划时，你通常会？",
      ["昨夜西风凋碧树，独上高楼，望尽天涯路", "晏殊《蝶恋花》", "N:0.8,I:0.7"],
      ["衣带渐宽终不悔，为伊消得人憔悴", "柳永《蝶恋花》", "F:0.9,J:0.8"],
      ["长风万里送秋雁，对此可以酣高楼", "李白《宣州谢朓楼饯别校书叔云》", "N:0.8,P:0.7"],
      ["积土成山，风雨兴焉", "荀子《劝学》", "J:0.9,S:0.8"]
    ],
    [
      "在处理压力时，你会选择？",
      ["千里莺啼绿映红，水村山郭酒旗风", "杜牧《江南春》", "P:0.8,F:0.7"],
      ["宝剑锋从磨砺出，梅花香自苦寒来", "佚名《勉励》", "J:0.9,T:0.8"],
      ["独坐幽篁里，弹琴复长啸", "王维《竹里馆》", "I:0.9,F:0.8"],
      ["不以物喜，不以己悲", "范仲淹《岳阳楼记》", "T:0.9,J:0.8"]
    ],
    [
      "在表达观点时，你更倾向于？",
      ["人生如梦，一樽还酹江月", "苏轼《念奴娇·赤壁怀古》", "F:0.8,N:0.7"],
      ["雨打梨花深闭门，忘了青春，误了青春", "冯延巳《长命女》", "I:0.8,F:0.7"],
      ["庾信平生最萧瑟，暮年详复强登临", "杜甫《登高》", "I:0.7,N:0.8"],
      ["人生自是有情痴，此恨不关风与月", "欧阳修《玉楼春》", "F:0.9,N:0.8"]
    ],
    [
      "在解决问题时，你更看重？",
      ["落花人独立，微雨燕双飞", "晏殊《破阵子》", "I:0.8,F:0.7"],
      ["众里寻他千百度", "辛弃疾《青玉案》", "N:0.9,F:0.8"],
      ["大江东去，浪淘尽，千古风流人物", "苏轼《念奴娇·赤壁怀古》", "N:0.8,T:0.7"],
      ["问渠那得清如许，为有源头活水来", "朱熹《观书有感》", "T:0.9,J:0.8"]
    ],
    [
      "在工作态度上，你更认同？",
      ["春风得意马蹄疾，一日看尽长安花", "孟郊《登科后》", "P:0.8,E:0.7"],
      ["一寸光阴一寸金，寸金难买寸光阴", "《增广贤文》", "J:0.9,S:0.8"],
      ["桃花坞里桃花庵，桃花庵下桃花仙", "唐寅《桃花庵歌》", "P:0.8,N:0.7"],
      ["板上钉钉，直上青云", "《增广贤文》", "J:0.9,T:0.8"]
    ],
    [
      "在处理变化时，你会？",
      ["夜阑卧听风吹雨，铁马冰河入梦来", "陆游《十一月四日风雨大作》", "N:0.8,I:0.7"],
      ["浮云一别后，流水十年间", "韦应物《淮上喜会梁州故人》", "P:0.8,F:0.7"],
      ["莫愁前路无知己，天下谁人不识君", "高适《别董大》", "E:0.9,F:0.8"],
      ["不识庐山真面目，只缘身在此山中", "苏轼《题西林壁》", "N:0.9,P:0.8"]
    ]
  ];
  const mbtiQuestions_part4 = [
    [
      "在待人处事时，你更倾向于？",
      ["海内存知己，天涯若比邻", "王勃《送杜少府之任蜀州》", "F:0.9,E:0.8"],
      ["不畏浮云遮望眼，自缘身在最高层", "王安石《登飞来峰》", "T:0.8,J:0.7"],
      ["江山故人何日见，犹是深闺梦里人", "李益《江南曲》", "I:0.9,F:0.8"],
      ["长风破浪会有时，直挂云帆济沧海", "李白《行路难》", "E:0.9,N:0.8"]
    ],
    [
      "在面对挑战时，你会？",
      ["会当凌绝顶，一览众山小", "杜甫《望岳》", "N:0.8,T:0.7"],
      ["欲穷千里目，更上一层楼", "王之涣《登鹳雀楼》", "J:0.9,N:0.8"],
      ["采菊东篱下，悠然见南山", "陶渊明《饮酒》", "P:0.8,I:0.7"],
      ["不经一番寒彻骨，怎得梅花扑鼻香", "黄槐《上元》", "J:0.9,S:0.8"]
    ],
    [
      "在生活态度上，你更认同？",
      ["人间万事消磨尽，只有清香似旧时", "王气《桂花》", "F:0.8,N:0.7"],
      ["沉舟侧畔千帆过，病树前头万木春", "刘禹锡《酬乐天扬州初逢席上见赠》", "P:0.9,N:0.8"],
      ["寂寞空庭春欲晚，梨花满地不开门", "刘方平《春怨》", "I:0.8,F:0.7"],
      ["众鸟高飞尽，孤云独去闲", "柳宗元《江雪》", "I:0.9,T:0.8"]
    ],
    [
      "在处理问题时，你习惯？",
      ["粉骨碎身浑不怕，要留清白在人间", "于谦《石灰吟》", "T:0.9,J:0.8"],
      ["一蓑烟雨任平生", "苏轼《定风波》", "P:0.8,F:0.7"],
      ["千淘万漉虽辛苦，吹尽狂沙始到金", "刘禹锡《浪淘沙》", "J:0.9,S:0.8"],
      ["桃李春风一杯酒，江湖夜雨十年灯", "黄庭坚《寄黄几复》", "N:0.8,F:0.7"]
    ],
    [
      "在做决定时，你更看重？",
      ["仰天大笑出门去，我辈岂是蓬蒿人", "李白《南陵别儿童入京》", "E:0.9,N:0.8"],
      ["寻寻觅觅，冷冷清清，凄凄惨惨戚戚", "李清照《声声慢》", "F:0.8,S:0.7"],
      ["千里之行，始于足下", "老子《道德经》", "J:0.9,S:0.8"],
      ["万事俱备，只欠东风", "周邦彦《满庭芳》", "P:0.8,N:0.7"]
    ],
    [
      "在人际交往中，你更倾向于？",
      ["莫愁前路无知己，天下谁人不识君", "高适《别董大》", "E:0.9,F:0.8"],
      ["独钓寒江雪", "柳宗元《江雪》", "I:0.9,T:0.8"],
      ["人言落日是天涯，望极天涯不见家", "李觏《乡思》", "I:0.8,F:0.7"],
      ["欲把西湖比西子，淡妆浓抹总相宜", "苏轼《饮湖上初晴后雨》", "F:0.9,N:0.8"]
    ],
    [
      "在追求目标时，你会？",
      ["大鹏一日同风起，扶摇直上九万里", "李白《上李邕》", "N:0.9,P:0.8"],
      ["移舟泊烟渚，日暮客愁新", "王维《江汉》", "I:0.8,F:0.7"],
      ["锲而不舍，金石可镂", "《荀子》", "J:0.9,S:0.8"],
      ["会当水击三千里，终师五万雄兵", "辛弃疾《水调歌头》", "T:0.8,J:0.7"]
    ],
    [
      "在表达感情时，你更习惯？",
      ["此情可待成追忆，只是当时已惘然", "李商隐《锦瑟》", "F:0.9,N:0.8"],
      ["人生若只如初见，何事秋风悲画扇", "纳兰性德《木兰词》", "F:0.8,N:0.7"],
      ["举杯邀明月，对影成三人", "李白《月下独酌》", "I:0.9,F:0.8"],
      ["两情若是久长时，又岂在朝朝暮暮", "秦观《鹊桥仙》", "F:0.9,N:0.8"]
    ],
    [
      "在工作方式上，你更倾向于？",
      ["不惜歌者苦，但伤知音稀", "李贺《将进酒》", "F:0.8,I:0.7"],
      ["蜀道之难，难于上青天", "李白《蜀道难》", "S:0.9,J:0.8"],
      ["策马踏歌，梦绕巫山几段云", "苏轼《水调歌头》", "N:0.8,P:0.7"],
      ["衣带渐宽终不悔，为伊消得人憔悴", "柳永《蝶恋花》", "F:0.9,J:0.8"]
    ],
    [
      "在处理压力时，你会选择？",
      ["寒风吹度玉门关，马毛带雪汗气干", "李贺《雁门太守行》", "T:0.8,S:0.7"],
      ["莫听穿林打叶声，何妨吟啸且徐行", "王维《山居秋暝》", "P:0.9,F:0.8"],
      ["春蚕到死丝方尽，蜡炬成灰泪始干", "李商隐《无题》", "F:0.8,J:0.7"],
      ["一任群芳妒，总把春风占", "薛涛《春望词》", "T:0.9,N:0.8"]
    ]
  ];
  const mbtiQuestions_part5 = [
    [
      "在面对未知时，你会？",
      ["山重水复疑无路，柳暗花明又一村", "陆游《游山西村》", "N:0.9,P:0.8"],
      ["独立寒秋，湘江北去，橘子洲头", "毛泽东《沁园春·长沙》", "I:0.8,T:0.7"],
      ["泉眼无声惜细流，树阴照水爱晴柔", "杨万里《小池》", "S:0.8,F:0.7"],
      ["不到长城非好汉", "毛泽东《清平乐·六盘山》", "J:0.9,T:0.8"]
    ],
    [
      "在处理矛盾时，你倾向于？",
      ["横眉冷对千夫指，俯首甘为孺子牛", "鲁迅《自嘲》", "T:0.9,J:0.8"],
      ["春色满园关不住，一枝红杏出墙来", "叶绍翁《游园不值》", "P:0.8,N:0.7"],
      ["枕上诗书闲处好，门前风景雨来佳", "李清照《摊破浣溪沙》", "I:0.9,F:0.8"],
      ["但愿人长久，千里共婵娟", "苏轼《水调歌头》", "F:0.9,N:0.8"]
    ],
    [
      "在追求理想时，你更看重？",
      ["功名富贵若长在，汉水亦应西北流", "张若虚《春江花月夜》", "T:0.8,J:0.7"],
      ["醉后不知天在水，满船清梦压星河", "唐温如《题龙阳县青草湖》", "N:0.9,F:0.8"],
      ["独钓寒江雪，孤舟蓑笠翁", "柳宗元《江雪》", "I:0.9,T:0.8"],
      ["会当击水三千里，组取沙场万里侯", "辛弃疾《破阵子》", "E:0.8,J:0.7"]
    ],
    [
      "在生活节奏上，你更偏好？",
      ["闲看庭前花开花落，漫随天外云卷云舒", "陈与义《临江仙》", "P:0.9,I:0.8"],
      ["乱花渐欲迷人眼，浅草才能没马蹄", "白居易《钱塘湖春行》", "N:0.8,P:0.7"],
      ["欲速则不达，见小利则不明", "《论语》", "J:0.9,S:0.8"],
      ["老骥伏枥，志在千里", "曹操《龟虽寿》", "J:0.8,T:0.7"]
    ],
    [
      "在表达方式上，你更习惯？",
      ["寻寻觅觅，冷冷清清，凄凄惨惨戚戚", "李清照《声声慢》", "F:0.9,I:0.8"],
      ["大漠孤烟直，长河落日圆", "王维《使至塞上》", "T:0.8,S:0.7"],
      ["笑问客从何处来，吴江水暖送春回", "张志和《渔歌子》", "E:0.9,F:0.8"],
      ["青山遮不住，毕竟东流去", "辛弃疾《菩萨蛮》", "N:0.8,T:0.7"]
    ],
    [
      "在处理细节时，你会？",
      ["细雨鱼儿出，微风燕子斜", "范成大《summer日》", "S:0.9,F:0.8"],
      ["千里之行，始于足下", "老子《道德经》", "J:0.8,S:0.7"],
      ["不畏浮云遮望眼，自缘身在最高层", "王安石《登飞来峰》", "N:0.9,T:0.8"],
      ["蜻蜓点水蓼花边，青荇浮波白鹭闲", "杨万里《summer晓》", "P:0.8,N:0.7"]
    ],
    [
      "在团队合作中，你更倾向于？",
      ["独学而无友，则孤陋而寡闻", "《礼记》", "E:0.9,F:0.8"],
      ["千磨万击还坚劲，任尔东西南北风", "郑燮《竹石》", "I:0.8,T:0.7"],
      ["同是天涯沦落人，相逢何必曾相识", "白居易《琵琶行》", "F:0.9,N:0.8"],
      ["人心齐，泰山移", "《古谚》", "E:0.8,J:0.7"]
    ],
    [
      "在解决困难时，你会？",
      ["路漫漫其修远兮，吾将上下而求索", "屈原《离骚》", "N:0.9,J:0.8"],
      ["沧海月明珠有泪，蓝田日暖玉生烟", "李商隐《锦瑟》", "F:0.8,N:0.7"],
      ["宝剑锋从磨砺出，梅花香自苦寒来", "佚名《勉励》", "J:0.9,T:0.8"],
      ["日暖青云净，春风花草香", "杜甫《春日忆李白》", "P:0.8,F:0.7"]
    ],
    [
      "在做计划时，你通常会？",
      ["不识庐山真面目，只缘身在此山中", "苏轼《题西林壁》", "N:0.9,P:0.8"],
      ["众鸟高飞尽，孤云独去闲", "柳宗元《江雪》", "I:0.8,T:0.7"],
      ["纸上得来终觉浅，绝知此事要躬行", "陆游《冬夜读书示子聿》", "S:0.9,J:0.8"],
      ["欲把西湖比西子，淡妆浓抹总相宜", "苏轼《饮湖上初晴后雨》", "F:0.8,N:0.7"]
    ],
    [
      "在面对改变时，你会？",
      ["物是人非事事休，欲语泪先流", "李清照《武陵春》", "F:0.9,S:0.8"],
      ["逝者如斯夫，不舍昼夜", "孔子《论语》", "N:0.8,T:0.7"],
      ["苟日新，日日新，又日新", "《大学》", "J:0.9,N:0.8"],
      ["野火烧不尽，春风吹又生", "白居易《赋得古原草送别》", "P:0.8,N:0.7"]
    ]
  ];
  // 第一组10道测试题
const mbtiQuestions_set1 = [
    [
      "在人生重要抉择时，你会如何决定？",
      ["路漫漫其修远兮，吾将上下而求索", "屈原《离骚》", "N:0.8,J:0.7"],
      ["宁静致远", "诸葛亮《诫子书》", "I:0.9,T:0.8"],
      ["人生自是有情痴，此恨不关风与月", "欧阳修《玉楼春》", "F:0.9,P:0.7"],
      ["博观而约取，厚积而薄发", "苏轼《稼说送张琥》", "T:0.8,J:0.9"]
    ],
    [
      "面对新环境时，你通常会？",
      ["潮落夜江斜月里，两三星火是瓜州", "王安石《泊船瓜洲》", "I:0.8,N:0.7"],
      ["商女不知亡国恨，隔江犹唱后庭花", "杜牧《泊秦淮》", "E:0.9,F:0.8"],
      ["芳草萋萋鹦鹉洲，日暮乡关何处是", "白居易《暮江吟》", "N:0.7,F:0.8"],
      ["垂柳岸边绕，青山郭外围", "许浑《秋日赴阙题潼关驿楼》", "S:0.9,J:0.7"]
    ],
    [
      "处理复杂任务时，你倾向于？",
      ["众里寻他千百度，蓦然回首，那人却在灯火阑珊处", "辛弃疾《青玉案》", "N:0.9,P:0.8"],
      ["少年易学老难成，一寸光阴不可轻", "朱熹《劝学诗》", "J:0.9,S:0.8"],
      ["柳暗花明又一村", "陆游《游山西村》", "P:0.8,N:0.7"],
      ["吟安一个字，捻断数茎须", "苏轼《和董传留别》", "T:0.9,J:0.8"]
    ],
    [
      "在团队合作中，你更重视？",
      ["海内存知己，天涯若比邻", "王勃《送杜少府之任蜀州》", "E:0.9,F:0.8"],
      ["独坐幽篁里，弹琴复长啸", "王维《竹里馆》", "I:0.8,T:0.7"],
      ["同舟共济", "《尚书》", "E:0.8,T:0.9"],
      ["举头望明月，低头思故乡", "李白《静夜思》", "I:0.7,F:0.9"]
    ],
    [
      "对于创新和改变，你的态度是？",
      ["旧时王谢堂前燕，飞入寻常百姓家", "刘禹锡《金陵五题》", "N:0.8,P:0.7"],
      ["君子之交淡如水", "庄子《山木》", "T:0.9,I:0.8"],
      ["时光只解催人老，不信多情，长恨离亭", "晏殊《采桑子》", "F:0.9,S:0.7"],
      ["积土成山，风雨兴焉", "荀子《劝学》", "J:0.9,S:0.8"]
    ],
    [
      "遇到挫折时，你会？",
      ["采菊东篱下，悠然见南山", "陶渊明《饮酒》", "I:0.9,P:0.8"],
      ["路漫漫其修远兮，吾将上下而求索", "屈原《离骚》", "N:0.8,J:0.7"],
      ["天生我材必有用，千金散尽还复来", "李白《将进酒》", "E:0.9,P:0.8"],
      ["莫听穿林打叶声，何妨吟啸且徐行", "王维《竹里馆》", "I:0.7,F:0.8"]
    ],
    [
      "在追求目标时，你更看重？",
      ["衣带渐宽终不悔，为伊消得人憔悴", "柳永《蝶恋花》", "F:0.9,J:0.8"],
      ["黄河之水天上来，奔流到海不复回", "李白《将进酒》", "N:0.8,P:0.7"],
      ["安得广厦千万间，大庇天下寒士俱欢颜", "杜甫《茅屋为秋风所破歌》", "F:0.9,E:0.8"],
      ["业精于勤，荒于嬉", "韩愈《进学解》", "J:0.9,T:0.8"]
    ],
    [
      "在休闲时光，你更喜欢？",
      ["闲看庭前花开花落，漫随天外云卷云舒", "陈与义《临江仙》", "P:0.9,I:0.8"],
      ["明月松间照，清泉石上流", "王维《山居秋暝》", "I:0.8,S:0.7"],
      ["一觞一咏亦足乐", "欧阳修《与梦得沙随处见余》", "E:0.9,F:0.8"],
      ["读书破万卷，下笔如有神", "杜甫《奉赠韦左丞丈二十二韵》", "I:0.7,J:0.9"]
    ],
    [
      "处理人际关系时，你倾向于？",
      ["桃李春风一杯酒，江湖夜雨十年灯", "黄庭坚《寄黄几复》", "F:0.9,N:0.8"],
      ["纸上得来终觉浅，绝知此事要躬行", "陆游《冬夜读书示子聿》", "T:0.8,S:0.9"],
      ["人面不知何处去，桃花依旧笑春风", "崔护《题都城南庄》", "I:0.9,F:0.7"],
      ["青山遮不住，毕竟东流去", "辛弃疾《菩萨蛮》", "N:0.8,P:0.7"]
    ],
    [
      "面对压力时，你会？",
      ["采菊东篱下，悠然见南山", "陶渊明《饮酒》", "I:0.9,P:0.8"],
      ["不以物喜，不以己悲", "范仲淹《岳阳楼记》", "T:0.9,J:0.8"],
      ["春风得意马蹄疾，一日看尽长安花", "孟郊《登科后》", "E:0.8,P:0.7"],
      ["宝剑锋从磨砺出，梅花香自苦寒来", "佚名《勉励》", "J:0.9,T:0.8"]
    ]
  ];
  // 第二组10道测试题
const mbtiQuestions_set2 = [
    [
      "在学习新知识时，你倾向于？",
      ["纸上谈兵终觉浅，须知此事要躬行", "陆游《冬夜读书示子聿》", "S:0.9,J:0.8"],
      ["问渠那得清如许，为有源头活水来", "朱熹《观书有感》", "N:0.8,T:0.7"],
      ["横看成岭侧成峰，远近高低各不同", "苏轼《题西林壁》", "N:0.9,P:0.8"],
      ["学而不思则罔，思而不学则殆", "《论语》", "T:0.8,J:0.9"]
    ],
    [
      "在表达观点时，你会？",
      ["曲终人不见，江上数峰青", "王维《送别》", "I:0.9,F:0.8"],
      ["会当凌绝顶，一览众山小", "杜甫《望岳》", "E:0.8,T:0.9"],
      ["此情可待成追忆，只是当时已惘然", "李商隐《锦瑟》", "F:0.9,N:0.8"],
      ["大道至简，大器晚成", "老子《道德经》", "T:0.8,J:0.7"]
    ],
    [
      "规划未来时，你更看重？",
      ["莫愁前路无知己，天下谁人不识君", "高适《别董大》", "E:0.9,F:0.8"],
      ["静以修身，俭以养德", "诸葛亮《诫子书》", "I:0.8,J:0.9"],
      ["浮云一别后，流水十年间", "韦应物《淮上喜会梁州故人》", "N:0.8,P:0.7"],
      ["居庙堂之高则忧其民，处江湖之远则忧其君", "范仲淹《岳阳楼记》", "T:0.9,J:0.8"]
    ],
    [
      "处理日常事务时，你习惯？",
      ["不畏浮云遮望眼，自缘身在最高层", "王安石《登飞来峰》", "N:0.8,T:0.9"],
      ["欲把西湖比西子，淡妆浓抹总相宜", "苏轼《饮湖上初晴后雨》", "F:0.9,P:0.8"],
      ["小桥流水人家", "白居易《暮江吟》", "S:0.8,P:0.7"],
      ["千磨万击还坚劲，任尔东西南北风", "郑燮《竹石》", "T:0.9,J:0.8"]
    ],
    [
      "面对挑战时，你会？",
      ["长风破浪会有时，直挂云帆济沧海", "李白《行路难》", "N:0.9,E:0.8"],
      ["宁可枝头抱香死，何曾吹落北风中", "郑思肖《画菊》", "T:0.8,J:0.9"],
      ["不经一番寒彻骨，怎得梅花扑鼻香", "黄梨《上元》", "S:0.8,J:0.7"],
      ["乱花渐欲迷人眼，浅草才能没马蹄", "白居易《钱塘湖春行》", "N:0.7,P:0.8"]
    ],
    [
      "在团队协作中，你更重视？",
      ["独学而无友，则孤陋而寡闻", "《礼记》", "E:0.9,T:0.8"],
      ["谁家玉笛暗飞声，散入春风满洛城", "李白《春夜洛城闻笛》", "I:0.8,F:0.7"],
      ["人心齐，泰山移", "《古谚》", "E:0.8,J:0.9"],
      ["千里共婵娟", "苏轼《水调歌头》", "F:0.9,N:0.8"]
    ],
    [
      "在做决定时，你依据？",
      ["莫等闲，白了少年头，空悲切", "岳飞《满江红》", "J:0.9,T:0.8"],
      ["缘溪行，忘路之远近", "陶渊明《归去来兮辞》", "P:0.8,N:0.7"],
      ["行到水穷处，坐看云起时", "王维《终南别业》", "I:0.7,P:0.8"],
      ["世事洞明皆学问，人情练达即文章", "曾国藩《治家格言》", "T:0.9,S:0.8"]
    ],
    [
      "追求梦想时，你会？",
      ["蜀道之难，难于上青天", "李白《蜀道难》", "T:0.8,J:0.9"],
      ["醉里挑灯看剑，梦回吹角连营", "辛弃疾《破阵子》", "N:0.9,F:0.8"],
      ["但愿人长久，千里共婵娟", "苏轼《水调歌头》", "F:0.9,N:0.7"],
      ["志当存高远", "诸葛亮《诫子书》", "N:0.8,J:0.9"]
    ],
    [
      "处理感情时，你倾向于？",
      ["两情若是久长时，又岂在朝朝暮暮", "秦观《鹊桥仙》", "N:0.8,F:0.9"],
      ["似此星辰非昨夜，为谁风露立中宵", "黄景仁《绮怀》", "I:0.7,F:0.8"],
      ["人生自古谁无死，留取丹心照汗青", "文天祥《过零丁洋》", "T:0.9,J:0.8"],
      ["物是人非事事休，欲语泪先流", "李清照《武陵春》", "F:0.9,S:0.7"]
    ],
    [
      "享受生活时，你会？",
      ["一蓑烟雨任平生", "苏轼《定风波》", "P:0.9,I:0.8"],
      ["人间有味是清欢", "苏轼《浣溪沙》", "F:0.8,P:0.7"],
      ["停杯投箸不能食，拔剑四顾心茫然", "李白《行路难》", "F:0.9,N:0.8"],
      ["白日依山尽，黄河入海流", "王之涣《登鹳雀楼》", "S:0.8,T:0.7"]
    ]
  ];
  // 第三组10道测试题
const mbtiQuestions_set3 = [
    [
      "在解决问题时，你习惯？",
      ["不畏浮云遮望眼，只缘身在最高层", "司马光《登鹳雀楼》", "T:0.9,J:0.8"],
      ["东边日出西边雨，道是无晴还有晴", "刘禹锡《竹枝词》", "P:0.8,N:0.7"],
      ["水落石出", "《史记》", "S:0.9,T:0.8"],
      ["闲来垂钓碧溪上，忽复乘舟梦日边", "李白《山中与幽人对酌》", "I:0.8,P:0.7"]
    ],
    [
      "面对变化时，你会？",
      ["逝者如斯夫，不舍昼夜", "《论语》", "N:0.8,P:0.7"],
      ["零落成泥碾作尘，只有香如故", "元稹《菊花》", "F:0.9,S:0.8"],
      ["苟日新，日日新，又日新", "《大学》", "J:0.9,N:0.8"],
      ["世事一场大梦，人生几度秋凉", "苏轼《西江月》", "N:0.8,F:0.7"]
    ],
    [
      "与人相处时，你更注重？",
      ["文质彬彬，然后君子", "《论语》", "T:0.8,J:0.9"],
      ["随风潜入夜，润物细无声", "杜甫《春夜喜雨》", "I:0.9,F:0.8"],
      ["青山横北郭，白水绕东城", "严维《送李少府贬峡中王少府贬长沙》", "S:0.8,P:0.7"],
      ["九万里风鹏正举", "李白《上李邕》", "E:0.9,N:0.8"]
    ],
    [
      "在工作中，你更看重？",
      ["不要人夸好颜色，只留清气满乾坤", "王冕《墨梅》", "T:0.9,I:0.8"],
      ["功成不必在我，建业事必有后", "《诫子书》", "F:0.8,J:0.7"],
      ["梅须逊雪三分白，雪却输梅一段香", "卢梅坡《雪梅》", "N:0.9,F:0.8"],
      ["板凳要坐十年冷，文章不写一句空", "卢梅坡《诗品》", "J:0.9,S:0.8"]
    ],
    [
      "追求理想时，你觉得？",
      ["落红不是无情物，化作春泥更护花", "龚自珍《己亥杂诗》", "F:0.9,N:0.8"],
      ["穷且益坚，不坠青云之志", "王勃《滕王阁序》", "T:0.8,J:0.9"],
      ["风萧萧兮易水寒，壮士一去兮不复还", "《战国策》", "N:0.9,T:0.8"],
      ["采菊南山下，悠然见南山", "陶渊明《饮酒》", "I:0.8,P:0.7"]
    ],
    [
      "处理压力时，你会？",
      ["茅檐长扫净无苔，花木成畦手自栽", "白居易《槐树》", "S:0.9,J:0.8"],
      ["寻寻觅觅，冷冷清清，凄凄惨惨戚戚", "李清照《声声慢》", "F:0.8,N:0.7"],
      ["无可奈何花落去，似曾相识燕归来", "晏殊《浣溪沙》", "N:0.8,F:0.7"],
      ["位卑未敢忘忧国，事定犹须待阖棺", "陆游《病起书怀》", "T:0.9,J:0.8"]
    ],
    [
      "面对困难时，你通常会？",
      ["泪眼问花花不语，乱红飞过秋千去", "欧阳修《蝶恋花》", "F:0.9,N:0.8"],
      ["物来顺应，未来不迎，当时不杂，既过不恋", "《朱子语类》", "T:0.8,P:0.7"],
      ["山高月小，水落石出", "《庄子》", "S:0.9,T:0.8"],
      ["岁寒，然后知松柏之后凋也", "《论语》", "J:0.9,S:0.8"]
    ],
    [
      "生活态度上，你更认同？",
      ["既见君子，云胡不喜", "《诗经》", "E:0.9,F:0.8"],
      ["大直若屈，大巧若拙", "老子《道德经》", "I:0.8,T:0.7"],
      ["野火烧不尽，春风吹又生", "白居易《赋得古原草送别》", "N:0.8,P:0.7"],
      ["不以物喜，不以己悲", "《岳阳楼记》", "T:0.9,J:0.8"]
    ],
    [
      "做决策时，你倾向于？",
      ["行止犹如舞低昂，绿杨芳草长亭路", "晏殊《山亭柳》", "F:0.8,P:0.7"],
      ["富贵不能淫，贫贱不能移，威武不能屈", "《孟子》", "T:0.9,J:0.8"],
      ["只缘身在最高层", "王之涣《登鹳雀楼》", "N:0.8,T:0.7"],
      ["是非成败转头空", "苏轼《南乡子》", "N:0.9,P:0.8"]
    ],
    [
      "处理人际关系时，你会？",
      ["人生得意须尽欢，莫使金樽空对月", "李白《将进酒》", "E:0.9,P:0.8"],
      ["问君能有几多愁，恰似一江春水向东流", "李煜《虞美人》", "F:0.9,N:0.8"],
      ["不以言举人，不以人废言", "《论语》", "T:0.8,J:0.7"],
      ["秋水共长天一色", "王维《辋川闲居赠裴秀才迪》", "I:0.9,N:0.8"]
    ]
  ];
  // 第四组10道测试题
const mbtiQuestions_set4 = [
    [
      "面对新机会时，你会？",
      ["会挽雕弓如满月，西北望，射天狼", "苏轼《江城子》", "N:0.9,J:0.8"],
      ["云中谁寄锦书来，雁字回时，月满西楼", "李清照《一剪梅》", "F:0.8,N:0.7"],
      ["未成冰棱，先有冰花", "《增广贤文》", "S:0.9,J:0.8"],
      ["万物静观皆自得", "谢灵运《山居赋》", "I:0.8,P:0.7"]
    ],
    [
      "在团队协作中，你更擅长？",
      ["青山遮不住，毕竟东流去", "辛弃疾《菩萨蛮》", "P:0.8,N:0.7"],
      ["众人拾柴火焰高", "《增广贤文》", "E:0.9,T:0.8"],
      ["一叶一菩提，一花一世界", "《华严经》", "I:0.8,N:0.7"],
      ["风声雨声读书声，声声入耳", "《增广贤文》", "J:0.9,S:0.8"]
    ],
    [
      "在学习过程中，你更注重？",
      ["学非探其花，要自拨其根", "陆九渊《与王顺书》", "T:0.9,S:0.8"],
      ["行到水穷处，坐看云起时", "王维《终南别业》", "N:0.8,P:0.7"],
      ["众鸟高飞尽，孤云独去闲", "柳宗元《江雪》", "I:0.9,T:0.8"],
      ["纸上得来终觉浅，绝知此事要躬行", "陆游《冬夜读书示子聿》", "S:0.9,J:0.8"]
    ],
    [
      "处理矛盾时，你会？",
      ["东船西舫悄无言，唯见江心秋月白", "范成大《霜月》", "I:0.8,F:0.7"],
      ["言者无罪，闻者足戒", "《左传》", "T:0.9,J:0.8"],
      ["柳暗花明又一村", "陆游《游山西村》", "N:0.8,P:0.7"],
      ["海纳百川，有容乃大", "林则徐《诗词》", "F:0.9,E:0.8"]
    ],
    [
      "追求目标时，你认为？",
      ["不识庐山真面目，只缘身在此山中", "苏轼《题西林壁》", "N:0.9,P:0.8"],
      ["逆水行舟，不进则退", "《荀子》", "J:0.9,T:0.8"],
      ["欲穷千里目，更上一层楼", "王之涣《登鹳雀楼》", "N:0.8,J:0.7"],
      ["采菊东篱下，悠然见南山", "陶渊明《饮酒》", "I:0.9,P:0.8"]
    ],
    [
      "面对挫折时，你会？",
      ["莫听穿林打叶声，何妨吟啸且徐行", "王维《竹里馆》", "I:0.8,P:0.7"],
      ["天生我材必有用，千金散尽还复来", "李白《将进酒》", "E:0.9,N:0.8"],
      ["不经一番寒彻骨，怎得梅花扑鼻香", "黄梨《上元》", "J:0.9,S:0.8"],
      ["宝剑锋从磨砺出，梅花香自苦寒来", "《警世贤文》", "T:0.8,J:0.9"]
    ],
    [
      "与人交往时，你倾向于？",
      ["相逢何必曾相识", "刘禹锡《杨柳枝》", "I:0.9,T:0.8"],
      ["桃花潭水深千尺，不及汪伦送我情", "李白《赠汪伦》", "F:0.9,E:0.8"],
      ["门前迎宾客，台上集众贤", "《增广贤文》", "E:0.8,F:0.7"],
      ["君子之交淡如水", "《庄子》", "I:0.8,T:0.9"]
    ],
    [
      "在工作方式上，你更喜欢？",
      ["不恨古人吾不见，恨古人不见吾狂耳", "王维《桃源行》", "N:0.9,P:0.8"],
      ["谋定而后动，知止而有得", "《大学》", "J:0.9,T:0.8"],
      ["云中谁寄锦书来", "李清照《一剪梅》", "F:0.8,N:0.7"],
      ["事了拂衣去，深藏身与名", "陶渊明《归去来兮辞》", "I:0.9,T:0.8"]
    ],
    [
      "处理细节时，你会？",
      ["蜻蜓点水蓼花边，青荇浮波白鹭闲", "杨万里《小池》", "S:0.9,P:0.8"],
      ["青山遮不住，毕竟东流去", "辛弃疾《菩萨蛮》", "N:0.8,P:0.7"],
      ["绿杨烟外晓寒轻，红杏枝头春意闹", "宋祁《玉楼春》", "S:0.8,F:0.7"],
      ["事非经过不知难", "韩愈《石鼓歌》", "S:0.9,J:0.8"]
    ],
    [
      "做计划时，你倾向于？",
      ["此情可待成追忆，只是当时已惘然", "李商隐《锦瑟》", "F:0.9,N:0.8"],
      ["路漫漫其修远兮，吾将上下而求索", "屈原《离骚》", "J:0.9,N:0.8"],
      ["随遇而安", "《庄子》", "P:0.9,F:0.8"],
      ["行百里者半九十", "《战国策》", "J:0.8,S:0.9"]
    ]
  ];
// 第五组10道测试题
const mbtiQuestions_set5 = [
    [
      "在重要抉择时，你会？",
      ["踏遍青山人未老，风景这边独好", "毛泽东《清平乐·会昌》", "N:0.9,P:0.8"],
      ["志不强者智不达", "诸葛亮《诫子书》", "T:0.9,J:0.8"],
      ["李广不封望远山，王陵空卧漳河曲", "王安石《书湖阴先生壁》", "F:0.8,N:0.7"],
      ["是非成败转头空，青山依旧在", "苏轼《西江月》", "P:0.8,F:0.7"]
    ],
    [
      "面对未知领域时，你更倾向于？",
      ["千里之行，始于足下", "老子《道德经》", "S:0.9,J:0.8"],
      ["风萧萧兮易水寒", "《战国策》", "F:0.8,N:0.7"],
      ["一年明月今宵多，人生由命非由他", "苏轼《临江仙》", "P:0.9,N:0.8"],
      ["不登高山，不知天之高也", "《荀子》", "N:0.8,T:0.7"]
    ],
    [
      "在创新思维时，你会？",
      ["旧时月色，算几番照我，梅边吹笛", "史达祖《双双燕》", "N:0.9,F:0.8"],
      ["方生方死，方死方生", "《庄子》", "N:0.8,T:0.7"],
      ["望天门山，天门中断楚江开", "李白《望天门山》", "N:0.9,S:0.8"],
      ["众里寻他千百度", "辛弃疾《青玉案》", "P:0.8,F:0.7"]
    ],
    [
      "在团队合作中，你擅长？",
      ["孤山寺北贾亭西，水面初平云脚低", "苏轼《饮湖上初晴后雨》", "I:0.9,N:0.8"],
      ["一花独放不是春，百花齐放春满园", "《增广贤文》", "E:0.9,F:0.8"],
      ["欲渡黄河冰塞川，将登太行雪满山", "李白《行路难》", "T:0.8,J:0.7"],
      ["众擎易举", "《增广贤文》", "E:0.9,T:0.8"]
    ],
    [
      "处理日常事务时，你习惯？",
      ["行云流水，天涯任我游", "李白《行路难》", "P:0.9,N:0.8"],
      ["勿以善小而不为，勿以恶小而为之", "《三国志》", "J:0.9,T:0.8"],
      ["蒌蒿满地芦芽短，正是河豚欲上时", "苏轼《惠崇春江晚景》", "S:0.8,P:0.7"],
      ["事了拂衣去，深藏功与名", "陶渊明《归去来兮辞》", "I:0.9,T:0.8"]
    ],
    [
      "面对压力时，你会？",
      ["长风万里送秋雁，对此可以酣高楼", "李白《宣州谢朓楼饯别校书叔云》", "E:0.8,N:0.7"],
      ["书山有路勤为径，学海无涯苦作舟", "《增广贤文》", "J:0.9,T:0.8"],
      ["采菊南山下，悠然见南山", "陶渊明《饮酒》", "I:0.8,P:0.7"],
      ["宝剑锋从磨砺出，梅花香自苦寒来", "《警世贤文》", "J:0.9,T:0.8"]
    ],
    [
      "在追求理想时，你认为？",
      ["桃李春风一杯酒，江湖夜雨十年灯", "黄庭坚《寄黄几复》", "F:0.9,N:0.8"],
      ["衣带渐宽终不悔", "柳永《蝶恋花》", "F:0.8,J:0.7"],
      ["路漫漫其修远兮，吾将上下而求索", "屈原《离骚》", "N:0.9,J:0.8"],
      ["大江东去，浪淘尽，千古风流人物", "苏轼《念奴娇·赤壁怀古》", "N:0.8,P:0.7"]
    ],
    [
      "在处理关系时，你倾向于？",
      ["入我相思门，知我相思苦", "李白《三五七言》", "F:0.9,I:0.8"],
      ["不以物喜，不以己悲", "范仲淹《岳阳楼记》", "T:0.9,J:0.8"],
      ["横看成岭侧成峰，远近高低各不同", "苏轼《题西林壁》", "N:0.8,P:0.7"],
      ["君子之交淡如水", "庄子《山木》", "T:0.8,I:0.9"]
    ],
    [
      "在生活态度上，你更认同？",
      ["举杯邀明月，对影成三人", "李白《月下独酌》", "I:0.9,F:0.8"],
      ["不以规矩，不能成方圆", "《孟子》", "J:0.9,T:0.8"],
      ["人间有味是清欢", "苏轼《浣溪沙》", "F:0.8,P:0.7"],
      ["但愿人长久，千里共婵娟", "苏轼《水调歌头》", "F:0.9,N:0.8"]
    ],
    [
      "在解决问题时，你更看重？",
      ["胡马依北风，越鸟巢南枝", "韦应物《淮上喜会梁州故人》", "S:0.9,T:0.8"],
      ["先天下之忧而忧，后天下之乐而乐", "范仲淹《岳阳楼记》", "F:0.8,J:0.7"],
      ["问渠那得清如许，为有源头活水来", "朱熹《观书有感》", "N:0.9,T:0.8"],
      ["宁鸣而死，不默而生", "司马迁《报任安书》", "T:0.8,J:0.9"]
    ]
  ];
function checkDuplicatePoems(allQuestions) {
    // 创建一个Map来存储诗句及其出现的位置
    const poemMap = new Map();
    const duplicates = [];
    
    // 遍历所有题组
    allQuestions.forEach((questionGroup, groupIndex) => {
        questionGroup.forEach((question, questionIndex) => {
            // 跳过问题题干（第一个元素）
            for (let i = 1; i < question.length; i++) {
                const option = question[i];
                const poem = option[0]; // 诗句
                const source = option[1]; // 诗句来源
                
                // 创建唯一标识符
                const poemKey = `${poem} - ${source}`;
                
                if (poemMap.has(poemKey)) {
                    // 如果发现重复，记录详细信息
                    duplicates.push({
                        poem: poem,
                        source: source,
                        firstLocation: poemMap.get(poemKey),
                        secondLocation: `Group ${groupIndex + 1}, Question ${questionIndex + 1}, Option ${i}`
                    });
                } else {
                    // 记录诗句位置
                    poemMap.set(poemKey, `Group ${groupIndex + 1}, Question ${questionIndex + 1}, Option ${i}`);
                }
            }
        });
    });

    // 输出结果
    if (duplicates.length === 0) {
        console.log("没有发现重复的诗句！");
        console.log(`总共收录了 ${poemMap.size} 首不同的诗句。`);
    } else {
        console.log(`发现 ${duplicates.length} 个重复的诗句：`);
        duplicates.forEach(dup => {
            console.log('\n重复诗句:', dup.poem);
            console.log('出处:', dup.source);
            console.log('首次出现位置:', dup.firstLocation);
            console.log('重复出现位置:', dup.secondLocation);
        });
    }

    // 输出所有诗句列表（按字母顺序排序）
    console.log('\n所有诗句列表：');
    const sortedPoems = Array.from(poemMap.keys()).sort();
    sortedPoems.forEach((poem, index) => {
        console.log(`${index + 1}. ${poem}`);
    });
}

// 合并所有题组
const allQuestions = [
    ...mbtiQuestions_part1,
    ...mbtiQuestions_part2,
    ...mbtiQuestions_part3,
    ...mbtiQuestions_part4,
    ...mbtiQuestions_part5,
    ...mbtiQuestions_set1,
    ...mbtiQuestions_set2,
    ...mbtiQuestions_set3,
    ...mbtiQuestions_set4,
    ...mbtiQuestions_set5,
];

// 运行检查
//checkDuplicatePoems(allQuestions);
