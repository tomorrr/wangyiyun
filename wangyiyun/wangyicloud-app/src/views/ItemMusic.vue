<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-27 16:48:54
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-28 21:02:45
 * @FilePath: \wangyiyun\wangyicloud-app\src\views\ItemMusic.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: wangbyyds 1362872827@qq.com
 * @Date: 2023-05-27 16:48:54
 * @LastEditors: wangbyyds 1362872827@qq.com
 * @LastEditTime: 2023-05-28 20:37:46
 * @FilePath: \wangyiyun\wangyicloud-app\src\views\ItemMusic.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="ItemMusic">
    <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList } from "../request/api/item.js";
import ItemMusicTop from "../components/item/ItemMusicTop.vue";
export default {
  setup() {
    const state = reactive({
      playlist: {},
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      console.log(id);
      let res = await getMusicItemList(id);
      console.log(res);
      state.playlist = res.data.playlist;
    });
    return { state };
  },
  components: {
    ItemMusicTop,
  },
};
</script>

<style></style>
