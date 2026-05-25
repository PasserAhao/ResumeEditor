<template>
  <main id="resume" class="home-page">
    <section class="hero-section">
      <nav class="top-nav">
        <div class="brand">
          <span class="brand-mark">R</span>
          <span>ResumeEditor</span>
        </div>
        <div class="nav-links">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/PasserAhao/ResumeEditor">GitHub</a>
          <button type="button" @click="showFeedbackDialog = true">反馈建议</button>
        </div>
      </nav>

      <div class="hero-content">
        <div class="hero-copy">
          <span class="eyebrow">在线简历生成 PDF 工具</span>
          <h1>选一个模板，快速做出清爽专业的简历</h1>
          <p>
            内置多套可编辑模板，填写内容后即可在线预览并导出，适合求职、校招、转岗和作品集投递场景。
          </p>
          <div class="hero-actions">
            <button class="primary-action" @click="scrollToTemplates">开始制作</button>
            <a class="secondary-action" target="_blank" rel="noopener noreferrer" href="https://github.com/PasserAhao/ResumeEditor">
              查看开源项目
            </a>
          </div>
        </div>

        <div class="hero-preview">
          <div class="preview-orb orb-left"></div>
          <div class="preview-orb orb-right"></div>
          <div class="preview-card">
            <div class="preview-header">
              <div class="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="preview-status">实时预览</span>
            </div>
            <div class="preview-body">
              <div class="profile-dot"></div>
              <div class="preview-lines">
                <span class="line wide"></span>
                <span class="line medium"></span>
                <span class="line short"></span>
              </div>
            </div>
            <div class="preview-toolbar">
              <span>编辑信息</span>
              <span>选择模板</span>
              <span>导出 PDF</span>
            </div>
            <div class="preview-grid">
              <span v-for="item in 4" :key="item"></span>
            </div>
            <div class="preview-insights">
              <div class="insight-card active">
                <span>ATS 友好</span>
                <strong>结构清晰</strong>
              </div>
              <div class="insight-card">
                <span>导出格式</span>
                <strong>PDF</strong>
              </div>
            </div>
          </div>
          <div class="floating-note">
            <span class="note-icon">↓</span>
            <div>
              <strong>PDF 一键导出</strong>
              <small>高清排版 · 即刻下载</small>
            </div>
          </div>
          <div class="floating-tip">{{ templateList.length }} 套模板可选</div>
        </div>
      </div>
    </section>

    <section class="feature-section">
      <div v-for="feature in featureList" :key="feature.title" class="feature-card">
        <span class="feature-icon">{{ feature.icon }}</span>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </section>

    <section ref="templateSection" class="template-section">
      <div class="section-heading">
        <div>
          <span class="eyebrow">Template Gallery</span>
          <h2>选择你的简历模板</h2>
        </div>
        <p>从经典、商务、现代到极简风格，点击模板即可进入编辑器。</p>
      </div>

      <div class="template-grid">
        <article v-for="template in templateList" :key="template.id" class="template-card" @click="router.push({ path: `/template/${template.id}` })">
          <div class="template-cover">
            <el-image :src="template.imgUrl" class="template-image" fit="cover"></el-image>
            <div class="template-overlay">
              <span>立即编辑</span>
            </div>
          </div>
          <div class="template-info">
            <span>{{ template.category }}</span>
            <h3>{{ template.name }}</h3>
          </div>
        </article>
      </div>
    </section>

    <el-dialog v-model="showFeedbackDialog" title="反馈建议" width="420px" custom-class="feedback-dialog">
      <div class="feedback-content">
        <span class="wechat-label">作者微信</span>
        <strong>Henrik0125</strong>
        <p>如果你有模板需求、发现 BUG，或想交流简历编辑器功能，欢迎添加微信反馈。</p>
      </div>
    </el-dialog>
  </main>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "resumeTem",
  setup() {
    const router = useRouter();
    const showFeedbackDialog = ref(false);
    const templateSection = ref(null);
    const featureList = ref([
      { icon: "✦", title: "模板即用", desc: "预置专业结构，减少排版成本。" },
      { icon: "↗", title: "在线编辑", desc: "打开模板即可填写和调整内容。" },
      { icon: "PDF", title: "导出方便", desc: "预览确认后快速生成投递版本。" },
    ]);
    const templateList = ref([
      { id: 1, name: "经典侧栏模板", category: "Classic", imgUrl: require("../assets/img/resume/template1.svg") },
      { id: 2, name: "清新商务模板", category: "Business", imgUrl: require("../assets/img/resume/template2.svg") },
      { id: 3, name: "现代蓝调模板", category: "Modern", imgUrl: require("../assets/img/resume/template3.svg") },
      { id: 4, name: "极简时间线模板", category: "Minimal", imgUrl: require("../assets/img/resume/template4.svg") },
    ]);
    const scrollToTemplates = () => {
      templateSection.value?.scrollIntoView({ behavior: "smooth" });
    };

    return {
      featureList,
      router,
      scrollToTemplates,
      showFeedbackDialog,
      templateList,
      templateSection,
    };
  },
});
</script>

