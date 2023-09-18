<template>
  <div>
    <div id="resume">
      <div id="resumeBody"
          style="width: 820px;min-height: 1160px;background: white;margin: 0 auto;overflow: hidden"
           :style="{background:`linear-gradient(to right, ${colorsConfig[2].color[0].value} 240px, white 240px)`}">
        <!--   简历左边部分     -->
        <!--   简历左边部分     -->
        <!--   简历左边部分     -->
        <div id="tem1-left" style="width: 240px;float: left;position: relative;" :style="{height:`${boxHeight}px`}">
          <!--   头像部分         -->
          <!--   头像部分         -->
          <div style="margin-bottom: 10px;position: relative">
            <el-image style="background: #f5f7fa;margin: 25px 0 0 55px;width: 124px;height: 154px" :src="imgUrl">
              <template #error>
                <pic style="margin: 60px 50px" theme="outline" size="25" fill="#b1aaaa"/>
              </template>
            </el-image>
            <div @click="openFile" class="hidden_img" style="width: 124px;height: 154px">
              <camera style="margin-top: 60px" theme="outline" size="25" fill="#ffffff"/>
            </div>
          </div>
          <!--     基础信息       -->
          <!--     基础信息       -->
          <div style="display: flex;flex-direction: column;margin: 15px 0 0 20px"
               :style="{color:colorsConfig[3].color[0].value}">
            <!--    年龄    -->
            <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <calendar theme="two-tone" size="18" :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
                  </span>
              <span>&nbsp;&nbsp;{{ userinfo.age }}</span>
            </div>
            <!--    性别     -->
            <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <male theme="two-tone" size="18" :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
                  </span>
              <span>&nbsp;&nbsp;{{ userinfo.gender }}</span>
            </div>
            <!--    地址     -->
            <div v-if="userinfo.address" style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <local theme="two-tone" size="18" :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
                  </span>
              <span>&nbsp;&nbsp;{{ userinfo.address }}</span>
            </div>
            <!--    工作年限     -->
            <div v-if="userinfo.workAge" style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <web-page theme="two-tone" size="18" :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
                  </span>
              <span>&nbsp;&nbsp;{{ userinfo.workAge }}</span>
            </div>

            <div v-for="(info,idx) in userinfo.otherInfo" :key="idx">
              <div style="margin-top: 15px">
              <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                <phone-call v-if="info.label === '电话'" theme="two-tone" size="18"
                            :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
                <mail-open v-else-if="info.label === '邮箱'" theme="two-tone" size="18"
                           :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
                <star v-else theme="outline" size="18" :fill="[colorsConfig[2].color[0].value ,'#ffffff']"/>
              </span>
                <span>&nbsp;&nbsp;{{ info.txt }}</span>
              </div>
            </div>

          </div>
          <!--      自定义信息        -->
          <!--      自定义信息        -->
          <div id="left-resume1" v-show="skillInfo.text" style="margin:50px 20px;font-size: 22px">
            <MdPreview :style="{background:colorsConfig[2].color[0].value}"
                       :editor-id="'skill'" v-model="skillInfo.text"/>
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
        <div id="ContentBody" style="float: left;width: 580px;background: white">
          <!--      求职意向        -->
          <div :style="{color: colorsConfig[0].color[0].value}">
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
                       :style="{background: colorsConfig[0].color[0].value}">
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
                      :style="{marginLeft: '15px',width: '495px',borderBottom:`${colorsConfig[0].color[0].value} solid 2px`}">
                        <span style="font-size: 16px;font-weight: bold;"
                              :style="{color:colorsConfig[0].color[0].value}">
                          {{ item.moduleName }}
                        </span>
                  </div>
                </div>
                <!--      自定义模块内容           -->
                <ModuleContent1 :colors-config="colorsConfig" :module-content="item.content" :content-width="90"/>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
    <!--      右边操作栏部分    -->
    <!--      右边操作栏部分    -->
    <ResumeEditor :tem-id="temID" :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig" :colors="colorsConfig"
                  :skill="skillInfo"/>
    <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
           style="opacity: 0"/>
  </div>

</template>

<script>
import {initInfo} from '@/hooks/UserInfoHandle'
import {defineComponent, onMounted, reactive, ref, watch} from "vue";
import {MdPreview} from 'md-editor-v3'
import ResumeEditor from '../../../components/ResumeEditor'
import AvatarTem from '../../../components/AvatarTem'
import ModuleContent1 from '../../../components/ModuleContent1'
import {AvatarHandle} from '@/hooks/UserInfoHandle'
import {
  Calendar, PhoneCall, MailOpen, WebPage, Local, Male, BookOpen, Handbag,
  Comment, Star, MedalOne, SeoFolder, Briefcase, BachelorCapOne,
  Camera, Pic,
} from '@icon-park/vue-next';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "1",
  components: {
    Calendar, PhoneCall, MailOpen, WebPage, Local, Male, BookOpen, Handbag, Comment,
    Star, MedalOne, SeoFolder, Briefcase, BachelorCapOne,
    MdPreview, ResumeEditor, AvatarTem, ModuleContent1, Camera, Pic,
  },
  setup() {
    const temID = ref("tem1")
    const colorsConfig = reactive([
      {title: '模块字体颜色', color: [{value: '#00CED1FF'}, {value: '#00CED1FF'}, {value: '#555555CC'},]},
      {title: '模块标签颜色', color: [{value: '#3A5F8533'}, {value: '#FFD7DBFF'}]},
      {title: '皮肤颜色', color: [{value: '#FFD700FF'}]},
      {title: '左侧字体颜色', color: [{value: '#FFFFFFFF'}]},
    ])
    // 监听变量的方法
    const WatchColor = (Color) => {
      watch(Color, () => {
            document.documentElement.style.setProperty("--resume1-left-color", Color[3].color[0].value);
          }
      );
    };
    WatchColor(colorsConfig)

    const boxHeight = ref(1160)
    onMounted(()=>{
      const box = document.getElementById("ContentBody")
      const resize = new ResizeObserver(()=>{
         boxHeight.value = Math.ceil(box.offsetHeight / 1160) * 1160
      })
      resize.observe(box)
    })

    return {
      colorsConfig, temID,boxHeight,
      ...initInfo(temID.value, colorsConfig),
      ...AvatarHandle()
    }
  }
})
</script>

<style scoped>
:deep(#left-resume1 .md-editor-preview p) {
  color: var(--resume1-left-color);
}

.hidden_img {
  position: absolute;
  top: 25px;
  left: 55px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.hidden_img:hover {
  opacity: 0.8;
  background: #CDD0D6;
  cursor: pointer;
}
</style>
