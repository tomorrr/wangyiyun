<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-28 19:38:30
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-28 21:11:40
 * @FilePath: \wangyiyun\wangyicloud-app\src\components\item\ItemMusicTop.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="ItemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="backImg">
    <div class="ItemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xitongfanhui"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="ItemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  setup(props) {
    console.log(props);
  },
  props: ["playlist"],
};
</script>

<style>
.ItemMusicTop{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: .2rem; */
  position: relative;
}
.ItemLeft,.ItemRight{
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
margin: 0 10px;
}
.ItemLeft>span{
font-size: .4rem;
color:white
}
.ItemRight>.icon{
  fill: #fff;
}
.backImg{
  width: 100%;
  height: 400px;
  position: fixed;
  z-index: -1;
  filter: blur(30px);
}
</style>
