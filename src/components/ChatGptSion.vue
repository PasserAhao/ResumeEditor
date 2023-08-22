<template>
  <DropdownToolbar title="emoji" :visible="visible" :onChange="onChange">
    <template #trigger>
      <svg class="md-editor-icon" aria-hidden="true">
        <use xlink:href="#icon-emoji"></use>
      </svg>
    </template>
  </DropdownToolbar>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { DropdownToolbar } from 'md-editor-v3';
import type {Insert} from 'md-editor-v3'

const emojis = ['😀', '😃'];

const props = defineProps({
  /**
   * `insert`方法会由编辑器自动向组件的组件注入。
   */
  insert: {
    type: Function as PropType<Insert>,
    default: () => {
      //
    }
  }
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
      targetValue: emoji,
      select: true,
      deviationStart: 0,
      deviationEnd: 0
    };
  });
};
</script>
