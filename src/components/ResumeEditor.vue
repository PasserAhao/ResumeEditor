<template>
  <div class="ResumeEditor">
    <el-tabs type="border-card" class="demo-tabs Edit-table" tab-position="left">
      <!--     简历配置   -->
      <!--     简历配置   -->
      <el-tab-pane>
        <template #label>
          <div class="custom-tabs-label">
            <span class="title-item" style="line-height: 50px">简历配置</span>
          </div>
        </template>
        <!--     基础设置     -->
        <div style="width: 100%;text-align: center;height: calc(100vh - 60px);overflow-y: scroll">
          <!--     颜色配置       -->
          <div style="margin-top: 5px">
            <h3 style="text-align: left">颜色配置</h3>
            <el-form>
              <el-form-item v-for="(col,idx) in colors" :key="idx" :label="col.title">
                  <span v-for="(item,idx2) in col.color" :key="idx2">
                    <el-color-picker v-model="item.value" show-alpha :predefine="predefineColors"/>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                  </span>
              </el-form-item>
            </el-form>
          </div>
          <!--其他文字配置-->
          <div v-if="titles">
            <h3 style="text-align: left">其他文字配置</h3>
            <el-form>
              <el-form-item v-for="(txt,idx) in titles" :key="idx" :label="txt.title">
                <el-input style="width: 247px" v-model="txt.text"/>
              </el-form-item>
            </el-form>
          </div>
          <!--     模块管理       -->
          <div style="margin-top: 5px">
            <h3 style="text-align: left">模块管理</h3>
            <!--添加自定义模块-->
            <div style="width: 100%;margin-bottom: 15px">
              <el-button style="width: 310px;" type="success" @click="Dialog = true">添加自定义模块</el-button>
            </div>
            <!--模块列表-->
            <el-table :data="ModuleList" style="width: 90%;margin-bottom: 100px">
              <el-table-column label="模块名称" prop="moduleName">
              </el-table-column>
              <el-table-column label="是否显示" prop="isShow" width="80px">
                <template #default="scope">
                  <el-switch v-model="scope.row.isShow" style="width: 10px;margin-left: 5px;"/>
                </template>
              </el-table-column>
              <el-table-column label="排序" align="right">
                <template #default="scope">
                  <span style="cursor: pointer;margin-left: 50px" @click="ModuleSort(scope.row,true)">
                    <circle-double-up theme="two-tone" size="22" :fill="['#7ed321' ,'#ffffff']"/>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
      <!--    基础信息      -->
      <!--    基础信息      -->
      <el-tab-pane>
        <template #label>
          <div class="custom-tabs-label title-left">
            <span class="title-item" style="line-height: 50px">基础信息</span>
          </div>
        </template>
        <div style="width: 100%">
          <!--基本信息-->
          <el-form style="height: calc(100vh - 60px);overflow-y: scroll">
            <h3>基本信息设置</h3>
            <el-form-item label="你的姓名:">
              <el-input v-model="userinfo.name" @change="ChangeToLocal2"></el-input>
            </el-form-item>

            <el-form-item label="性别:" style="margin-top: 15px">
              <el-radio-group v-model="userinfo.gender" class="ml-4" @change="ChangeToLocal2">
                <el-radio label="男">男</el-radio>
                <el-radio label="女">女</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="年龄:">
              <el-date-picker style="width: 150px" v-model="userinfo.date" @change="DateChange"
                              type="date" placeholder="出生日期" value-format="YYYY-MM-DD"/>
              <el-checkbox v-model="isShowD.date" style="margin-left: 15px" label="转数字" name="type"
                           @change="DateToNum"/>
            </el-form-item>

            <el-form-item label="地址:" style="margin-top: 15px">
              <el-input v-model="userinfo.address" style="width: 230px;" @change="ChangeToLocal2"></el-input>
              <el-checkbox v-model="isShowD.address" style="margin-left: 15px" name="type"
                           @change="isShowAddressHandle"/>
            </el-form-item>

            <el-form-item label="工作年限:">
              <el-select v-model="userinfo.workAge" class="m-2" placeholder="Select">
                <el-option v-for="item in workerAgeOption" @change="ChangeToLocal2"
                           :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>

            <el-form-item label="电话:" style="margin-top: 15px">
              <el-input v-model="userinfo.phone" @change="ChangeToLocal2"></el-input>
            </el-form-item>

            <el-form-item label="邮箱:">
              <el-input v-model="userinfo.email" @change="ChangeToLocal2"></el-input>
            </el-form-item>

            <h3>求职意向</h3>

            <el-form-item label="求职意向:" style="margin-top: 15px">
              <el-input v-model="JobIntention['work0'].content" style="width: 200px;"/>
              <el-checkbox v-model="JobIntention['work0'].isShow" style="margin-left: 15px" name="type"
                           @change="jobIntentionHandle1"/>
            </el-form-item>

            <el-form-item label="意向城市:" style="margin-top: 15px">
              <el-input v-model="JobIntention['work1'].content" style="width: 200px;"/>
              <el-checkbox v-model="JobIntention['work1'].isShow" style="margin-left: 15px" name="type"
                           @change="jobIntentionHandle2"/>
            </el-form-item>

            <el-form-item label="期望薪资:" style="margin-top: 15px">
              <el-input v-model="JobIntention['work2'].content" style="width: 200px;"/>
              <el-checkbox v-model="JobIntention['work2'].isShow" style="margin-left: 15px" name="type"
                           @change="jobIntentionHandle3"/>
            </el-form-item>

            <el-form-item label="入职时间:" style="margin-top: 15px">
              <el-input v-model="JobIntention['work3'].content" style="width: 200px;"/>
              <el-checkbox v-model="JobIntention['work3'].isShow" style="margin-left: 15px" name="type"
                           @change="jobIntentionHandle4"/>
            </el-form-item>

          </el-form>
        </div>
      </el-tab-pane>
      <!--        技能特长-->
      <!--        技能特长-->
      <el-tab-pane v-if="isShowSkill">
        <template #label>
          <div class="custom-tabs-label title-left">
            <span class="title-item">技能特长</span>
          </div>
        </template>
        <div class="EditBack">
          <MdEditor style="height:600px" :editor-id="'skillAnd1'" v-model="skillInfo.text" :preview="false"
                    :toolbars="tooBars"/>
          <!--      技能管理      -->
          <!--      技能管理      -->
          <!--      技能管理      -->
          <div style="margin-bottom: 10px">
            <h3>技能管理</h3>

            <div>
              <span class="font1">技能标题&nbsp;:&nbsp;&nbsp;</span>
              <el-input v-model="skillInfo.skillTitle" style="width: 150px;margin-right: 15px"
                        @change="ChangeToLocal3"/>
              <el-color-picker v-model="skillInfo.skillTitleColor" show-alpha :predefine="predefineColors"/>
            </div>

            <div style="margin-top: 25px">
              <el-input style="width: 215px;" v-model="skillInfo.skill"/>
              <el-button style="margin-left: 15px" type="success" @click="AddSkill(skillInfo.skill,true)">
                添加技能
              </el-button>
            </div>

            <div style="display: flex;flex-wrap: wrap;">
              <div v-for="(skill,index) in skillInfo.skillList" :key="index" style="margin-top: 15px">
                <div>
                  <p class="font1" style="width: 320px">{{ skill.skill }}</p>
                  <div style="width: 320px;display: flex;">
                    <span style="width: 50%">
                        <el-select v-model="skill.level" class="m-2" placeholder="Select" style="width: 100%"
                                   @change="ChangeToLocal3">
                          <el-option v-for="(it,id) in skillOption" :key="id" :label="it.label" :value="it.value"/>
                        </el-select>
                      </span>
                    <span style="margin-left: 10px">
                        <el-color-picker v-model="skill.color" show-alpha :predefine="predefineColors"
                                         @change="ChangeToLocal3"/>
                      </span>
                    <span class="delete1" style="width: 30%" @click="DelSkill(skill.skill,true)">
                      <delete theme="two-tone" size="16" :fill="['#ee194b' ,'#ffffff']"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--     爱好管理       -->
          <!--     爱好管理       -->
          <!--     爱好管理       -->
          <div style="margin-bottom: 100px">
            <h3>爱好管理</h3>

            <div>
              <span class="font1">爱好标题&nbsp;:&nbsp;&nbsp;</span>
              <el-input v-model="skillInfo.hobbyTitle" style="width: 150px;margin-right: 15px"
                        @change="ChangeToLocal3"/>
              <el-color-picker v-model="skillInfo.hobbyTitleColor" show-alpha :predefine="predefineColors"/>
            </div>

            <div style="margin-top: 25px">
              <el-input style="width: 215px;" v-model="skillInfo.hobby"/>
              <el-button style="margin-left: 15px" type="success" @click="AddSkill(skillInfo.hobby,false)">
                添加爱好
              </el-button>
            </div>

            <div style="margin-top: 25px;display: flex;flex-wrap: wrap">
              <div v-for="(bobby,index) in skillInfo.hobbyList" :key="index" style="margin: 15px 20px 15px 0">
                  <span style="background: rgba(160,91,162,0.5);border-radius: 20px;padding: 10px">
                    <span style="margin-right: 5px">{{ bobby.hobby }}</span>
                    <span>
                      <el-color-picker v-model="bobby.fontColor" show-alpha :predefine="predefineColors"
                                       @change="ChangeToLocal3"/>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <el-color-picker v-model="bobby.bcgColor" show-alpha :predefine="predefineColors"
                                       @change="ChangeToLocal3"/>
                    </span>
                    <span class="delete2" @click="DelSkill(bobby.hobby,false)" style="margin-left: 10px">
                      <delete theme="two-tone" size="16" :fill="['#ee194b' ,'#ffffff']"/>
                    </span>
                  </span>
              </div>
            </div>


          </div>

        </div>
      </el-tab-pane>
      <!--    自定义模块    -->
      <!--    自定义模块    -->
      <el-tab-pane v-for="(module,index) in Modules" :key="index">
        <!--模块Label-->
        <template #label>
          <div class="custom-tabs-label title-left">
            <span class="title-item">{{ module.moduleName }}</span>
          </div>
        </template>
        <!--总模块内容-->
        <div class="EditBack">
          <!--模块头部-->
          <div style="position: relative">
            <h3 style="text-align: left">{{ module.moduleName }}</h3>
            <span style="position: absolute;left: 85px;top: -3px;">
                <el-switch style="width: 10px" v-model="module.isAdd" @change="isAddModule(module)"/>
              </span>
          </div>
          <!--模块内容-->
          <div v-if="module.isAdd">
            <div v-for="(item,index) in module.moduleContent.content" :key="index" style="margin-bottom: 25px">
              <!--项目标题头部-->
              <div style="display: flex;justify-content: flex-start">
                <!--项目名称-->
                <span style="font-weight: bold;font-size: 16px;margin-bottom: 20px">{{ item.title.text1 }}</span>
                <!--上移模块项目-->
                <span v-if="module.AllowChild">
                    <span style="margin-left: 15px;cursor: pointer" @click="EditChild(module,item.id,false)">
                      <circle-double-up theme="two-tone" size="22" :fill="['#7ed321' ,'#ffffff']"/>
                    </span>
                  </span>
                <!--删除模块项目-->
                <span v-if="module.AllowChild">
                    <span style="margin-left: 15px;cursor: pointer" @click="EditChild(module,item.id,true)">
                    <delete theme="two-tone" size="22" :fill="['#ee194b' ,'#ffffff']"/>
                  </span>
                  </span>
              </div>
              <!--项目基本信息-->
              <div>
                <!--项目名称-->
                <div v-if="module.text1" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text1 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-input v-model="item.title.text1" style="width: 235px" @change="ChangeToLocal1"></el-input>
                </div>
                <!--项目角色-->
                <div v-if="module.text2" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text2 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-input v-model="item.title.text2" style="width: 235px" @change="ChangeToLocal1"></el-input>
                </div>
                <!--项目时间-->
                <div v-if="module.text3" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text3 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-date-picker style="width: 103px" v-model="item.title.date1" type="month"
                                  value-format="YYYY-MM" @change="ChangeToLocal1"/>
                  <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
                  <el-date-picker style="width: 103px" v-model="item.title.date2" type="month"
                                  value-format="YYYY-MM" @change="ChangeToLocal1"/>
                </div>
                <!--项目学历-->
                <div v-if="module.text4" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text4 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-select v-model="item.title.education" class="m-2" placeholder="Select" @change="ChangeToLocal1">
                    <el-option v-for="edu in module.eduOptions" :key="edu.value" :label="edu.label"
                               :value="edu.value"/>
                  </el-select>
                </div>
              </div>
              <!--项目详细内容-->
              <MdEditor :style="{height:module.AllowChild===true?'400px':'500px'}"
                        :editor-id="item.editor_id"
                        v-model="item.content" :preview="false" :toolbars="tooBars"/>
              <!--标签处理-->
              <div v-if="item.label">
                <!--添加标签-->
                <div style="margin-top: 25px">
                  <el-input style="width: 215px;" v-model="item.labelName"/>
                  <el-button style="margin-left: 15px" type="success"
                             @click="EditTags(item.labelName,item.label,true)">
                    添加标签
                  </el-button>
                </div>
                <!--标签管理-->
                <div style="margin-top: 25px;display: flex;flex-wrap: wrap">
                  <div v-for="(tag,index) in item.label" :key="index" style="margin: 15px 20px 15px 0">
                      <span style="background: rgba(96,98,102,0.5);border-radius: 20px;padding: 10px">
                        <span style="margin-right: 5px">{{ tag }}</span>
                        <span @click="EditTags(tag,item.label,false)" style="cursor: pointer">
                          <delete theme="two-tone" size="16" :fill="['#ee194b' ,'#ffffff']"/>
                        </span>
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <!--添加项目-->
            <div v-if="module.AllowChild" style="margin-bottom: 50px">
              <el-button style="width: 310px;" type="success" @click="AddChild(module)">添加{{ module.moduleName }}
              </el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>

    </el-tabs>
    <el-dialog v-model="Dialog" title="添加模块" width="30%" align-center>
      <el-form>
        <el-form-item label="模块名称">
          <el-input v-model="moduleForm.moduleName"/>
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="moduleDialog = false">取消</el-button>
            <el-button type="primary" @click="AddModules">确定</el-button>
          </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {defineComponent, reactive, ref} from "vue";