<style scoped>
#resume.home-page {
  min-height: 100vh;
  color: #152033;
  background:
    radial-gradient(circle at 10% 10%, rgba(76, 201, 240, 0.22), transparent 28%),
    linear-gradient(180deg, #f6f8ff 0%, #ffffff 48%, #f7f8fb 100%);
}

.hero-section {
  position: relative;
  overflow: hidden;
  padding: 28px 8vw 92px;
  background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 58%, #38bdf8 100%);
  color: #ffffff;
}

.hero-section::after {
  position: absolute;
  right: -140px;
  bottom: -180px;
  width: 420px;
  height: 420px;
  content: "";
  background: rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  filter: blur(2px);
}

.top-nav,
.hero-content,
.feature-section,
.template-section {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand,
.nav-links,
.hero-actions,
.preview-body {
  display: flex;
  align-items: center;
}

.brand {
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-mark {
  display: grid;
  width: 38px;
  height: 38px;
  color: #1d4ed8;
  background: #ffffff;
  border-radius: 14px;
  place-items: center;
}

.nav-links {
  gap: 12px;
}

.nav-links a,
.nav-links button,
.secondary-action {
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
}

.nav-links a,
.nav-links button {
  padding: 9px 14px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
}

.hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 64px;
  align-items: center;
  padding-top: 82px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  color: #2563eb;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 999px;
}

.hero-copy .eyebrow {
  color: #bfdbfe;
  background: rgba(255, 255, 255, 0.14);
}

.hero-copy h1 {
  max-width: 720px;
  margin: 24px 0 20px;
  font-size: clamp(38px, 5vw, 68px);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.hero-copy p {
  max-width: 620px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  line-height: 1.8;
}

.hero-actions {
  gap: 16px;
  margin-top: 34px;
}

.primary-action,
.secondary-action {
  height: 48px;
  padding: 0 22px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 999px;
}

.primary-action {
  color: #0f172a;
  cursor: pointer;
  background: #ffffff;
  border: 0;
  box-shadow: 0 20px 42px rgba(15, 23, 42, 0.25);
}

.secondary-action {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.26);
}

.hero-preview {
  position: relative;
  min-height: 420px;
}

.preview-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.72;
}

.orb-left {
  top: 22px;
  left: 16px;
  width: 132px;
  height: 132px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.34), rgba(125, 211, 252, 0.08));
}

.orb-right {
  right: 4px;
  bottom: 18px;
  width: 190px;
  height: 190px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.28), rgba(59, 130, 246, 0.02));
}

.preview-card {
  position: relative;
  width: min(360px, 100%);
  padding: 22px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 32px;
  box-shadow: 0 32px 80px rgba(2, 8, 23, 0.28);
  transform: rotate(3deg);
  backdrop-filter: blur(18px);
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 26px;
}

.window-dots {
  display: flex;
  gap: 8px;
}

.window-dots span {
  width: 10px;
  height: 10px;
  background: #cbd5e1;
  border-radius: 50%;
}

.preview-status {
  padding: 7px 10px;
  color: #2563eb;
  font-size: 12px;
  font-weight: 800;
  background: #dbeafe;
  border-radius: 999px;
}

