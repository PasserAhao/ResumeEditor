<template>
<div>
  <div v-for="(con,index2) in moduleContent" :key="index2"
       :style="{color:colorsConfig[0].color[1].value}" style="width: 520px;margin: 0 auto;">
    <!--       自定义模块Title           -->
    <!--       自定义模块Title           -->
    <div v-if="con.title" class="control-Title">
      <div v-if="con.title.date1">{{ con.title.date1 }}~{{ con.title.date2 }}</div>
      <div v-if="con.title.text1" style="font-weight: bold">{{ con.title.text1 }}</div>
      <div v-if="con.title.text2">{{ con.title.text2 }}</div>
      <div v-if="con.title.education">{{ con.title.education }}</div>
    </div>
    <!--       自定义模块content           -->
    <!--       自定义模块content           -->
    <div>
      <MdEditor :style="{color:colorsConfig[0].color[2].value}"
                :editor-id="con.editor_id" :previewOnly="true" v-model="con.content"/>
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
import {defineComponent} from "vue";
import MdEditor from 'md-editor-v3'
export default defineComponent({
  name: "ModuleContent1",
  components:{MdEditor},
  props :{
    colorsConfig:Array,
    moduleContent:Array
  },
  setup(){
    return {
    }
  }
})
</script>

<style scoped>

</style>
