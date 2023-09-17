<template>
<div id="resume-content" style="margin-left:35px;padding-bottom: 8px">
  <div v-for="(con,index2) in moduleContent" :key="index2"
       :style="{color:colorsConfig[0].color[1].value,width: `${contentWidth}%`,margin:' 0 auto'}">
    <!--       自定义模块Title           -->
    <!--       自定义模块Title           -->
    <div v-if="con.title" class="control-Title" style="display: flex;justify-content: space-between">
      <div v-if="con.title.date1">{{ con.title.date1 }}~{{ con.title.date2 }}</div>
      <div v-if="con.title.text1" style="font-weight: bold">{{ con.title.text1 }}</div>
      <div v-if="con.title.text2">{{ con.title.text2 }}</div>
      <div v-if="con.title.education">{{ con.title.education }}</div>
    </div>
    <!--       自定义模块content           -->
    <!--       自定义模块content           -->
    <div>
      <MdPreview :editor-id="con.editor_id" v-model="con.content"/>
    </div>
    <!--       自定义模块Tag           -->
    <!--       自定义模块Tag           -->
    <div v-if="con.label" style="display: flex;justify-content: flex-start;flex-wrap: wrap">
      <div v-for="(tag,index3) in con.label" :key="index3">
        <div style="border-radius: 25px;margin-right: 10px;display: block;height: 30px"
             :style="{background:colorsConfig[1].color[1].value,border:`2px solid ${colorsConfig[1].color[0].value}`}">
                <span style="padding: 10px;line-height: 28px"
                      :style="{color:colorsConfig[0].color[2].value}">
                  {{ tag }}
                </span>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import {defineComponent, onMounted, watch} from "vue";
import {MdPreview} from 'md-editor-v3'
export default defineComponent({
  name: "ModuleContent1",
  components:{MdPreview},
  props :{
    colorsConfig:Array,
    moduleContent:Array,
    contentWidth:Number
  },
  setup(props){
    const color = props.colorsConfig[0].color[2]
    // 在组件挂载后，设置 CSS 变量的值
    onMounted(() => {
      document.documentElement.style.setProperty("--Color", color.value);
    });
    // 监听变量的方法
    ((color)=> {
      watch(color, () => {
            document.documentElement.style.setProperty("--Color", color.value);
          }
      )
    })(props.colorsConfig[0].color[2])
    return {
    }
  }
})
</script>

<style scoped>
:deep( .md-editor-preview p){
  color: var(--Color);
}
</style>
