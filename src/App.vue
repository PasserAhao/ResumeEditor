<template>
  <router-view/>
</template>

<style lang="less">
body {
  overflow-y: auto;
  margin: 0;
}

::-webkit-scrollbar {
  width: 0;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: #b2c7ad;
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(70, 64, 64, 0.3);
}

.el-tabs__item {
  font-size: 20px !important;
}
</style>
