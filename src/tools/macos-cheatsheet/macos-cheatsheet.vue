<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
import Memo from './macos-cheatsheet.content.md';

const themeVars = useThemeVars();
</script>

<template>
  <div>
    <Memo />
  </div>
</template>

<style lang="less" scoped>
::v-deep(pre) {
  margin: 0;
  padding: 15px 22px;
  background-color: v-bind('themeVars.cardColor');
  border-radius: 4px;
  overflow: auto;
}
::v-deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
}
::v-deep(table), ::v-deep(td), ::v-deep(th) {
  border: 1px solid v-bind('themeVars.textColor1');
  padding: 8px;
}
::v-deep(th) {
  text-align: left;
  background-color: v-bind('themeVars.cardColor');
}
</style>
