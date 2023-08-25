<template>
  <!-- 头部 -->
  <div style="height: 60px;width: 100vw;background: #4cc9f0" id="EditResume">
    <div style="width: 90%;margin: 0 auto;overflow: hidden;font-size: 22px;font-weight: bold">
      <span @click="router.push({path:`/`})" style="cursor: pointer;float: left;line-height: 60px;">&lt; 首页</span>
      <!--        -->
      <div style="float: left;margin-left: 10vw;margin-top: 9px">
        <el-dropdown :hide-on-click="false">
          <div class="public-col-center">
            <align-text-both-one theme="two-tone" size="30" :fill="['#333' ,'#407ab1']"/>
            <span style="font-size: 12px;text-align: center">间距设置</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu style="padding: 20px 15px 0">
              <div class="public-col-center">
                <div class="public-row dropItem1">
                  <h3 class="SpaceItem">字体间距大小</h3>
                  <el-input-number v-model="CStyle.FontSpace" size="small" @change="GlobalSpace"
                                   :precision="2" :step="0.05" :min="0"/>
                </div>
                <div class="public-row dropItem1">
                  <h3 class="SpaceItem">行间距大小</h3>
                  <el-input-number v-model="CStyle.LineHeight" size="small" @change="GlobalSpace"
                                   :precision="2" :step="0.05" :min="-0.5"/>
                </div>
                <div class="public-row dropItem1">
                  <h3 class="SpaceItem">模块间距大小</h3>
                  <el-input-number v-model="CStyle.PaddingTB" size="small" @change="GlobalSpace"
                                   :min="-5"/>
                </div>
              </div>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!--      -->
      <el-button v-print="'#resume'" class="saveToPdf">保存为PDF</el-button>
    </div>

  </div>

  <div style="background: #cccdd3;height: calc(100vh - 60px);position: relative">
    <!--      左边简历区域部分    -->
    <div id="myResume-index" style="overflow-y: scroll;height: calc(100vh - 60px);width: 70vw;">
      <div style="margin: 30px 0;">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent, ref, reactive, onMounted, watch} from "vue";
import {useRouter} from "vue-router";
import {AlignTextBothOne} from '@icon-park/vue-next';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "1",
  components: {AlignTextBothOne},
  setup() {
    const router = useRouter()
    const data = ref({test1: "", test2: ""})

    const YStyle = reactive({
      FontSize: 16,
      FontSpace: 0,
      LineHeight: 1.5,
      PaddingTB: 5,
    })
    const CStyle = reactive({
      FontSize: 0,
      FontSpace: 0,
      LineHeight: 0,
      PaddingTB: 0,
    })
    // 在组件挂载后，设置 CSS 变量的值
    onMounted(() => {
      document.documentElement.style.setProperty("--FontSize", YStyle.FontSize + "px");
      document.documentElement.style.setProperty("--FontSpace", YStyle.FontSpace + "rem");
      document.documentElement.style.setProperty("--LineHeight", YStyle.LineHeight + "rem");
      document.documentElement.style.setProperty("--PaddingTB", YStyle.PaddingTB + "px");
    });
    // 监听变量的方法
    ((color)=> {
      watch(color, (newValue, oldValue) => {
        document.documentElement.style.setProperty("--FontSpace", YStyle.FontSpace + CStyle.FontSpace + "rem");
        document.documentElement.style.setProperty("--LineHeight", YStyle.LineHeight + CStyle.LineHeight + "rem");
        document.documentElement.style.setProperty("--PaddingTB", YStyle.PaddingTB + CStyle.PaddingTB + "px");}
      )
    })(CStyle)

    return {
      router, data, CStyle
    }
  },
})
</script>

<style scoped>
.saveToPdf {
  float: right;
  margin-top: 15px;
}

:deep( #ContentBody  .md-editor-preview p) {
  letter-spacing: var(--FontSpace);
  font-size: var(--FontSize);
  line-height: var(--LineHeight);
  padding: var(--PaddingTB) 0;
}

:deep(#ContentBody .control-Title) {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: var(--FontSize);
}

.SpaceItem {
  width: 100px;
  text-align-last: justify;
  margin-right: 10px;
  margin-top: 2px;
}

.dropItem1 {
  margin-bottom: 15px;
  height: 1.5rem;
}
</style>
