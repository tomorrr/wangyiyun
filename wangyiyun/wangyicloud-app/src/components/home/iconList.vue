<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-27 14:08:12
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-27 14:38:18
 * @FilePath: \wangyiyun\wangyicloud-app\src\components\home\iconList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon_zan"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fm"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.iconList {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.iconItem {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconItem>.icon{
    width: 1rem;
    height: 1rem;
}
</style>
