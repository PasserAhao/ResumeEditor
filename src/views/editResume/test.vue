<template>
  <div style="width: 80vw;margin:50px auto">
    <MdEditor v-model="text.text" :toolbars="tooBars">
      <template #defToolbars>
        <ChatGptSion/>
      </template>
    </MdEditor>
    <Entertainment></Entertainment>
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {MdEditor} from 'md-editor-v3';
import ChatGptSion from '../../components/ChatGptSion.vue'
import {Entertainment} from '@icon-park/vue-next';
export default defineComponent({
  name: "TestDemo",
  components: {MdEditor, Entertainment,
    ChatGptSion
  },
  props: {},
  setup() {
    const text = reactive({
      text:"asd"
    })
    const tooBars = reactive([
      'bold',
      'title',
      'sub',
      'sup',
      'unorderedList',
      'task',
      'task',
      0,
    ])
    return {
      tooBars,text
    }
  }
})
</script>

<style scoped>

</style>
