/* 离线医学构词与逐词释义。词义按本词库语境编写，构词形式用于辅助记忆。 */
(() => {
  'use strict';
  const lexicon = {
  "2019": {
    "gloss": "2019年（疾病名称中的年份）"
  },
  "ab": {
    "gloss": "由、因（拉丁语介词；此处指由火热引起）"
  },
  "abdominalis": {
    "gloss": "腹部的（拉丁语形容词）"
  },
  "abnormality": {
    "gloss": "异常、异常改变"
  },
  "acantholysis": {
    "gloss": "棘层松解",
    "parts": [
      [
        "acanth/o",
        "棘、棘层"
      ],
      [
        "-lysis",
        "松解、分离"
      ]
    ]
  },
  "acanthosis": {
    "gloss": "棘层肥厚",
    "parts": [
      [
        "acanth/o",
        "棘、棘层"
      ],
      [
        "-osis",
        "异常状态、病理变化"
      ]
    ]
  },
  "accidental": {
    "gloss": "意外发生的"
  },
  "achromic": {
    "gloss": "无色素的",
    "parts": [
      [
        "a-",
        "无、缺乏"
      ],
      [
        "chrom/o",
        "颜色、色素"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "acid": {
    "gloss": "酸（此处为烟酸名称的一部分）"
  },
  "acne": {
    "gloss": "痤疮",
    "note": "专用病名，整体记忆，不按现代字母强行拆成前后缀。"
  },
  "acquired": {
    "gloss": "获得性的、后天出现的"
  },
  "acquisita": {
    "gloss": "获得性的（拉丁语；修饰疾病名称）"
  },
  "acrocyanosis": {
    "gloss": "肢端发绀症",
    "parts": [
      [
        "acr/o",
        "肢端"
      ],
      [
        "cyan/o",
        "蓝色、青紫色"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "acrodermatitis": {
    "gloss": "肢端皮炎",
    "parts": [
      [
        "acr/o",
        "肢端"
      ],
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "actinic": {
    "gloss": "光线性的、光化性的",
    "parts": [
      [
        "actin/o",
        "射线、光线"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "acuminatum": {
    "gloss": "尖锐的、尖端突出的（拉丁语）"
  },
  "acuta": {
    "gloss": "急性的（拉丁语形容词）"
  },
  "acute": {
    "gloss": "急性的"
  },
  "acutum": {
    "gloss": "急性的（拉丁语形容词）"
  },
  "albinism": {
    "gloss": "白化病",
    "parts": [
      [
        "albin-",
        "白、白色"
      ],
      [
        "-ism",
        "状态、疾病"
      ]
    ]
  },
  "allergic": {
    "gloss": "过敏性的、变应性的",
    "parts": [
      [
        "allerg/o",
        "过敏、变应性反应"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "alopecia": {
    "gloss": "脱发、秃发",
    "note": "源自希腊语“狐狸”的相关词，借指脱毛；作为完整医学名词记忆。"
  },
  "amyloid": {
    "gloss": "淀粉样的、淀粉样物质",
    "parts": [
      [
        "amyl/o",
        "淀粉"
      ],
      [
        "-oid",
        "似……的、……样的"
      ]
    ]
  },
  "amyloidosis": {
    "gloss": "淀粉样变性",
    "parts": [
      [
        "amyl/o",
        "淀粉"
      ],
      [
        "-oid",
        "……样的"
      ],
      [
        "-osis",
        "异常状态、病理变化"
      ]
    ]
  },
  "amyopathic": {
    "gloss": "无肌病的",
    "parts": [
      [
        "a-",
        "无、缺乏"
      ],
      [
        "my/o",
        "肌肉"
      ],
      [
        "path/o",
        "疾病"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "anagen": {
    "gloss": "毛发生长期",
    "parts": [
      [
        "ana-",
        "向上、再生"
      ],
      [
        "-gen",
        "产生、生长"
      ]
    ],
    "note": "词源用于联想毛囊重新生长；本词专指毛发生长期。"
  },
  "androgenetic": {
    "gloss": "雄激素性、与雄激素及遗传易感性相关的",
    "note": "临床词义同时涉及雄激素作用与遗传易感性；按完整术语记忆，避免把词中每一段都机械对应为独立词根。"
  },
  "anemicus": {
    "gloss": "贫血样的（拉丁语；贫血痣中的苍白表现）",
    "note": "贫血痣并不表示全身贫血；此词描述局部苍白外观。"
  },
  "angioendothelioma": {
    "gloss": "血管内皮细胞瘤",
    "parts": [
      [
        "angi/o",
        "血管"
      ],
      [
        "endotheli-",
        "内皮"
      ],
      [
        "-oma",
        "肿瘤、肿块"
      ]
    ]
  },
  "angiokeratoma": {
    "gloss": "血管角皮瘤",
    "parts": [
      [
        "angi/o",
        "血管"
      ],
      [
        "kerat/o",
        "角质、角化组织"
      ],
      [
        "-oma",
        "肿瘤、肿块"
      ]
    ]
  },
  "angiolymphoid": {
    "gloss": "血管淋巴样的",
    "parts": [
      [
        "angi/o",
        "血管"
      ],
      [
        "lymph/o",
        "淋巴"
      ],
      [
        "-oid",
        "……样的"
      ]
    ]
  },
  "angiosarcoma": {
    "gloss": "血管肉瘤",
    "parts": [
      [
        "angi/o",
        "血管"
      ],
      [
        "sarc/o",
        "肉、结缔组织"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ]
  },
  "annulare": {
    "gloss": "环状的（拉丁语）"
  },
  "annularis": {
    "gloss": "环状的（拉丁语）"
  },
  "aphthous": {
    "gloss": "阿弗他性的、口疮性的",
    "parts": [
      [
        "aphth-",
        "口疮、阿弗他溃疡"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "apocrine": {
    "gloss": "顶泌的；此处指顶泌汗腺",
    "parts": [
      [
        "apo-",
        "离开、脱离"
      ],
      [
        "-crine",
        "分泌"
      ]
    ],
    "note": "词源反映传统“顶端脱离分泌”的命名；汗腺名称不等同于对实际分泌机制的完整描述。"
  },
  "appendages": {
    "gloss": "附属器（复数）"
  },
  "areata": {
    "gloss": "斑片状的、局限成片的（拉丁语）"
  },
  "arsenical": {
    "gloss": "砷性的、与砷有关的",
    "parts": [
      [
        "arsenic",
        "砷"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "arthritis": {
    "gloss": "关节炎",
    "parts": [
      [
        "arthr/o",
        "关节"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "arthropathica": {
    "gloss": "关节病性的（拉丁语）",
    "parts": [
      [
        "arthr/o",
        "关节"
      ],
      [
        "path/o",
        "疾病"
      ],
      [
        "-ica",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "asteatotic": {
    "gloss": "乏脂性的、皮脂缺乏的",
    "parts": [
      [
        "a-",
        "无、缺乏"
      ],
      [
        "steat/o",
        "脂肪、皮脂"
      ],
      [
        "-otic",
        "表示某种状态的形容词后缀"
      ]
    ]
  },
  "atopic": {
    "gloss": "特应性的（与特应性体质有关）",
    "parts": [
      [
        "atop-",
        "特应性；原义为异位、不同寻常"
      ],
      [
        "-ic",
        "……的"
      ]
    ],
    "note": "临床指特应性，不能把字面“无位置”当作该病的医学释义。"
  },
  "atrophicae": {
    "gloss": "萎缩性的（拉丁语；修饰纹）",
    "parts": [
      [
        "a-",
        "无、缺乏"
      ],
      [
        "troph-",
        "营养、生长"
      ],
      [
        "-icae",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "atrophie": {
    "gloss": "萎缩（法语）",
    "parts": [
      [
        "a-",
        "无、缺乏"
      ],
      [
        "troph-",
        "营养、生长"
      ]
    ],
    "note": "法语形式，与英语 atrophy 同源；末尾 -ie 为名词词尾。"
  },
  "atrophy": {
    "gloss": "萎缩",
    "parts": [
      [
        "a-",
        "无、缺乏"
      ],
      [
        "-trophy",
        "营养、生长"
      ]
    ]
  },
  "autosensitization": {
    "gloss": "自体敏感化、自身致敏",
    "parts": [
      [
        "auto-",
        "自身"
      ],
      [
        "sensitization",
        "致敏、敏感化"
      ]
    ]
  },
  "B-cell": {
    "gloss": "B细胞、B淋巴细胞",
    "note": "B为细胞类别标记，不作医学词根拆解。"
  },
  "balanitis": {
    "gloss": "龟头炎",
    "parts": [
      [
        "balan/o",
        "阴茎龟头"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "balanoposthitis": {
    "gloss": "包皮龟头炎",
    "parts": [
      [
        "balan/o",
        "阴茎龟头"
      ],
      [
        "posth/o",
        "包皮"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "ballooning": {
    "gloss": "气球样的、气球样肿胀"
  },
  "basal": {
    "gloss": "基底的",
    "parts": [
      [
        "bas-",
        "基底、底部"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "basale": {
    "gloss": "基底的（拉丁语；修饰层）"
  },
  "basement": {
    "gloss": "基底的、底部的（此处构成“基底膜”）"
  },
  "basophilic": {
    "gloss": "嗜碱性的",
    "parts": [
      [
        "bas/o",
        "碱、碱性"
      ],
      [
        "phil-",
        "亲和、喜好"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "bee": {
    "gloss": "蜂"
  },
  "Behcet": {
    "gloss": "白塞（人名，规范拼写为 Behçet）",
    "note": "人名命名，不作医学词根拆解。"
  },
  "bite": {
    "gloss": "咬、咬伤"
  },
  "blanche": {
    "gloss": "白色的（法语）"
  },
  "Blaschko": {
    "gloss": "布拉施科（人名）",
    "note": "人名命名，不作医学词根拆解。"
  },
  "Blaschko’s": {
    "gloss": "布拉施科的（人名所有格）",
    "note": "’s为英语所有格，人名本身不作医学词根拆解。"
  },
  "bleb": {
    "gloss": "疱、小囊泡样隆起"
  },
  "blue": {
    "gloss": "蓝色的"
  },
  "body": {
    "gloss": "物体、体（foreign body 合为“异物”）"
  },
  "botulinum": {
    "gloss": "肉毒的、与肉毒梭菌有关的"
  },
  "Bowen": {
    "gloss": "鲍恩（人名）",
    "note": "人名命名，不作医学词根拆解。"
  },
  "bromhidrosis": {
    "gloss": "臭汗症",
    "parts": [
      [
        "brom/o",
        "臭味"
      ],
      [
        "hidr/o",
        "汗"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "bulla": {
    "gloss": "大疱"
  },
  "bullosa": {
    "gloss": "大疱性的（拉丁语）",
    "parts": [
      [
        "bull-",
        "疱、大疱"
      ],
      [
        "-osa",
        "具有……的（拉丁语形容词形式）"
      ]
    ]
  },
  "bullous": {
    "gloss": "大疱性的",
    "parts": [
      [
        "bull-",
        "疱、大疱"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "calcinosis": {
    "gloss": "钙质沉着症",
    "parts": [
      [
        "calcin-",
        "钙、钙盐"
      ],
      [
        "-osis",
        "异常状态、沉着性变化"
      ]
    ]
  },
  "callus": {
    "gloss": "胼胝"
  },
  "candidiasis": {
    "gloss": "念珠菌病",
    "parts": [
      [
        "candid-",
        "念珠菌属"
      ],
      [
        "-iasis",
        "疾病、感染状态"
      ]
    ]
  },
  "capillary": {
    "gloss": "毛细血管；毛细血管的"
  },
  "carbuncle": {
    "gloss": "痈"
  },
  "carcinoma": {
    "gloss": "癌（上皮来源的恶性肿瘤）",
    "parts": [
      [
        "carcin/o",
        "癌"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ],
    "note": "-oma并不保证良性；carcinoma整体专指癌。"
  },
  "cat-scratch": {
    "gloss": "猫抓的、猫抓伤所致的",
    "parts": [
      [
        "cat",
        "猫"
      ],
      [
        "scratch",
        "抓、抓伤"
      ]
    ]
  },
  "catagen": {
    "gloss": "毛发退行期",
    "parts": [
      [
        "cata-",
        "向下、衰退"
      ],
      [
        "-gen",
        "产生、生长"
      ]
    ],
    "note": "词源用于联想生长活动衰退；本词专指毛发退行期。"
  },
  "cathepsin": {
    "gloss": "组织蛋白酶"
  },
  "cell": {
    "gloss": "细胞"
  },
  "cellulitis": {
    "gloss": "蜂窝织炎",
    "parts": [
      [
        "cellul-",
        "细胞、细胞组织"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "centrifugalis": {
    "gloss": "离心性的、向外围扩展的（拉丁语）"
  },
  "centrifugum": {
    "gloss": "离心性的、向外围扩展的（拉丁语）"
  },
  "chancre": {
    "gloss": "硬下疳"
  },
  "chancroid": {
    "gloss": "软下疳",
    "parts": [
      [
        "chancr-",
        "下疳"
      ],
      [
        "-oid",
        "似……的"
      ]
    ]
  },
  "cheilitis": {
    "gloss": "唇炎",
    "parts": [
      [
        "cheil/o",
        "唇"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "chilblain": {
    "gloss": "冻疮；冻疮样的"
  },
  "chlamydial": {
    "gloss": "衣原体的、衣原体所致的",
    "parts": [
      [
        "chlamydi-",
        "衣原体"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "chloracne": {
    "gloss": "氯痤疮",
    "parts": [
      [
        "chlor-",
        "氯（此处指含氯化合物）"
      ],
      [
        "acne",
        "痤疮"
      ]
    ],
    "note": "chlor-在此指氯，不按其希腊语原义“绿色”解释病名。"
  },
  "chronic": {
    "gloss": "慢性的",
    "parts": [
      [
        "chron/o",
        "时间"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "chronica": {
    "gloss": "慢性的（拉丁语）"
  },
  "chronicus": {
    "gloss": "慢性的（拉丁语）"
  },
  "cicatricial": {
    "gloss": "瘢痕性的",
    "parts": [
      [
        "cicatric-",
        "瘢痕"
      ],
      [
        "-ial",
        "……的"
      ]
    ]
  },
  "clavus": {
    "gloss": "鸡眼（拉丁语原义为钉）"
  },
  "cold": {
    "gloss": "寒冷；在 cold sore 中属于固定病名，整体指唇疱疹"
  },
  "collagen": {
    "gloss": "胶原",
    "parts": [
      [
        "colla-",
        "胶、胶质"
      ],
      [
        "-gen",
        "生成、产生"
      ]
    ]
  },
  "condyloma": {
    "gloss": "湿疣、疣状隆起",
    "parts": [
      [
        "condyl-",
        "结节、隆起"
      ],
      [
        "-oma",
        "肿块、增生性病变"
      ]
    ],
    "note": "-oma在此表示增生性隆起，并不等同于恶性肿瘤。"
  },
  "congenital": {
    "gloss": "先天性的、出生时即存在的"
  },
  "conglobata": {
    "gloss": "聚合的、成团的（拉丁语）"
  },
  "connective": {
    "gloss": "结缔的、连接的"
  },
  "contact": {
    "gloss": "接触；接触性的"
  },
  "contagiosum": {
    "gloss": "传染性的（拉丁语）"
  },
  "continua": {
    "gloss": "连续的、持续的（拉丁语）"
  },
  "corneum": {
    "gloss": "角质的、角样的（拉丁语；修饰层）"
  },
  "corona": {
    "gloss": "冠、冠状（此处为 coronavirus“冠状病毒”的组成部分）",
    "note": "冠状病毒名称取其冠状外观；不要套用其他词中冠状动脉、心脏的含义。"
  },
  "Coxsackie": {
    "gloss": "柯萨奇（病毒得名于地名）",
    "note": "地名命名，不作医学词根拆解。"
  },
  "creeping": {
    "gloss": "匐行的、缓慢蔓延的"
  },
  "cristae": {
    "gloss": "嵴、隆起（拉丁语复数）"
  },
  "crust": {
    "gloss": "痂"
  },
  "crystallina": {
    "gloss": "晶样的、透明的（拉丁语）"
  },
  "cutaneous": {
    "gloss": "皮肤的",
    "parts": [
      [
        "cutane-",
        "皮肤"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "cutis": {
    "gloss": "皮肤（拉丁语）"
  },
  "cyst": {
    "gloss": "囊肿、囊",
    "note": "本词条指皮肤囊肿，不取 cyst/o 在泌尿术语中的“膀胱”义。"
  },
  "decubitus": {
    "gloss": "卧、卧位（此处 decubitus ulcer 指压疮）"
  },
  "deficiency": {
    "gloss": "缺乏、缺陷"
  },
  "degeneration": {
    "gloss": "变性、退行性变化"
  },
  "densa": {
    "gloss": "致密的（拉丁语）"
  },
  "depigmentosus": {
    "gloss": "色素减少或脱失的（拉丁语；用于痣名）",
    "parts": [
      [
        "de-",
        "去除、减少"
      ],
      [
        "pigment-",
        "色素"
      ],
      [
        "-osus",
        "具有……特征的（拉丁语形容词形式）"
      ]
    ],
    "note": "这是病名用语；脱色素痣通常为色素减少，并不意味着色素完全缺失。"
  },
  "dermal": {
    "gloss": "真皮的；皮肤的",
    "parts": [
      [
        "derm-",
        "皮肤、真皮"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "dermatitis": {
    "gloss": "皮炎",
    "parts": [
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "dermatofibroma": {
    "gloss": "皮肤纤维瘤",
    "parts": [
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "fibr/o",
        "纤维"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ]
  },
  "dermatofibrosarcoma": {
    "gloss": "皮肤纤维肉瘤",
    "parts": [
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "fibr/o",
        "纤维"
      ],
      [
        "sarc/o",
        "肉、结缔组织"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ]
  },
  "dermatomyositis": {
    "gloss": "皮肌炎",
    "parts": [
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "my/o",
        "肌肉"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "dermatosis": {
    "gloss": "皮病、皮肤病",
    "parts": [
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "-osis",
        "异常状态、疾病"
      ]
    ]
  },
  "dermis": {
    "gloss": "真皮",
    "parts": [
      [
        "derm-",
        "皮肤"
      ],
      [
        "-is",
        "名词词尾"
      ]
    ]
  },
  "dermopathy": {
    "gloss": "皮肤病变",
    "parts": [
      [
        "derm/o",
        "皮肤"
      ],
      [
        "-pathy",
        "疾病、病变"
      ]
    ]
  },
  "desmoglein": {
    "gloss": "桥粒芯糖蛋白",
    "parts": [
      [
        "desmo-",
        "连接、纽带"
      ],
      [
        "glein",
        "胶样、黏合（源于希腊语胶的词干）"
      ]
    ],
    "note": "名称以“连接”和“胶”帮助联想黏附功能，不能逐字替代其蛋白质定义。"
  },
  "desmosome": {
    "gloss": "桥粒",
    "parts": [
      [
        "desm/o",
        "连接、纽带"
      ],
      [
        "-some",
        "体、结构"
      ]
    ]
  },
  "diabetic": {
    "gloss": "糖尿病的、糖尿病性的",
    "parts": [
      [
        "diabet-",
        "糖尿病"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "digitate": {
    "gloss": "指状的",
    "parts": [
      [
        "digit-",
        "手指、足趾"
      ],
      [
        "-ate",
        "具有……形态的"
      ]
    ]
  },
  "discoid": {
    "gloss": "盘状的",
    "parts": [
      [
        "disc/o",
        "盘"
      ],
      [
        "-oid",
        "……样的"
      ]
    ]
  },
  "disease": {
    "gloss": "病、疾病"
  },
  "disseminated": {
    "gloss": "播散的、广泛散布的"
  },
  "drug": {
    "gloss": "药物"
  },
  "drug-induced": {
    "gloss": "药物诱发的、药物引起的",
    "parts": [
      [
        "drug",
        "药物"
      ],
      [
        "induced",
        "诱发的、引起的"
      ]
    ]
  },
  "dyskeratosis": {
    "gloss": "角化不良",
    "parts": [
      [
        "dys-",
        "异常、不良"
      ],
      [
        "kerat/o",
        "角质、角化"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "dysplasia": {
    "gloss": "发育不良、异常发育",
    "parts": [
      [
        "dys-",
        "异常、不良"
      ],
      [
        "-plasia",
        "形成、发育"
      ]
    ]
  },
  "E": {
    "gloss": "E型（此处指免疫球蛋白E，即 IgE 的类别）"
  },
  "ecchymosis": {
    "gloss": "瘀斑"
  },
  "eccrine": {
    "gloss": "外泌的；此处指小汗腺",
    "parts": [
      [
        "ec-",
        "向外"
      ],
      [
        "-crine",
        "分泌"
      ]
    ]
  },
  "ECHO": {
    "gloss": "埃可（肠道病毒的一类旧称缩写）",
    "note": "来自 enteric cytopathogenic human orphan 的首字母组合，属于病毒旧称；不作词根拆解。"
  },
  "ecthyma": {
    "gloss": "深脓疱疮"
  },
  "ectodermal": {
    "gloss": "外胚层的",
    "parts": [
      [
        "ecto-",
        "外、外部"
      ],
      [
        "derm-",
        "层、皮层（此处指胚层）"
      ],
      [
        "-al",
        "……的"
      ]
    ],
    "note": "ectoderm为外胚层；此处derm表示胚层，不能把整个词简单译成“皮肤外面”。"
  },
  "eczema": {
    "gloss": "湿疹",
    "note": "源自希腊语“沸出、冒泡”的意象；作为完整病名记忆。"
  },
  "edema": {
    "gloss": "水肿"
  },
  "elastic": {
    "gloss": "弹性的",
    "parts": [
      [
        "elast-",
        "弹性、可伸展"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "elasticum": {
    "gloss": "弹性的（拉丁语；此处指弹性组织）"
  },
  "electroflash": {
    "gloss": "电光、电弧闪光",
    "parts": [
      [
        "electr/o",
        "电"
      ],
      [
        "flash",
        "闪光"
      ]
    ]
  },
  "eosinophilia": {
    "gloss": "嗜酸性粒细胞增多",
    "parts": [
      [
        "eosin/o",
        "伊红染料；引申为嗜酸性粒细胞"
      ],
      [
        "-philia",
        "亲和、增多（此处指细胞数量增多）"
      ]
    ],
    "note": "这里通常指嗜酸性粒细胞数量增多；嗜酸性来源于细胞对伊红染料的亲和性。"
  },
  "eosinophilic": {
    "gloss": "嗜酸性的、嗜伊红的",
    "parts": [
      [
        "eosin/o",
        "伊红染料"
      ],
      [
        "phil-",
        "亲和、喜好"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "ephelides": {
    "gloss": "雀斑（复数）"
  },
  "epidermal": {
    "gloss": "表皮的",
    "parts": [
      [
        "epi-",
        "在……之上"
      ],
      [
        "derm-",
        "皮肤"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "epidermis": {
    "gloss": "表皮",
    "parts": [
      [
        "epi-",
        "在……之上"
      ],
      [
        "derm-",
        "皮肤"
      ],
      [
        "-is",
        "名词词尾"
      ]
    ]
  },
  "epidermodysplasia": {
    "gloss": "表皮发育不良",
    "parts": [
      [
        "epiderm/o",
        "表皮"
      ],
      [
        "dys-",
        "异常、不良"
      ],
      [
        "-plasia",
        "形成、发育"
      ]
    ]
  },
  "epidermolysis": {
    "gloss": "表皮松解",
    "parts": [
      [
        "epiderm/o",
        "表皮"
      ],
      [
        "-lysis",
        "松解、分离"
      ]
    ]
  },
  "erosion": {
    "gloss": "糜烂"
  },
  "eruption": {
    "gloss": "疹、皮疹"
  },
  "erysipelas": {
    "gloss": "丹毒"
  },
  "erysipeloid": {
    "gloss": "类丹毒",
    "parts": [
      [
        "erysipel-",
        "丹毒"
      ],
      [
        "-oid",
        "类似……的"
      ]
    ]
  },
  "erythema": {
    "gloss": "红斑",
    "parts": [
      [
        "eryth-",
        "红色"
      ],
      [
        "-ema",
        "状态、结果性名词词尾"
      ]
    ],
    "note": "eryth-为“红”的词干；-ema为结果性名词词尾，不是“血液”的-emia。"
  },
  "erythematosus": {
    "gloss": "红斑性的（拉丁语）",
    "parts": [
      [
        "erythemat-",
        "红斑"
      ],
      [
        "-osus",
        "富有……的、……性的"
      ]
    ]
  },
  "erythroderma": {
    "gloss": "红皮病",
    "parts": [
      [
        "erythr/o",
        "红色"
      ],
      [
        "-derma",
        "皮肤"
      ]
    ]
  },
  "erythrodermic": {
    "gloss": "红皮病性的",
    "parts": [
      [
        "erythr/o",
        "红色"
      ],
      [
        "derm-",
        "皮肤"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "erythrokeratodermia": {
    "gloss": "红斑角皮症",
    "parts": [
      [
        "erythr/o",
        "红色"
      ],
      [
        "kerat/o",
        "角质、角化"
      ],
      [
        "derm-",
        "皮肤"
      ],
      [
        "-ia",
        "状态、疾病"
      ]
    ]
  },
  "et": {
    "gloss": "和、与（拉丁语连词）"
  },
  "exanthema": {
    "gloss": "发疹、皮疹"
  },
  "excoriation": {
    "gloss": "抓痕、表皮剥脱",
    "parts": [
      [
        "ex-",
        "向外、去除"
      ],
      [
        "cori-",
        "皮肤"
      ],
      [
        "-ation",
        "过程、结果"
      ]
    ]
  },
  "exfoliative": {
    "gloss": "剥脱性的",
    "parts": [
      [
        "ex-",
        "向外、脱离"
      ],
      [
        "foli-",
        "叶、薄层"
      ],
      [
        "-ative",
        "具有某种作用或特征的"
      ]
    ]
  },
  "exogenous": {
    "gloss": "外源性的",
    "parts": [
      [
        "exo-",
        "外、外部"
      ],
      [
        "-genous",
        "来源于、产生于"
      ]
    ]
  },
  "extragenital": {
    "gloss": "生殖器外的",
    "parts": [
      [
        "extra-",
        "在……以外"
      ],
      [
        "genital",
        "生殖器的"
      ]
    ]
  },
  "extramammary": {
    "gloss": "乳房外的",
    "parts": [
      [
        "extra-",
        "在……以外"
      ],
      [
        "mamm-",
        "乳房"
      ],
      [
        "-ary",
        "……的"
      ]
    ]
  },
  "extranodal": {
    "gloss": "淋巴结外的",
    "parts": [
      [
        "extra-",
        "在……以外"
      ],
      [
        "nod-",
        "结、淋巴结"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "facialis": {
    "gloss": "面部的（拉丁语）",
    "parts": [
      [
        "faci-",
        "面部"
      ],
      [
        "-alis",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "fasciitis": {
    "gloss": "筋膜炎",
    "parts": [
      [
        "fasci-",
        "筋膜"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "febrile": {
    "gloss": "发热的、热性的",
    "parts": [
      [
        "febr-",
        "发热"
      ],
      [
        "-ile",
        "……的"
      ]
    ]
  },
  "fiber": {
    "gloss": "纤维"
  },
  "fibrinoid": {
    "gloss": "纤维蛋白样的",
    "parts": [
      [
        "fibrin-",
        "纤维蛋白"
      ],
      [
        "-oid",
        "……样的"
      ]
    ]
  },
  "field": {
    "gloss": "区域、野（skin field 指皮野）"
  },
  "filiformis": {
    "gloss": "丝状的（拉丁语）",
    "parts": [
      [
        "fili-",
        "线、丝"
      ],
      [
        "-formis",
        "形似……的"
      ]
    ]
  },
  "fissure": {
    "gloss": "裂隙、皲裂"
  },
  "fissured": {
    "gloss": "有裂纹的、有裂隙的"
  },
  "foliaceus": {
    "gloss": "叶状的（拉丁语；病名中译“落叶型”）",
    "parts": [
      [
        "foli-",
        "叶"
      ],
      [
        "-aceus",
        "形似……的、……样的"
      ]
    ]
  },
  "follicle": {
    "gloss": "囊、滤泡（hair follicle 指毛囊）"
  },
  "follicularis": {
    "gloss": "毛囊的、毛囊性的（拉丁语）",
    "parts": [
      [
        "follicul-",
        "小囊、毛囊"
      ],
      [
        "-aris",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "folliculitis": {
    "gloss": "毛囊炎",
    "parts": [
      [
        "follicul-",
        "毛囊"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "foreign": {
    "gloss": "外来的（foreign body 合为“异物”）"
  },
  "fulminant": {
    "gloss": "暴发性的、病势急剧的"
  },
  "fungoides": {
    "gloss": "蕈样的、蘑菇样的（拉丁语）",
    "parts": [
      [
        "fung-",
        "蘑菇、真菌"
      ],
      [
        "-oides",
        "类似……的"
      ]
    ],
    "note": "mycosis fungoides是淋巴瘤的历史病名；“蕈样”描述外观，不表示真菌感染。"
  },
  "furuncle": {
    "gloss": "疖"
  },
  "gangrene": {
    "gloss": "坏疽"
  },
  "gangrenosum": {
    "gloss": "坏疽性的（拉丁语）",
    "parts": [
      [
        "gangren-",
        "坏疽"
      ],
      [
        "-osum",
        "具有……特征的（拉丁语形容词形式）"
      ]
    ]
  },
  "generalized": {
    "gloss": "泛发性的、全身性的"
  },
  "genital": {
    "gloss": "生殖器的",
    "parts": [
      [
        "genit-",
        "生殖、生殖器"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "genitourinary": {
    "gloss": "泌尿生殖的",
    "parts": [
      [
        "genit/o",
        "生殖器"
      ],
      [
        "urin-",
        "尿、泌尿系统"
      ],
      [
        "-ary",
        "……的"
      ]
    ]
  },
  "geographic": {
    "gloss": "地图样的（此处形容舌表面的外观）"
  },
  "gestationis": {
    "gloss": "妊娠的（拉丁语属格）"
  },
  "glabrous": {
    "gloss": "无毛的、光滑无毛的"
  },
  "gland": {
    "gloss": "腺"
  },
  "gonorrhea": {
    "gloss": "淋病",
    "parts": [
      [
        "gon/o",
        "种子、精液（历史词义）"
      ],
      [
        "-rrhea",
        "流出、分泌物"
      ]
    ],
    "note": "词源中的“精液流出”是历史误解，现代指淋球菌感染，不宜按字面理解。"
  },
  "graft-versus-host": {
    "gloss": "移植物抗宿主的",
    "parts": [
      [
        "graft",
        "移植物"
      ],
      [
        "versus",
        "对抗"
      ],
      [
        "host",
        "宿主"
      ]
    ]
  },
  "granule": {
    "gloss": "颗粒"
  },
  "granuloma": {
    "gloss": "肉芽肿",
    "parts": [
      [
        "granul-",
        "小颗粒、肉芽"
      ],
      [
        "-oma",
        "肿块、病变团块"
      ]
    ],
    "note": "-oma在此指肉芽肿性病变，并不直接表示肿瘤或癌。"
  },
  "granulomatosis": {
    "gloss": "肉芽肿病；肉芽肿性病变",
    "parts": [
      [
        "granuloma",
        "肉芽肿"
      ],
      [
        "-osis",
        "疾病或异常状态"
      ]
    ],
    "note": "granuloma 接后缀时采用 granulomat- 词干；肉芽肿是炎性细胞聚集形成的病灶，不等同于肿瘤。"
  },
  "granulosum": {
    "gloss": "颗粒状的；此处指颗粒层",
    "parts": [
      [
        "granul-",
        "小颗粒"
      ],
      [
        "-osum",
        "具有……特征的（拉丁语形容词形式）"
      ]
    ]
  },
  "grooves": {
    "gloss": "沟；这里指皮沟",
    "note": "groove 的复数；普通英语词。"
  },
  "gumma": {
    "gloss": "树胶肿；这里指梅毒性树胶肿",
    "note": "完整病理名词，不作现代医学词根硬拆。"
  },
  "guttate": {
    "gloss": "点滴状的",
    "parts": [
      [
        "gutt-",
        "滴"
      ],
      [
        "-ate",
        "具有……形态的"
      ]
    ]
  },
  "gyrata": {
    "gloss": "回状的、呈脑回样褶皱的",
    "parts": [
      [
        "gyr-",
        "环、回旋"
      ],
      [
        "-ata",
        "具有……形态的（拉丁语形式）"
      ]
    ]
  },
  "hair": {
    "gloss": "毛发"
  },
  "hairy": {
    "gloss": "有毛的",
    "parts": [
      [
        "hair",
        "毛发"
      ],
      [
        "-y",
        "具有……的"
      ]
    ]
  },
  "hand": {
    "gloss": "手"
  },
  "hand-foot-mouth": {
    "gloss": "手—足—口",
    "parts": [
      [
        "hand",
        "手"
      ],
      [
        "foot",
        "足"
      ],
      [
        "mouth",
        "口"
      ]
    ],
    "note": "由三个普通英语词连写；完整病名为手足口病。"
  },
  "hemangioma": {
    "gloss": "血管瘤",
    "parts": [
      [
        "hem/o",
        "血"
      ],
      [
        "angi/o",
        "血管"
      ],
      [
        "-oma",
        "肿瘤、肿块"
      ]
    ]
  },
  "hemiatrophia": {
    "gloss": "偏侧萎缩、半侧萎缩",
    "parts": [
      [
        "hemi-",
        "半、偏侧"
      ],
      [
        "a-",
        "缺乏"
      ],
      [
        "troph-",
        "营养、生长"
      ],
      [
        "-ia",
        "状态"
      ]
    ],
    "note": "atrophia 是 atrophy 的拉丁语形式；临床整体义为萎缩。"
  },
  "hemidesmosome": {
    "gloss": "半桥粒",
    "parts": [
      [
        "hemi-",
        "半"
      ],
      [
        "desm/o",
        "连接、束带"
      ],
      [
        "-some",
        "小体"
      ]
    ],
    "note": "名称来自形态上像半个桥粒；实际连接上皮细胞与基底膜。"
  },
  "herpes": {
    "gloss": "疱疹",
    "note": "来自希腊语中爬行、蔓延之意；作为完整医学词记忆，不硬拆成现代前后缀。"
  },
  "herpeticum": {
    "gloss": "疱疹性的、疱疹样的",
    "parts": [
      [
        "herpet-",
        "疱疹"
      ],
      [
        "-icum",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "herpetiform": {
    "gloss": "疱疹样的",
    "parts": [
      [
        "herpet-",
        "疱疹"
      ],
      [
        "-form",
        "呈……形态的"
      ]
    ]
  },
  "herpetiformis": {
    "gloss": "疱疹样的",
    "parts": [
      [
        "herpet-",
        "疱疹"
      ],
      [
        "-formis",
        "……形态的（拉丁语形式）"
      ]
    ]
  },
  "hidradenitis": {
    "gloss": "汗腺炎",
    "parts": [
      [
        "hidr/o",
        "汗"
      ],
      [
        "aden/o",
        "腺"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "hidrotic": {
    "gloss": "有汗的、与出汗有关的",
    "parts": [
      [
        "hidr/o",
        "汗"
      ],
      [
        "-otic",
        "与某状态有关的形容词后缀"
      ]
    ]
  },
  "hirsutism": {
    "gloss": "多毛症",
    "parts": [
      [
        "hirsut-",
        "毛发浓密、粗毛"
      ],
      [
        "-ism",
        "状态、病症"
      ]
    ]
  },
  "histiocytosis": {
    "gloss": "组织细胞增生症",
    "parts": [
      [
        "histi/o",
        "组织"
      ],
      [
        "cyt/o",
        "细胞"
      ],
      [
        "-osis",
        "异常增多或疾病状态"
      ]
    ],
    "note": "histiocyte 是组织细胞的专名；不是指所有组织细胞的普遍增生。"
  },
  "human": {
    "gloss": "人的、人类的"
  },
  "hyalinizing": {
    "gloss": "使组织发生透明样变的",
    "parts": [
      [
        "hyalin-",
        "透明样物质、玻璃样"
      ],
      [
        "-izing",
        "使成为……的"
      ]
    ]
  },
  "hyperandrogen": {
    "gloss": "雄激素过多的；这里修饰痤疮",
    "parts": [
      [
        "hyper-",
        "过多、高于正常"
      ],
      [
        "androgen",
        "雄激素"
      ]
    ],
    "note": "androgen 可再记为 andr/o（男性）＋-gen（产生者）；整体指雄激素。词条采用简略修饰形式。"
  },
  "hypereosinophilic": {
    "gloss": "嗜酸性粒细胞增多的",
    "parts": [
      [
        "hyper-",
        "过多"
      ],
      [
        "eosin/o",
        "伊红染料"
      ],
      [
        "-phil-",
        "亲和、易着色"
      ],
      [
        "-ic",
        "……的"
      ]
    ],
    "note": "eosinophil 整体为嗜酸性粒细胞；名称来自其颗粒易被伊红染色，并非喜好酸性环境。"
  },
  "hypergranulosis": {
    "gloss": "颗粒层增厚",
    "parts": [
      [
        "hyper-",
        "过度、增多"
      ],
      [
        "granul-",
        "颗粒；此处指表皮颗粒层"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "hyperhidrosis": {
    "gloss": "多汗症",
    "parts": [
      [
        "hyper-",
        "过多"
      ],
      [
        "hidr/o",
        "汗"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "hyperimmunoglobulin": {
    "gloss": "免疫球蛋白增多的",
    "parts": [
      [
        "hyper-",
        "过多、升高"
      ],
      [
        "immun/o",
        "免疫"
      ],
      [
        "globulin",
        "球蛋白"
      ]
    ],
    "note": "在 hyperimmunoglobulin E syndrome 中特指免疫球蛋白 E（IgE）升高。"
  },
  "hyperkeratosis": {
    "gloss": "角化过度",
    "parts": [
      [
        "hyper-",
        "过度"
      ],
      [
        "kerat/o",
        "角质、角蛋白"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "hyperpigmentation": {
    "gloss": "色素沉着增多",
    "parts": [
      [
        "hyper-",
        "过多"
      ],
      [
        "pigment",
        "色素"
      ],
      [
        "-ation",
        "过程或状态"
      ]
    ]
  },
  "hyperplasia": {
    "gloss": "增生",
    "parts": [
      [
        "hyper-",
        "过多、过度"
      ],
      [
        "-plasia",
        "形成、发育、增生"
      ]
    ],
    "note": "病理学指细胞数量增加，与细胞体积增大的肥大不同。"
  },
  "hypohidrotic": {
    "gloss": "少汗的、出汗减少的",
    "parts": [
      [
        "hypo-",
        "不足、减少"
      ],
      [
        "hidr/o",
        "汗"
      ],
      [
        "-otic",
        "与某状态有关的形容词后缀"
      ]
    ],
    "note": "hypo- 本义为减少；与 anhidrotic（无汗的）有区别。原书此病名中文采用“无汗性”。"
  },
  "hypomelanosis": {
    "gloss": "黑素减少、色素减退",
    "parts": [
      [
        "hypo-",
        "减少、不足"
      ],
      [
        "melan/o",
        "黑色、黑素"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "ichthyosiform": {
    "gloss": "鱼鳞病样的",
    "parts": [
      [
        "ichthyos-",
        "鱼鳞病；源自鱼、鱼鳞"
      ],
      [
        "-iform",
        "呈……形态的"
      ]
    ]
  },
  "ichthyosis": {
    "gloss": "鱼鳞病",
    "parts": [
      [
        "ichthy/o",
        "鱼、鱼鳞样"
      ],
      [
        "-osis",
        "疾病或异常状态"
      ]
    ],
    "note": "以皮肤干燥及鱼鳞样鳞屑命名。"
  },
  "IgA": {
    "gloss": "免疫球蛋白 A",
    "note": "缩写：immunoglobulin A；Ig 为免疫球蛋白，A 为其类别，不作词根拆分。"
  },
  "igne": {
    "gloss": "火、热（词形变化）",
    "note": "拉丁语 ignis（火）的变格形式；ab igne 表示“由火或热所致”。"
  },
  "immunodeficiency": {
    "gloss": "免疫缺陷",
    "parts": [
      [
        "immun/o",
        "免疫"
      ],
      [
        "deficiency",
        "缺乏、不足"
      ]
    ]
  },
  "impetigo": {
    "gloss": "脓疱疮",
    "note": "传统拉丁病名，整体记忆；不把相似字母强拆成现代医学词根。"
  },
  "incontinence": {
    "gloss": "失禁；此处指色素失禁",
    "note": "普通词在病理语境中表示色素未被正常保留；不指排尿失禁。"
  },
  "incontinentia": {
    "gloss": "失禁（拉丁语名词）",
    "note": "incontinentia pigmenti 是固定病名，中文为色素失调症；不可只按字面理解整病。"
  },
  "infantile": {
    "gloss": "婴儿的、婴儿期的",
    "parts": [
      [
        "infant",
        "婴儿"
      ],
      [
        "-ile",
        "……的"
      ]
    ]
  },
  "infantilis": {
    "gloss": "婴儿的、婴儿期的",
    "note": "拉丁语形容词，相当于 infantile。"
  },
  "infection": {
    "gloss": "感染"
  },
  "infectious": {
    "gloss": "传染性的、感染性的",
    "parts": [
      [
        "infect-",
        "感染"
      ],
      [
        "-ious",
        "具有……性质的"
      ]
    ]
  },
  "insect": {
    "gloss": "昆虫"
  },
  "intercellular": {
    "gloss": "细胞间的",
    "parts": [
      [
        "inter-",
        "在……之间"
      ],
      [
        "cellul-",
        "细胞"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "intermittent": {
    "gloss": "间歇性的、时有时无的"
  },
  "intertrigo": {
    "gloss": "擦烂；皮肤皱褶部位的炎症",
    "note": "传统病名，源于相互摩擦之意；整体记忆。"
  },
  "intracellular": {
    "gloss": "细胞内的",
    "parts": [
      [
        "intra-",
        "在……之内"
      ],
      [
        "cellul-",
        "细胞"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "inversa": {
    "gloss": "反向的、反常的",
    "note": "拉丁语形容词；acne inversa 是反常性痤疮这一传统病名。"
  },
  "irritant": {
    "gloss": "刺激性的；刺激物"
  },
  "isomorphism": {
    "gloss": "同形反应",
    "parts": [
      [
        "iso-",
        "相同"
      ],
      [
        "morph-",
        "形态"
      ],
      [
        "-ism",
        "现象或状态"
      ]
    ],
    "note": "此处指在损伤部位出现与原有皮病相同类型皮损的现象。"
  },
  "Ito": {
    "gloss": "伊藤（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "Jarisch-Herxheimer": {
    "gloss": "雅里施—赫克斯海默（人名）",
    "note": "两位医师的姓氏；Jarisch-Herxheimer reaction 简称吉海反应，不作词根拆分。"
  },
  "Kaposi": {
    "gloss": "卡波西（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "keloid": {
    "gloss": "瘢痕疙瘩",
    "note": "历史词源以蟹螯状外观比喻；现代医学中作为完整病名记忆。"
  },
  "keratin": {
    "gloss": "角蛋白",
    "parts": [
      [
        "kerat-",
        "角、角质"
      ],
      [
        "-in",
        "物质名词后缀"
      ]
    ],
    "note": "kerat- 在眼科还可指角膜；此处指角质。"
  },
  "keratoacanthoma": {
    "gloss": "角化棘皮瘤",
    "parts": [
      [
        "kerat/o",
        "角质、角化"
      ],
      [
        "acanth-",
        "棘；此处指表皮棘层"
      ],
      [
        "-oma",
        "肿瘤、肿块"
      ]
    ]
  },
  "keratoderma": {
    "gloss": "皮肤角化性增厚；角化症",
    "parts": [
      [
        "kerat/o",
        "角质、角化"
      ],
      [
        "derma",
        "皮肤"
      ]
    ]
  },
  "keratohyalin": {
    "gloss": "透明角质",
    "parts": [
      [
        "kerat/o",
        "角质"
      ],
      [
        "hyalin",
        "透明样、玻璃样物质"
      ]
    ]
  },
  "keratosis": {
    "gloss": "角化病、角化性病变",
    "parts": [
      [
        "kerat/o",
        "角质、角化"
      ],
      [
        "-osis",
        "异常状态、疾病"
      ]
    ]
  },
  "lamellar": {
    "gloss": "板层状的",
    "parts": [
      [
        "lamell-",
        "薄板、小层片"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "lamina": {
    "gloss": "层、薄板（拉丁语名词）"
  },
  "Langerhans": {
    "gloss": "朗格汉斯（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "laser": {
    "gloss": "激光",
    "note": "缩略词演变成普通名词；源自 light amplification by stimulated emission of radiation，即受激辐射光放大。"
  },
  "lata": {
    "gloss": "宽的、扁平宽阔的",
    "note": "拉丁语形容词词形；在 condyloma lata 中描述扁平湿疣。"
  },
  "laxa": {
    "gloss": "松弛的",
    "note": "拉丁语形容词；cutis laxa 整体为皮肤松弛症。"
  },
  "LE": {
    "gloss": "红斑狼疮",
    "note": "lupus erythematosus 的缩写，不作医学词根拆分。"
  },
  "leiomyoma": {
    "gloss": "平滑肌瘤",
    "parts": [
      [
        "lei/o",
        "平滑"
      ],
      [
        "my/o",
        "肌肉"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ]
  },
  "leishmaniasis": {
    "gloss": "利什曼病",
    "parts": [
      [
        "Leishmania",
        "利什曼原虫属"
      ],
      [
        "-iasis",
        "感染或疾病状态"
      ]
    ],
    "note": "Leishmania 的属名来自人名；不将其强拆为一般医学词根。"
  },
  "lentigo": {
    "gloss": "雀斑样痣",
    "note": "来自拉丁语扁豆之意，以小斑点外形比喻；整体记忆。"
  },
  "leprosy": {
    "gloss": "麻风",
    "note": "完整疾病名，不强拆成现代医学词根。"
  },
  "lesion": {
    "gloss": "损害、病灶；这里通常指皮损"
  },
  "leukemia": {
    "gloss": "白血病",
    "parts": [
      [
        "leuk/o",
        "白色；此处关联白细胞"
      ],
      [
        "-emia",
        "血液状态"
      ]
    ],
    "note": "属于造血系统恶性疾病，不能仅按字面解释成白细胞增多。"
  },
  "leukoderma": {
    "gloss": "白斑、皮肤色素减退",
    "parts": [
      [
        "leuk/o",
        "白色"
      ],
      [
        "derma",
        "皮肤"
      ]
    ]
  },
  "leukoplakia": {
    "gloss": "白斑病",
    "parts": [
      [
        "leuk/o",
        "白色"
      ],
      [
        "plak-",
        "斑块、板片"
      ],
      [
        "-ia",
        "状态"
      ]
    ]
  },
  "lichen": {
    "gloss": "苔藓；医学病名中的苔藓样皮损",
    "note": "来自苔藓的外观比喻，不意味着皮肤被苔藓或真菌感染。"
  },
  "lichenification": {
    "gloss": "苔藓样变",
    "parts": [
      [
        "lichen",
        "苔藓样皮损"
      ],
      [
        "-ification",
        "形成、变成……的过程"
      ]
    ]
  },
  "lichenoides": {
    "gloss": "苔藓样的",
    "parts": [
      [
        "lichen",
        "苔藓；苔藓样皮损"
      ],
      [
        "-oides",
        "类似……的（拉丁化希腊语后缀）"
      ]
    ]
  },
  "light": {
    "gloss": "光；这里指日光"
  },
  "line": {
    "gloss": "线、线条"
  },
  "linear": {
    "gloss": "线状的",
    "parts": [
      [
        "line",
        "线"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "lipodystrophia": {
    "gloss": "脂肪营养不良",
    "parts": [
      [
        "lip/o",
        "脂肪"
      ],
      [
        "dys-",
        "异常、不良"
      ],
      [
        "troph-",
        "营养、生长"
      ],
      [
        "-ia",
        "状态"
      ]
    ],
    "note": "lipodystrophy 的拉丁化形式。"
  },
  "lipodystrophy": {
    "gloss": "脂肪营养不良",
    "parts": [
      [
        "lip/o",
        "脂肪"
      ],
      [
        "dys-",
        "异常、不良"
      ],
      [
        "-trophy",
        "营养、生长"
      ]
    ]
  },
  "lipoma": {
    "gloss": "脂肪瘤",
    "parts": [
      [
        "lip/o",
        "脂肪"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ]
  },
  "lipomatosus": {
    "gloss": "脂肪瘤样的、脂肪组织丰富的",
    "parts": [
      [
        "lipomat-",
        "脂肪瘤（lipoma 的词干）"
      ],
      [
        "-osus",
        "具有……特征的（拉丁语形容词形式）"
      ]
    ],
    "note": "在 naevus lipomatosus superficialis 中指含异位成熟脂肪细胞的痣。"
  },
  "liquefaction": {
    "gloss": "液化",
    "parts": [
      [
        "liqu-",
        "液体、液态"
      ],
      [
        "-faction",
        "使成为……的过程"
      ]
    ]
  },
  "livedo": {
    "gloss": "青斑",
    "note": "拉丁医学名词，以皮肤青紫色斑纹命名，作为整体记忆。"
  },
  "livedoid": {
    "gloss": "青斑样的",
    "parts": [
      [
        "livedo",
        "青斑"
      ],
      [
        "-oid",
        "类似……的"
      ]
    ]
  },
  "lobular": {
    "gloss": "小叶的、小叶性的",
    "parts": [
      [
        "lobul-",
        "小叶"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "localized": {
    "gloss": "局限性的、限于某一区域的"
  },
  "lupus": {
    "gloss": "狼疮",
    "note": "拉丁语原义为狼，是历史病名；不是感染狼或由狼传播之意。"
  },
  "Lyme": {
    "gloss": "莱姆（地名）",
    "note": "来自美国地名；莱姆病及莱姆关节炎的人文命名成分，不作医学词根拆分。"
  },
  "lymphadenopathy": {
    "gloss": "淋巴结病、淋巴结异常",
    "parts": [
      [
        "lymph/o",
        "淋巴"
      ],
      [
        "aden/o",
        "腺；此处指淋巴结"
      ],
      [
        "-pathy",
        "疾病、病变"
      ]
    ]
  },
  "lymphatic": {
    "gloss": "淋巴的、淋巴管的",
    "parts": [
      [
        "lymph-",
        "淋巴"
      ],
      [
        "-atic",
        "……的"
      ]
    ]
  },
  "lymphogranuloma": {
    "gloss": "淋巴肉芽肿",
    "parts": [
      [
        "lymph/o",
        "淋巴"
      ],
      [
        "granuloma",
        "肉芽肿"
      ]
    ]
  },
  "lymphoma": {
    "gloss": "淋巴瘤",
    "parts": [
      [
        "lymph/o",
        "淋巴、淋巴组织"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ]
  },
  "lymphomatoid": {
    "gloss": "淋巴瘤样的",
    "parts": [
      [
        "lymphomat-",
        "淋巴瘤（lymphoma 的词干）"
      ],
      [
        "-oid",
        "类似……的"
      ]
    ]
  },
  "maceration": {
    "gloss": "浸渍；因持续潮湿而变白、变软"
  },
  "macrocystic": {
    "gloss": "巨囊性的、大囊性的",
    "parts": [
      [
        "macro-",
        "大"
      ],
      [
        "cyst-",
        "囊"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "macular": {
    "gloss": "斑状的、斑疹性的",
    "parts": [
      [
        "macul-",
        "斑、斑疹"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "macule": {
    "gloss": "斑疹",
    "note": "完整皮损形态名词；指局限的皮肤颜色改变，无可触及的隆起。"
  },
  "maculopapule": {
    "gloss": "斑丘疹",
    "parts": [
      [
        "macul/o",
        "斑疹"
      ],
      [
        "papule",
        "丘疹"
      ]
    ]
  },
  "Majocchi": {
    "gloss": "马约基（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "malformation": {
    "gloss": "畸形",
    "parts": [
      [
        "mal-",
        "不良、异常"
      ],
      [
        "formation",
        "形成、发育"
      ]
    ]
  },
  "malignant": {
    "gloss": "恶性的"
  },
  "manus": {
    "gloss": "手（拉丁语名词）"
  },
  "massive": {
    "gloss": "巨大的、大量的、显著的"
  },
  "mastocytosis": {
    "gloss": "肥大细胞增多症",
    "parts": [
      [
        "mastocyt-",
        "肥大细胞"
      ],
      [
        "-osis",
        "异常增多或疾病状态"
      ]
    ],
    "note": "mast cell 是肥大细胞的固定名称，cyt 指细胞；这里的 mast- 不表示乳房，不能套用 mast/o（乳房）来解释。"
  },
  "matrix": {
    "gloss": "基质；在组织结构中也可指甲母质等"
  },
  "measles": {
    "gloss": "麻疹",
    "note": "完整普通英语疾病名，不作希腊拉丁医学词根拆分。"
  },
  "medicamentose-like": {
    "gloss": "药疹样的、类似药物所致的",
    "parts": [
      [
        "medicamentose",
        "药物相关的（原词条用法）"
      ],
      [
        "-like",
        "像……的"
      ]
    ],
    "note": "原书采用 medicamentose-like 表达“药疹样”；不是常见的标准医学复合构词。"
  },
  "melanocyte": {
    "gloss": "黑素细胞",
    "parts": [
      [
        "melan/o",
        "黑色、黑素"
      ],
      [
        "-cyte",
        "细胞"
      ]
    ]
  },
  "melanoma": {
    "gloss": "黑色素瘤",
    "parts": [
      [
        "melan/o",
        "黑色、黑素"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ],
    "note": "临床指黑素细胞的恶性肿瘤。"
  },
  "melanosis": {
    "gloss": "黑变病、黑素沉着增多",
    "parts": [
      [
        "melan/o",
        "黑色、黑素"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ]
  },
  "melanosome": {
    "gloss": "黑素小体",
    "parts": [
      [
        "melan/o",
        "黑色、黑素"
      ],
      [
        "-some",
        "小体"
      ]
    ]
  },
  "melasma": {
    "gloss": "黄褐斑",
    "note": "完整皮肤病名，源于变黑之意；不将 melasma 中的相似字母硬拆为常规现代后缀。"
  },
  "membrane": {
    "gloss": "膜"
  },
  "Merkel": {
    "gloss": "梅克尔（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "metalloproteinase": {
    "gloss": "金属蛋白酶",
    "parts": [
      [
        "metallo-",
        "金属"
      ],
      [
        "protein",
        "蛋白质"
      ],
      [
        "-ase",
        "酶"
      ]
    ],
    "note": "指催化功能依赖金属离子的蛋白水解酶。"
  },
  "metastasis": {
    "gloss": "转移；这里指肿瘤转移",
    "parts": [
      [
        "meta-",
        "改变、转移"
      ],
      [
        "-stasis",
        "位置、停留"
      ]
    ],
    "note": "整体医学义为病灶向原发部位以外扩散，不能仅凭 -stasis 推断为淤滞。"
  },
  "microcystic": {
    "gloss": "微囊性的、小囊性的",
    "parts": [
      [
        "micro-",
        "小、微小"
      ],
      [
        "cyst-",
        "囊"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "migrans": {
    "gloss": "游走的、迁移的",
    "note": "拉丁语分词形式，来自迁移之意。"
  },
  "miliaria": {
    "gloss": "痱、汗疹",
    "note": "传统病名，源于粟粒样小疹的外观比喻；整体记忆。"
  },
  "milium": {
    "gloss": "粟丘疹",
    "note": "拉丁语原义为粟粒，以外观命名；milia 是其复数形式。"
  },
  "mixed": {
    "gloss": "混合的"
  },
  "molluscum": {
    "gloss": "软疣（固定病名组成部分）",
    "note": "源于柔软之意；在 molluscum contagiosum 中整体表示传染性软疣，不是“软体动物感染”。"
  },
  "Mongolian": {
    "gloss": "蒙古的；此处为蒙古斑旧称中的修饰词",
    "note": "地理、族群相关形容词，不作医学词根拆分。"
  },
  "mononucleosis": {
    "gloss": "单核细胞增多症",
    "parts": [
      [
        "mono-",
        "单、一"
      ],
      [
        "nucle-",
        "核"
      ],
      [
        "-osis",
        "异常增多或疾病状态"
      ]
    ],
    "note": "mono-＋nucle- 合指单核细胞；不能把 mono- 误解为数量减少。"
  },
  "mononucleosis-ampicillin": {
    "gloss": "单核细胞增多症—氨苄西林",
    "parts": [
      [
        "mononucleosis",
        "单核细胞增多症"
      ],
      [
        "ampicillin",
        "氨苄西林（药名）"
      ]
    ],
    "note": "连字符连接疾病名与药名；完整词组指传染性单核细胞增多症—氨苄西林综合征。"
  },
  "morphea": {
    "gloss": "硬斑病；局限性硬皮病",
    "note": "历史疾病专名，整体记忆，不按 morph-（形态）强行推导临床含义。"
  },
  "mosaic": {
    "gloss": "镶嵌状的；此处描述成片聚集的疣"
  },
  "mucinous": {
    "gloss": "黏液性的、黏蛋白样的",
    "parts": [
      [
        "mucin",
        "黏蛋白"
      ],
      [
        "-ous",
        "具有……性质的"
      ]
    ]
  },
  "mucocutaneous": {
    "gloss": "黏膜皮肤的",
    "parts": [
      [
        "muc/o",
        "黏液；此处关联黏膜"
      ],
      [
        "cutane-",
        "皮肤"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "multiforme": {
    "gloss": "多形性的",
    "parts": [
      [
        "multi-",
        "多、多个"
      ],
      [
        "form-",
        "形态"
      ],
      [
        "-e",
        "拉丁语形容词词尾"
      ]
    ]
  },
  "multiformis": {
    "gloss": "多形性的",
    "parts": [
      [
        "multi-",
        "多、多个"
      ],
      [
        "-formis",
        "……形态的（拉丁语形式）"
      ]
    ]
  },
  "multiplex": {
    "gloss": "多发的、多处的",
    "note": "拉丁语形容词；在 steatocystoma multiplex 中表示多发。"
  },
  "mycosis": {
    "gloss": "真菌病（字面义）；此词组中为蕈样肉芽肿病历史名称的一部分",
    "parts": [
      [
        "myc/o",
        "真菌、蘑菇"
      ],
      [
        "-osis",
        "疾病、异常状态"
      ]
    ],
    "note": "mycosis fungoides 实为皮肤 T 细胞淋巴瘤，不是真菌感染；不可用词根字面义代替完整病名。"
  },
  "myxedema": {
    "gloss": "黏液性水肿",
    "parts": [
      [
        "myx-",
        "黏液"
      ],
      [
        "edema",
        "水肿"
      ]
    ],
    "note": "两部分连接时构成 myx-edema；不是肌肉（my/o）水肿。"
  },
  "myxedematosus": {
    "gloss": "黏液水肿性的",
    "parts": [
      [
        "myxedemat-",
        "黏液性水肿（myxedema 的词干）"
      ],
      [
        "-osus",
        "具有……特征的（拉丁语形式）"
      ]
    ]
  },
  "myxoid": {
    "gloss": "黏液样的",
    "parts": [
      [
        "myx-",
        "黏液"
      ],
      [
        "-oid",
        "类似……的"
      ]
    ]
  },
  "naevus": {
    "gloss": "痣",
    "note": "nevus 的另一种拼写；完整医学名词，不强拆词根。"
  },
  "nail": {
    "gloss": "甲、指（趾）甲"
  },
  "nasal": {
    "gloss": "鼻的、鼻型的",
    "parts": [
      [
        "nas-",
        "鼻"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "necrobiosis": {
    "gloss": "渐进性坏死",
    "parts": [
      [
        "necr/o",
        "死亡、坏死"
      ],
      [
        "bi/o",
        "生命"
      ],
      [
        "-osis",
        "病变、状态"
      ]
    ],
    "note": "是完整病理术语，指组织逐渐变性并坏死，不按各词根逐字相加下定义。"
  },
  "necrolysis": {
    "gloss": "坏死松解",
    "parts": [
      [
        "necr/o",
        "坏死"
      ],
      [
        "-lysis",
        "分解、松解"
      ]
    ]
  },
  "necrosis": {
    "gloss": "坏死",
    "parts": [
      [
        "necr-",
        "死亡、坏死"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ]
  },
  "nematocyst": {
    "gloss": "刺丝囊（刺胞内的刺击结构）",
    "parts": [
      [
        "nemat/o",
        "线、丝"
      ],
      [
        "cyst",
        "囊"
      ]
    ],
    "note": "在 nematocyst dermatitis 中指水母等刺胞动物的刺丝囊导致的皮炎。"
  },
  "neonatal": {
    "gloss": "新生儿的",
    "parts": [
      [
        "neo-",
        "新"
      ],
      [
        "nat-",
        "出生"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "neonatorum": {
    "gloss": "新生儿的（拉丁语复数属格形式）",
    "note": "在 impetigo neonatorum 中修饰脓疱疮；与 neonatal 表达相近。"
  },
  "neoplasm": {
    "gloss": "新生物、肿瘤",
    "parts": [
      [
        "neo-",
        "新"
      ],
      [
        "-plasm",
        "形成物、增生组织"
      ]
    ]
  },
  "neuralgia": {
    "gloss": "神经痛",
    "parts": [
      [
        "neur-",
        "神经"
      ],
      [
        "-algia",
        "疼痛"
      ]
    ]
  },
  "neurofibromatosis": {
    "gloss": "神经纤维瘤病",
    "parts": [
      [
        "neur/o",
        "神经"
      ],
      [
        "fibr/o",
        "纤维组织"
      ],
      [
        "-oma",
        "肿瘤"
      ],
      [
        "-osis",
        "疾病、异常状态"
      ]
    ],
    "note": "fibroma 接 -osis 时采用 fibromat- 词干。"
  },
  "neuropsychiatric": {
    "gloss": "神经精神性的",
    "parts": [
      [
        "neur/o",
        "神经"
      ],
      [
        "psych-",
        "精神、心理"
      ],
      [
        "iatr-",
        "医疗、医学"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "neurosyphilis": {
    "gloss": "神经梅毒",
    "parts": [
      [
        "neur/o",
        "神经"
      ],
      [
        "syphilis",
        "梅毒"
      ]
    ],
    "note": "syphilis 为完整疾病名称，不作规则词根硬拆。"
  },
  "neutrophilic": {
    "gloss": "嗜中性粒细胞性的",
    "parts": [
      [
        "neutr/o",
        "中性"
      ],
      [
        "-phil-",
        "亲和、易着色"
      ],
      [
        "-ic",
        "……的"
      ]
    ],
    "note": "neutrophil 为嗜中性粒细胞；名称来自染色特征，不表示“神经”。"
  },
  "nevoid": {
    "gloss": "痣样的",
    "parts": [
      [
        "nev-",
        "痣"
      ],
      [
        "-oid",
        "类似……的"
      ]
    ]
  },
  "nevus": {
    "gloss": "痣",
    "note": "完整医学名词，naevus 是另一种拼写。"
  },
  "nicotinic": {
    "gloss": "烟酸的（在 nicotinic acid 中）",
    "note": "nicotinic acid 是烟酸、维生素 B3 的固定化学名称；不要把完整病名解释为尼古丁缺乏。"
  },
  "nigricans": {
    "gloss": "变黑的、黑色的",
    "note": "拉丁语分词形容词；在 acanthosis nigricans 中描述黑色外观。"
  },
  "Nikolsky": {
    "gloss": "尼科利斯基（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "nitidus": {
    "gloss": "有光泽的、光亮的",
    "note": "拉丁语形容词；lichen nitidus 为光泽苔藓。"
  },
  "NK": {
    "gloss": "自然杀伤细胞",
    "note": "natural killer 的缩写；在 NK/T-cell 中与 T 细胞并列，不作词根拆分。"
  },
  "nodosa": {
    "gloss": "结节性的（拉丁语形容词形式）",
    "parts": [
      [
        "nod-",
        "结、结节"
      ],
      [
        "-osa",
        "具有……特征的"
      ]
    ]
  },
  "nodosum": {
    "gloss": "结节性的（拉丁语形容词形式）",
    "parts": [
      [
        "nod-",
        "结、结节"
      ],
      [
        "-osum",
        "具有……特征的"
      ]
    ]
  },
  "nodular": {
    "gloss": "结节性的",
    "parts": [
      [
        "nodul-",
        "小结、结节"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "nodularis": {
    "gloss": "结节性的（拉丁语形式）",
    "parts": [
      [
        "nodul-",
        "小结、结节"
      ],
      [
        "-aris",
        "……的"
      ]
    ]
  },
  "nodule": {
    "gloss": "结节",
    "note": "来自“小结”的词形；完整皮损形态名词。"
  },
  "nonbullous": {
    "gloss": "非大疱性的",
    "parts": [
      [
        "non-",
        "非、无"
      ],
      [
        "bull-",
        "大疱"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "nummular": {
    "gloss": "钱币状的",
    "parts": [
      [
        "nummul-",
        "小钱币"
      ],
      [
        "-ar",
        "……形态的"
      ]
    ]
  },
  "obliterans": {
    "gloss": "闭塞性的、使组织结构消失的",
    "note": "拉丁语分词；balanitis xerotica obliterans 中的描述词。"
  },
  "occupational": {
    "gloss": "职业性的、与工作暴露有关的",
    "parts": [
      [
        "occupation",
        "职业、工作"
      ],
      [
        "-al",
        "与……有关的"
      ]
    ]
  },
  "of": {
    "gloss": "……的；连接所属或相关关系的介词",
    "note": "普通英语功能词，不作医学词根拆分。"
  },
  "oil": {
    "gloss": "油、油脂"
  },
  "onychocryptosis": {
    "gloss": "嵌甲",
    "parts": [
      [
        "onych/o",
        "甲、指（趾）甲"
      ],
      [
        "crypt-",
        "隐藏"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ],
    "note": "字面为甲被隐藏，临床指甲缘嵌入周围软组织。"
  },
  "ophthalmicus": {
    "gloss": "眼的、眼部的",
    "parts": [
      [
        "ophthalm-",
        "眼"
      ],
      [
        "-icus",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "oral": {
    "gloss": "口腔的",
    "parts": [
      [
        "or-",
        "口"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "Ota": {
    "gloss": "太田（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "oticus": {
    "gloss": "耳的、耳部的",
    "parts": [
      [
        "ot-",
        "耳"
      ],
      [
        "-icus",
        "……的（拉丁语形容词形式）"
      ]
    ]
  },
  "overlap": {
    "gloss": "重叠；重叠的"
  },
  "paederus": {
    "gloss": "隐翅虫属",
    "note": "生物属名；Paederus dermatitis 为隐翅虫皮炎，不作一般医学词根拆分。"
  },
  "Paget": {
    "gloss": "佩吉特（人名）",
    "note": "人名命名，不作医学词根拆分。"
  },
  "pain": {
    "gloss": "疼痛"
  },
  "pallidum": {
    "gloss": "苍白的（拉丁语形容词）",
    "note": "Treponema pallidum 为梅毒螺旋体的学名；pallidum 是种加词，整体物种名为固定名称。"
  },
  "palmoplantar": {
    "gloss": "掌跖的",
    "parts": [
      [
        "palm/o",
        "手掌"
      ],
      [
        "plant-",
        "足底"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "panniculitis": {
    "gloss": "脂膜炎",
    "parts": [
      [
        "pannicul-",
        "皮下脂膜、皮下脂肪层"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "papilloma": {
    "gloss": "乳头瘤",
    "parts": [
      [
        "papill-",
        "乳头状突起"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ],
    "note": "papill- 在这里描述乳头状结构，不限定于乳房乳头。"
  },
  "papillomatosis": {
    "gloss": "乳头瘤样增生",
    "parts": [
      [
        "papillomat-",
        "乳头瘤（papilloma 的词干）"
      ],
      [
        "-osis",
        "增生或异常状态"
      ]
    ]
  },
  "papule": {
    "gloss": "丘疹",
    "note": "完整皮损形态名词，指局限、实性的皮肤隆起。"
  },
  "papulopustule": {
    "gloss": "丘脓疱疹、脓丘疱疹",
    "parts": [
      [
        "papul/o",
        "丘疹"
      ],
      [
        "pustule",
        "脓疱"
      ]
    ],
    "note": "由丘疹与脓疱两种皮损形态合成。"
  },
  "papulosis": {
    "gloss": "丘疹病",
    "parts": [
      [
        "papul-",
        "丘疹"
      ],
      [
        "-osis",
        "疾病或异常状态"
      ]
    ]
  },
  "papulovesicle": {
    "gloss": "丘疱疹",
    "parts": [
      [
        "papul/o",
        "丘疹"
      ],
      [
        "vesicle",
        "小水疱"
      ]
    ]
  },
  "parakeratosis": {
    "gloss": "角化不全",
    "parts": [
      [
        "para-",
        "异常、不正常"
      ],
      [
        "kerat/o",
        "角质、角化"
      ],
      [
        "-osis",
        "异常状态"
      ]
    ],
    "note": "组织学上常指角质层细胞仍保留细胞核；para- 在此不表示旁边。"
  },
  "paraneoplastic": {
    "gloss": "副肿瘤性的、与肿瘤伴随的",
    "parts": [
      [
        "para-",
        "伴随、相关"
      ],
      [
        "neo-",
        "新"
      ],
      [
        "plast-",
        "形成、增生"
      ],
      [
        "-ic",
        "……的"
      ]
    ],
    "note": "neoplastic 整体指肿瘤性的；副肿瘤效应并非肿瘤直接浸润或转移。"
  },
  "paronychia": {
    "gloss": "甲沟炎",
    "parts": [
      [
        "para-",
        "在……旁"
      ],
      [
        "onych-",
        "甲"
      ],
      [
        "-ia",
        "病理状态"
      ]
    ],
    "note": "para- 与元音起始的 onych- 连接时发生词形缩合。"
  },
  "patch": {
    "gloss": "斑片",
    "note": "皮损形态名词，在本词库中指较大的平坦颜色改变。"
  },
  "pattern": {
    "gloss": "图案、纹理分布"
  },
  "pearl": {
    "gloss": "珠；在 squamous pearl 中指角珠",
    "note": "普通英语名词；病理学以同心层状角化结构比喻珍珠。"
  },
  "pedes": {
    "gloss": "足（拉丁语复数）",
    "note": "pes（足）的复数形式，出现在手足皲裂的拉丁名称中。"
  },
  "pediculosis": {
    "gloss": "虱病",
    "parts": [
      [
        "pedicul-",
        "虱"
      ],
      [
        "-osis",
        "疾病、异常状态"
      ]
    ]
  },
  "pemphigoid": {
    "gloss": "类天疱疮",
    "parts": [
      [
        "pemphig-",
        "疱"
      ],
      [
        "-oid",
        "类似……的"
      ]
    ],
    "note": "名称表示类似天疱疮，但类天疱疮与天疱疮是不同的疾病类别。"
  },
  "pemphigus": {
    "gloss": "天疱疮",
    "note": "源自希腊语 pemphix（水疱）；整体记忆，不强行拆分。"
  },
  "perforating": {
    "gloss": "穿通的；穿通型的",
    "parts": [
      [
        "per-",
        "穿过"
      ],
      [
        "forat-",
        "穿孔"
      ],
      [
        "-ing",
        "表示正在进行或具有某种性质"
      ]
    ]
  },
  "perianal": {
    "gloss": "肛周的",
    "parts": [
      [
        "peri-",
        "周围"
      ],
      [
        "an/o",
        "肛门"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "perioral": {
    "gloss": "口周的",
    "parts": [
      [
        "peri-",
        "周围"
      ],
      [
        "or/o",
        "口"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "peristomatous": {
    "gloss": "口周的",
    "parts": [
      [
        "peri-",
        "周围"
      ],
      [
        "stomat/o",
        "口"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "periungual": {
    "gloss": "甲周的",
    "parts": [
      [
        "peri-",
        "周围"
      ],
      [
        "ungu/o",
        "指甲、趾甲"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "pernio": {
    "gloss": "冻疮",
    "note": "传统疾病名称，整体记忆。"
  },
  "petechia": {
    "gloss": "瘀点；点状出血",
    "note": "petechiae 为复数；整体记忆。"
  },
  "phenomenon": {
    "gloss": "现象"
  },
  "photoaging": {
    "gloss": "光老化",
    "parts": [
      [
        "phot/o",
        "光"
      ],
      [
        "aging",
        "老化"
      ]
    ]
  },
  "photoallergic": {
    "gloss": "光过敏性的",
    "parts": [
      [
        "phot/o",
        "光"
      ],
      [
        "allerg-",
        "过敏"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "photodermatitis": {
    "gloss": "光性皮炎",
    "parts": [
      [
        "phot/o",
        "光"
      ],
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "photosensitizing": {
    "gloss": "引起光敏感的；光敏化的",
    "parts": [
      [
        "phot/o",
        "光"
      ],
      [
        "sensitizing",
        "使敏感、使致敏"
      ]
    ]
  },
  "phototoxic": {
    "gloss": "光毒性的",
    "parts": [
      [
        "phot/o",
        "光"
      ],
      [
        "tox/o",
        "毒"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "piebaldism": {
    "gloss": "斑驳病",
    "parts": [
      [
        "piebald",
        "斑驳的"
      ],
      [
        "-ism",
        "状态、病症"
      ]
    ]
  },
  "pigment": {
    "gloss": "色素"
  },
  "pigmentary": {
    "gloss": "色素性的",
    "parts": [
      [
        "pigment",
        "色素"
      ],
      [
        "-ary",
        "与……有关的"
      ]
    ]
  },
  "pigmented": {
    "gloss": "含色素的；色素性的",
    "parts": [
      [
        "pigment",
        "色素"
      ],
      [
        "-ed",
        "具有……的"
      ]
    ]
  },
  "pigmenti": {
    "gloss": "色素的",
    "note": "pigmentum 的拉丁语属格；incontinentia pigmenti 是色素失调症的固定病名。"
  },
  "pigmentosa": {
    "gloss": "色素性的",
    "note": "拉丁语形容词词形；与 pigment（色素）相关。"
  },
  "pigmentosum": {
    "gloss": "色素性的；着色的",
    "note": "拉丁语形容词词形；xeroderma pigmentosum 为着色性干皮病。"
  },
  "pilaris": {
    "gloss": "毛发的；毛周的",
    "parts": [
      [
        "pil/o",
        "毛发"
      ],
      [
        "-aris",
        "……的（拉丁语形容词词尾）"
      ]
    ]
  },
  "pityriasis": {
    "gloss": "糠疹",
    "parts": [
      [
        "pityr-",
        "糠、麸皮样鳞屑"
      ],
      [
        "-iasis",
        "病理状态"
      ]
    ]
  },
  "plana": {
    "gloss": "扁平的",
    "note": "拉丁语形容词词形；与 planus 同源。"
  },
  "plantar": {
    "gloss": "足底的；跖侧的",
    "parts": [
      [
        "plant/o",
        "足底"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "plantaris": {
    "gloss": "足底的；跖侧的",
    "note": "plantar 的拉丁语形容词形式。"
  },
  "planus": {
    "gloss": "扁平的",
    "note": "拉丁语形容词，lichen planus 为扁平苔藓。"
  },
  "plaque": {
    "gloss": "斑块"
  },
  "poikiloderma": {
    "gloss": "皮肤异色症",
    "parts": [
      [
        "poikil/o",
        "多样、斑驳"
      ],
      [
        "-derma",
        "皮肤状态"
      ]
    ]
  },
  "polyangiitis": {
    "gloss": "多血管炎",
    "parts": [
      [
        "poly-",
        "多"
      ],
      [
        "angi/o",
        "血管"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "polyarteritis": {
    "gloss": "多动脉炎",
    "parts": [
      [
        "poly-",
        "多"
      ],
      [
        "arteri/o",
        "动脉"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "polymorphous": {
    "gloss": "多形性的",
    "parts": [
      [
        "poly-",
        "多"
      ],
      [
        "morph/o",
        "形态"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "polymyositis": {
    "gloss": "多发性肌炎",
    "parts": [
      [
        "poly-",
        "多"
      ],
      [
        "my/o",
        "肌肉"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "pompholyx": {
    "gloss": "汗疱疹",
    "note": "源于表示水疱的希腊语；整体记忆。"
  },
  "porokeratosis": {
    "gloss": "汗孔角化症",
    "parts": [
      [
        "por/o",
        "孔、开口"
      ],
      [
        "kerat/o",
        "角质"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ],
    "note": "历史名称；词面拆解不能用于推断其病因。"
  },
  "porphyria": {
    "gloss": "卟啉病",
    "parts": [
      [
        "porphyr-",
        "卟啉；原义为紫色"
      ],
      [
        "-ia",
        "病症"
      ]
    ]
  },
  "post-inflammatory": {
    "gloss": "炎症后的",
    "parts": [
      [
        "post-",
        "在……之后"
      ],
      [
        "inflammatory",
        "炎症性的"
      ]
    ]
  },
  "postherpetic": {
    "gloss": "疱疹后的；此处指带状疱疹后",
    "parts": [
      [
        "post-",
        "在……之后"
      ],
      [
        "herpet-",
        "疱疹"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "poxviridae": {
    "gloss": "痘病毒科",
    "parts": [
      [
        "pox",
        "痘"
      ],
      [
        "-viridae",
        "病毒科名称的标准词尾"
      ]
    ],
    "note": "分类学名称，规范首字母大写为 Poxviridae。"
  },
  "pretibial": {
    "gloss": "胫前的",
    "parts": [
      [
        "pre-",
        "在……前"
      ],
      [
        "tibi/o",
        "胫骨"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "primary": {
    "gloss": "原发性的；初级的"
  },
  "profunda": {
    "gloss": "深部的",
    "note": "拉丁语形容词词形。"
  },
  "profundus": {
    "gloss": "深在的；深部的",
    "note": "拉丁语形容词词形。"
  },
  "progressive": {
    "gloss": "进行性的；逐渐进展的"
  },
  "protuberans": {
    "gloss": "隆突的；向外突起的",
    "note": "拉丁语形容词词形；用于隆突性皮肤纤维肉瘤名称。"
  },
  "prozone": {
    "gloss": "前带；抗体过量区",
    "note": "免疫学术语，指抗体过量可能干扰检测的区域；按完整术语记忆。"
  },
  "prurigo": {
    "gloss": "痒疹",
    "note": "与表示瘙痒的拉丁语 prurire 相关；固定病名。"
  },
  "pseudocarcinomatous": {
    "gloss": "假癌性的；类似癌的",
    "parts": [
      [
        "pseudo-",
        "假的、模拟的"
      ],
      [
        "carcinomat-",
        "癌性组织、癌"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "pseudocondyloma": {
    "gloss": "假性湿疣",
    "parts": [
      [
        "pseudo-",
        "假的、模拟的"
      ],
      [
        "condyloma",
        "湿疣"
      ]
    ]
  },
  "pseudoepitheliomatous": {
    "gloss": "假上皮瘤样的",
    "parts": [
      [
        "pseudo-",
        "假的、模拟的"
      ],
      [
        "epitheliomat-",
        "上皮瘤"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "pseudolymphoma": {
    "gloss": "假性淋巴瘤",
    "parts": [
      [
        "pseudo-",
        "假的、模拟的"
      ],
      [
        "lymph/o",
        "淋巴"
      ],
      [
        "-oma",
        "瘤、肿块"
      ]
    ]
  },
  "pseudoxanthoma": {
    "gloss": "假黄瘤",
    "parts": [
      [
        "pseudo-",
        "假的、模拟的"
      ],
      [
        "xanth/o",
        "黄色"
      ],
      [
        "-oma",
        "瘤、肿块"
      ]
    ]
  },
  "psoriasis": {
    "gloss": "银屑病",
    "parts": [
      [
        "psor-",
        "瘙痒、疥样皮疹"
      ],
      [
        "-iasis",
        "病理状态"
      ]
    ],
    "note": "词源只辅助记忆；银屑病不是疥疮。"
  },
  "pudendum": {
    "gloss": "外阴；女阴",
    "note": "解剖学拉丁语，整体记忆。"
  },
  "purpura": {
    "gloss": "紫癜",
    "note": "来自表示紫色的拉丁语；固定病名。"
  },
  "purpuric": {
    "gloss": "紫癜性的",
    "parts": [
      [
        "purpur-",
        "紫癜"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "pustular": {
    "gloss": "脓疱性的",
    "parts": [
      [
        "pustul-",
        "脓疱"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "pustule": {
    "gloss": "脓疱",
    "note": "基本皮损名称，整体记忆。"
  },
  "pustulosa": {
    "gloss": "脓疱性的",
    "note": "与 pustule（脓疱）相关的拉丁语形容词词形。"
  },
  "pustulosis": {
    "gloss": "脓疱病",
    "parts": [
      [
        "pustul-",
        "脓疱"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ]
  },
  "pyoderma": {
    "gloss": "脓皮病",
    "parts": [
      [
        "py/o",
        "脓"
      ],
      [
        "-derma",
        "皮肤状态"
      ]
    ]
  },
  "pyogenicum": {
    "gloss": "化脓性的",
    "parts": [
      [
        "py/o",
        "脓"
      ],
      [
        "-genic",
        "产生、引起……的"
      ]
    ],
    "note": "-um 是拉丁语词尾；granuloma pyogenicum 是历史名称，该病为血管增生，并不表示由感染化脓引起。"
  },
  "racemosa": {
    "gloss": "分枝状的；树枝状的",
    "note": "拉丁语形容词词形，原义与葡萄串样分枝有关。"
  },
  "radiodermatitis": {
    "gloss": "放射性皮炎",
    "parts": [
      [
        "radi/o",
        "放射线"
      ],
      [
        "dermat/o",
        "皮肤"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "Raynaud": {
    "gloss": "雷诺",
    "note": "人名命名，不按医学词根拆解。"
  },
  "reaction": {
    "gloss": "反应"
  },
  "receptor": {
    "gloss": "受体"
  },
  "recurrent": {
    "gloss": "复发的；反复出现的",
    "note": "来自 recur（再次发生）；re- 表示“再次”，其余部分不按 current 的常用义“当前”翻译。"
  },
  "reticular": {
    "gloss": "网状的",
    "parts": [
      [
        "reticul/o",
        "网"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "reticularis": {
    "gloss": "网状的",
    "note": "reticular 的拉丁语形容词形式。"
  },
  "rhagades": {
    "gloss": "皲裂；裂隙",
    "note": "rhagas 的复数，整体记忆。"
  },
  "Rickettsia": {
    "gloss": "立克次体属",
    "note": "以人名命名的微生物属名，不强行拆根。词库保留旧称；恙虫病病原体现归为 Orientia tsutsugamushi。"
  },
  "ridge": {
    "gloss": "嵴；隆起的纹脊"
  },
  "ridges": {
    "gloss": "嵴；纹脊（复数）"
  },
  "Riehl": {
    "gloss": "里尔",
    "note": "人名命名，不按医学词根拆解。"
  },
  "Ritter’s": {
    "gloss": "Ritter 的",
    "note": "人名命名，不按医学词根拆解。"
  },
  "rosacea": {
    "gloss": "玫瑰痤疮",
    "note": "固定病名，与玫瑰色外观相关，不强行拆分。"
  },
  "rosea": {
    "gloss": "玫瑰色的",
    "note": "拉丁语形容词词形。"
  },
  "rubber": {
    "gloss": "橡皮；橡胶"
  },
  "rubella": {
    "gloss": "风疹",
    "note": "与拉丁语“红色”相关的固定病名，整体记忆。"
  },
  "rubra": {
    "gloss": "红色的",
    "note": "拉丁语形容词词形。"
  },
  "sarcoidosis": {
    "gloss": "结节病",
    "parts": [
      [
        "sarc/o",
        "肉、肉样组织"
      ],
      [
        "-oid",
        "类似的"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ],
    "note": "词源为“肉样状态”，不能据此理解为肉瘤。"
  },
  "sarcoma": {
    "gloss": "肉瘤",
    "parts": [
      [
        "sarc/o",
        "肉、结缔组织"
      ],
      [
        "-oma",
        "肿瘤"
      ]
    ],
    "note": "sarcoma 是恶性间叶组织肿瘤，不能仅由 -oma 判断良恶性。"
  },
  "scabies": {
    "gloss": "疥疮",
    "note": "固定疾病名称，整体记忆。"
  },
  "scalded": {
    "gloss": "烫伤样的；被烫伤的"
  },
  "scale": {
    "gloss": "鳞屑"
  },
  "scar": {
    "gloss": "瘢痕"
  },
  "Schamberg": {
    "gloss": "Schamberg",
    "note": "人名命名，不按医学词根拆解。"
  },
  "scleredema": {
    "gloss": "硬肿病",
    "parts": [
      [
        "scler/o",
        "硬"
      ],
      [
        "edema",
        "水肿"
      ]
    ],
    "note": "组合时 o 省略；固定病名不等同于普通水肿。"
  },
  "scleroderma": {
    "gloss": "硬皮病",
    "parts": [
      [
        "scler/o",
        "硬"
      ],
      [
        "-derma",
        "皮肤状态"
      ]
    ]
  },
  "sclerosing": {
    "gloss": "硬化性的",
    "note": "来自 sclerose（使硬化）的分词形式；相关词根 scler/o 表示“硬”。"
  },
  "sclerosis": {
    "gloss": "硬化；硬化症",
    "parts": [
      [
        "scler/o",
        "硬"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ]
  },
  "sclerosus": {
    "gloss": "硬化性的",
    "note": "与 sclerosis（硬化）相关的拉丁语形容词词形。"
  },
  "scrotum": {
    "gloss": "阴囊"
  },
  "scrub": {
    "gloss": "灌木丛；丛林",
    "note": "scrub typhus 为恙虫病的固定名称，勿逐字理解成一般伤寒。"
  },
  "sebaceous": {
    "gloss": "皮脂的；皮脂腺的",
    "parts": [
      [
        "seb/o",
        "皮脂"
      ],
      [
        "-aceous",
        "具有……性质的"
      ]
    ]
  },
  "seborrheic": {
    "gloss": "脂溢性的",
    "parts": [
      [
        "seb/o",
        "皮脂"
      ],
      [
        "-rrhea",
        "流出、溢出"
      ],
      [
        "-ic",
        "……的"
      ]
    ],
    "note": "形容词形式中的 rrhe- 来自 -rrhea。"
  },
  "secondary": {
    "gloss": "继发性的；次级的"
  },
  "segmental": {
    "gloss": "节段性的",
    "parts": [
      [
        "segment",
        "节段"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "senile": {
    "gloss": "老年性的"
  },
  "sensitive": {
    "gloss": "敏感的"
  },
  "septal": {
    "gloss": "间隔的；间隔性的",
    "parts": [
      [
        "sept/o",
        "间隔"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "serofast": {
    "gloss": "血清学固定的",
    "parts": [
      [
        "ser/o",
        "血清"
      ],
      [
        "fast",
        "固定、保持不变"
      ]
    ],
    "note": "此处 fast 是“固定、保持不变”，不是“快速”；指治疗后非梅毒螺旋体试验滴度持续反应，常为较低水平。"
  },
  "sign": {
    "gloss": "体征；征"
  },
  "simplex": {
    "gloss": "单纯的",
    "note": "拉丁语形容词词形。"
  },
  "sinus": {
    "gloss": "窦；此处指淋巴窦"
  },
  "Sjögren": {
    "gloss": "舍格伦",
    "note": "人名命名，不按医学词根拆解。"
  },
  "Sjögren-Larsson": {
    "gloss": "舍格伦–拉松",
    "note": "人名命名，不按医学词根拆解。"
  },
  "skin": {
    "gloss": "皮肤"
  },
  "snake": {
    "gloss": "蛇"
  },
  "solar": {
    "gloss": "日光的；太阳的",
    "parts": [
      [
        "sol",
        "太阳"
      ],
      [
        "-ar",
        "……的"
      ]
    ]
  },
  "sore": {
    "gloss": "疮；疼痛处",
    "note": "cold sore 是口唇疱疹的固定词组。"
  },
  "spinosum": {
    "gloss": "棘状的；有棘的",
    "note": "拉丁语形容词词形；stratum spinosum 为棘层。"
  },
  "spongiosis": {
    "gloss": "海绵形成；表皮细胞间水肿",
    "parts": [
      [
        "spongi/o",
        "海绵"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ]
  },
  "spongiotic": {
    "gloss": "海绵形成性的",
    "parts": [
      [
        "spongi/o",
        "海绵"
      ],
      [
        "-otic",
        "……状态的"
      ]
    ],
    "note": "spongiosis 的形容词形式；不是指皮肤含有海绵。"
  },
  "spot": {
    "gloss": "斑；斑点"
  },
  "squamous": {
    "gloss": "鳞状的；鳞屑状的",
    "parts": [
      [
        "squam/o",
        "鳞、鳞屑"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "staphylococcal": {
    "gloss": "葡萄球菌性的",
    "parts": [
      [
        "staphyl/o",
        "葡萄串状"
      ],
      [
        "cocc/o",
        "球菌"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "stasis": {
    "gloss": "淤积；停滞"
  },
  "steatocystoma": {
    "gloss": "脂囊瘤",
    "parts": [
      [
        "steat/o",
        "脂肪、皮脂"
      ],
      [
        "cyst/o",
        "囊"
      ],
      [
        "-oma",
        "瘤、肿块"
      ]
    ]
  },
  "Stevens-Johnson": {
    "gloss": "史蒂文斯–约翰逊",
    "note": "人名命名，不按医学词根拆解。"
  },
  "sting": {
    "gloss": "蜇伤；刺伤"
  },
  "stomatitis": {
    "gloss": "口炎",
    "parts": [
      [
        "stomat/o",
        "口"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "stratum": {
    "gloss": "层",
    "note": "解剖学拉丁语；复数为 strata。"
  },
  "striae": {
    "gloss": "条纹；纹",
    "note": "stria 的复数；striae atrophicae 为萎缩纹。"
  },
  "striatus": {
    "gloss": "条纹状的；线状的",
    "note": "拉丁语形容词词形。"
  },
  "subacute": {
    "gloss": "亚急性的",
    "parts": [
      [
        "sub-",
        "低于、次于"
      ],
      [
        "acute",
        "急性的"
      ]
    ]
  },
  "subcorneal": {
    "gloss": "角质层下的",
    "parts": [
      [
        "sub-",
        "在……下"
      ],
      [
        "corne-",
        "此处指角质层"
      ],
      [
        "-al",
        "……的"
      ]
    ],
    "note": "在此词组中 corneal 指角质层，不是眼角膜。"
  },
  "subcutaneous": {
    "gloss": "皮下的",
    "parts": [
      [
        "sub-",
        "在……下"
      ],
      [
        "cutane/o",
        "皮肤"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "subitum": {
    "gloss": "突然发生的；急发的",
    "note": "拉丁语形容词词形；exanthema subitum 为幼儿急疹。"
  },
  "subungual": {
    "gloss": "甲下的",
    "parts": [
      [
        "sub-",
        "在……下"
      ],
      [
        "ungu/o",
        "指甲、趾甲"
      ],
      [
        "-al",
        "……的"
      ]
    ]
  },
  "sulci": {
    "gloss": "沟（复数）",
    "note": "拉丁语 sulcus 的复数。"
  },
  "sunburn": {
    "gloss": "日晒伤",
    "parts": [
      [
        "sun",
        "太阳、日光"
      ],
      [
        "burn",
        "灼伤"
      ]
    ]
  },
  "superficialis": {
    "gloss": "浅表的",
    "note": "拉丁语形容词词形。"
  },
  "suppurativa": {
    "gloss": "化脓性的",
    "note": "拉丁语形容词词形；与 suppuration（化脓）相关。"
  },
  "sweat": {
    "gloss": "汗"
  },
  "Sweet’s": {
    "gloss": "Sweet 的",
    "note": "人名命名，不按医学词根拆解。"
  },
  "symmetric": {
    "gloss": "对称的"
  },
  "syndrome": {
    "gloss": "综合征",
    "note": "固定医学术语，表示一组共同出现的体征或症状。"
  },
  "syphilis": {
    "gloss": "梅毒",
    "note": "传统疾病名称，不按一般医学前后缀强行拆分。"
  },
  "syphilitic": {
    "gloss": "梅毒性的",
    "parts": [
      [
        "syphilit-",
        "梅毒（syphilis 的词干变化形式）"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "syringoma": {
    "gloss": "汗管瘤",
    "parts": [
      [
        "syring/o",
        "管"
      ],
      [
        "-oma",
        "瘤"
      ]
    ],
    "note": "此处指汗腺导管来源的良性肿瘤。"
  },
  "systemic": {
    "gloss": "系统性的；全身性的",
    "parts": [
      [
        "system",
        "系统"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "T-cell": {
    "gloss": "T 细胞；T 淋巴细胞",
    "note": "T 是 thymus（胸腺）的缩写，cell 为细胞。"
  },
  "tattoos": {
    "gloss": "文身；外源性色素沉着（复数）"
  },
  "telogen": {
    "gloss": "毛发休止期",
    "parts": [
      [
        "tel/o",
        "终末"
      ],
      [
        "-gen",
        "形成、产生"
      ]
    ],
    "note": "毛周期的固定阶段名，不能由字面推断其生理活动。"
  },
  "thrombophlebitis": {
    "gloss": "血栓性静脉炎",
    "parts": [
      [
        "thromb/o",
        "血栓"
      ],
      [
        "phleb/o",
        "静脉"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "time": {
    "gloss": "时间；所需时长"
  },
  "tissue": {
    "gloss": "组织"
  },
  "Toll-like": {
    "gloss": "Toll 样的",
    "parts": [
      [
        "Toll",
        "受体命名来源"
      ],
      [
        "-like",
        "类似……的"
      ]
    ],
    "note": "Toll 是专名，不按英文 toll 的普通词义拆解。"
  },
  "tongue": {
    "gloss": "舌"
  },
  "toxic": {
    "gloss": "有毒的；中毒性的",
    "parts": [
      [
        "tox/o",
        "毒"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "toxin": {
    "gloss": "毒素",
    "parts": [
      [
        "tox-",
        "毒"
      ],
      [
        "-in",
        "物质名称常用词尾"
      ]
    ]
  },
  "traumatic": {
    "gloss": "外伤性的",
    "parts": [
      [
        "traumat/o",
        "外伤"
      ],
      [
        "-ic",
        "……的"
      ]
    ]
  },
  "Treponema": {
    "gloss": "密螺旋体属",
    "note": "微生物属名；Treponema pallidum 为梅毒螺旋体，按完整学名记忆。"
  },
  "tsutsugamushi": {
    "gloss": "恙虫；学名中指恙虫病相关病原体",
    "parts": [
      [
        "tsutsuga",
        "疾病（来源于日语）"
      ],
      [
        "mushi",
        "虫（来源于日语）"
      ]
    ],
    "note": "不是希腊拉丁医学词根；tsutsugamushi disease 为恙虫病。"
  },
  "tuberculosis": {
    "gloss": "结核病",
    "parts": [
      [
        "tubercul-",
        "结节、结核"
      ],
      [
        "-osis",
        "病理状态"
      ]
    ]
  },
  "tuberous": {
    "gloss": "结节性的",
    "parts": [
      [
        "tuber-",
        "结节"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "turnover": {
    "gloss": "更新；周转",
    "note": "turnover time 在此为表皮通过时间，指细胞更新过程所需时间。"
  },
  "type": {
    "gloss": "型；类型"
  },
  "typhus": {
    "gloss": "斑疹伤寒",
    "note": "scrub typhus 是恙虫病的固定英文名称，不等于伤寒（typhoid fever）。"
  },
  "ulcer": {
    "gloss": "溃疡"
  },
  "ulcus": {
    "gloss": "溃疡",
    "note": "拉丁语名词，对应英语 ulcer。"
  },
  "unspecific": {
    "gloss": "非特定的；非特异性的",
    "parts": [
      [
        "un-",
        "不、非"
      ],
      [
        "specific",
        "特定的、特异性的"
      ]
    ]
  },
  "urtica": {
    "gloss": "荨麻；此处用于色素性荨麻疹名称",
    "note": "拉丁语名词；原书 urtica pigmentosa 常见标准形式为 urticaria pigmentosa。"
  },
  "urticaria": {
    "gloss": "荨麻疹",
    "note": "来自表示荨麻的拉丁语，整体记忆。"
  },
  "variabilis": {
    "gloss": "可变的；易变的",
    "note": "拉丁语形容词词形。"
  },
  "varicella": {
    "gloss": "水痘",
    "note": "传统疾病名称，整体记忆。"
  },
  "varicella-zoster": {
    "gloss": "水痘–带状疱疹的",
    "parts": [
      [
        "varicella",
        "水痘"
      ],
      [
        "zoster",
        "带状疱疹"
      ]
    ],
    "note": "固定病毒名称修饰语。"
  },
  "varicelliform": {
    "gloss": "水痘样的",
    "parts": [
      [
        "varicell-",
        "水痘"
      ],
      [
        "-form",
        "……形的、……样的"
      ]
    ]
  },
  "varioliformis": {
    "gloss": "痘疮样的",
    "parts": [
      [
        "variol-",
        "天花、痘疮"
      ],
      [
        "-formis",
        "……形的、……样的（拉丁语）"
      ]
    ]
  },
  "vasculities": {
    "gloss": "血管炎（原书拼写）",
    "parts": [
      [
        "vascul/o",
        "血管"
      ],
      [
        "-itis",
        "炎症"
      ]
    ],
    "note": "原书 vasculities 疑为 vasculitis 的拼写误差；拆解按标准词形 vasculitis。"
  },
  "vasculitis": {
    "gloss": "血管炎",
    "parts": [
      [
        "vascul/o",
        "血管"
      ],
      [
        "-itis",
        "炎症"
      ]
    ]
  },
  "vasculopathy": {
    "gloss": "血管病",
    "parts": [
      [
        "vascul/o",
        "血管"
      ],
      [
        "-pathy",
        "疾病"
      ]
    ]
  },
  "vegetans": {
    "gloss": "增殖性的；疣状增生的",
    "note": "拉丁语分词形容词；此处描述皮损增生，不是“植物”。"
  },
  "venereum": {
    "gloss": "性病性的；性接触传播相关的",
    "note": "拉丁语形容词词形；用于固定疾病名称。"
  },
  "venomous": {
    "gloss": "有毒的；能注入毒液的",
    "parts": [
      [
        "venom",
        "毒液"
      ],
      [
        "-ous",
        "具有……的"
      ]
    ]
  },
  "verruca": {
    "gloss": "疣",
    "note": "拉丁语名词，复数为 verrucae。"
  },
  "verruciform": {
    "gloss": "疣状的",
    "parts": [
      [
        "verruc-",
        "疣"
      ],
      [
        "-form",
        "……形的、……样的"
      ]
    ]
  },
  "verruciformis": {
    "gloss": "疣状的",
    "parts": [
      [
        "verruc-",
        "疣"
      ],
      [
        "-formis",
        "……形的、……样的（拉丁语）"
      ]
    ]
  },
  "verrucous": {
    "gloss": "疣状的",
    "parts": [
      [
        "verruc-",
        "疣"
      ],
      [
        "-ous",
        "……的"
      ]
    ]
  },
  "verticis": {
    "gloss": "头顶的",
    "note": "拉丁语 vertex（头顶）的属格；cutis verticis gyrata 为回状头皮。"
  },
  "vesicle": {
    "gloss": "水疱；小囊",
    "note": "在皮损语境指水疱，按完整基本术语记忆。"
  },
  "virus": {
    "gloss": "病毒"
  },
  "vitiligo": {
    "gloss": "白癜风",
    "note": "传统疾病名称，整体记忆。"
  },
  "vulgaris": {
    "gloss": "寻常的；常见型的",
    "note": "拉丁语形容词，不按现代英语 vulgar 的贬义翻译。"
  },
  "vulvae": {
    "gloss": "外阴的；女阴的",
    "note": "拉丁语 vulva 的属格；固定病名中通常译为“外阴的”。"
  },
  "wart": {
    "gloss": "疣"
  },
  "warts": {
    "gloss": "疣（复数）"
  },
  "Wegener’s": {
    "gloss": "韦格纳的",
    "note": "人名命名，不按医学词根拆解。"
  },
  "wheal": {
    "gloss": "风团"
  },
  "Wiskott-Aldrich": {
    "gloss": "威斯科特–奥尔德里奇",
    "note": "人名命名，不按医学词根拆解。"
  },
  "with": {
    "gloss": "伴有；与……一起"
  },
  "X-linked": {
    "gloss": "X 连锁的",
    "parts": [
      [
        "X",
        "X 染色体"
      ],
      [
        "linked",
        "连锁的"
      ]
    ],
    "note": "遗传学术语，表示致病相关基因位于 X 染色体。"
  },
  "xanthoma": {
    "gloss": "黄瘤",
    "parts": [
      [
        "xanth/o",
        "黄色"
      ],
      [
        "-oma",
        "瘤、肿块"
      ]
    ]
  },
  "xeroderma": {
    "gloss": "干皮病；皮肤干燥",
    "parts": [
      [
        "xer/o",
        "干燥"
      ],
      [
        "-derma",
        "皮肤状态"
      ]
    ]
  },
  "xerotica": {
    "gloss": "干燥性的",
    "parts": [
      [
        "xer/o",
        "干燥"
      ],
      [
        "-otic",
        "……状态的"
      ]
    ],
    "note": "-a 为拉丁语阴性形容词词尾；与英语 xerotic 对应。"
  },
  "zinc": {
    "gloss": "锌"
  },
  "zone": {
    "gloss": "带；区"
  },
  "zoster": {
    "gloss": "带状疱疹；词源原义为腰带",
    "note": "在 herpes zoster 中指带状疱疹，整体记忆。"
  },
  "zoster-associated": {
    "gloss": "带状疱疹相关的",
    "parts": [
      [
        "zoster",
        "带状疱疹"
      ],
      [
        "associated",
        "相关的"
      ]
    ]
  }
};
  const sources = [
  {
    "title": "MedlinePlus — Appendix A: Word Parts and What They Mean",
    "url": "https://medlineplus.gov/appendixa.html"
  },
  {
    "title": "NCI SEER: Cancer & Medical Terminology",
    "url": "https://training.seer.cancer.gov/terminology/"
  },
  {
    "title": "NCI SEER: Tumor Registrar Vocabulary — The Composition of Medical Terms",
    "url": "https://seer.cancer.gov/archive/training/manuals/Book3.pdf"
  },
  {
    "title": "DermNet: Dermatopathological terminology",
    "url": "https://dermnetnz.org/topics/dermatopathological-terminology"
  },
  {
    "title": "DermNet: Terminology in dermatology",
    "url": "https://dermnetnz.org/topics/terminology"
  },
  {
    "title": "DermNet: Asteatotic eczema",
    "url": "https://dermnetnz.org/topics/asteatotic-eczema"
  },
  {
    "title": "DermNet: Atopic dermatitis",
    "url": "https://dermnetnz.org/topics/atopic-dermatitis"
  },
  {
    "title": "DermNet: Dermatitis",
    "url": "https://dermnetnz.org/topics/dermatitis"
  },
  {
    "title": "NCBI Bookshelf: Anatomy, Skin, Sudoriferous Gland",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK513244/"
  },
  {
    "title": "NCBI Bookshelf: Eosinophilia",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK560929/"
  },
  {
    "title": "Desmoglein as a target in skin disease and beyond",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3279627/"
  },
  {
    "title": "The desmosome comes into focus",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11317759/"
  },
  {
    "title": "NCBI Bookshelf: Male Androgenetic Alopecia",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK278957/"
  },
  {
    "title": "Open RN Medical Terminology, 2nd edition — Chapter 3 Integumentary System Terminology (NCBI Bookshelf)",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK607449/"
  },
  {
    "title": "NCI Dictionary of Cancer Terms: keratoacanthoma",
    "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/keratoacanthoma"
  },
  {
    "title": "NCBI MeSH: Hemidesmosomes",
    "url": "https://www.ncbi.nlm.nih.gov/mesh/68022002"
  },
  {
    "title": "NCBI Bookshelf: Molecular Biology of the Cell — Cell Junctions",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK26857/"
  },
  {
    "title": "DermNet: Ichthyosis",
    "url": "https://dermnetnz.org/topics/ichthyosis"
  },
  {
    "title": "NCBI Bookshelf: Systemic Mastocytosis",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK544345/"
  },
  {
    "title": "DermNet: Mycosis fungoides",
    "url": "https://dermnetnz.org/topics/mycosis-fungoides"
  },
  {
    "title": "DermNet: Paronychia",
    "url": "https://dermnetnz.org/topics/paronychia"
  },
  {
    "title": "DermNet: Ingrown toenail (onychocryptosis)",
    "url": "https://dermnetnz.org/topics/ingrown-toenail"
  },
  {
    "title": "NCBI Bookshelf: Dermatopathology Evaluation of Panniculitis",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK606121/"
  },
  {
    "title": "NCBI Bookshelf: Anhidrosis",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK555988/"
  },
  {
    "title": "Dermatological autoimmune diseases — Autoimmunity (NCBI Bookshelf), Pemphigus",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK459479/"
  },
  {
    "title": "DermNet — Pyogenic granuloma",
    "url": "https://dermnetnz.org/topics/pyogenic-granuloma"
  },
  {
    "title": "DermNet — Porokeratosis",
    "url": "https://dermnetnz.org/topics/porokeratosis"
  },
  {
    "title": "DermNet — Maculopapular cutaneous mastocytosis (urticaria pigmentosa)",
    "url": "https://dermnetnz.org/topics/maculopapular-cutaneous-mastocytosis"
  },
  {
    "title": "CDC — About Scrub Typhus",
    "url": "https://www.cdc.gov/typhus/about/scrub.html"
  },
  {
    "title": "CDC Emerging Infectious Diseases — Etymologia: Orientia tsutsugamushi",
    "url": "https://wwwnc.cdc.gov/eid/article/12/2/et-1202_article"
  },
  {
    "title": "CDC Laboratory Recommendations for Syphilis Testing, United States, 2024",
    "url": "https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm"
  },
  {
    "title": "ICTV — Poxviridae: derivation of names",
    "url": "https://ictv.global/report/chapter/poxviridae/poxviridae"
  },
  {
    "title": "ICTV — FAQs: virus taxon rank suffixes",
    "url": "https://ictv.global/faqs"
  }
];
  const pattern = /[A-Za-zÀ-ž0-9]+(?:[’'-][A-Za-zÀ-ž0-9]+)*/g;
  const normal = value => value.toLocaleLowerCase('en').replaceAll('’', "'");
  const lookup = new Map(Object.entries(lexicon).map(([key, value]) => [normal(key), value]));
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function analyze(word) {
    const text = typeof word === 'string' ? word : word.en;
    return (text.match(pattern) || []).map(token => {
      const entry = lexicon[token] || lookup.get(normal(token));
      return {token, gloss: entry?.gloss || '', parts: entry?.parts || [], note: entry?.note || ''};
    });
  }
  function render(word) {
    const terms = analyze(word);
    if (!terms.length) return '';
    const roots = [...new Map(terms.filter(term => term.parts.length).map(term => [normal(term.token), term])).values()];
    return `<section class="word-notes" aria-label="词根与逐词释义">
      <div class="word-notes-heading"><span class="word-notes-mark" aria-hidden="true">Aa</span><h4>${terms.length > 1 ? '词组逐词释义' : '单词含义'}</h4></div>
      <dl class="term-meanings">${terms.map(term => `<div><dt lang="en">${escape(term.token)}</dt><dd>${escape(term.gloss)}${term.note ? `<small class="term-note">${escape(term.note)}</small>` : ''}</dd></div>`).join('')}</dl>
      ${roots.length ? `<div class="root-section"><h4>词根拆解</h4>${roots.map(term => `<div class="root-word"><h5 lang="en">${escape(term.token)}</h5><dl class="root-parts">${term.parts.map(([form, meaning]) => `<div><dt lang="en">${escape(form)}</dt><dd>${escape(meaning)}</dd></div>`).join('')}</dl></div>`).join('')}<p class="roots-caption">按常见词根、前后缀和复合词成分辅助记忆；连接元音及词尾可随构词变化，完整术语以本卡释义为准。</p></div>` : ''}
      <details class="notes-references"><summary>构词参考</summary><ul>${sources.map(source => `<li><a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.title)}</a></li>`).join('')}</ul></details>
    </section>`;
  }
  const api = Object.freeze({analyze, render, sources, lexicon});
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else globalThis.WordNotes = api;
})();
