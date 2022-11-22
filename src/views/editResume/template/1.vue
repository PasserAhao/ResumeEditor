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
                    :editor-id="'skill'" :previewOnly="true" v-model="skillInfo.text"/>
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
          <h1 style="margin: 0 0 15px 30px;padding-top: 10px">{{ userinfo.name }}</h1>
          <div style="display: flex;flex-direction: row;justify-content: flex-start;flex-wrap: wrap">
            <div v-for="(item,index) in userinfo.job" :key="index"
                 style="width:290px;margin-bottom: 5px">
              <span style="font-size: 18px;margin-left: 50px">{{ item.title }}:{{ item.content }}</span>
            </div>
          </div>
        </div>
        <!--      自定义模块        -->
        <div style="overflow: hidden">

          <div v-for="(item,index) in ModuleList" :key="index" style="font-size: 14px">
            <div v-if="item.isShow">
              <!--      自定义模块头部            -->
              <div style="display: flex;justify-content: flex-start;width: 550px;margin: 3px auto 5px">
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
              <!--      自定义模块内容           -->
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
                            :editor-id="con.editor_id" :previewOnly="true" v-model="con.content"/>
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
import {useStore} from 'vuex'
import {useImgUrl} from '@/hooks/useImgUrl'
import {defineComponent, reactive,} from "vue";
import MdEditor from 'md-editor-v3'
import ResumeEditor from '../../../components/ResumeEditor'

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
    const store = useStore()
    //需要自己传入的参数
    const userinfo = store.state.userInfo
    const skillInfo = store.state.skillInfo
    const ModuleConfig = store.state.modulesConfig
    const ModuleList = store.state.resumeList

    const colorsConfig = reactive([
      {title: '皮肤颜色', color: [{value: 'rgba(255,215,0,1)'}]},
      {title: '字体颜色(左)', color: [{value: 'rgba(255,255,255,1)'}]},
      {title: '字体颜色(右)', color: [{value: 'rgba(0,206,209,1)'}, {value: 'rgba(85,85,85,0.8)'}]},
      {title: '标签颜色', color: [{value: 'rgba(58,95,133,0.2)'}, {value: 'rgba(255,215,219,1)'}]},
    ])

    return {
      colorsConfig,
      userinfo, ModuleList, ModuleConfig, skillInfo,
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