.preview-body {
  gap: 18px;
  padding: 20px;
  background: linear-gradient(135deg, #eff6ff, #f8fbff);
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px rgba(147, 197, 253, 0.28);
}

.profile-dot {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  border-radius: 24px;
}

.preview-lines {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
}

.line {
  display: block;
  height: 10px;
  background: #c7d2fe;
  border-radius: 999px;
}

.line.wide {
  width: 92%;
}

.line.medium {
  width: 70%;
}

.line.short {
  width: 46%;
}

.preview-toolbar {
  display: flex;
  gap: 8px;
  margin-top: 18px;
}

.preview-toolbar span {
  flex: 1;
  padding: 9px 0;
  color: #2563eb;
  font-size: 11px;
  font-weight: 800;
  text-align: center;
  background: #eef5ff;
  border-radius: 999px;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 22px;
}

.preview-grid span {
  position: relative;
  height: 78px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc, #eaf2ff);
  border: 1px solid #e2e8f0;
  border-radius: 18px;
}

.preview-grid span::before,
.preview-grid span::after {
  position: absolute;
  left: 14px;
  content: "";
  background: #c7d2fe;
  border-radius: 999px;
}

.preview-grid span::before {
  top: 18px;
  width: 68%;
  height: 9px;
}

.preview-grid span::after {
  top: 38px;
  width: 44%;
  height: 8px;
  opacity: 0.72;
}

.preview-insights {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 12px;
  margin-top: 16px;
}

.insight-card {
  position: relative;
  padding: 16px;
  overflow: hidden;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
}

.insight-card::after {
  position: absolute;
  right: -24px;
  bottom: -24px;
  width: 72px;
  height: 72px;
  content: "";
  background: rgba(37, 99, 235, 0.1);
  border-radius: 50%;
}

.insight-card.active {
  color: #ffffff;
  background: linear-gradient(135deg, #0f172a, #2563eb);
  border-color: rgba(255, 255, 255, 0.12);
}

.insight-card span,
.insight-card strong {
  position: relative;
  z-index: 1;
  display: block;
}

.insight-card span {
  color: #64748b;
  font-size: 12px;
  font-weight: 800;
}

.insight-card.active span {
  color: #bfdbfe;
}

.insight-card strong {
  margin-top: 8px;
  color: #0f172a;
  font-size: 18px;
}

.insight-card.active strong {
  color: #ffffff;
}

.floating-note {
  position: absolute;
  right: -6px;
  bottom: 42px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 15px 18px;
  color: #0f172a;
  background: #ffffff;
  border: 1px solid rgba(226, 232, 240, 0.88);
  border-radius: 22px;
  box-shadow: 0 20px 44px rgba(15, 23, 42, 0.24);
}

.note-icon {
  display: grid;
  width: 38px;
  height: 38px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  border-radius: 14px;
  place-items: center;
}

.floating-note strong,
.floating-note small {
  display: block;
}

.floating-note strong {
  font-size: 15px;
}

.floating-note small {
  margin-top: 4px;
  color: #64748b;
  font-size: 12px;
}

.floating-tip {
  position: absolute;
  top: 112px;
  left: 14px;
  padding: 12px 16px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  background: rgba(15, 23, 42, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.16);
  backdrop-filter: blur(12px);
}

.feature-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: -46px;
  padding: 0 8vw;
}

.feature-card {
  padding: 26px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(226, 232, 240, 0.86);
  border-radius: 24px;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  padding: 0 10px;
  color: #1d4ed8;
  font-weight: 800;
  background: #dbeafe;
  border-radius: 15px;
}

.feature-card h3,
.template-info h3,
.section-heading h2 {
  margin: 0;
}

.feature-card h3 {
  margin-top: 18px;
  font-size: 18px;
}

.feature-card p {
  margin: 10px 0 0;
  color: #64748b;
  line-height: 1.7;
}

.template-section {
  padding: 92px 8vw 110px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 30px;
}

.section-heading h2 {
  margin-top: 16px;
  font-size: clamp(30px, 4vw, 46px);
  letter-spacing: -0.04em;
}

.section-heading p {
  max-width: 430px;
  margin: 0;
  color: #64748b;
  line-height: 1.8;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.template-card {
  overflow: hidden;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 28px;
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.template-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 26px 64px rgba(37, 99, 235, 0.16);
  transform: translateY(-8px);
}

.template-cover {
  position: relative;
  height: 360px;
  overflow: hidden;
  background: #e2e8f0;
}

.template-image {
  width: 100%;
  height: 100%;
  transition: transform 0.32s ease;
}

.template-card:hover .template-image {
  transform: scale(1.04);
}

.template-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  color: #ffffff;
  font-weight: 800;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.72));
  opacity: 0;
  transition: opacity 0.22s ease;
  place-items: center;
}

.template-card:hover .template-overlay {
  opacity: 1;
}

.template-overlay span {
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 999px;
  backdrop-filter: blur(12px);
}

.template-info {
  padding: 20px 22px 22px;
}

.template-info span {
  color: #2563eb;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.template-info h3 {
  margin-top: 8px;
  font-size: 18px;
}

.feedback-content {
  padding: 4px 0 8px;
  text-align: center;
}

.wechat-label {
  display: inline-flex;
  padding: 7px 12px;
  color: #2563eb;
  font-size: 13px;
  font-weight: 800;
  background: #dbeafe;
  border-radius: 999px;
}

.feedback-content strong {
  display: block;
  margin-top: 18px;
  color: #0f172a;
  font-size: 34px;
  letter-spacing: 0.02em;
}

.feedback-content p {
  margin: 16px auto 0;
  color: #64748b;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-preview {
    min-height: 360px;
  }

  .template-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .hero-section {
    padding: 22px 20px 72px;
  }

  .top-nav,
  .section-heading,
  .hero-actions {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-links {
    flex-wrap: wrap;
  }

  .hero-content {
    gap: 40px;
    padding-top: 54px;
  }

  .hero-copy p {
    font-size: 16px;
  }

  .feature-section,
  .template-grid {
    grid-template-columns: 1fr;
  }

  .feature-section,
  .template-section {
    padding-right: 20px;
    padding-left: 20px;
  }

  .template-cover {
    height: 420px;
  }
}
</style>
