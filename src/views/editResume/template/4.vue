<template>
  <div>
    <div id="resume">
      <div class="resume-clean">
        <header class="clean-header">
          <div>
            <p class="subtitle" :style="{color: colorsConfig[2].color[0].value}">{{ baseInfo[1].text }}</p>
            <h1>{{ userinfo.name }}</h1>
            <p class="summary">{{ baseInfo[0].text }}</p>
          </div>
          <AvatarTem width="104" height="128"/>
        </header>

        <section class="info-strip" :style="{borderColor: colorsConfig[2].color[0].value}">
          <span>{{ userinfo.gender }}</span>
          <span>{{ userinfo.age }}</span>
          <span v-if="userinfo.address">{{ userinfo.address }}</span>
          <span v-if="userinfo.workAge">{{ userinfo.workAge }}</span>
          <span v-for="(info, idx) in userinfo.otherInfo" :key="idx">{{ info.label }}：{{ info.txt }}</span>
          <span v-for="(job, idx) in userinfo.job" :key="idx" v-show="job.isShow">{{ job.title }}：{{ job.content }}</span>
        </section>

        <section v-if="skillInfo.text || skillInfo.isSkill || skillInfo.isHobby" class="overview-grid">
          <div v-if="skillInfo.text" class="overview-card">
            <h3 :style="{color: colorsConfig[2].color[0].value}">关于我</h3>
            <MdPreview editor-id="clean-skill-text" v-model="skillInfo.text"/>
          </div>
          <div v-if="skillInfo.isSkill" class="overview-card">
            <h3 :style="{color: colorsConfig[2].color[0].value}">{{ skillInfo.skillTitle }}</h3>
            <div class="pill-list">
              <span v-for="(skill, idx) in skillInfo.skillList" :key="idx"
                    :style="{borderColor: skill.color, color: colorsConfig[0].color[2].value}">
                {{ skill.skill }} · {{ skill.level }}%
              </span>
            </div>
          </div>
          <div v-if="skillInfo.isHobby" class="overview-card">
            <h3 :style="{color: colorsConfig[2].color[0].value}">{{ skillInfo.hobbyTitle }}</h3>
            <div class="pill-list">
              <span v-for="(hobby, idx) in skillInfo.hobbyList" :key="idx"
                    :style="{background: hobby.bcgColor, color: hobby.fontColor, borderColor: hobby.bcgColor}">
                {{ hobby.hobby }}
              </span>
            </div>
          </div>
        </section>

        <main>
          <section v-for="(module, idx) in ModuleList" :key="idx" v-show="module.isShow" class="timeline-module">
            <div class="timeline-head">
              <span class="timeline-mark" :style="{background: colorsConfig[2].color[0].value}"/>
              <h2 :style="{color: colorsConfig[0].color[0].value}">{{ module.moduleName }}</h2>
            </div>
            <div class="timeline-content" :style="{borderLeftColor: colorsConfig[2].color[1].value}">
              <ModuleContent1 :colors-config="colorsConfig" :module-content="module.content" :content-width="96"/>
            </div>
          </section>
        </main>
      </div>
    </div>
    <ResumeEditor :tem-id="temID" :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig" :colors="colorsConfig"
                  :skill="skillInfo" :titles="baseInfo"/>
  </div>
</template>

<script>
import {initInfo} from '@/hooks/UserInfoHandle'
import {defineComponent, reactive, ref} from "vue";
import {MdPreview} from 'md-editor-v3'
import ResumeEditor from '../../../components/ResumeEditor'
import AvatarTem from '../../../components/AvatarTem'
import ModuleContent1 from '../../../components/ModuleContent1'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "4",
  components: {MdPreview, ResumeEditor, AvatarTem, ModuleContent1},
  setup() {
    const temID = ref("tem4")
    const colorsConfig = reactive([
      {title: '模块字体颜色', color: [{value: '#0F766E'}, {value: '#111827'}, {value: '#334155'}]},
      {title: '模块标签颜色', color: [{value: '#99F6E4'}, {value: '#F0FDFA'}]},
      {title: '皮肤颜色', color: [{value: '#0F766E'}, {value: '#CCFBF1'}]},
    ])
    const baseInfo = reactive([
      {title: '简历标题', text: '个人履历 / 作品经历'},
      {title: '简历文本1', text: 'Clean Timeline Resume'},
      {title: '简历文本2', text: '清晰呈现成长轨迹'},
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
.resume-clean {
  width: 820px;
  min-height: 1160px;
  margin: 0 auto;
  padding: 46px 56px;
  box-sizing: border-box;
  background: #ffffff;
  color: #111827;
}

.clean-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}

.subtitle {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.clean-header h1 {
  margin: 0;
  font-size: 44px;
  letter-spacing: 8px;
  font-weight: 800;
}

.summary {
  margin: 14px 0 0;
  color: #64748b;
  font-size: 18px;
}

.info-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin: 30px 0;
  padding: 16px 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  color: #334155;
  font-size: 13px;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 34px;
}

.overview-card {
  min-height: 116px;
  padding: 18px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #f8fafc;
}

.overview-card h3 {
  margin: 0 0 12px;
  font-size: 16px;
}

.pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pill-list span {
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 999px;
  font-size: 12px;
}

.timeline-module {
  margin-bottom: 28px;
}

.timeline-head {
  display: flex;
  align-items: center;
  gap: 12px;
}

.timeline-head h2 {
  margin: 0;
  font-size: 20px;
  letter-spacing: 2px;
}

.timeline-mark {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(15, 118, 110, 0.12);
}

.timeline-content {
  margin: 12px 0 0 6px;
  padding-left: 20px;
  border-left: 2px solid;
}

:deep(.md-editor-preview p) {
  margin: 0 0 8px;
  line-height: 1.75;
}
</style>
