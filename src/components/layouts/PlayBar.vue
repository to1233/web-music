<template>
    <div class="play-bar" :class="{show:!toggle}">
        <!-- 播放进度 -->

        <el-slider class="progress" v-model="nowTime" @change="changeTime" size="small"></el-slider>

        <div class="control-box">
            <div class="info-box">
                <!-- 歌曲图片-->
                <el-image class="song-bar-img" fit="contain" :src="imageUrl(songPic)" @click="goPlayerPage"/>
                <!-- 播放开始与结束时间 -->
                <div v-if="songId">
                    <div class="song-info">{{this.songTitle}}</div>
                    <div class="time-info"> {{startTime}} / {{endTime}}</div>
                </div>
            </div>

            <div class="song-ctr">

                <MyMusicIcon class="yin-play-show" :icon="[playStateIndex]" @click="changePlayState"></MyMusicIcon>
                <!-- 上一首-->
                <MyMusicIcon class="yin-play-show" :icon="iconList.SHANGYISHOU" @click="changePlayState"></MyMusicIcon>
                <!--播放-->
                <MyMusicIcon :icon="playButtonIcon" @click="togglePlay"></MyMusicIcon>
                <!--下一首-->
                <MyMusicIcon class="yin-play-show" :icon="iconList.XIAYISHOU" @click="nextSong"></MyMusicIcon>
            </div>

            <!-- 歌曲列表-->
            <div class="song-ctr song-edit">
                <MyMusicIcon :icon="iconList.LIEBIAO" @click="changeAside"></MyMusicIcon>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import MyMusicIcon from "@/components/layouts/MyMusicIcon.vue";
    import {defineComponent} from "vue";
    import {Icon} from "@/enums";
    import {mapGetters} from "vuex";
    import { formatSeconds } from "@/utils/common";
    import { attachImageUrl} from "@/api";
    export  default  defineComponent({
        components:{
            MyMusicIcon,
        },
        data() {
          return {
              startTime: "00:00",
              endTime: "00:00",
              nowTime: 0, // 进度条位置
              toggle: true,
              playButtonIcon: Icon.BOFANG,  // 触发播放的按钮图标所以是 三角 ,暂停为 双竖线
              volume: 50,
              playState: Icon.XUNHUAN,
              playStateList: [Icon.XUNHUAN, Icon.LUANXU],
              playSateIndex: 0,
              imageUrl(pic) {
                  return   attachImageUrl(pic);
              },
              iconList: {
                  ZHEDIE: Icon.ZHEDIE,
                  SHANGYISHOU: Icon.SHANGYISHOU,
                  XIAYISHOU: Icon.XIAYISHOU,
                  YINLIANG: Icon.YINLIANG,
                  JINGYIN: Icon.JINGYIN,
                  LIEBIAO: Icon.LIEBIAO,
                  dislike: Icon.Dislike,
                  like: Icon.Like,
              }
          }
        },
        computed: {
          ...mapGetters([
              "userId",
              "isPlay", // 播放状态
              "playBtnIcon", // 播放状态的图标
              "songId", // 音乐id
              "songUrl", // 音乐地址
              "songTitle", // 歌名
              "singerName", // 歌手名
              "songPic", // 歌曲图片
              "curTime", // 当前音乐的播放位置
              "duration", // 音乐时长
              "currentPlayList",
              "currentPlayIndex", // 当前歌曲在歌曲列表的位置
              "showAside", // 是否显示侧边栏
              "autoNext", // 用于触发自动播放下一首
          ])
        },
        watch:{
            curTime() {
                this.startTime = formatSeconds(this.curTime);
                this.endTime = formatSeconds(this.duration);
                // 移动进度条
                this.nowTime = (this.curTime / this.duration) * 100;
            },
       /*     // 自动播放下一首
            autoNext() {
                this.nextSong();
            }*/
            isPlay(value) {
                 this.playButtonIcon =  value ? Icon.ZANTING : Icon.BOFANG;
            },
        },
        methods: {
            // 播放与暂停
            togglePlay() {
                this.$store.commit("setIsPlay", this.isPlay ? false : true);
            },
            // 是否显示侧边栏
                changeAside() {
                this.$store.commit("setShowAside", !this.showAside);
                console.log(!this.showAside);
            },
            // 滑动时间
            changeTime() {
                this.$store.commit("setChangeTime", this.duration * (this.nowTime * 0.01));
            },

            goPlayerPage() {
                this.$router.push({path: '/lyric', query: {itemId: this.songId  }});
            }

        }


    })

</script>



<style lang="scss" scoped>
    @import "@/assets/css/play-bar.scss";
</style>
