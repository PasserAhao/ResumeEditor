<template>
  <div id="resume1">
    <div style="width: 820px;min-height: 1160px;background: white;margin: 0 auto">
      <!--   简历左边部分     -->
      <!--   简历左边部分     -->
      <!--   简历左边部分     -->
      <div style=";width: 240px;min-height: 1160px;float: left;position: relative"
           :style="{background:colorsConfig[0].color[0].value}">
        <!--   头像部分         -->
        <!--   头像部分         -->
        <div style="margin-bottom: 10px;position: relative">
          <el-image style="background: #f5f7fa;width: 124px;height: 154px;margin: 25px 0 0 55px" :src="imgUrl">
            <template #error>
              <pic style="margin: 60px 50px" theme="outline" size="25" fill="#b1aaaa"/>
            </template>
          </el-image>
          <div @click="openFile" class="hidden_img">
            <camera style="margin-top: 60px" theme="outline" size="25" fill="#ffffff"/>
          </div>
        </div>
        <!--     基础信息       -->
        <!--     基础信息       -->
        <div style="display: flex;flex-direction: column;margin: 15px 0 0 20px"
             :style="{color:colorsConfig[1].color[0].value}">
          <!--    年龄    -->
          <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <calendar theme="two-tone" size="18" :fill="[colorsConfig[0].color[0].value ,'#ffffff']"/>
                  </span>
            <span>&nbsp;&nbsp;{{ userinfo.age }}</span>
          </div>
          <!--    性别     -->
          <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <male theme="two-tone" size="18" :fill="[colorsConfig[0].color[0].value ,'#ffffff']"/>
                  </span>
            <span>&nbsp;&nbsp;{{ userinfo.gender }}</span>
          </div>
          <!--    地址     -->
          <div v-if="userinfo.address" style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <local theme="two-tone" size="18" :fill="[colorsConfig[0].color[0].value ,'#ffffff']"/>
                  </span>
            <span>&nbsp;&nbsp;{{ userinfo.address }}</span>
          </div>
          <!--    工作年限     -->
          <div v-if="userinfo.workAge" style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <web-page theme="two-tone" size="18" :fill="[colorsConfig[0].color[0].value ,'#ffffff']"/>
                  </span>
            <span>&nbsp;&nbsp;{{ userinfo.workAge }}</span>
          </div>
          <!--    电话     -->
          <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <phone-call theme="two-tone" size="18" :fill="[colorsConfig[0].color[0].value ,'#ffffff']"/>
                  </span>
            <span>&nbsp;&nbsp;{{ userinfo.phone }}</span>
          </div>
          <!--    邮箱     -->
          <div style="margin-top: 15px;">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <mail-open theme="two-tone" size="18" :fill="[colorsConfig[0].color[0].value ,'#ffffff']"/>
                  </span>
            <span>&nbsp;&nbsp;{{ userinfo.email }}</span>
          </div>


        </div>
        <!--      自定义信息        -->
        <!--      自定义信息        -->
        <div v-show="skillInfo.text" style="margin:50px 20px;font-size: 22px">
          <MdEditor :style="{color:colorsConfig[1].color[0].value,background:colorsConfig[0].color[0].value}"
                    :editor-id="skillInfo.text" :previewOnly="true" v-model="skillInfo.text"/>
        </div>
        <!--      技能特长        -->
        <!--      技能特长        -->
        <div v-if="skillInfo.isSkill" style="margin: 50px 20px 0 20px ">
          <h4 style="margin: 5px 0 10px 5px" :style="{color:skillInfo.skillTitleColor}">
            {{ skillInfo.skillTitle }}:
          </h4>
          <div v-for="(ski,idx) in skillInfo.skillList" :key="idx" style="margin-bottom: 5px">
            <el-progress :text-inside="true" :stroke-width="20" :percentage="ski.level" :color="ski.color">
              <span>{{ ski.skill }}</span>
            </el-progress>
          </div>

        </div>
        <!--      兴趣爱好        -->
        <!--      兴趣爱好        -->
        <div v-if="skillInfo.isHobby" style="margin: 50px 20px 0 20px">
          <h4 style="margin: 5px 0 10px 5px" :style="{color:skillInfo.hobbyTitleColor}">
            {{ skillInfo.hobbyTitle }}:
          </h4>
          <div style="display: flex;flex-wrap: wrap">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span v-for="(hob,idx) in skillInfo.hobbyList" :key="idx" style="margin: 10px 5px">
                    <span :style="{background:hob.bcgColor,color:hob.fontColor}"
                          style="font-size: 16px;padding: 5px 10px;border-radius: 20px">
                      {{ hob.hobby }}
                    </span>
                  </span>
          </div>
        </div>

      </div>
      <!--    简历右边部分    -->
      <!--    简历右边部分    -->
      <!--    简历右边部分    -->
      <div style="float: left;width: 580px;min-height: 1160px;">
        <!--      求职意向        -->
        <div :style="{color: colorsConfig[2].color[0].value}">
          <h1 style="margin: 0 0 15px 30px;padding-top: 30px">{{ userinfo.name }}</h1>
          <div style="display: flex;flex-direction: row;justify-content: flex-start;flex-wrap: wrap">
            <div v-for="(item,index) in userinfo.job" :key="index"
                 style="width:290px;margin-bottom: 5px">
              <span style="font-size: 18px;margin-left: 50px">{{ item.title }}:{{ item.content }}</span>
            </div>
          </div>
        </div>
        <!--      自定义模块        -->
        <div style="overflow: hidden">

          <div v-for="(item,index) in ModuleList" :key="index">
            <div v-if="item.isShow">
              <!--      自定义模块头部            -->
              <div style="display: flex;justify-content: flex-start;width: 550px;margin: 20px auto">
                <div style="border-radius: 50px;padding: 7px 7px 5px 7px"
                     :style="{background: colorsConfig[2].color[0].value}">
                  <book-open v-if="item.headerImg === 'bookOpen'" theme="outline" size="20" fill="#ffffff"/>
                  <handbag v-if="item.headerImg === 'handbag1'" theme="outline" size="20" fill="#ffffff"/>
                  <seo-folder v-if="item.headerImg === 'folder'" theme="outline" size="20" fill="#ffffff"/>
                  <Briefcase v-if="item.headerImg === 'handbag2'" theme="outline" size="20" fill="#ffffff"/>
                  <bachelor-cap-one v-if="item.headerImg === 'bachelorCap'" theme="outline" size="20"
                                    fill="#ffffff"/>
                  <medal-one v-if="item.headerImg === 'medal'" theme="outline" size="20" fill="#ffffff"/>
                  <comment v-if="item.headerImg === 'comment'" theme="outline" size="20" fill="#ffffff"/>
                  <star v-if="item.headerImg === 'star'" theme="outline" size="20" fill="#ffffff"/>
                </div>
                <div
                    :style="{marginLeft: '15px',width: '495px',borderBottom:`${colorsConfig[2].color[0].value} solid 2px`}">
                        <span style="font-size: 16px;font-weight: bold;"
                              :style="{color:colorsConfig[2].color[0].value}">
                          {{ item.moduleName }}
                        </span>
                </div>
              </div>
              <!--       自定义模块头部结束           -->
              <!--       自定义模块内容开始           -->
              <div v-for="(con,index2) in item.content" :key="index2"
                   :style="{color:colorsConfig[2].color[0].value}" style="width: 520px;margin: 0 auto;">
                <!--       自定义模块Title           -->
                <!--       自定义模块Title           -->
                <div v-if="con.title"
                     style="display: flex;justify-content: space-between;width: 520px;font-size: 16px;">
                  <div v-if="con.title.date1">{{ con.title.date1 }}~{{ con.title.date2 }}</div>
                  <div v-if="con.title.text1" style="font-weight: bold">{{ con.title.text1 }}</div>
                  <div v-if="con.title.text2">{{ con.title.text2 }}</div>
                  <div v-if="con.title.education">{{ con.title.education }}</div>
                </div>
                <!--       自定义模块content           -->
                <!--       自定义模块content           -->
                <div>
                  <MdEditor :style="{color:colorsConfig[2].color[1].value}"
                            :editor-id="con.content" :previewOnly="true" v-model="con.content"/>
                </div>
                <!--       自定义模块Tag           -->
                <!--       自定义模块Tag           -->
                <div v-if="con.label" style="display: flex;justify-content: flex-start;flex-wrap: wrap">
                  <div v-for="(tag,index3) in con.label" :key="index3">
                    <div style="border-radius: 25px;margin-right: 10px;display: block;height: 30px"
                         :style="{background:colorsConfig[3].color[1].value,border:`2px solid ${colorsConfig[3].color[0].value}`}">
                            <span style="padding: 10px;line-height: 28px"
                                  :style="{color:colorsConfig[2].color[1].value}">
                              {{ tag }}
                            </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  </div>
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <ResumeEditor :colors="colorsConfig"
                :u-info="userinfo" :skill="skillInfo"
                :re-set="ModuleList" :md-set="ModuleConfig"/>
  <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
         style="opacity: 0"/>
