<template>
  <div style="margin-bottom: 10px;position: relative">
    <el-image style="background: #f5f7fa;margin: 25px 0 0 55px" :src="imgUrl" :style="{width:width+'px',height:height+'px'}">
      <template #error>
        <pic style="margin: 60px 50px" theme="outline" size="25" fill="#b1aaaa"/>
      </template>
    </el-image>
    <div @click="openFile" class="hidden_img" :style="{width:width+'px',height:height+'px'}">
      <camera style="margin-top: 60px" theme="outline" size="25" fill="#ffffff"/>
    </div>
  </div>
  <input v-show="false" ref="imgInput" type="file" accept="image/*" @change="getImageUrl"
         style="opacity: 0"/>
</template>

<script>
import {defineComponent} from "vue";
import {AvatarHandle} from '@/hooks/UserInfoHandle'
import {Camera, Pic,} from '@icon-park/vue-next';
export default defineComponent({
  name: "AvatarTem",
  components:{Camera,  Pic},
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
  setup() {
    return {
      ...AvatarHandle()
    }
  }
})
</script>

<style scoped>
.hidden_img {
  position: absolute;
  top: 25px;
  left: 55px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.hidden_img:hover {
  opacity: 0.8;
  background: #CDD0D6;
  cursor: pointer;
}
</style>
