<template>
    <div>
        <PlayList :playList="singerList" path="singer-detail"></PlayList>
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
    import { defineComponent} from "vue"
    import PlayList from "@/components/PlayList.vue";
    import {getSingerList} from "@/api";

    export default  defineComponent({
        data() {
            return {
                // 查询参数
                queryParams: {
                    pageNum: 1,
                    pageSize: 10,
                },
                // 总条数
                total: 0,
                singerList: []
            }
        },
        created() {
            this.getPageSingerList();
        },
        methods: {
            // 获取当前页
            handleCurrentChange(val) {
                this.queryParams.pageNum = val;
                this.getPageSingerList();
            },
            // 分页获取歌手数据
            getPageSingerList() {
                getSingerList(this.queryParams).then(res => {
                    this.singerList =  res.records;
                    this.total = res.total;
                })
            }
        },
        components :{
            PlayList,
        }
    })

</script>
