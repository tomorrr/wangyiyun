<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-24 16:16:32
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-27 17:10:55
 * @FilePath: \wangyiyun\wangyicloud-app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 引入通用css icon图标库symbol */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
a{
  color: black;
}
</style>
