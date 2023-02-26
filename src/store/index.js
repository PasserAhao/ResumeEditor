import { createStore } from 'vuex'
import {reactive} from "vue";

export default createStore({
  state: {
    userInfo:reactive({
      name: "海绵宝宝",
      age: "36",
      date: "1986-07-11",
      gender: "男",
      address: "比基尼海滩比奇堡",
      workAge: "20年工作经验",
      phone: "0595-87283169",
      email: "spongebob@163.com",
    }),
    skillInfo:reactive({
      text: '我非常喜欢和派大星，珊迪，章鱼哥玩躲猫猫',
      isSkill: true,
      skill: '',
      skillTitle: '专业技能',
      skillTitleColor: '#000000',
      skillList: [
        {skill: "蟹黄堡", level: 100, color: '#00ced1'},
        {skill: "披萨", level: 80, color: '#ff8c00'},
        {skill: "海之霸", level: 50, color: '#90ee90'},
        {skill: "蜗牛饮料", level: 90, color: '#1e90ff'},
      ],
      hobby: '',
      isHobby: true,
      hobbyTitle: '兴趣爱好',
      hobbyTitleColor: '#000000',
      hobbyList: [
        {hobby: '抓蝴蝶', fontColor: '#a81f1f', bcgColor: 'rgba(255,215,219,1)'},
        {hobby: '空手道', fontColor: '#2626c2', bcgColor: 'rgba(144,238,144,1)'},
        {hobby: '吹泡泡', fontColor: '#57b43d', bcgColor: 'rgba(0,206,209,1)'},
      ]
    }),
    modulesConfig:reactive([
      {
        index:1,
        isTem:true,
        moduleName: "专业技能",
        isAdd: false,
        AllowChild: false,
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: "专业技能", headerImg: 'star', content: [
            {
              id: 0,
              editor_id:`专业技能0`,
              title: {text1: "", text2: "", date1: "", date2: "", education: ''},
              content: "",
            },
          ]
        }
      },
      {
        index: 2,
        isTem:true,
        moduleName: "工作经验",
        isAdd: true,
        AllowChild: true,
        text1: '工作公司',
        text2: '工作岗位',
        text3: '在职时间',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: "工作经验", headerImg: 'handbag1',
          content: [
            {
              id: 1,
              editor_id:`工作经验1`,
              title: {text1: "海之霸餐厅", text2: "收银", date1: "2023-09", date2: "2024-10"},
              content: "在海之霸餐厅给蟹老板当卧底\n阻止痞老板偷蟹黄堡秘方\n帮助蟹老板挖痞老板的机器人老婆",
            },
            {
              id: 2,
              editor_id:`工作经验2`,
              title: {text1: "蟹堡王餐厅", text2: "厨师", date1: "2022-10", date2: "2023-08"},
              content: "负责给每一位顾客制作美味的蟹黄堡\n帮蟹老板赚足够多的钱钱",
            },
          ],
        }
      },
      {
        index: 1,
        isTem:true,
        moduleName: "项目经验",
        isAdd: true,
        AllowChild: true,
        text1: '项目名称',
        text2: '担任角色',
        text3: '项目时间',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: "项目经验", headerImg: 'folder',
          content: [
            {
              id: 1,
              editor_id:`项目经验1`,
              title: {text1: "制作美味蟹黄堡", text2: "主厨", date1: "2022-10", date2: "2023-08"},
              content: "蟹黄堡是由切碎的牛肉和蟹肉用调料搅拌将其均匀捏成肉饼，用小火将肉饼煎熟，火不要太大，容易煎糊，等煎到两面金黄就可以关火了，要想更入味，可以煎焦一点，然后在面包胚上摆上准备好的生菜、芝士片、西红柿、洋葱，以及适量的番茄酱和芥末酱。",
            },
          ],
        }
      },
      {
        index:1,
        isTem:true,
        moduleName: "教育背景",
        isAdd: false,
        AllowChild: true,
        text1: '学校名称',
        text2: '就读专业',
        text3: '就读时间',
        text4: '学历',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        eduOptions: [
          {value: '', label: '不填'}, {value: '高中', label: '高中'}, {value: '大专', label: '大专'},
          {value: '本科', label: '本科'}, {value: '研究生', label: '研究生'}, {value: '博士', label: '博士'},
        ],
        moduleContent: {
          isShow: true, moduleName: "教育背景", headerImg: 'bookOpen', content: [
            {
              id: 0,
              editor_id:`教育背景0`,
              title: {text1: "", text2: "", date1: "", date2: "", education: ''},
              content: "",
            },
          ]
        }
      },
      {
        index: 1,
        isTem:true,
        moduleName: "实习经验",
        isAdd: false,
        AllowChild: true,
        text1: '实习公司',
        text2: '担任职务',
        text3: '实习时间',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: "实习经验", headerImg: 'handbag2',
          content: [
            {
              id: 1,
              editor_id:`实习经验1`,
              title: {text1: "实习公司", text2: "", date1: "", date2: ""},
              content: "",
            },
          ],
        }
      },
      {
        index: 1,
        isTem:true,
        moduleName: "校园经历",
        isAdd: false,
        AllowChild: true,
        text1: '经历名称',
        text2: '经历角色',
        text3: '经历时间',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: "校园经历", headerImg: 'bachelorCap',
          content: [
            {
              id: 1,
              editor_id:`校园经历1`,
              title: {text1: "", text2: "", date1: "", date2: ""},
              content: "",
            },
          ],
        }
      },
      {
        index: 1,
        isTem:true,
        moduleName: "荣誉证书",
        isAdd: true,
        AllowChild: false,
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
          labelName: '',
        },
        moduleContent: {
          isShow: true, moduleName: "荣誉证书", headerImg: 'medal',
          content: [
            {
              id: 1,
              editor_id:`荣誉证书1`,
              title: {text1: "", text2: "", date1: "", date2: ""},
              content: "曾今在比基尼海滩空手道比赛打败过珊迪\n在比奇堡美食节获得最佳厨师称号",
              labelName: '',
              label: ['蟹堡王特技厨师证',]
            },
          ],
        }
      },
      {
        index: 1,
        isTem:true,
        moduleName: "自我评价",
        isAdd: true,
        AllowChild: false,
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        child: {
          title: {text1: "", text2: "", date1: "", date2: ""},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: "自我评价", headerImg: 'comment',
          content: [
            {
              id: 1,
              editor_id:`自我评价1`,
              title: {text1: "", text2: "", date1: "", date2: ""},
              content: "海绵宝宝（SpongeBob SquarePants），美国动画片《海绵宝宝》及其衍生作品中的角色。\n" +
                  "生活在太平洋海底一座被称为比奇堡的城市，身份是蟹堡王餐厅的高级厨师。黄色长方形海绵，其身体构成如同清洁用海绵。拥有两只手，各四根手指。以棕色短裤、白色衬衫和红色领带为主要服装。身体如果被破坏皆可恢复原状。虽然有正常进食，但纯滤食海水也能继续存活。体力薄弱，且所谓的哑铃其实是绒毛玩具；但随著剧情发展似乎逐渐提升，奇怪的是他在与珊迪用空手道对打时完全看不出体质的薄弱，两人平分秋色。平常喜欢说的口头禅是：“我准备好了”",
            },
          ],
        }
      },
    ]),

    colors:reactive([
      {title: '皮肤颜色', color: [{value: '#80D2C8'}, {value: '#FFD4A9'},]},
      {title: '字体颜色', color: [{value: '#ffffff'}, {value: '#000000'}, {value: '#555555'}]},
      {title: '标签颜色', color: [{value: 'rgba(58,95,133,0.2)'}, {value: 'rgba(255,215,219,1)'}]},
    ]),
    resumeList:reactive([
      {isShow: true, moduleName: "工作经验", headerImg: '', content: []},
      {isShow: true, moduleName: "项目经验", headerImg: '', content: []},
      {isShow: true, moduleName: "荣誉证书", headerImg: '', content: []},
      {isShow: true, moduleName: "自我评价", headerImg: '', content: []},
    ]),
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
