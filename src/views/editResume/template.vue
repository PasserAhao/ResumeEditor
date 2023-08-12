<template>
  <div id="resume1">
    <div style="width: 820px;min-height: 1160px;background: white;margin: 0 auto">
      <!--   请在此处 ⬇⬇⬇ 编写你的简历模板  -->
      <!--   请在此处 ⬆⬆⬆ 编写你的简历模板  -->
    </div>
  </div>
  <!--      右边操作栏部分    -->
  <!--      右边操作栏部分    -->
  <ResumeEditor :tem-id="temID" :u-info="userinfo" :re-set="ModuleList" :md-set="ModuleConfig" :colors="colorsConfig"/>
</template>

<script>
import {initInfo} from '@/hooks/UserInfoHandle'
import {defineComponent, reactive, ref,} from "vue";
import ResumeEditor from '../../components/ResumeEditor'
// import Avatar from '../../../components/Avatar'
// import ModuleContent1 from '../../../components/ModuleContent'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tem",
  components: {ResumeEditor,
    // Avatar,
    // ModuleContent1
  },
  setup() {
    const temID = ref("temTem")
    const colorsConfig = reactive([
      {title: '模块字体颜色', color: [{value: '#00CED1FF'}, {value: '#00CED1FF'},{value: '#555555CC'},]},
      {title: '模块标签颜色', color: [{value: '#3A5F8533'}, {value: '#FFD7DBFF'}]},
    ])

    return {
      colorsConfig, temID,
      ...initInfo(temID.value, colorsConfig),
    }
  }
})
</script>

<style scoped>

</style>