</template>

<script>
import {defineComponent, reactive,} from "vue";
import ResumeEditor from '../../../components/ResumeEditor'
import {useImgUrl} from '@/hooks/useImgUrl'
import MdEditor from 'md-editor-v3'
import {
  Camera, Pic, Calendar, PhoneCall, MailOpen, WebPage, Local, Male, BookOpen, Handbag,
  Comment, Star, MedalOne, SeoFolder, Briefcase, BachelorCapOne,
} from '@icon-park/vue-next';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "1",
  components: {
    Camera, Pic, Calendar, PhoneCall, MailOpen, WebPage, Local, Male, BookOpen, Handbag, Comment,
    Star, MedalOne, SeoFolder, Briefcase, BachelorCapOne, MdEditor, ResumeEditor,
  },
  setup() {
    //需要自己传入的参数
    const userinfo = reactive({
      name: "海绵宝宝",
      age: "36",
      date: "1986-07-11",
      gender: "男",
      address: "比基尼海滩比奇堡",
      workAge: "20年工作经验",
      phone: "0595-87283169",
      email: "spongebob@163.com",
    })
    const skillInfo = reactive({
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
    })
    const ModuleList = reactive([
      {isShow: true, moduleName: "工作经验", headerImg: '', content: []},
      {isShow: true, moduleName: "项目经验", headerImg: '', content: []},
      {isShow: true, moduleName: "荣誉证书", headerImg: '', content: []},
      {isShow: true, moduleName: "自我评价", headerImg: '', content: []},
    ])
    const colorsConfig = reactive([
      {title: '皮肤颜色', color: [{value: 'rgba(255,215,0,1)'}]},
      {title: '字体颜色(左)', color: [{value: 'rgba(255,255,255,1)'}]},
      {title: '字体颜色(右)', color: [{value: 'rgba(0,206,209,1)'}, {value: 'rgba(85,85,85,0.8)'}]},
      {title: '标签颜色', color: [{value: 'rgba(58,95,133,0.2)'}, {value: 'rgba(255,215,219,1)'}]},
    ])
    const ModuleConfig = reactive([
      {
        index:1,
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
        index: 2,
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
        index: 1,
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
    ])


    return {
       userinfo, colorsConfig, ModuleList, ModuleConfig, skillInfo,
      ...useImgUrl(),
    }
  }
})
</script>

<style scoped>

#resume1 .hidden_img {
  width: 124px;
  height: 154px;
  position: absolute;
  top: 25px;
  left: 55px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#resume1 .hidden_img:hover {
  opacity: 0.8;
  background: #CDD0D6;
  cursor: pointer;
}

</style>
