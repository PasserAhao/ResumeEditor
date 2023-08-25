<template>
  <DropdownToolbar title="emoji" :visible="visible" :onChange="onChange">
    <template #overlay>
      <div >
        <ul class="emoji-container">
          <li class="emojis" v-for="(emoji, index) of emojis" :key="`emoji-${Index}`" @click="handler(emoji)" v-text="emoji"/>
        </ul>
      </div>
    </template>
    <template #trigger>
      <svg t="1692984290435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1503" width="18" height="18"><path d="M512.1 63.9C265 63.9 64 265 64 512c0 247.1 201 448.1 448.1 448.1 247.1 0 448.1-201 448.1-448.1 0-247-201.1-448.1-448.1-448.1z m0 800.5c-194.3 0-352.4-158.1-352.4-352.4 0-194.3 158.1-352.4 352.4-352.4 194.3 0 352.4 158.1 352.4 352.4 0 194.3-158.1 352.4-352.4 352.4zM404.9 471.9c36.7 0 66.4-29.7 66.4-66.4s-29.7-66.4-66.4-66.4-66.4 29.7-66.4 66.4c0.1 36.7 29.8 66.4 66.4 66.4z m214.3 0c36.7 0 66.4-29.7 66.4-66.4s-29.7-66.4-66.4-66.4-66.4 29.7-66.4 66.4c0.1 36.7 29.8 66.4 66.4 66.4z m80.5 78.4c-25.4-7.9-52 6.4-59.8 31.6-17.4 56.4-68.9 94.3-128 94.3-58.7 0-110-37.6-127.7-93.5-7.9-25.2-35-39.2-60-31.1-25.2 8-39.1 34.9-31.2 60.1 30.4 95.9 118.4 160.2 218.9 160.2 101.4 0 189.6-65 219.4-161.8 7.8-25.2-6.4-52-31.6-59.8z" fill="#707070" p-id="1504"></path></svg>
    </template>
  </DropdownToolbar>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { DropdownToolbar } from "md-editor-v3";
import type { Insert } from "md-editor-v3";
import { emojis } from './data';

const props = defineProps({
  /**
   * `insert`方法会由编辑器自动向组件的组件注入。
   */
  insert: {
    type: Function as PropType<Insert>,
    default: () => {
      //
    },
  },
});

const visible = ref(false);

const onChange = () => {
  visible.value = !visible.value;
};

const handler = (emoji: any) => {
  props.insert(() => {
    /**
     * @return targetValue    待插入内容
     * @return select         插入后是否自动选中内容
     * @return deviationStart 插入后选中内容鼠标开始位置
     * @return deviationEnd   插入后选中内容鼠标结束位置
     */
    return {
      targetValue: emoji ,
      select: true,
      deviationStart: 0,
      deviationEnd: 0,
    };
  });
};
</script>
<style scoped>
.emoji-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.emojis {
  list-style-type: none;
}
.emojis:hover {
  cursor: pointer;
}
</style>
