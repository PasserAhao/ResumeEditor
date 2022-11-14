<template>
  <div id="resume1">
    <div style="width: 820px;min-height: 1160px;background: white;margin: 0 auto;position: relative">
      <!--    头部内容        -->
      <div style="display: flex" :style="{color:colorsConfig[0].color[0].value}">
        <div style="margin-left: 30px;margin-top: 20px">
                <span style="font-size: 35px;padding: 3px 20px 3px 0;"
                      :style="{borderRight:`${colorsConfig[0].color[0].value} solid 3px`}">
                  {{ baseInfo[0].text }}
                </span>
        </div>
        <div style="margin-left: 15px">
          <p style="font-size: 18px;margin-bottom: 3px">{{ baseInfo[1].text }}</p>
          <h3 style="margin-top: 0">{{ baseInfo[2].text }}</h3>
        </div>

        <div style="position: absolute;top: 33px;right: 60px">
          <span :style="{background:colorsConfig[0].color[1].value}"
                style="border-radius: 50%;padding: 12px 8px 7px 8px;margin-right: 20px">
            <bachelor-cap-one theme="outline" size="25" fill="#ffffff"/>
          </span>
          <span :style="{background:colorsConfig[0].color[1].value}" style="border-radius: 50%;padding: 12px 8px 7px">
            <handbag theme="outline" size="25" fill="#ffffff"/>
          </span>

        </div>
      </div>
      <!--    分割线条        -->
      <div style="width: 100%;height: 18px;display: flex">
        <div style="width: 496px;" :style="{borderBottom:`${colorsConfig[0].color[0].value} solid 18px`}"/>
        <div style="width: 0;height: 0;border: 9px solid rgba(0,0,0,0)"
             :style="{borderLeftColor:colorsConfig[0].color[0].value,borderBottomColor:`${colorsConfig[0].color[0].value}`}"/>
        <div style="width: 0;height: 0;border: 6px solid rgba(0,0,0,0);margin-left: -8px;margin-top: 6px"
             :style="{borderTopColor:`${colorsConfig[0].color[1].value}`,borderRightColor:colorsConfig[0].color[1].value}"/>
        <div style="width: 302px;" :style="{borderBottom:`${colorsConfig[0].color[1].value} solid 12px`}"/>
      </div>
      <!--    内容主体       -->
      <div style="margin: 0 50px;">
        <div style="height: 15px;" :style="{borderLeft:`${colorsConfig[0].color[0].value} solid 2px`}"/>
        <!--     基本信息         -->
        <div :style="{color:colorsConfig[1].color[2].value}">
          <!--     标题部分           -->
          <div style="height: 24px;position: relative">
                  <span style="padding: 0 10px 0 27px;margin-left: -17px;font-size: 16px"
                        :style="{background:colorsConfig[0].color[0].value,color:colorsConfig[1].color[0].value}">基本信息</span>
            <span style="position: absolute;width: 20px;height: 20px;clip-path: polygon(0 0, 0% 100%, 100% 100%)"
                  :style="{background:colorsConfig[0].color[0].value}"/>
            <span
                style="position: absolute;height: 6px;width: 17px;top: 20px;left: -17px;clip-path: polygon(0 0, 100% 0, 100% 100%)"
                :style="{background:'rgba(0,0,0,0.5)'}"/>

          </div>
          <!--     内容部分          -->
          <div style="margin-top: -4px;overflow: hidden"
               :style="{borderLeft:`${colorsConfig[0].color[0].value} solid 2px`,borderTop:`${colorsConfig[0].color[0].value} solid 2px`}">
            <div style="overflow: hidden">
              <div style="float: left;min-height: 160px;width: 460px;margin: 15px 0 0 40px">
                <div style="display: flex;flex-wrap: wrap">
                  <span style="width: 230px;margin-bottom: 10px">
                    姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:&nbsp;{{ userinfo.name }}
                  </span>
                  <span style="width: 230px;margin-bottom: 10px">
                    年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄&nbsp;:{{ userinfo.age }}
                  </span>
                  <span style="width: 230px;margin-bottom: 10px">
                    性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;:{{ userinfo.gender }}
                  </span>
                  <span v-if="userinfo.address" style="width: 230px;margin-bottom: 10px">
                    籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯&nbsp;:{{ userinfo.address }}
                  </span>
                  <span v-if="userinfo.workAge" style="width: 230px;margin-bottom: 10px">
                    工&nbsp;作&nbsp;经&nbsp;验&nbsp;:{{ userinfo.workAge }}
                  </span>

                  <span v-if="userinfo.phone" style="width: 230px;margin-bottom: 10px">
                    电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话&nbsp;:{{ userinfo.phone }}
                  </span>
                  <span v-if="userinfo.email" style="width: 230px;margin-bottom: 10px">
                    邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱&nbsp;:{{ userinfo.email }}
                  </span>

                </div>
                <div style="display: flex;flex-wrap: wrap">
                  <span v-for="(item,idx) in userinfo.job" :key="idx" style="width: 230px;margin-bottom: 10px">
                    <span v-if="item.isShow">
                      {{ item.title }} : {{ item.content }}
                    </span>
                  </span>
                </div>
              </div>

              <!--       头像             -->
              <div style="float: right;min-height: 160px;width: 200px">
                <div style="margin-bottom: 10px;position: relative">
                  <el-image style="background: #f5f7fa;width: 124px;height: 154px;margin: 15px 0 0 55px"
                            :src="imgUrl">
                    <template #error>
                      <pic style="margin: 60px 50px" theme="outline" size="25" fill="#b1aaaa"/>
                    </template>
                  </el-image>
                  <div @click="openFile" class="hidden_img">
                    <camera style="margin-top: 60px" theme="outline" size="25" fill="#ffffff"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--   循环部分   -->
        <div v-for="(module,idx) in ModuleList" :key="idx">
          <!--     标题部分           -->
          <div style="height: 24px;position: relative">
                  <span style="padding: 0 10px 0 27px;margin-left: -17px;font-size: 16px"
                        :style="{background:colorsConfig[0].color[0].value,color:colorsConfig[1].color[0].value}">{{
                      module.moduleName
                    }}</span>
            <span style="position: absolute;width: 20px;height: 20px;clip-path: polygon(0 0, 0% 100%, 100% 100%)"
                  :style="{background:colorsConfig[0].color[0].value}"/>
            <span
                style="position: absolute;height: 6px;width: 17px;top: 20px;left: -17px;clip-path: polygon(0 0, 100% 0, 100% 100%)"
                :style="{background:'rgba(0,0,0,0.5)'}"/>

          </div>
          <!--     内容部分          -->
          <div style="margin-top: -4px"
               :style="{borderLeft:`${colorsConfig[0].color[0].value} solid 2px`,borderTop:`${colorsConfig[0].color[0].value} solid 2px`}">
            <div v-for="(con,index2) in module.content" :key="index2"
                 :style="{color:colorsConfig[1].color[1].value}" style="width: 670px;margin: 0 auto;margin-top: 10px">
              <!--       自定义模块Title           -->
              <!--       自定义模块Title           -->
              <div v-if="con.title"
                   style="display: flex;justify-content: space-between;width: 100%;font-size: 16px;">
                <div v-if="con.title.date1">{{ con.title.date1 }}~{{ con.title.date2 }}</div>
                <div v-if="con.title.text1" style="font-weight: bold">{{ con.title.text1 }}</div>
                <div v-if="con.title.text2">{{ con.title.text2 }}</div>
                <div v-if="con.title.education">{{ con.title.education }}</div>
              </div>
              <!--       自定义模块content           -->
              <!--       自定义模块content           -->
              <div>
                <MdEditor :style="{color:colorsConfig[1].color[2].value}"
                          :editor-id="con.content" :previewOnly="true" v-model="con.content"/>
              </div>
              <!--       自定义模块Tag           -->
              <!--       自定义模块Tag           -->
              <div v-if="con.label" style="display: flex;justify-content: flex-start;flex-wrap: wrap">
                <div v-for="(tag,index3) in con.label" :key="index3" style="margin-bottom: 15px">
                  <div style="border-radius: 25px;margin-right: 10px;display: block;height: 30px"
                       :style="{background:colorsConfig[2].color[1].value,border:`2px solid ${colorsConfig[2].color[0].value}`}">
                    <span style="padding: 10px;line-height: 28px" :style="{color:colorsConfig[1].color[2].value}">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <!--              -->
        <!--              -->
        <!--              -->
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
  <ResumeEditor :colors="colorsConfig" :show-skill="false" :titles="baseInfo"
                :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig"/>
  <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
         style="opacity: 0"/>
