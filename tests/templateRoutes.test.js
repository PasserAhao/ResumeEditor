/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const assert = require('assert')

const root = path.resolve(__dirname, '..')
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')

const router = read('src/router/index.js')
const index = read('src/views/index.vue')
const templateDir = path.join(root, 'src/views/editResume/template')
const templateFiles = fs
  .readdirSync(templateDir)
  .filter((file) => /^\d+\.vue$/.test(file))
  .sort((a, b) => Number.parseInt(a) - Number.parseInt(b))

const expectedTemplateIds = ['1', '2', '3', '4']

assert.deepStrictEqual(
  templateFiles.map((file) => file.replace('.vue', '')),
  expectedTemplateIds,
  '模板文件应连续提供 1-4 号模板'
)

for (const templateId of expectedTemplateIds) {
  assert(
    router.includes(`path: '${templateId}'`) && router.includes(`template/${templateId}`),
    `路由应注册 ${templateId} 号模板`
  )
}

assert(index.includes('templateList'), '首页应使用 templateList 维护模板卡片')
for (const templateId of expectedTemplateIds) {
  assert(index.includes(`id: ${templateId}`), `首页应展示 ${templateId} 号模板`)
}

for (const templateId of expectedTemplateIds) {
  assert(index.includes(`template${templateId}.svg`), `${templateId} 号模板应使用独立预览图`)
  assert(
    fs.existsSync(path.join(root, `src/assets/img/resume/template${templateId}.svg`)),
    `${templateId} 号模板预览图文件应存在`
  )
}

assert(index.includes('Henrik0125'), '首页反馈弹窗应展示作者微信 Henrik0125')
assert(index.includes('showFeedbackDialog'), '首页反馈入口应通过弹窗展示联系方式')
assert(!index.includes('href="http://bonianahao.gitee.io/myblog/#/index/proFeedback"'), '反馈建议不应跳转到外部反馈页')

console.log('template routes ok')
