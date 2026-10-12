/* 手工对照用户提供的第399—404页录入。每行：中文|英文|缩写|核对说明。 */
(() => {
const raw = `
#399
Blaschko线|Blaschko’s line
IgA天疱疮|IgA pemphigus
Majocchi病|Majocchi disease
Ritter病|Ritter’s disease
Schamberg病|Schamberg disease
Sjögren-Larsson综合征|Sjögren-Larsson syndrome|SLS
Sweet病|Sweet’s disease
Sweet综合征|Sweet’s syndrome
Toll样受体|Toll-like receptor|TLR
埃可病毒|ECHO virus
白癜风|vitiligo
白痱|miliaria crystallina
白化病|albinism
白塞病|Behcet disease
白塞综合征|Behcet syndrome
白色萎缩|atrophie blanche
斑驳病|piebaldism
斑块|plaque
斑片|patch
斑丘疹|maculopapule
斑秃|alopecia areata
斑疹|macule
斑状皮肤萎缩|macular atrophy
瘢痕|scar
瘢痕疙瘩|keloid
瘢痕性类天疱疮|cicatricial pemphigoid|CP
板层状鱼鳞病|lamellar ichthyosis|LI
半桥粒|hemidesmosome
伴巨大淋巴结病的窦性组织细胞增生症|sinus histiocytosis with massive lymphadenopathy|SHML
包皮龟头炎|balanoposthitis
鲍恩病|Bowen disease
暴发性痤疮|acne fulminant
扁平湿疣|condyloma lata
扁平苔藓|lichen planus|LP
扁平疣|verruca plana
变应性接触性皮炎|allergic contact dermatitis
变应性皮肤血管炎|allergic cutaneous vasculitis
表皮|epidermis
表皮囊肿|epidermal cyst
表皮通过时间|turnover time
播散性带状疱疹|disseminated herpes zoster
播散性单纯疱疹|disseminated herpes simplex
卟啉病|porphyria
擦烂|intertrigo
虫咬皮炎|insect bite dermatitis
臭汗症|bromhidrosis
穿通型环状肉芽肿|perforating granuloma annulare|PGA
传染性单核细胞增多症|infectious mononucleosis
传染性单核细胞增多症-氨苄西林综合征|infectious mononucleosis-ampicillin syndrome
传染性软疣|molluscum contagiosum
传染性软疣病毒|molluscum contagiosum virus|MCV
唇炎|cheilitis
刺胞皮炎|nematocyst dermatitis
刺激性接触性皮炎|irritant contact dermatitis
重叠综合征|overlap syndrome
丛林斑疹伤寒|scrub typhus
痤疮|acne
大疱|bulla
大疱型脓疱疮|bullous impetigo
大疱性表皮松解症|epidermolysis bullosa|EB
大疱性类天疱疮|bullous pemphigoid
带状疱疹|herpes zoster
带状疱疹后神经痛|postherpetic neuralgia|PHN
带状疱疹相关性疼痛|zoster-associated pain|ZAP
丹毒|erysipelas
单纯糠疹|pityriasis simplex
单纯疱疹|herpes simplex
单纯疱疹病毒|herpes simplex virus|HSV
地图样舌|geographic tongue
淀粉样变性|amyloid degeneration
顶泌汗腺|apocrine sweat gland
顶泌汗腺痒疹|apocrine prurigo
冻疮|pernio
冻疮样红斑狼疮|chilblain lupus erythematosus|CHLE|跨第399—400页合并。
#400
痘病毒科|poxviridae
毒蛇咬伤|venomous snake bite
多发性肌炎|polymyositis|PM
多发性脂囊瘤|steatocystoma multiplex
多汗症|hyperhidrosis
多毛症|hirsutism
多形红斑|erythema multiforme Stevens-Johnson syndrome|SJS|原书在同一条目连列 erythema multiforme 与 Stevens-Johnson syndrome，按图片保留，建议核对原书。
多形性日光疹|polymorphous light eruption
恶性血管内皮细胞瘤|malignant angioendothelioma
耳带状疱疹|herpes zoster oticus
乏脂性皮炎|asteatotic dermatitis
反常性痤疮|acne inversa|AI
泛发型环状肉芽肿|generalized granuloma annulare|GGA
泛发性脓疱型银屑病|generalized pustular psoriasis|GPP
泛发性硬斑病|generalized morphea
放射性皮炎|radiodermatitis
非大疱型脓疱疮|nonbullous impetigo
非特定性皮炎|unspecific dermatitis
肥大细胞增多症|mastocytosis
痱|miliaria
风团|wheal
风疹|rubella
风疹病毒|rubella virus
蜂窝织炎|cellulitis
蜂蜇伤|bee sting
匐行疹|creeping eruption
复发性阿弗他口炎|recurrent aphthous stomatitis|RAS
副肿瘤性天疱疮|paraneoplastic pemphigus|PNP
感冒疮|cold sore
干燥闭塞性包皮龟头炎|balanitis xerotica obliterans
干燥综合征|Sjögren syndrome|SS
肛门生殖器疣|genital warts
肛周湿疹|perianal eczema
高IgE综合征|hyperimmunoglobulin E syndrome|HIES
高雄激素性痤疮|hyperandrogen acne
关节病型银屑病|psoriasis arthropathica|PsA
光变态反应性药疹|photoallergic drug eruption
光毒性药疹|phototoxic drug eruption
光老化|photoaging
光线性唇炎|actinic cheilitis
光线性角化病|actinic keratosis
光线性药疹|actinic drug eruption
光泽苔藓|lichen nitidus
过敏性紫癜|allergic purpura
海绵水疱|spongiotic vesicle| |图片英文排为 spongioticvesicle，此处补上词间空格。
海绵形成|spongiosis
汗管瘤|syringoma
汗孔角化症|porokeratosis|PK
汗疱疹|pompholyx
黑棘皮病|acanthosis nigricans
黑色素瘤|melanoma
黑素细胞|melanocyte
黑素小体|melanosome
红斑狼疮|lupus erythematosus|LE
红斑型天疱疮|pemphigus erythematosus
红痱|miliaria rubra
红皮病|erythroderma
红皮病型银屑病|psoriasis erythrodermic
化脓性汗腺炎|hidradenitis suppurativa|HS
化脓性肉芽肿|granuloma pyogenicum
坏疽|gangrene
坏疽性脓皮病|pyoderma gangrenosum|PG
坏死|necrosis
环状青斑|livedo annularis
环状肉芽肿|granuloma annulare|GA
黄褐斑|melasma
黄瘤|xanthoma
回状头皮|cutis verticis gyrata
混合性结缔组织病|mixed connective tissue disease|MCTD
混合性淋巴管畸形|mixed lymphatic malformation
火激红斑|erythema ab igne
获得性大疱性表皮松解症|epidermolysis bullosa acquisita|EBA
获得性免疫缺陷综合征|acquired immunodeficiency syndrome|AIDS
鸡眼|clavus
基底层|stratum basale
基底膜带|basement membrane zone|BMZ
基底细胞癌|basal cell carcinoma|BCC
基底细胞液化变性|liquefaction degeneration
基质|matrix
基质金属蛋白酶|matrix metalloproteinase|MMP
激光|laser
吉海反应|Jarisch-Herxheimer reaction|JHR
急性点滴状银屑病|acute guttate psoriasis
急性痘疮样苔藓样糠疹|pityriasis lichenoides et varioliformis acuta|PLEVA
急性发热性嗜中性皮病|acute febrile neutrophilic dermatosis
急性女阴溃疡|ulcus vulvae acutum
急性皮肤型红斑狼疮|acute cutaneous lupus erythematosus|ACLE|跨第400—401页合并。
#401
急性痒疹|acute prurigo
棘层|stratum spinosum
棘层肥厚|acanthosis
棘层松解|acantholysis
继发性损害|secondary lesion
痂|crust
甲|nail
甲沟炎|paronychia
甲下疣|subungual wart
甲周疣|periungual wart
假癌性增生|pseudocarcinomatous hyperplasia
假上皮瘤样增生|pseudoepitheliomatous hyperplasia
尖锐湿疣|condyloma acuminatum|CA
间隔性|septal
间歇性皮肤型红斑狼疮|intermittent cutaneous lupus erythematosus|ICLE
渐进性坏死|necrobiosis
胶原纤维|collagen fiber
角层下脓疱性皮肤病|subcorneal pustular dermatosis
角蛋白|keratin
角化不良|dyskeratosis
角化不全|parakeratosis
角化过度|hyperkeratosis
角化棘皮瘤|keratoacanthoma
角质层|stratum corneum
角珠|squamous pearl
疖|furuncle
接触性皮炎|contact dermatitis
节段性透明性血管炎|segmental hyalinizing vasculities| |英文按原书拼写保留，原书排为 vasculities，建议核对。
结缔组织痣|connective tissue nevus
结节|nodule
结节病|sarcoidosis
结节性多动脉炎|polyarteritis nodosa|PAN
结节性红斑|erythema nodosum|EN
结节性血管炎|nodular vasculitis
结节性痒疹|prurigo nodularis
结节性硬化症|tuberous sclerosis|TSC
结外NK/T细胞淋巴瘤，鼻型|extranodal NK/T-cell lymphoma (nasal type)
疥疮|scabies
进行性对称性红斑角皮症|progressive symmetric erythrokeratodermia
进行性系统性硬化症|progressive systemic sclerosis|PSS
浸渍|maceration
胫前黏液性水肿|pretibial myxedema|PTM
局限型环状肉芽肿|localized granuloma annulare|LGA
局限型硬斑病|localized morphea
局限性硬皮病|localized scleroderma|LS
巨囊性淋巴管畸形|macrocystic lymphatic malformation
聚合性痤疮|acne conglobata
皲裂|fissure
卡波西肉瘤|Kaposi sarcoma
卡波西水痘样疹|Kaposi varicelliform eruption
柯萨奇病毒|Coxsackie virus
颗粒层|stratum granulosum
颗粒层增厚|hypergranulosis
可变性红斑角化症|erythrokeratodermia variabilis|EKV
口腔白斑病|oral leukoplakia|OLK
口周疱疹|peristomatous herpes
口周皮炎|perioral dermatitis|POD
溃疡|ulcer
莱姆病|Lyme disease|LD
莱姆关节炎|Lyme arthritis|LA
蓝色橡皮疱痣综合征|blue rubber bleb nevus syndrome
狼疮性脂膜炎|lupus erythematosus panniculitis|LEP
朗格汉斯细胞|Langerhans cell
朗格汉斯细胞组织细胞增生症|Langerhans cell histiocytosis|LCH
老年性白斑|senile leukoderma
雷诺病|Raynaud disease|RD
雷诺现象|Raynaud phenomenon|RP
类丹毒|erysipeloid
离心性环状红斑|erythema annulare centrifugum|EAC
里尔黑变病|Riehl melanosis
利什曼病|leishmaniasis
连续性肢端皮炎|acrodermatitis continua|AC
裂纹舌|fissured tongue
淋巴管畸形|lymphatic malformation|LM
淋巴瘤样丘疹病|lymphomatoid papulosis|LyP
淋病|gonorrhea
鳞屑|scale
鳞状细胞癌|squamous cell carcinoma
隆突性皮肤纤维肉瘤|dermatofibrosarcoma protuberans|DFSP
落叶型天疱疮|pemphigus foliaceus
氯痤疮|chloracne
麻风|leprosy
麻疹|measles
麻疹病毒|measles virus|MV
慢性单纯性苔藓|lichen simplex chronicus
慢性多形性痒疹|prurigo chronica multiformis
慢性光化性皮炎|chronic actinic dermatitis|CAD
慢性黏膜皮肤念珠菌病|chronic mucocutaneous candidiasis|CMC
#402
慢性皮肤型红斑狼疮|chronic cutaneous lupus erythematosus|CCLE
慢性苔藓样糠疹|pityriasis lichenoides chronica|PLC
慢性痒疹|chronic prurigo
猫抓病|cat-scratch disease
毛发|hair
毛发红糠疹|pityriasis rubra pilaris|PRP
毛囊|hair follicle
毛囊角化病|keratosis follicularis
毛囊炎|folliculitis
毛细血管畸形|capillary malformation
毛周角化病|keratosis pilaris|KP
玫瑰痤疮|rosacea
玫瑰糠疹|pityriasis rosea
梅毒|syphilis
梅毒螺旋体|Treponema pallidum|TP
梅毒性树胶肿|syphilitic gumma
梅毒血清学固定|syphilis serofast
梅克尔细胞|Merkel cell
蒙古斑|Mongolian spot
糜烂|erosion
泌尿生殖道衣原体感染|chlamydial genitourinary infection
面部偏侧萎缩|hemiatrophia facialis
敏感性皮肤|sensitive skin|SS
囊肿|cyst
尼科利斯基征|Nikolsky sign
黏液变性|mucinous degeneration
黏液水肿性苔藓|lichen myxedematosus
黏液样囊肿|myxoid cyst
脓疱|pustule
脓疱疮|impetigo
脓疱型银屑病|psoriasis pustulosa
脓疱性痱|miliaria pustulosa
脓丘疱疹|papulopustule
女阴假性湿疣|pseudocondyloma of vulvae
女阴湿疹|pudendum eczema
女阴硬化性苔藓|lichen sclerosus vulvae
盘状红斑狼疮|discoid LE|DLE
疱疹样皮炎|dermatitis herpetiformis|DH
疱疹样湿疹|eczema herpeticum
疱疹样天疱疮|herpetiform pemphigus
佩吉特病|Paget disease
皮肤|skin
皮肤白血病|cutaneous leukemia
皮肤淀粉样变|cutaneous amyloidosis
皮肤附属器|cutaneous appendages
皮肤钙质沉着症|calcinosis cutis
皮肤假性淋巴瘤|cutaneous pseudolymphoma|CPL
皮肤结核|tuberculosis cutis
皮肤淋巴瘤|cutaneous lymphoma
皮肤松弛症|cutis laxa
皮肤纤维瘤|dermatofibroma
皮肤型红斑狼疮|cutaneous lupus erythematosus|CLE
皮肤血管炎|cutaneous vasculitis
皮肤异色症|poikiloderma
皮肤转移瘤|cutaneous metastasis
皮沟|skin grooves / sulci cutis
皮肌炎|dermatomyositis|DM
皮嵴|skin ridges / cristae cutis
皮纹图案|dermal ridge pattern
皮下型环状肉芽肿|subcutaneous granuloma annulare|SGA
皮下组织|subcutaneous tissue
皮野|skin field
皮脂腺|sebaceous gland
皮脂腺痣|sebaceous nevus
胼胝|callus
贫血痣|nevus anemicus
平滑肌瘤|leiomyoma
葡萄球菌烫伤样皮肤综合征|staphylococcal scalded skin syndrome|SSSS
气球样变性|ballooning degeneration
前带现象|prozone phenomenon
钱币状皮炎|nummular dermatitis
浅表性脂肪瘤样痣|naevus lipomatosus superficialis
嵌甲|onychocryptosis
桥粒|desmosome
桥粒芯糖蛋白|desmoglein|Dsg
青斑血管炎|livedo vasculitis
青斑样血管病|livedoid vasculopathy
丘疱疹|papulovesicle
丘疹|papule
全身性脂肪营养不良|generalized lipodystrophy
雀斑|ephelides
人类免疫缺陷病毒|human immunodeficiency virus|HIV
人乳头瘤病毒|human papilloma virus|HPV
妊娠类天疱疮|pemphigoid gestationis|PG
日光性皮炎|solar dermatitis
日光性雀斑样痣|solar lentigo
日晒伤|sunburn
肉毒毒素|botulinum toxin|BT
肉芽肿|granuloma
肉芽肿性血管炎|granulomatosis with polyangiitis|GPA
乳房外佩吉特病|extramammary Paget disease
#403
乳头瘤样增生|papillomatosis
软下疳|chancroid
色素失调症|incontinentia pigmenti|IP
色素失禁|incontinence of pigment
色素性荨麻疹|urtica pigmentosa
色素性紫癜性皮肤病|pigmentary purpuric dermatosis
色素痣|pigmented naevus
砷角化病|arsenical keratosis
深部痱|miliaria profunda
深脓疱疮|ecthyma
深在性红斑狼疮|lupus erythematosus profundus|LEP
神经精神性系统性红斑狼疮|neuropsychiatric systemic lupus erythematosus|NPSLE
神经梅毒|neurosyphilis
神经纤维瘤病|neurofibromatosis|NF
生长期|anagen
生殖器疱疹|genital herpes
生殖器外疱疹|extragenital herpes
虱病|pediculosis
嗜碱性变性|basophilic degeneration
嗜酸细胞性筋膜炎|eosinophilic fasciitis
嗜酸性粒细胞增多性皮炎|hypereosinophilic dermatosis|HED
嗜酸性粒细胞增多性血管淋巴样增生|angiolymphoid hyperplasia with eosinophilia|ALHE
嗜酸性粒细胞增多综合征|hypereosinophilic syndrome|HES
手湿疹|hand eczema
手足皲裂|rhagades manus et pedes
手足口病|hand-foot-mouth disease
树枝状青斑|livedo racemosa
水痘|varicella
水痘-带状疱疹病毒|varicella-zoster virus|VZV
水疱|vesicle
丝状疣|verruca filiformis
粟丘疹|milium
苔藓样变|lichenification
太田痣|nevus of Ota
弹性纤维|elastic fiber
弹性纤维性假黄瘤|pseudoxanthoma elasticum|PXE
糖尿病皮肤病变|diabetic dermopathy
特应性皮炎|atopic dermatitis|AD
特应性湿疹|atopic eczema
天疱疮|pemphigus
同形反应|isomorphism
透明角质颗粒|keratohyalin granule
退行期|catagen
脱色素痣|nevus depigmentosus
外泌汗腺|eccrine sweat gland
外伤性脂膜炎|traumatic panniculitis
外源性光感性皮炎|exogenous photosensitizing dermatitis
网状变性|reticular degeneration
网状青斑|livedo reticularis|LR
威-奥综合征|Wiskott-Aldrich syndrome|WAS
微囊性淋巴管畸形|microcystic lymphatic malformation
韦格纳肉芽肿|Wegener’s granulomatosis|WG
萎缩|atrophy
萎缩纹|striae atrophicae
无汗性外胚层发育不良|hypohidrotic ectodermal dysplasia|HED
无肌病性皮肌炎|amyopathic dermatomyositis|ADM
无毛皮肤|glabrous skin
无色素痣|achromic nevus
系统性红斑狼疮|systemic lupus erythematosus|SLE
系统性硬皮病|systemic sclerosis|SSc
细胞间水肿|intercellular edema
细胞内水肿|intracellular edema
先天性大疱性鱼鳞病样红皮病|bullous congenital ichthyosiform erythroderma|BCIE
先天性非大疱性鱼鳞病样红皮病|nonbullous congenital ichthyosiform erythroderma|NBCIE
先天性外胚层发育不良|congenital ectodermal dysplasia
纤维蛋白样变性|fibrinoid degeneration
线状IgA大疱性皮病|linear IgA bullous dermatosis|LAD
线状红斑狼疮|Blaschko linear lupus erythematosus|BLLE
线状苔藓|lichen striatus
镶嵌疣|mosaic wart
小叶性|lobular
锌缺乏症|zinc deficiency
新生儿剥脱性皮炎|neonatal exfoliative dermatitis
新生儿单纯疱疹|neonatal herpes simplex
新生儿红斑狼疮|neonatal lupus erythematosus|NLE
新生儿脓疱疮|impetigo neonatorum
新型冠状病毒感染|corona virus disease 2019|COVID-19
性病性淋巴肉芽肿|lymphogranuloma venereum|LGV
性连锁鱼鳞病|X-linked ichthyosis|XLI
雄激素性秃发|androgenetic alopecia
休止期|telogen
血管角皮瘤|angiokeratoma
血管肉瘤|angiosarcoma
#404
血管炎|vasculitis
血栓性静脉炎|thrombophlebitis
寻常痤疮|acne vulgaris
寻常型脓疱疮|impetigo vulgaris
寻常型天疱疮|pemphigus vulgaris
寻常型银屑病|psoriasis vulgaris|PSO
寻常型鱼鳞病|ichthyosis vulgaris|IV
寻常疣|verruca vulgaris
蕈样肉芽肿病|mycosis fungoides|MF
压疮|decubitus ulcer
亚急性皮肤型红斑狼疮|subacute cutaneous lupus erythematosus|SCLE
烟酸缺乏症|nicotinic acid deficiency
炎症后色素沉着|post-inflammatory hyperpigmentation
炎症后色素减退斑|post-inflammatory hypomelanosis
眼带状疱疹|herpes zoster ophthalmicus
痒疹|prurigo
恙虫病|tsutsugamushi disease
恙虫病立克次体|Rickettsia tsutsugamushi|Rt
药物性红斑狼疮|drug-induced lupus erythematosus|DILE
药物性天疱疮|drug-induced pemphigus
伊藤痣|nevus of Ito
移植物抗宿主病|graft-versus-host disease|GVHD
异物肉芽肿|foreign body granuloma
意外粉粒沉着病|accidental tattoos
阴囊湿疹|scrotum eczema
银屑病|psoriasis
隐翅虫皮炎|paederus dermatitis
婴儿腹部离心性脂肪营养不良|lipodystrophia centrifugalis abdominalis infantilis
婴儿血管瘤|infantile hemangioma|IH
硬化性苔藓|lichen sclerosus
硬化性脂膜炎|sclerosing panniculitis
硬皮病|scleroderma
硬下疳|chancre
硬肿病|scleredema
痈|carbuncle
油痤疮|oil acne
疣状表皮发育不良|epidermodysplasia verruciformis|EV
疣状红斑狼疮|verrucous lupus erythematosus|VLE
疣状增生|verrucous hyperplasia
游走性红斑|erythema migrans|EM
有汗性外胚层发育不良|hidrotic ectodermal dysplasia
有毛皮肤|hairy skin
幼儿急疹|exanthema subitum
淤积性皮炎|stasis dermatitis|SD
瘀斑|ecchymosis
瘀点|petechia
鱼鳞病|ichthyosis
原发性干燥综合征|primary Sjögren syndrome|pSS
原发性皮肤B细胞淋巴瘤|primary cutaneous B-cell lymphoma|PCBCL
原发性损害|primary lesion
增殖型天疱疮|pemphigus vegetans
掌跖角化症|palmoplantar keratoderma|PPK
掌跖脓疱病|pustulosis palmoplantar|PPP
真皮|dermis
着色性干皮病|xeroderma pigmentosum|XP
肢端发绀症|acrocyanosis
脂肪瘤|lipoma
脂膜炎|panniculitis
脂溢性角化病|seborrheic keratosis
脂溢性皮炎|seborrheic dermatitis
职业性白斑|occupational leukoderma
职业性痤疮|occupational acne
职业性电光性皮炎|occupational electroflash dermatitis
职业性感染性皮肤病|occupational infectious dermatosis
职业性光接触性皮炎|occupational contact photodermatitis
职业性黑变病|occupational melanosis
职业性角化过度、皲裂|occupational hyperkeratosis, fissure
职业性接触性皮炎|occupational contact dermatitis
职业性接触性荨麻疹|occupational contact urticaria
职业性浸渍、糜烂|occupational maceration, erosion
职业性毛发改变|occupational hair abnormality
职业性皮肤癌|occupational skin carcinoma
职业性皮肤病|occupational dermatosis
职业性皮肤溃疡|occupational skin ulcer
职业性皮炎|occupational dermatitis
职业性痒疹|occupational prurigo
职业性药疹样皮炎|occupational medicamentose-like dermatitis
职业性疣赘|occupational verruciform neoplasm
职业性指甲改变|occupational nail abnormality
跖疣|verruca plantaris / plantar wart
指状疣|digitate wart
致密层|lamina densa
痣样基底细胞癌综合征|nevoid basal cell carcinoma syndrome
中毒性表皮坏死松解症|toxic epidermal necrolysis|TEN
中毒性红斑|toxic erythema
抓痕|excoriation
自体敏感性皮炎|autosensitization dermatitis
组织蛋白酶|cathepsin
`;
let page = 399;
function id(text) {
  let hash = 2166136261;
  for (const c of text) { hash ^= c.codePointAt(0); hash = Math.imul(hash, 16777619); }
  return 'w_' + (hash >>> 0).toString(16);
}
const words = [];
for (const line of raw.trim().split('\n')) {
  if (line.startsWith('#')) { page = Number(line.slice(1)); continue; }
  if (!line.trim()) continue;
  const [zh, en, abbr = '', note = ''] = line.split('|').map(s => s.trim());
  words.push(Object.freeze({id: id(en + '|' + zh), en, zh, abbr, page, note}));
}
globalThis.WORDS = Object.freeze(words);
if (typeof module !== 'undefined') module.exports = words;
})();
