<template>
  <!-- 头部 -->
  <div style="height: 60px;width: 100vw;background: #4cc9f0" id="EditResume">
    <div style="width: 90%;margin: 0 auto;overflow: hidden;font-size: 22px;font-weight: bold">
      <span @click="router.back()" style="cursor: pointer;float: left;line-height: 60px;">&lt; 首页</span>
    </div>
  </div>

  <router-view/>

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
      router,data
    }
  }
})
</script>

<style scoped>

</style>
