<template>
  <!-- 头部 -->
  <div style="height: 60px;width: 100vw;background: #4cc9f0" id="EditResume">
    <div style="width: 90%;margin: 0 auto;overflow: hidden;font-size: 22px;font-weight: bold">
      <span @click="router.back()" style="cursor: pointer;float: left;line-height: 60px;">&lt; 首页</span>
      <el-button v-print="'#resume1'" class="saveToPdf">保存为PDF</el-button>
    </div>

  </div>

  <div style="background: #cccdd3;height: calc(100vh - 60px);position: relative">
    <!--      左边简历区域部分    -->
    <div style="overflow-y: scroll;height: calc(100vh - 60px);width: 70vw;">
      <div style="margin: 30px 0;">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent,ref} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "1",
  setup() {
    const router = useRouter()
    const data = ref({test1:"",test2:""})
    return {
      router,data,
    }
  }
})
</script>

<style scoped>
.saveToPdf {
  float: right;
  margin-top: 12px;
}
</style>
