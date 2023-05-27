<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-25 21:25:46
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-27 17:11:32
 * @FilePath: \wangyiyun\wangyicloud-app\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <TopNav></TopNav>
    <SwiperTop></SwiperTop>
    <iconList></iconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import iconList from "../components/home/iconList.vue";
import MusicList from "../components/home/MusicList.vue";
export default {
  name: "Home",
  components: {
    TopNav,
    SwiperTop,
    iconList,
    MusicList,
  },
};
</script>

<style>
.icon {
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
a {
  color: black;
}
</style>
