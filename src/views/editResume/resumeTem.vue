<template>
  <div id="resume" style="background: #ece9e9;">
    <!--  介绍  -->
    <div style="background: #4cc9f0;width: 100vw;height: 300px;">
      <div style="font-size: 20px;font-weight: bold;width: 80%;margin: 0 auto">
        <p style="margin: 0;padding-top: 50px">
          <span style="color: red">注意:</span>
          简历制作刷新会遇见白屏现象，所以尽量避免刷新。除了简历配置页面数据其他数据均作了本地缓存，关闭后重新进入会保持原有数据，但是颜色等数据需要重新配置
        </p>
        <p>
          <span>以上问题会在近期修复，如有其他问题
            <a  target="_blank" href="http://bonianahao.com/index/proFeedback">请点击反馈</a>
          </span>
        </p>
        <p>
          项目已经在Github上免费开源，如有学习需要
          <a target="_blank" href="https://github.com/PasserAhao/ResumeEditor">请点击跳转</a>
          （点亮右上角Star支持作者）
        </p>
      </div>
    </div>

    <!--  模板选择  -->
    <div style="width: 80%;margin: 0 auto;min-height: calc(100vh - 300px)">
      <h3 style="margin: 0;padding-top: 15px">选择模板</h3>
      <div style="display: flex;flex-direction: row;justify-content: flex-start;flex-wrap: wrap">
        <!--   模板图片     -->
        <div v-for="(url,index) in imgUrl" :key="index" style="margin: 15px;position: relative">
          <div @click="router.push({path:`/resumeTem/${index+1}`})">
            <el-image :src="url" class="img"></el-image>
            <div class="img_top">
              <span style="color: white;">点击编辑</span>
            </div>
          </div>
        </div>
        <!--   模板图片结束     -->
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'resumeTem',
  setup() {
    const router = useRouter()
    const imgUrl = ref([
      require('../../assets/img/resume/resume1.jpg'),
      require('../../assets/img/resume/resume2.jpg'),
    ])
    return {
      imgUrl,router
    }
  }
})
</script>

<style scoped>
#resume .img {
  width: 13vw;
  height: 40vh;
}

#resume .img_top {
  position: absolute;
  width: 13vw;
  height: 40vh;
  top: 0;
  background: #999aaa;
  opacity: 0;
  cursor: pointer;
  text-align: center;
  line-height: 40vh;
}

#resume .img_top:hover{
  opacity: 0.8;
}
</style>
