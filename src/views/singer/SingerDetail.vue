<template>
  <el-container>
    <el-aside class="album-slide">
      <el-image class="singer-img" fit="contain" :src="attachImageUrl(songDetails.pic)" />
      <div class="album-info">
        <h2>基本资料</h2>
        <ul>
          <li v-if="songDetails.sex !== 2">性别：{{ songDetails.sex == 0 ? '女' : '男' }}</li>
          <li>生日：{{ getBirth(songDetails.birth) }}</li>
          <li>故乡：{{ songDetails.location }}</li>
        </ul>
      </div>
    </el-aside>
    <el-main class="album-main">
      <h1>{{ songDetails.name }}</h1>
      <p>{{ songDetails.introduction }}</p>
      <SongList :songList="currentSongList"></SongList>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted,getCurrentInstance } from "vue";
import { useStore } from "vuex";
import SongList from "@/views/song/SongList.vue";
import { getBirth } from "@/utils/common";
import { getSongOfSingerId,attachImageUrl,getSingerInfoById } from "@/api";

export default defineComponent({
  components: {
    SongList,
  },
  setup() {
    const store = useStore();
    const { proxy } =getCurrentInstance();
    const currentSongList = ref([]);
    const singerId = ref('');
    const songDetails = ref({id:'1'});

    onMounted(async () => {
      try {

        singerId.value = proxy.$route.query["itemId"] as string;
        getSingerInfoById(singerId.value).then(resizeBy => {
            songDetails.value = resizeBy;
          getSongOfSingerId(songDetails.value.id).then(resizeBy => {
            currentSongList.value = resizeBy;
          })
        })


      } catch (error) {
        console.error(error);
      }
    });

    return {
      songDetails,
      currentSongList,
      attachImageUrl: attachImageUrl,
      getBirth,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.album-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  .singer-img {
    height: 250px;
    width: 250px;
    border-radius: 10%;
  }

  .album-info {
    width: 60%;
    padding-top: 2rem;
    li {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
  }
}

.album-main {
  p {
    color: rgba(0, 0, 0, 0.5);
    margin: 10px 0 20px 0px;
  }
}

@media screen and (min-width: $sm) {
  .album-slide {
    position: fixed;
    width: 400px;
  }
  .album-main {
    min-width: 600px;
    padding-right: 10vw;
    margin-left: 400px;
  }
}

@media screen and (max-width: $sm) {
  .album-slide {
    display: none;
  }
}
</style>
