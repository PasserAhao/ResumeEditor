<template>
  <div id="resume1">
    <div style="width: 820px;min-height: 1160px;background: white;margin: 0 auto;position: relative">
      <!--    头部内容        -->
      <div style="display: flex" :style="{color:colorsConfig[2].color[0].value}">
        <div style="margin-left: 30px;margin-top: 20px">
          <span style="font-size: 35px;padding: 3px 20px 3px 0;"
                :style="{borderRight:`${colorsConfig[2].color[0].value} solid 3px`}">
            {{ baseInfo[0].text }}
          </span>
        </div>
        <div style="margin-left: 15px">
          <p style="font-size: 18px;margin-bottom: 3px">{{ baseInfo[1].text }}</p>
          <h3 style="margin-top: 0">{{ baseInfo[2].text }}</h3>
        </div>

        <div style="position: absolute;top: 33px;right: 60px">
          <span :style="{background:colorsConfig[2].color[1].value}"
                style="border-radius: 50%;padding: 12px 8px 7px 8px;margin-right: 20px">
            <bachelor-cap-one theme="outline" size="25" fill="#ffffff"/>
          </span>
          <span :style="{background:colorsConfig[2].color[1].value}" style="border-radius: 50%;padding: 12px 8px 7px">
            <handbag theme="outline" size="25" fill="#ffffff"/>
          </span>

        </div>
      </div>
      <!--    分割线条        -->
      <div style="width: 100%;height: 18px;display: flex">
        <div style="width: 496px;" :style="{borderBottom:`${colorsConfig[2].color[0].value} solid 18px`}"/>
        <div style="width: 0;height: 0;border: 9px solid rgba(0,0,0,0)"
             :style="{borderLeftColor:colorsConfig[2].color[0].value,borderBottomColor:`${colorsConfig[2].color[0].value}`}"/>
        <div style="width: 0;height: 0;border: 6px solid rgba(0,0,0,0);margin-left: -8px;margin-top: 6px"
             :style="{borderTopColor:`${colorsConfig[2].color[1].value}`,borderRightColor:colorsConfig[2].color[1].value}"/>
        <div style="width: 302px;" :style="{borderBottom:`${colorsConfig[2].color[1].value} solid 12px`}"/>
      </div>
      <!--    内容主体       -->
      <div id="ContentBody" style="margin: 0 50px;">
        <div style="height: 15px;" :style="{borderLeft:`${colorsConfig[2].color[0].value} solid 2px`}"/>
        <!--     基本信息         -->
        <div :style="{color:colorsConfig[0].color[2].value}">
          <!--     标题部分           -->
          <div style="height: 24px;position: relative">
            <span class="Title-content"
                  :style="{background:colorsConfig[2].color[0].value,color:colorsConfig[0].color[0].value}">
              基本信息
            </span>
            <span class="Title-right-san" :style="{background:colorsConfig[2].color[0].value}"/>
            <span class="Title-left-san" :style="{background:'rgba(0,0,0,0.5)'}"/>

          </div>
          <!--     个人基本信息          -->
          <div style="margin-top: -4px;overflow: hidden"
               :style="{borderLeft:`${colorsConfig[2].color[0].value} solid 2px`,borderTop:`${colorsConfig[2].color[0].value} solid 2px`}">
            <div style="overflow: hidden">

              <div style="float: left;min-height: 140px;width: 478px;margin: 15px 0 0 40px">
                <div style="display: flex;flex-wrap: wrap">
                  <span class="infoTle">
                    姓名<span class="infoTxt"> : {{ userinfo.name }}</span>
                  </span>

                  <span class="infoTle">
                    年龄<span class="infoTxt"> : {{ userinfo.age }}</span>
                  </span>

                  <span class="infoTle">
                    性别<span class="infoTxt"> : {{ userinfo.gender }}</span>
                  </span>

                  <span v-if="userinfo.address" class="infoTle">
                    籍贯<span class="infoTxt"> : {{ userinfo.address }}</span>
                  </span>

                  <span v-if="userinfo.workAge" class="infoTle">
                    工作经验<span class="infoTxt"> : {{ userinfo.workAge }}</span>
                  </span>

                  <span v-for="(info,idx) in userinfo.otherInfo" :key="idx" class="infoTle">
                    {{ info.label }}<span class="infoTxt">:{{ info.txt }}</span>
                  </span>

                </div>
                <div style="display: flex;flex-wrap: wrap">
                  <span v-for="(item,idx) in userinfo.job" :key="idx" class="infoTle">
                    {{ item.title }}
                    <span v-if="item.isShow" class="infoTxt">
                       : {{ item.content }}
                    </span>
                  </span>
                </div>
              </div>

              <!--       头像             -->
              <div style="float: right;min-height: 140px;width: 200px">
                <AvatarTem width="115" height="140"/>
              </div>
            </div>
          </div>
        </div>
        <!--   循环部分   -->
        <div v-for="(module,idx) in ModuleList" :key="idx">
          <div v-if="module.isShow">
            <!--     标题部分           -->
            <div style="height: 24px;position: relative">
              <span class="Title-content"
                    :style="{background:colorsConfig[2].color[0].value,color:colorsConfig[0].color[0].value}">
                {{ module.moduleName }}</span>
              <span class="Title-right-san" :style="{background:colorsConfig[2].color[0].value}"/>
              <span class="Title-left-san" :style="{background:'rgba(0,0,0,0.5)'}"/>
            </div>
            <!--     内容部分          -->
            <div style="margin-top: -4px"
                 :style="{borderLeft:`${colorsConfig[2].color[0].value} solid 2px`,borderTop:`${colorsConfig[2].color[0].value} solid 2px`}">
              <ModuleContent1 :colors-config="colorsConfig" :module-content="module.content"/>
            </div>
          </div>
        </div>
        <!--              -->
        <div style="height: 20px"/>
      </div>

    </div>
  </div>
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <ResumeEditor :tem-id="temID" :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig" :colors="colorsConfig"
                :titles="baseInfo"/>
