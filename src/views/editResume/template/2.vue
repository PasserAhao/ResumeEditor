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
                          :editor-id="con.editor_id" :previewOnly="true" v-model="con.content"/>
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
  <ResumeEditor :tem-id="temID" :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig"
                :colors="colorsConfig" :show-skill="false" :titles="baseInfo"/>
  <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
         style="opacity: 0"/>
</template>

<script>
import {useImgUrl, initInfo} from '@/hooks/useImgUrl'
import {defineComponent, reactive, ref} from "vue";
import MdEditor from 'md-editor-v3'
import ResumeEditor from '../../../components/ResumeEditor'

import {Camera, Pic, Handbag, BachelorCapOne,} from '@icon-park/vue-next';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "2",
  components: {Camera, Pic, Handbag, BachelorCapOne, MdEditor, ResumeEditor,},
  setup() {
    const temID = ref("tem2")
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

    return {
      baseInfo,
      colorsConfig, temID,
      ...initInfo(temID.value, colorsConfig),
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