import {CircleDoubleUp, Delete} from '@icon-park/vue-next';
import MdEditor from 'md-editor-v3';
import {ElMessage} from "element-plus";
import {useStore} from "vuex";
import store from "@/store";


export default defineComponent({
  name: "ResumeEditor",
  components: {MdEditor, CircleDoubleUp, Delete},
  props: {
    showSkill: {
      type: Boolean,
      default: true,
    },
    reSet: {
      type: Array,
      default: store.state.resumeList
    },
    mdSet: {// 操作栏初始模板内容
      type: Array,
      default: store.state.modulesConfig
    },
    titles: { // 这个是顶部或者其他地方有需要修改的文字
      type: Array,
    },
    colors: { // 简历的基本配色，文字颜色等
      type: Array,
      default: store.state.colors
    },
    uInfo: { //用户的基本信息
      type: Object,
      default: store.state.userInfo
    },
    skill: { //用户的技能爱好
      type: Object,
      default: store.state.skillInfo
    },
  },
  setup(props) {
    const store = useStore()

    const Dialog = ref(false)
    const tooBars = reactive([
      'bold',
      'underline',
      'italic',
      'codeRow',
      'quote',
      '-',
      'unorderedList',
      'orderedList',
      'sup',
      'sub',
    ])
    const predefineColors = ref([
      '#ff4500',
      '#ff8c00',
      '#ffd700',
      '#90ee90',
      '#00ced1',
      '#1e90ff',
      '#c71585',
      'rgba(255,215,219,1)'
    ])

    //简历配置
    const resumeConfig = () => {
      const ModuleList = props.reSet
      const Modules = props.mdSet
      // 将localStorage中的数据取出来
      const isLocal = ref(false)
      Modules.forEach((item, index) => {
        const data = JSON.parse(localStorage.getItem(item.moduleName))
        if (data) {
          Modules.splice(index, 1)
          Modules.splice(index, 0, data)
        }
        const data2 = JSON.parse(localStorage.getItem(`re_${item.moduleName}`))
        if (data2) {
          isLocal.value = true
        }
      })
      if (isLocal.value) {
        ModuleList.splice(0, ModuleList.length)
        Modules.forEach((item) => {
          const data = JSON.parse(localStorage.getItem(`re_${item.moduleName}`))
          if (data) {
            ModuleList.push(data)
          }
        })
      }

      // 将编辑器关联的属性复制给展示的编辑器
      Modules.forEach((item2) => {
        const isAdd = ref(false)
        ModuleList.forEach((item) => {
          if (item.moduleName === item2.moduleName) {
            item.content = item2.moduleContent.content
            item.headerImg = item2.moduleContent.headerImg

            if (item2.moduleContent.label) {
              item['label'] = item2.moduleContent.label
            }
            isAdd.value = true
          }
        })
        if (!isAdd.value && item2.isAdd === true) {
          ModuleList.push(item2.moduleContent)
        }
      })

      // 自定义模块的添加和删除
      const isAddModule = (module) => {
        if (module.isAdd) {
          ModuleList.push(module.moduleContent)
        } else {
          ModuleList.forEach((item, index) => {
            if (item.moduleName === module.moduleName) {
              ModuleList.splice(index, 1)
              localStorage.removeItem(`re_${item.moduleName}`)
            }
          })
        }
        ChangeToLocal1()
      }

      // 给自定义模块添加新的项目
      const AddChild = (module) => {
        const dic = module.child
        dic.id = module.index + 1
        dic.editor_id = `${module.moduleName}${dic.id}`
        module.moduleContent.content.push(JSON.parse(JSON.stringify(dic)))
        module.index += 1
        ChangeToLocal1()
      }
      // 自定义模块的删除和排序(模块，)
      const EditChild = (module, id, isDel) => {
        module.moduleContent.content.forEach((item, index) => {
          if (item.id === id) {
            if (isDel) {
              module.moduleContent.content.splice(index, 1)
            } else {
              const aaa = module.moduleContent.content
              if (index !== 0) {
                aaa[index] = aaa.splice(index - 1, 1, aaa[index])[0]
              }
            }
          }
        })
        ChangeToLocal1()
      }
      // 标签的添加和删除(标签名字，标签数组，是否添加)
      const EditTags = (name, arr, isAdd) => {
        if (isAdd) {
          arr.push(name)
        } else {
          arr.forEach((item, index) => {
            if (item === name) {
              arr.splice(index, 1)
            }
          })
        }

        ChangeToLocal1()
      }

      // 模块方法
      const moduleForm = reactive({
        index: 1,
        moduleName: "",
        isAdd: false,
        AllowChild: false,
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        child: {
          id: 0,
          title: {text1: "", text2: "", date1: "", date2: "", education: ''},
          content: "",
        },
        moduleContent: {
          isShow: true, moduleName: '', headerImg: 'star', content: [
            {
              id: 1,
              editor_id: '',
              title: {text1: "", text2: "", date1: "", date2: "", education: ''},
              content: "",
            },
          ]
        }
      })
      // 添加自定义模块
      const AddModules = () => {
        const isAdd = ref(true)
        Modules.forEach((item) => {
          if (item.moduleName === moduleForm.moduleName) {
            ElMessage.warning("模块已经存在，请勿重复添加")
            isAdd.value = false
          }
        })
        if (isAdd.value) {
          moduleForm.moduleContent.moduleName = moduleForm.moduleName
          moduleForm.moduleContent.content[0].editor_id = `${moduleForm.moduleName}1`
          Modules.push(JSON.parse(JSON.stringify(moduleForm)))
          Dialog.value = false
        }

      }
      // 模块上移(MdList)
      const ModuleSort = (data, isUp) => {
        ModuleList.forEach((item, index) => {
          if (data.moduleName === item.moduleName) {
            if (isUp) {
              if (index !== 0) {
                ModuleList[index] = ModuleList.splice(index - 1, 1, ModuleList[index])[0]
              } else {
                ModuleList.push(ModuleList.shift())
              }
            }
          }
        })

      }

      // 检测到数据改变立即本地化存储
      const ChangeToLocal1 = () => {
        Modules.forEach((item) => {
          localStorage.setItem(`${item.moduleName}`, JSON.stringify(item))
        })
        ModuleList.forEach((item) => {
          localStorage.setItem(`re_${item.moduleName}`, JSON.stringify(item))
        })
      }

      return {
        store, Modules, moduleForm, ModuleList,
        isAddModule, AddModules, ModuleSort,
        AddChild, EditChild, EditTags,
        ChangeToLocal1
      }
    }
    //基本信息
    const baseInfo = () => {
      const isShowD = reactive({address: true, date: true})
      const workerAgeOption = ref([
        {value: false, label: '不填',},
        {value: '应届生', label: '应届生',},
        {value: '半年工作经验', label: '半年工作经验',},
        {value: '1年工作经验', label: '1年工作经验',},
        {value: '2年工作经验', label: '2年工作经验',},
        {value: '3年工作经验', label: '3年工作经验',},
        {value: '4年工作经验', label: '4年工作经验',},
        {value: '5年工作经验', label: '5年工作经验',},
        {value: '6年工作经验', label: '6年工作经验',},
        {value: '7年工作经验', label: '7年工作经验',},
        {value: '8年工作经验', label: '8年工作经验',},
        {value: '9年工作经验', label: '9年工作经验',},
        {value: '10年工作经验', label: '10年工作经验',},
        {value: '10年以上工作经验', label: '10年以上工作经验',},
        {value: '15年以上工作经验', label: '15年以上工作经验',},
        {value: '20年以上工作经验', label: '20年以上工作经验',},
        {value: '30年以上工作经验', label: '30年以上工作经验',},
      ])
      const JobIntention = reactive({
        work0: {index: 1, isShow: false, title: "求 职 意 向", content: "厨师"},
        work1: {index: 2, isShow: false, title: "意 向 城 市", content: "比奇堡"},
        work2: {index: 3, isShow: false, title: "期 望 薪 资", content: "10W"},
        work3: {index: 4, isShow: false, title: "到 岗 时 间", content: "随时到岗位"},
      })

      // 用户基本信息
      const userinfo = props.uInfo
      userinfo.job = [JobIntention.work0, JobIntention.work1, JobIntention.work2, JobIntention.work3]
      const data = JSON.parse(localStorage.getItem('userinfo'))
      const isShowD_local = JSON.parse(localStorage.getItem('isShowD'))
      if (data) {
        userinfo.name = data.name
        userinfo.age = data.age
        userinfo.date = data.date
        userinfo.gender = data.gender
        userinfo.address = data.address
        userinfo.workAge = data.workAge
        userinfo.phone = data.phone
        userinfo.email = data.email
        userinfo.job = data.job

        data.job.forEach((item1) => {
          if (item1.title === "求 职 意 向") {
            JobIntention.work0.isShow = true
            JobIntention.work0.content = item1.content
          } else if (item1.title === "意 向 城 市") {
            JobIntention.work1.isShow = true
            JobIntention.work1.content = item1.content
          } else if (item1.title === "期 望 薪 资") {
            JobIntention.work2.isShow = true
            JobIntention.work2.content = item1.content
          } else if (item1.title === "到 岗 时 间") {
            JobIntention.work3.isShow = true
            JobIntention.work3.content = item1.content
          }
        })
      } else {
        JobIntention.work0.isShow = true
        JobIntention.work1.isShow = true
        JobIntention.work2.isShow = true
        JobIntention.work3.isShow = true
      }
      if (isShowD_local) {
        isShowD.date = isShowD_local.date
        isShowD.address = isShowD_local.address
      }
      // 选择日期后立马复制给需要展示的值
      const DateChange = (value) => {
        if (isShowD.date) {
          DateToNum(value)
        } else {
          userinfo.age = value
        }
        ChangeToLocal2()
      }
      // 将日期转换成数字（年龄）
      const DateToNum = (value) => {
        const aaa = userinfo.age
        const date = new Date(userinfo.date)
        const now = Date.now()
        if (value) {
          userinfo.age = Math.trunc((now - date.getTime()) / 60 / 60 / 24 / 365 / 1000)
        } else {
          userinfo.age = aaa
          userinfo.age = userinfo.date
        }
        ChangeToLocal2()
      }
      // 是否显示地址
      const isShowAddressHandle = (value) => {
        userinfo.address = value === true ? "地球村" : false
        ChangeToLocal2()
      }
      // 负责关于求职信息的顺序显示
      const jobHandle = (value, num, data) => {
        if (value) {
          userinfo.job.splice(num, 0, JobIntention[`work${num}`])
        } else {
          userinfo.job.forEach((it, index) => {
            if (it.title === data) {
              userinfo.job.splice(index, 1)
            }
          })
        }
        ChangeToLocal2()
      }
      const jobIntentionHandle1 = (value) => {
        jobHandle(value, 0, "求 职 意 向")
      }
      const jobIntentionHandle2 = (value) => {
        jobHandle(value, 1, "意 向 城 市")
      }
      const jobIntentionHandle3 = (value) => {
        jobHandle(value, 2, "期 望 薪 资")
      }
      const jobIntentionHandle4 = (value) => {
        jobHandle(value, 3, "到 岗 时 间")
      }

      // 检测到数据改变立即本地化存储
      const ChangeToLocal2 = () => {
        localStorage.setItem('userinfo', JSON.stringify(userinfo))
        localStorage.setItem('isShowD', JSON.stringify(isShowD))
      }

      return {
        userinfo, workerAgeOption, isShowD, JobIntention,
        DateToNum, DateChange, isShowAddressHandle,
        jobIntentionHandle1, jobIntentionHandle2, jobIntentionHandle3, jobIntentionHandle4,
        ChangeToLocal2,
      }
    }
    // 技能特长
    const skill = () => {
      const skillOption = reactive([
        {value: 40, label: "了解"},
        {value: 50, label: "还行"},
        {value: 60, label: "一般"},
        {value: 70, label: "良好"},
        {value: 80, label: "熟练"},
        {value: 90, label: "擅长"},
        {value: 100, label: "精通"},
      ])

      const isShowSkill = props.showSkill
      const skillInfo = props.skill
      const data = JSON.parse(localStorage.getItem('skillInfo'))
      if (data) {
        skillInfo.text = data.text
        skillInfo.isSkill = data.isSkill
        skillInfo.skillTitle = data.skillTitle
        skillInfo.skillTitleColor = data.skillTitleColor
        skillInfo.skillList = data.skillList
        skillInfo.isHobby = data.isHobby
        skillInfo.hobbyTitle = data.hobbyTitle
        skillInfo.hobbyTitleColor = data.hobbyTitleColor
        skillInfo.skillList = data.skillList
      }

      const AddSkill = (data, isSkill) => {
        if (isSkill) {
          skillInfo.skillList.push({skill: data, level: '80', color: 'rgba(255,215,219,1)'})
          skillInfo.skill = ''
          skillInfo.isSkill = true
        } else {
          skillInfo.hobbyList.push({hobby: data, fontColor: 'rgba(168,31,31,1)', bcgColor: 'rgba(255,215,219,1)'})
          skillInfo.skill = ''
          skillInfo.isHobby = true
        }
        ChangeToLocal3()
      }
      const DelSkill = (data, isSkill) => {
        if (isSkill) {
          skillInfo.skillList.forEach((item, index) => {
            if (item.skill === data) {
              skillInfo.skillList.splice(index, 1)
            }
            if (skillInfo.skillList.length === 0) {
              skillInfo.isSkill = false
            }
          })
        } else {
          skillInfo.hobbyList.forEach((item, index) => {
            if (item.hobby === data) {
              skillInfo.hobbyList.splice(index, 1)
            }
            if (skillInfo.hobbyList.length === 0) {
              skillInfo.isHobby = false
            }
          })
        }

        ChangeToLocal3()

      }

      // 检测到数据改变立即本地化存储
      const ChangeToLocal3 = () => {
        localStorage.setItem('skillInfo', JSON.stringify(skillInfo))
      }

      return {
        skillInfo, skillOption, isShowSkill,
        AddSkill, DelSkill,
        ChangeToLocal3
      }
    }

    return {
      Dialog, tooBars, predefineColors,
      ...resumeConfig(), ...baseInfo(), ...skill(),
    }
  }
})
</script>

<style scoped>
.ResumeEditor {
  background: #b78080;
  height: calc(100vh - 60px);
  width: 460px;
  position: absolute;
  right: 0;
  top: 0;
}

.ResumeEditor .EditBack {
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
}


.ResumeEditor .delete1 {
  cursor: pointer;
  text-align: center;
  background: #b78080;
  border-radius: 20px;
  height: 32px;
  line-height: 32px;
  margin-left: 20px;
}

.ResumeEditor .delete2 {
  cursor: pointer;
  text-align: center;
  background: #b78080;
  padding: 3px 6px 4px 6px;
  border-radius: 50%;
}

.ResumeEditor .font1 {
  font-size: 16px;
  color: #606266;
}
</style>