</template>

<script>
import {defineComponent, reactive} from "vue";
import ResumeEditor from '../../../components/ResumeEditor'
import {useImgUrl} from '@/hooks/useImgUrl'
import MdEditor from 'md-editor-v3'

import {Camera, Pic, Handbag, BachelorCapOne,} from '@icon-park/vue-next';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "2",
  components: {Camera, Pic, Handbag, BachelorCapOne, MdEditor, ResumeEditor,},
  setup() {
    //需要自己传入的参数
    const ModuleList = reactive([
      {isShow: true, moduleName: "工作经验", headerImg: '', content: []},
      {isShow: true, moduleName: "项目经验", headerImg: '', content: []},
      {isShow: true, moduleName: "荣誉证书", headerImg: '', content: []},
      {isShow: true, moduleName: "自我评价", headerImg: '', content: []},
    ])

    const colorsConfig = reactive([
      {title: '皮肤颜色', color: [{value: '#80D2C8'}, {value: '#FFD4A9'},]},
      {title: '字体颜色', color: [{value: '#ffffff'}, {value: '#000000'}, {value: '#555555'}]},
      {title: '标签颜色', color: [{value: 'rgba(58,95,133,0.2)'}, {value: 'rgba(255,215,219,1)'}]},
    ])
    const baseInfo = reactive([
      {title: '简历标题', text: '个人简历'},
      {title: '简历文本1', text: '细节决定成败'},
      {title: '简历文本2', text: 'Personal Resume'},
    ])

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
      userinfo, colorsConfig, ModuleList, ModuleConfig, baseInfo,
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
  top: 15px;
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