</template>

<script>
import {initInfo} from '@/hooks/UserInfoHandle'
import {defineComponent, reactive, ref} from "vue";
import {Handbag, BachelorCapOne,} from '@icon-park/vue-next';
import ResumeEditor from '../../../components/ResumeEditor'
import AvatarTem from '../../../components/AvatarTem'
import ModuleContent1 from '../../../components/ModuleContent1'


export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "2",
  components: {Handbag, BachelorCapOne, ResumeEditor, AvatarTem, ModuleContent1},
  setup() {
    const temID = ref("tem2")
    const colorsConfig = reactive([
      {title: '模块字体颜色', color: [{value: '#ffffff'}, {value: '#000000'}, {value: '#555555'}]},
      {title: '模块标签颜色', color: [{value: '#3A5F8533'}, {value: '#FFD7DBFF'}]},
      {title: '皮肤颜色', color: [{value: '#80D2C8'}, {value: '#FFD4A9'},]},
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
    }
  }
})
</script>

<style scoped>

#resume1 .infoTle {
  width: 80px;
  margin-bottom: 10px;
  text-align-last: justify;
  position: relative;
  margin-right: 158px;
}

#resume1 .infoTxt {
  position: absolute;
  left: 90px;
  width: 140px;
  text-align-last: left;
}

.Title-right-san {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 83px;
  clip-path: polygon(0 0, 0% 100%, 100% 100%)
}

.Title-left-san {
  position: absolute;
  height: 6px;
  width: 17px;
  top: 20px;
  left: -17px;
  clip-path: polygon(0 0, 100% 0, 100% 100%)
}

.Title-content {
  padding: 0 10px 0 27px;
  margin-left: -17px;
  font-size: 16px
}
</style>
