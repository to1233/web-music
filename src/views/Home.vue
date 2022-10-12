<template>
  <div class="home">
    <!--轮播图-->
    <el-carousel class="swiper-container" type="card" height="20vw" :interval="4000">
      <el-carousel-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.picImg" />
      </el-carousel-item>
    </el-carousel>

    <!--热门歌单-->
    <PlayList class="play-list-container" title="歌单" path="song-sheet-detail" :playList="songList"></PlayList>
    <!--热门歌手-->
    <PlayList class="play-list-container" title="歌手" path="singer-detail" :playList="singerList"></PlayList>

  </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue';
import { swiperList } from "@/enums";
import PlayList from "@/components/PlayList.vue";
import {getSingerList, getSongList} from "@/api";
export default defineComponent({
  name: 'Home',
  components: {
    PlayList
  },
  setup() {
    // 歌曲id
    const songList = ref([]); // 歌单列表
    // 歌手id
    const singerList = ref([]); // 歌手列表

    getSongList({pageSize: 10, pageNum: 1}).then(res => {
      songList.value = res.records;
    })

    getSingerList({pageSize: 10, pageNum: 1}).then(res => {
      singerList.value = res.records;
    })

    // 歌单id
    return {
      swiperList,
      singerList,
      songList,
  }
  }
});
</script>
