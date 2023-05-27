<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swiper"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="item in state.musicList"
          :key="item"
          class="my-swiper"
        >
        <router-link :to="{path:'/ItemMusic',query:{id:item.id}}">
          <img :src="item.picUrl" alt=""  class="swiper-img">
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gl-play-copy"></use>
            </svg>
            {{ changeNum(item.playCount) }}
          </span>
          <span class="name">{{ item.name }}</span>
        </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { getMusicList } from "../../request/api/home";
export default {
  methods: {
    changeNum: function (num) {
      if (num >= 100000000) {
        return (num / 10000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  setup() {
    const state = reactive({
      musicList: [],
    });
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res);
      state.musicList = res.data.result;
      getMusicList();
      console.log(state.musicList);
    });
    return { state };
  },
};
</script>

<style scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
}
.musicTop {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.title {
  font-size: 0.4rem;
  font-weight: 900;
}
.more {
  border: 1px solid;
  text-align: center;
  line-height: 0.6rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
}

.musicContent {
  width: 100%;
  height: 4rem;
}
.my-swiper {
  height: 100%;
  margin-right: .2rem;
}
.swiper-img {
  width: 100%;
  height: 70%;
  position: relative;
  border-radius: 0.2rem;
}
.playCount {
  position: absolute;
  right: 0.1rem;
  font-size: 12px;
  color: white;
}
.playCount > .icon {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
