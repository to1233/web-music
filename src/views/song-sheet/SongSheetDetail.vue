<template>
    <div>
        <el-container>
            <el-aside class="album-slide">
                <el-image class="album-img" fit="contain" :src="imageUrl(songDetails.pic)" />
                <h3 class="album-info">{{songDetails.title}}</h3>
            </el-aside>

            <el-main>
                <h1>简介</h1>
                <p> {{songDetails.introduction}}</p>

                <!-- 评分-->
                <div class="">
                    <div>
                        <h3>歌单评分</h3>
                        <el-rate v-model="rank" allow-half disabled></el-rate>
                    </div>
                    <span>
                        {{rank * 2}}
                    </span>
                </div>
                <!-- 歌曲-->
                <SongList :songList="currentSongList"></SongList>
            </el-main>

        </el-container>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import {mapGetters} from "vuex";
    import SongList from "@/views/song/SongList.vue";
    import {findSongListBySheetId,findRankBySheetId,findSheetInfoById,attachImageUrl } from "@/api";
    export default defineComponent({
        created() {
            this.sheetId = this.$route.query["itemId"] as string;
            console.log(this.sheetId);

            findSheetInfoById(this.sheetId).then(res =>{
                this.songDetails = res;

            });

            findSongListBySheetId(this.sheetId).then(res => {
                this.currentSongList = res;
                console.log( this.currentSongList);
            });

            findRankBySheetId(this.sheetId).then(res => {
                this.rank = res /2 ;
            })
        },
        components: {
            SongList
        },
        methods :{
            imageUrl(pic) {
              return   attachImageUrl(pic);
            }
        },
        data() {
            return {
                currentSongList: [], // 当前歌单的音乐
                sheetId: "", // 歌单ID,
                score: 0, //
                rank: 0,
                disabledRank: false,
                songDetails: {},
            }
        },
        computed: {
            ...mapGetters([
                "userId"
            ])
        },
    })


</script>


<style lang="scss" scoped>
    @import "@/assets/css/var.scss";

    .album-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;

        .album-img {
            height: 250px;
            width: 250px;
            border-radius: 10%;
        }

        .album-info {
            width: 70%;
            padding-top: 2rem;
        }
    }

    .album-main {
        h1 {
            font-size: 22px;
        }

        p {
            color: rgba(0, 0, 0, 0.5);
            margin: 10px 0 20px 0px;
        }
        /*歌单打分*/
        .album-score {
            display: flex;
            align-items: center;
            margin: 1vw;

            h3 {
                margin: 10px 0;
            }
            span {
                font-size: 60px;
            }
            & > div:last-child {
                margin-left: 10%;
            }
        }

        .album-body {
            margin: 20px 0 20px 0px;
        }
    }

    @media screen and (min-width: $sm) {
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
