<template>
  <div style="background: #cccdd3;height: calc(100vh - 60px);position: relative">
    <!--      左边简历区域部分    -->
    <!--      左边简历区域部分    -->
    <div style="overflow-y: scroll;height: calc(100vh - 60px);width: 70vw;">
      <div style="margin: 30px 0;">
        <!--  简历部分    -->
        <!--  简历部分    -->
        <!--  简历部分    -->
        <div id="resume1" ref="resume1">
          <div style="width: 820px;min-height: 1160px;background: white;margin: 0 auto">
            <!--   简历左边部分     -->
            <!--   简历左边部分     -->
            <!--   简历左边部分     -->
            <div style=";width: 240px;min-height: 1160px;float: left;position: relative"
                 :style="{background:color.colorLeft}">
              <!--   头像部分         -->
              <!--   头像部分         -->
              <div style="margin-bottom: 10px">
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
                   :style="{color:color.fontColorLeft}">
                <!--    年龄    -->
                <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <calendar theme="two-tone" size="18" :fill="[color.colorLeft ,'#ffffff']"/>
                  </span>
                  <span>&nbsp;&nbsp;{{ userinfo.age }}</span>
                </div>
                <!--    性别     -->
                <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <male theme="two-tone" size="18" :fill="[color.colorLeft ,'#ffffff']"/>
                  </span>
                  <span>&nbsp;&nbsp;{{ userinfo.gender }}</span>
                </div>
                <!--    地址     -->
                <div v-if="userinfo.address" style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <local theme="two-tone" size="18" :fill="[color.colorLeft ,'#ffffff']"/>
                  </span>
                  <span>&nbsp;&nbsp;{{ userinfo.address }}</span>
                </div>
                <!--    工作年限     -->
                <div v-if="userinfo.workAge" style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <web-page theme="two-tone" size="18" :fill="[color.colorLeft ,'#ffffff']"/>
                  </span>
                  <span>&nbsp;&nbsp;{{ userinfo.workAge }}</span>
                </div>
                <!--    电话     -->
                <div style="margin-top: 15px">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <phone-call theme="two-tone" size="18" :fill="[color.colorLeft ,'#ffffff']"/>
                  </span>
                  <span>&nbsp;&nbsp;{{ userinfo.phone }}</span>
                </div>
                <!--    邮箱     -->
                <div style="margin-top: 15px;">
                  <span style="background: white;border-radius: 50%;padding: 4px 5px 3px 5px">
                    <mail-open theme="two-tone" size="18" :fill="[color.colorLeft ,'#ffffff']"/>
                  </span>
                  <span>&nbsp;&nbsp;{{ userinfo.email }}</span>
                </div>


              </div>
              <!--      自定义信息        -->
              <!--      自定义信息        -->
              <div v-if="skillInfo.text" style="margin:50px 20px;font-size: 22px">
                <MdEditor :style="{color:color.fontColorLeft,background:color.colorLeft}"
                          :editor-id="skillInfo.text" :previewOnly="true" v-model="skillInfo.text"/>
              </div>
              <!--      技能特长        -->
              <!--      技能特长        -->
              <div v-if="skillInfo.skillList" style="margin: 50px 20px 0 20px ">
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
              <div v-if="skillInfo.hobbyList" style="margin: 50px 20px 0 20px">
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
              <div :style="{color: color.fontColorRight1}">
                <h1 style="margin: 0 0 15px 30px;padding-top: 30px">{{ userinfo.name }}</h1>
                <div style="display: flex;flex-direction: row;justify-content: flex-start;flex-wrap: wrap">
                  <div v-for="(item,index) in userinfo.job" :key="index"
                       style="width:290px;margin-bottom: 5px">
                    <span style="font-size: 18px;margin-left: 50px">{{ item.title }}:{{ item.content }}</span>
                  </div>
                </div>
              </div>
              <!--      自定义模块        -->
              <div style="overflow: hidden">

                <div v-for="(item,index) in ModuleList" :key="index">
                  <div v-if="item.isShow">
                    <!--      自定义模块头部            -->
                    <div style="display: flex;justify-content: flex-start;width: 550px;margin: 20px auto">
                      <div style="border-radius: 50px;padding: 7px 7px 5px 7px"
                           :style="{background: color.fontColorRight1}">
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
                          :style="{marginLeft: '15px',width: '495px',borderBottom:`${color.fontColorRight1} solid 2px`}">
                        <span style="font-size: 16px;font-weight: bold;" :style="{color:color.fontColorRight1}">
                          {{ item.moduleName }}
                        </span>
                      </div>
                    </div>
                    <!--       自定义模块头部结束           -->
                    <!--       自定义模块内容开始           -->
                    <div v-for="(con,index2) in item.content" :key="index2"
                         :style="{color:color.fontColorRight1}" style="width: 520px;margin: 0 auto;">
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
                        <MdEditor :style="{color:color.fontColorRight2}"
                                  :editor-id="con.content" :previewOnly="true" v-model="con.content"/>
                      </div>
                      <!--       自定义模块Tag           -->
                      <!--       自定义模块Tag           -->
                      <div v-if="con.label" style="display: flex;justify-content: flex-start;flex-wrap: wrap">
                        <div v-for="(tag,index3) in con.label" :key="index3">
                          <div style="border-radius: 25px;margin-right: 10px;display: block;height: 30px"
                               :style="{background:color.TagBackGround,border:`2px solid ${color.TagBorder}`}">
                            <span style="padding: 10px;line-height: 28px" :style="{color:color.fontColorRight2}">
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
      </div>
      <!--  简历部分结束   -->
    </div>
    <!--      右边操作栏部分    -->
    <!--      右边操作栏部分    -->
    <div id="ResumeEditor">
      <el-tabs type="border-card" class="demo-tabs Edit-table" tab-position="left">
        <!--     简历配置   -->
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
            <el-button v-print="'#resume1'" style="text-align: center">保存为PDF</el-button>
            <!--     颜色配置       -->
            <div>
              <h3 style="text-align: left">颜色配置</h3>
              <div class="font1">
                <div style="text-align: left;margin-top: 20px">
                  <span>皮肤颜色&nbsp;:&nbsp;</span>
                  <el-color-picker v-model="color.colorLeft" show-alpha :predefine="predefineColors"/>
                </div>

                <div style="text-align: left;margin-top: 20px">
                  <span>字体颜色(左边)&nbsp;:&nbsp;</span>
                  <el-color-picker v-model="color.fontColorLeft" show-alpha :predefine="predefineColors"/>
                </div>

                <div style="text-align: left;margin-top: 20px">
                  <span>字体颜色(右边)&nbsp;:&nbsp;</span>
                  <el-color-picker v-model="color.fontColorRight1" show-alpha :predefine="predefineColors"/>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <el-color-picker v-model="color.fontColorRight2" show-alpha :predefine="predefineColors"/>
                </div>

                <div style="text-align: left;margin-top: 20px">
                  <span>标签颜色(边框，背景)&nbsp;:&nbsp;</span>
                  <el-color-picker v-model="color.TagBorder" show-alpha :predefine="predefineColors"/>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <el-color-picker v-model="color.TagBackGround" show-alpha :predefine="predefineColors"/>
                </div>

              </div>

            </div>
            <!--     模块配置       -->
            <div>
              <h3 style="text-align: left">模块管理</h3>

              <div style="width: 100%;margin-bottom: 15px">
                <el-button style="width: 310px;" type="success" @click="moduleDialog = true">添加自定义模块</el-button>
              </div>

              <div>
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
                              <span style="cursor: pointer;margin-left: 50px" @click="ModuleSortHandle(scope.row,true)">
                                <circle-double-up theme="two-tone" size="22" :fill="['#7ed321' ,'#ffffff']"/>
                              </span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>

          </div>
        </el-tab-pane>
        <!--    基础信息      -->
        <!--    基础信息      -->
        <!--    基础信息      -->
        <el-tab-pane>
          <template #label>
            <div class="custom-tabs-label title-left">
              <span class="title-item" style="line-height: 50px">基础信息</span>
            </div>
          </template>
          <div style="width: 100%">
            <el-form style="height: calc(100vh - 60px);overflow-y: scroll">
              <h3>基本信息设置</h3>
              <el-form-item label="你的姓名:">
                <el-input v-model="userinfo.name"></el-input>
              </el-form-item>

              <el-form-item label="性别:" style="margin-top: 15px">
                <el-radio-group v-model="userinfo.gender" class="ml-4">
                  <el-radio label="男">男</el-radio>
                  <el-radio label="女">女</el-radio>
                </el-radio-group>
              </el-form-item>

              <div>
                <span style="font-size: 14px;color: #606266">年龄&nbsp;:&nbsp;&nbsp;</span>
                <el-date-picker style="width: 150px" v-model="userinfo.date"
                                type="date" placeholder="出生日期" value-format="YYYY-MM-DD"/>
                <el-checkbox v-model="isShowD.date" style="margin-left: 15px" label="转数字" name="type"
                             @change="NumToDate"/>
              </div>

              <el-form-item label="地址:" style="margin-top: 15px">
                <el-input v-model="userinfo.address" style="width: 230px;"></el-input>
                <el-checkbox v-model="isShowD.address" style="margin-left: 15px" name="type"
                             @change="isShowAddressHandle"/>
              </el-form-item>

              <div>
                <span style="font-size: 14px;color: #606266">工作年限&nbsp;:&nbsp;&nbsp;</span>
                <el-select v-model="userinfo.workAge" class="m-2" placeholder="Select">
                  <el-option v-for="item in workerAge" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </div>

              <el-form-item label="电话:" style="margin-top: 15px">
                <el-input v-model="userinfo.phone"></el-input>
              </el-form-item>

              <el-form-item label="邮箱:">
                <el-input v-model="userinfo.email"></el-input>
              </el-form-item>

              <h3>求职意向</h3>

              <el-form-item label="求职意向:" style="margin-top: 15px">
                <el-input v-model="userinfo.jobIntention[0].content" style="width: 200px;"></el-input>
                <el-checkbox v-model="userinfo.jobIntention[0].isShow" style="margin-left: 15px" name="type"
                             @change="jobIntentionHandle1"/>
              </el-form-item>

              <el-form-item label="意向城市:" style="margin-top: 15px">
                <el-input v-model="userinfo.jobIntention[1].content" style="width: 200px;"></el-input>
                <el-checkbox v-model="userinfo.jobIntention[1].isShow" style="margin-left: 15px" name="type"
                             @change="jobIntentionHandle2"/>
              </el-form-item>

              <el-form-item label="期望薪资:" style="margin-top: 15px">
                <el-input v-model="userinfo.jobIntention[2].content" style="width: 200px;"></el-input>
                <el-checkbox v-model="userinfo.jobIntention[2].isShow" style="margin-left: 15px" name="type"
                             @change="jobIntentionHandle3"/>
              </el-form-item>

              <el-form-item label="入职时间:" style="margin-top: 15px">
                <el-input v-model="userinfo.jobIntention[3].content" style="width: 200px;"></el-input>
                <el-checkbox v-model="userinfo.jobIntention[3].isShow" style="margin-left: 15px" name="type"
                             @change="jobIntentionHandle4"/>
              </el-form-item>

            </el-form>

          </div>
        </el-tab-pane>
        <!--        技能特长-->
        <!--        技能特长-->
        <!--        技能特长-->
        <el-tab-pane>
          <template #label>
            <div class="custom-tabs-label title-left">
              <span class="title-item">技能特长</span>
            </div>
          </template>
          <div class="EditBack">
            <MdEditor style="height:200px" :editor-id="'skillAnd'" v-model="skillInfo.text" :preview="false"
                      :toolbars="tooBars"/>
            <!--      技能管理      -->
            <!--      技能管理      -->
            <!--      技能管理      -->
            <div style="margin-bottom: 10px">
              <h3>技能管理</h3>

              <div>
                <span class="font1">技能标题&nbsp;:&nbsp;&nbsp;</span>
                <el-input v-model="skillInfo.skillTitle" style="width: 150px;margin-right: 15px"/>
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
                        <el-select v-model="skill.level" class="m-2" placeholder="Select" style="width: 100%">
                          <el-option v-for="(it,id) in skillOption" :key="id" :label="it.label" :value="it.value"/>
                        </el-select>
                      </span>
                      <span style="margin-left: 10px">
                        <el-color-picker v-model="skill.color" show-alpha :predefine="predefineColors"/>
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
                <el-input v-model="skillInfo.bobbyTitle" style="width: 150px;margin-right: 15px"/>
                <el-color-picker v-model="skillInfo.hobbyTitleColor" show-alpha :predefine="predefineColors"/>
              </div>

              <div style="margin-top: 25px">
                <el-input style="width: 215px;" v-model="skillInfo.hobbyTitle"/>
                <el-button style="margin-left: 15px" type="success" @click="AddSkill(skillInfo.hobby,false)">
                  添加爱好
                </el-button>
              </div>

              <div style="margin-top: 25px;display: flex;flex-wrap: wrap">
                <div v-for="(bobby,index) in skillInfo.hobbyList" :key="index" style="margin: 15px 20px 15px 0">
                  <span style="background: rgba(160,91,162,0.5);border-radius: 20px;padding: 10px">
                    <span style="margin-right: 5px">{{ bobby.hobby }}</span>
                    <span>
                      <el-color-picker v-model="bobby.fontColor" show-alpha :predefine="predefineColors"/>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <el-color-picker v-model="bobby.bcgColor" show-alpha :predefine="predefineColors"/>
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
        <!--    自定义模块    -->
        <el-tab-pane v-for="(module,index) in Modules" :key="index">
          <template #label>
            <div class="custom-tabs-label title-left">
              <span class="title-item">{{ module.moduleName }}</span>
            </div>
          </template>
          <div class="EditBack">

            <div style="position: relative">
              <h3 style="text-align: left">{{ module.moduleName }}</h3>
              <span style="position: absolute;left: 85px;top: -3px;">
                <el-switch style="width: 10px" v-model="module.isAdd" @change="isShowModule(module)"/>
              </span>
            </div>
            <!--        模块循环体    -->
            <div v-if="module.isAdd">
              <div v-for="(item,index) in module.content.content" :key="index" style="margin-bottom: 25px">
                <div style="display: flex;justify-content: flex-start">
                  <span style="font-weight: bold;font-size: 16px;margin-bottom: 20px">{{ item.title.text1 }}</span>

                  <span v-if="module.AllowChild">
                  <span style="margin-left: 15px;cursor: pointer" @click="EditChild(module,item.id,false)">
                    <circle-double-up theme="two-tone" size="22" :fill="['#7ed321' ,'#ffffff']"/>
                  </span>
                </span>

                  <span v-if="module.AllowChild">
                  <span style="margin-left: 15px;cursor: pointer" @click="EditChild(module,item.id,true)">
                    <delete theme="two-tone" size="22" :fill="['#ee194b' ,'#ffffff']"/>
                  </span>
                </span>

                </div>

                <div v-if="module.text1" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text1 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-input v-model="item.title.text1" style="width: 235px"></el-input>
                </div>

                <div v-if="module.text2" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text2 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-input v-model="item.title.text2" style="width: 235px"></el-input>
                </div>

                <div v-if="module.text3" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text3 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-date-picker style="width: 103px" v-model="item.title.date1" type="month" value-format="YYYY-MM"/>
                  <span>&nbsp;&nbsp;~&nbsp;&nbsp;</span>
                  <el-date-picker style="width: 103px" v-model="item.title.date2" type="month" value-format="YYYY-MM"/>
                </div>

                <div v-if="module.text4" style="margin-bottom: 15px">
                  <span class="font1">{{ module.text4 }}&nbsp;:&nbsp;&nbsp;</span>
                  <el-select v-model="item.title.education" class="m-2" placeholder="Select">
                    <el-option v-for="edu in module.eduOptions" :key="edu.value" :label="edu.label" :value="edu.value"/>
                  </el-select>
                </div>

                <div>
                  <MdEditor style="height:200px" :editor-id="module.moduleName+String(item.id)"
                            v-model="item.content" :preview="false" :toolbars="tooBars"/>
                </div>
                <!--     标签处理         -->
                <div v-if="item.label">
                  <div style="margin-top: 25px">
                    <el-input style="width: 215px;" v-model="item.labelName"/>
                    <el-button style="margin-left: 15px" type="success" @click="AddTags(item.labelName,item.label)">
                      添加标签
                    </el-button>
                  </div>

                  <div style="margin-top: 25px;display: flex;flex-wrap: wrap">
                    <div v-for="(tag,index) in item.label" :key="index" style="margin: 15px 20px 15px 0">
                      <span style="background: rgba(96,98,102,0.5);border-radius: 20px;padding: 10px">
                        <span style="margin-right: 5px">{{ tag }}</span>
                        <span @click="DelTags(tag,item.label)" style="cursor: pointer">
                          <delete theme="two-tone" size="16" :fill="['#ee194b' ,'#ffffff']"/>
                        </span>
                      </span>
                    </div>
                  </div>

                </div>
                <!--     标签处理结束         -->

              </div>
              <!--        模块循环体结束    -->
              <div v-if="module.AllowChild" style="margin-bottom: 50px">
                <el-button style="width: 310px;" type="success" @click="AddChild(module)">添加{{ module.moduleName }}
                </el-button>
              </div>
            </div>


          </div>
        </el-tab-pane>

      </el-tabs>

      <el-dialog v-model="moduleDialog" title="添加模块" width="30%" align-center>
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

    <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
           style="opacity: 0"/>
  </div>

