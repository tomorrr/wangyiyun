<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-26 15:16:05
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-26 21:17:10
 * @FilePath: \wangyiyun\wangyicloud-app\src\components\home\SwiperTop.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in state.images" :key="image">
    <img :src="image.pic" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
//封装axios记得！！！
import axios from 'axios'
import { reactive,onMounted } from 'vue';
import { getBanner } from '../../request/api/home';
export default {
    setup() {
    const state = reactive({
      images:[
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]});
   onMounted(async()=>{
    // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
    //   console.log(res);
    //   state.images=res.data.banners
    //   console.log(state.images);
    // })
    let res = await getBanner();
    state.images =res.data.banners;
    console.log(res);
    getBanner()
   })
    return { state };
  },
};
</script>

<style scoped>
.van-swipe{
    width: 100%;
    height: 3rem;
}
.van-swipe-item{
    padding: 0 0.2rem;
}
.van-swipe-item img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
}
.van-swipe__indicator--active{
    background-color: rgb(219,130,130);
}
</style>
