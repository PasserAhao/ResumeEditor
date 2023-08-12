<template>
  <div id="resume1">
    <div style="width: 820px;min-height: 1160px;background: white;margin: 0 auto">
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
      <!--   请在此处编写你的简历模板   -->
    </div>
  </div>
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <ResumeEditor :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig"
                :colors="colorsConfig" :skill="skillInfo"/>
  <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
         style="opacity: 0"/>
</template>

<script>
import {initInfo} from '@/hooks/UserInfoHandle'
import {defineComponent, reactive,} from "vue";
import ResumeEditor from '../../components/ResumeEditor'
// import Avatar from '../../../components/Avatar'
// import MdEditor from 'md-editor-v3'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "1",
  components: {ResumeEditor,
    // Avatar,
    // ,MdEditor
  },
  setup() {
    const colorsConfig = reactive([
      {title: '皮肤颜色', color: [{value: 'rgba(255,215,0,1)'}]},
      {title: '字体颜色(左)', color: [{value: 'rgba(255,255,255,1)'}]},
      {title: '字体颜色(右)', color: [{value: 'rgba(0,206,209,1)'}, {value: 'rgba(85,85,85,0.8)'}]},
      {title: '标签颜色', color: [{value: 'rgba(58,95,133,0.2)'}, {value: 'rgba(255,215,219,1)'}]},
    ])

    return {
      colorsConfig,
      ...initInfo(),
    }
  }
})
</script>

<style scoped>

</style>