</template>

<script>
import {defineComponent, ref, reactive} from "vue";
import {useRouter} from "vue-router";
import MdEditor from 'md-editor-v3';
import {ElMessage} from 'element-plus'

import {
  Camera, Pic, Calendar, PhoneCall, MailOpen, WebPage, Local, Male, BookOpen, Handbag,
  Comment, Star, MedalOne, SeoFolder, Briefcase, BachelorCapOne, CircleDoubleUp, Delete,
} from '@icon-park/vue-next';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "1",
  components: {
    Camera, Pic, Calendar, PhoneCall, MailOpen, WebPage, Local, Male, BookOpen, Handbag, Comment,
    Star, MedalOne, SeoFolder, Briefcase, BachelorCapOne, CircleDoubleUp, Delete,
    MdEditor,
  },
  setup() {
    const router = useRouter()
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

    const ModuleList = reactive([
      {isShow: true, moduleName: "工作经验", headerImg: '', content: []},
      {isShow: true, moduleName: "项目经验", headerImg: '', content: []},
      {isShow: true, moduleName: "荣誉证书", headerImg: '', content: []},
      {isShow: true, moduleName: "自我评价", headerImg: '', content: []},
    ])
    // 头像处理
    const imageHandle = () => {
      const imgUrl = ref("")
      const imgInput = ref()
      const openFile = () => {
        imgInput.value.dispatchEvent(new MouseEvent('click'))
      }
      const getImageUrl = (e) => {
        // 上传的文件
        const file = e.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          imgUrl.value = String(reader.result)
        }
      }
      return {
        imgInput, imgUrl,
        openFile, getImageUrl,
      }
    }
    //简历配置
    const baseConfig = () => {
      const moduleDialog = ref(false)
      const tablePosition = ref('left')

      const color = reactive({
        colorLeft: 'rgba(255,215,0,1)',
        fontColorLeft: 'rgba(255,255,255,1)',
        fontColorRight1: 'rgba(0,206,209,1)',
        fontColorRight2: 'rgba(85,85,85,0.8)',
        TagBorder: 'rgba(58,95,133,0.2)',
        TagBackGround: 'rgba(255,215,219,1)',
      })
      const Modules = reactive([
        {
          index: 1,
          moduleName: "教育背景",
          isAdd: false,
          AllowChild: true,
          text1: '学校名称',
          text2: '就读专业',
          text3: '就读时间',
          text4: '学历',
          eduOptions: [
            {value: '', label: '不填'}, {value: '高中', label: '高中'}, {value: '大专', label: '大专'},
            {value: '本科', label: '本科'}, {value: '研究生', label: '研究生'}, {value: '博士', label: '博士'},
          ],
          child: {
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: "", education: ''},
            content: "",
          },
          content: {
            isShow: true, moduleName: "教育背景", headerImg: 'bookOpen', content: [
              {
                id: 0,
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
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: ""},
            content: "",
          },
          content: {
            isShow: true, moduleName: "工作经验", headerImg: 'handbag1',
            content: [
              {
                id: 1,
                title: {text1: "海之霸餐厅", text2: "收银", date1: "2023-09", date2: "2024-10"},
                content: "在海之霸餐厅给蟹老板当卧底\n阻止痞老板偷蟹黄堡秘方\n帮助蟹老板挖痞老板的机器人老婆",
              },
              {
                id: 2,
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
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: ""},
            content: "",
          },
          content: {
            isShow: true, moduleName: "项目经验", headerImg: 'folder',
            content: [
              {
                id: 1,
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
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: ""},
            content: "",
          },
          content: {
            isShow: true, moduleName: "实习经验", headerImg: 'handbag2',
            content: [
              {
                id: 1,
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
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: ""},
            content: "",
          },
          content: {
            isShow: true, moduleName: "校园经历", headerImg: 'bachelorCap',
            content: [
              {
                id: 1,
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
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: ""},
            labelName: '',
            content: "",
          },
          content: {
            isShow: true, moduleName: "荣誉证书", headerImg: 'medal',
            content: [
              {
                id: 1,
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
            id: 0,
            title: {text1: "", text2: "", date1: "", date2: ""},
            content: "",
          },
          content: {
            isShow: true, moduleName: "自我评价", headerImg: 'comment',
            content: [
              {
                id: 1,
                title: {text1: "", text2: "", date1: "", date2: ""},
                content: "海绵宝宝（SpongeBob SquarePants），美国动画片《海绵宝宝》及其衍生作品中的角色。\n" +
                    "生活在太平洋海底一座被称为比奇堡的城市，身份是蟹堡王餐厅的高级厨师。黄色长方形海绵，其身体构成如同清洁用海绵。拥有两只手，各四根手指。以棕色短裤、白色衬衫和红色领带为主要服装。身体如果被破坏皆可恢复原状。虽然有正常进食，但纯滤食海水也能继续存活。体力薄弱，且所谓的哑铃其实是绒毛玩具；但随著剧情发展似乎逐渐提升，奇怪的是他在与珊迪用空手道对打时完全看不出体质的薄弱，两人平分秋色。平常喜欢说的口头禅是：“我准备好了”",
              },
            ],
          }
        },
      ])
      ModuleList.forEach((item) => {
        Modules.forEach((item2) => {
          if (item.moduleName === item2.moduleName) {
            item.content = item2.content.content
            item.headerImg = item2.content.headerImg

            if (item2.content.label) {
              item['label'] = item2.content.label
            }
          }
        })
      })

      // 模块内部方法
      const isShowModule = (module) => {
        if (module.isAdd) {
          ModuleList.push(module.content)
        } else {
          ModuleList.forEach((item, index) => {
            if (item.moduleName === module.moduleName) {
              ModuleList.splice(index, 1)
            }
            module.content.content.forEach((item) => {
              item.content = ''
            })
          })
        }
      }
      const AddChild = (value) => {
        value.child.id = value.index + 1
        value.content.content.push(value.child)
        value.index += 1
      }
      const EditChild = (module, id, isDel) => {
        module.content.content.forEach((item, index) => {
          if (item.id === id) {
            if (isDel) {
              module.content.content.splice(index, 1)
            } else {
              const aaa = module.content.content
              if (index !== 0) {
                aaa[index] = aaa.splice(index - 1, 1, aaa[index])[0]
              }
            }
          }
        })
      }
      const AddTags = (name, arr) => {
        arr.push(name)
      }
      const DelTags = (name, arr) => {
        arr.forEach((item, index) => {
          if (item === name) {
            arr.splice(index, 1)
          }
        })
      }

      // 模块方法
      const moduleForm = reactive({
        index: 1,
        moduleName: "",
        isAdd: true,
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
        content: {
          isShow: true, moduleName: '', headerImg: 'star', content: [
            {
              id: 0,
              title: {text1: "", text2: "", date1: "", date2: "", education: ''},
              content: "",
            },
          ]
        }
      })
      const AddModules = () => {
        const isAdd = ref(true)
        Modules.forEach((item) => {
          if (item.moduleName === moduleForm.moduleName) {
            ElMessage.warning("模块已经存在，请勿重复添加")
            isAdd.value = false
          }
        })
        if (isAdd.value) {
          moduleForm.content.moduleName = moduleForm.moduleName
          Modules.push(moduleForm)
          ModuleList.push(moduleForm.content)
          moduleDialog.value = false
        }

      }
      const ModuleSortHandle = (data, isUp) => {
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

      return {
        color, tablePosition, Modules, moduleDialog, moduleForm,
        ModuleSortHandle, AddModules, AddTags, DelTags,
        isShowModule, AddChild, EditChild
      }
    }
    //基本信息
    const baseInfo = () => {
      const isShowD = reactive({address: true, date: true})
      const userinfo = reactive({
        name: "海绵宝宝",
        age: "36",
        date: "1986-07-11",
        gender: "男",
        address: "比基尼海滩比奇堡",
        workAge: "20年工作经验",
        phone: "0595-87283169",
        email: "spongebob@163.com",
        job: [
          {index: 1, isShow: true, title: "求职意向", content: "厨师"},
          {index: 2, isShow: true, title: "意向城市", content: "比奇堡"},
          {index: 3, isShow: true, title: "期望薪资", content: "10w"},
          {index: 4, isShow: true, title: "到岗时间", content: "随时到岗"},
        ],
        jobIntention: [
          {index: 1, isShow: true, title: "求职意向", content: "厨师"},
          {index: 2, isShow: true, title: "意向城市", content: "比奇堡"},
          {index: 3, isShow: true, title: "期望薪资", content: "10w"},
          {index: 4, isShow: true, title: "到岗时间", content: "随时到岗"},
        ]
      })
      const workerAge = ref([
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
      const NumToDate = (value) => {
        const aaa = userinfo.age
        const date = new Date(userinfo.date)
        const now = Date.now()
        if (value) {
          userinfo.age = Math.trunc((now - date.getTime()) / 60 / 60 / 24 / 365 / 1000)
        } else {
          userinfo.age = aaa
          userinfo.age = userinfo.date
        }
      }
      const isShowAddressHandle = (value) => {
        userinfo.address = value === true ? "地球村" : false
      }
      const jobHandle = (value, num, data) => {
        if (value) {
          userinfo.job.splice(num, 0, userinfo.jobIntention[num])
        } else {
          userinfo.job.forEach((it, index) => {
            if (it.title === data) {
              userinfo.job.splice(index, 1)
            }
          })
        }
      }
      const jobIntentionHandle1 = (value) => {
        jobHandle(value, 0, "求职意向")
      }
      const jobIntentionHandle2 = (value) => {
        jobHandle(value, 1, "意向城市")
      }
      const jobIntentionHandle3 = (value) => {
        jobHandle(value, 2, "期望薪资")
      }
      const jobIntentionHandle4 = (value) => {
        jobHandle(value, 3, "到岗时间")
      }
      return {
        userinfo, workerAge, isShowD,
        NumToDate,
        isShowAddressHandle,
        jobIntentionHandle1, jobIntentionHandle2, jobIntentionHandle3, jobIntentionHandle4
      }
    }
    // 技能特长
    const skill = () => {
      const skillOption = reactive([
        {value: "50", label: "了解"},
        {value: "60", label: "一般"},
        {value: "70", label: "良好"},
        {value: "80", label: "熟练"},
        {value: "90", label: "擅长"},
        {value: "100", label: "精通"},
      ])
      const skillInfo = reactive({
        text: '我非常喜欢和派大星，珊迪，章鱼哥玩躲猫猫',
        skill: '',
        skillTitle: '专业技能',
        skillTitleColor: '#000000',
        skillList: [
          {skill: "蟹黄堡", level: '100', color: '#00ced1'},
          {skill: "披萨", level: '80', color: '#ff8c00'},
          {skill: "海之霸", level: '50', color: '#90ee90'},
          {skill: "蜗牛饮料", level: '90', color: '#1e90ff'},
        ],
        hobby: '',
        hobbyTitle: '兴趣爱好',
        hobbyTitleColor: '#000000',
        hobbyList: [
          {hobby: '抓蝴蝶', fontColor: '#a81f1f', bcgColor: 'rgba(255,215,219,1)'},
          {hobby: '空手道', fontColor: '#2626c2', bcgColor: 'rgba(144,238,144,1)'},
          {hobby: '吹泡泡', fontColor: '#57b43d', bcgColor: 'rgba(0,206,209,1)'},
        ]
      })

      const AddSkill = (data, isSkill) => {
        if (isSkill) {
          skillInfo.skillList.push({skill: data, level: '80', color: 'rgba(255,215,219,1)'})
          skillInfo.skill = ''
        } else {
          skillInfo.hobbyList.push({hobby: data, fontColor: 'rgba(168,31,31,1)', bcgColor: 'rgba(255,215,219,1)'})
          skillInfo.skill = ''
        }

      }
      const DelSkill = (data, isSkill) => {
        if (isSkill) {
          skillInfo.skillList.forEach((item, index) => {
            if (item.skill === data) {
              skillInfo.skillList.splice(index, 1)
            }
          })
        } else {
          skillInfo.hobbyList.forEach((item, index) => {
            if (item.hobby === data) {
              skillInfo.hobbyList.splice(index, 1)
            }
          })
        }

      }
      return {
        skillInfo, skillOption,
        AddSkill, DelSkill,
      }
    }

    return {
      router, ModuleList, tooBars, predefineColors,
      ...imageHandle(),
      ...baseConfig(),
      ...baseInfo(), ...skill(),
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
