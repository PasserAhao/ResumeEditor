<template>
  <div>
    <div id="resume">
      <div class="resume-modern" :style="{borderTopColor: colorsConfig[2].color[0].value}">
        <div class="hero" :style="{background: colorsConfig[2].color[0].value}">
          <div class="hero-info">
            <p class="eyebrow" :style="{color: colorsConfig[2].color[1].value}">{{ baseInfo[1].text }}</p>
            <h1>{{ userinfo.name }}</h1>
            <p class="headline">{{ baseInfo[0].text }}</p>
            <div class="contact-line">
              <span>{{ userinfo.gender }}</span>
              <span>{{ userinfo.age }}</span>
              <span v-if="userinfo.address">{{ userinfo.address }}</span>
              <span v-if="userinfo.workAge">{{ userinfo.workAge }}</span>
            </div>
            <div class="contact-line">
              <span v-for="(info, idx) in userinfo.otherInfo" :key="idx">{{ info.label }}：{{ info.txt }}</span>
              <span v-for="(job, idx) in userinfo.job" :key="idx" v-show="job.isShow">{{ job.title }}：{{ job.content }}</span>
            </div>
          </div>
          <AvatarTem width="112" height="140"/>
        </div>

        <div class="resume-body">
          <aside class="side-panel" :style="{background: colorsConfig[2].color[1].value}">
            <section v-if="skillInfo.text" class="side-section">
              <h3 :style="{color: colorsConfig[2].color[0].value}">个人标签</h3>
              <MdPreview editor-id="modern-skill-text" v-model="skillInfo.text"/>
            </section>
            <section v-if="skillInfo.isSkill" class="side-section">
              <h3 :style="{color: colorsConfig[2].color[0].value}">{{ skillInfo.skillTitle }}</h3>
              <div v-for="(skill, idx) in skillInfo.skillList" :key="idx" class="skill-item">
                <div class="skill-name">
                  <span>{{ skill.skill }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="skill-track">
                  <div class="skill-bar" :style="{width: `${skill.level}%`, background: skill.color}"/>
                </div>
              </div>
            </section>
            <section v-if="skillInfo.isHobby" class="side-section">
              <h3 :style="{color: colorsConfig[2].color[0].value}">{{ skillInfo.hobbyTitle }}</h3>
              <div class="hobby-list">
                <span v-for="(hobby, idx) in skillInfo.hobbyList" :key="idx"
                      :style="{background: hobby.bcgColor, color: hobby.fontColor}">
                  {{ hobby.hobby }}
                </span>
              </div>
            </section>
          </aside>

          <main class="main-panel">
            <section v-for="(module, idx) in ModuleList" :key="idx" v-show="module.isShow" class="module-card">
              <div class="module-title">
                <span class="title-dot" :style="{background: colorsConfig[2].color[0].value}"/>
                <h2 :style="{color: colorsConfig[0].color[0].value}">{{ module.moduleName }}</h2>
              </div>
              <ModuleContent1 :colors-config="colorsConfig" :module-content="module.content" :content-width="100"/>
            </section>
          </main>
        </div>
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
  name: "3",
  components: {MdPreview, ResumeEditor, AvatarTem, ModuleContent1},
  setup() {
    const temID = ref("tem3")
    const colorsConfig = reactive([
      {title: '模块字体颜色', color: [{value: '#1D4ED8'}, {value: '#111827'}, {value: '#374151'}]},
      {title: '模块标签颜色', color: [{value: '#BFDBFE'}, {value: '#DBEAFE'}]},
      {title: '皮肤颜色', color: [{value: '#1E3A8A'}, {value: '#EFF6FF'}]},
    ])
    const baseInfo = reactive([
      {title: '简历标题', text: '求职意向 / 专业履历'},
      {title: '简历文本1', text: 'Modern Professional Resume'},
      {title: '简历文本2', text: '以结果为导向的职业档案'},
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
.resume-modern {
  width: 820px;
  min-height: 1160px;
  background: #ffffff;
  margin: 0 auto;
  border-top: 10px solid;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 48px;
  color: #ffffff;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: 42px;
  letter-spacing: 4px;
}

.headline {
  margin: 10px 0 16px;
  font-size: 18px;
}

.contact-line {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  font-size: 13px;
  line-height: 1.8;
}

.resume-body {
  display: grid;
  grid-template-columns: 245px 1fr;
  min-height: 900px;
}

.side-panel {
  padding: 30px 24px;
}

.side-section {
  margin-bottom: 32px;
}

.side-section h3 {
  margin: 0 0 14px;
  font-size: 18px;
}

.skill-item {
  margin-bottom: 14px;
}

.skill-name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
}

.skill-track {
  height: 8px;
  overflow: hidden;
  border-radius: 99px;
  background: rgba(148, 163, 184, 0.25);
}

.skill-bar {
  height: 100%;
  border-radius: 99px;
}

.hobby-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hobby-list span {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
}

.main-panel {
  padding: 30px 40px 45px;
}

.module-card {
  margin-bottom: 26px;
}

.module-title {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
}

.module-title h2 {
  margin: 0;
  font-size: 20px;
  letter-spacing: 2px;
}

.title-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

:deep(.md-editor-preview p) {
  margin: 0 0 8px;
  line-height: 1.7;
}
</style>
