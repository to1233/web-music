<template>
    <div class="home">

        <!-- 歌单列表--->
        <PlayList :playList="songSheetList" path="song-sheet-detail"></PlayList>

        <el-pagination
                class="pagination"
                background
                layout="total, prev, pager, next"
                :current-page="queryParams.pageNum"
                :page-size="queryParams.pageSize"
                :total="total"
                @current-change="handleCurrentChange"
        >
        </el-pagination>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { getSongList } from '@/api';
    import PlayList from "@/components/PlayList.vue";
    export default defineComponent({
        name: 'Home',
        components: {
            PlayList
        },

        data() {
            return {
                // 总条数
                total: 0,
                songSheetList: [],
                // 查询参数
                queryParams: {
                    pageNum: 1,
                    pageSize: 10,
                }
            }
        },
        created() {
            this.getPageSongSheet();
        },
        methods: {
            // 获取当前页
             handleCurrentChange(val) {
                 this.queryParams.pageNum = val;
                 this.getPageSongSheet();
            },
            // 分页获取歌单数据
            getPageSongSheet() {
                getSongList(this.queryParams).then(res => {
                   this.songSheetList =  res.records;
                   this.total = res.total;
               })
            }
        }
    });
</script>
