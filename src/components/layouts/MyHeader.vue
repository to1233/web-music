<template>
    <div class="my-header">
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    :ellipsis="false"
                    @select="handleSelect"
            >
                <el-menu-item  index="/" >首页</el-menu-item>
                <el-menu-item  index="/song-sheet">歌单</el-menu-item>
                <el-menu-item  index="/singer">歌手</el-menu-item>
                <!-- 左右分割线-->
                <div class="flex-grow" />
                <el-sub-menu index="3">
                    <template #title>Workspace</template>
                    <el-menu-item index="3-1">item one</el-menu-item>
                    <el-menu-item index="3-2">item two</el-menu-item>
                    <el-menu-item index="3-3">item three</el-menu-item>
                    <el-sub-menu index="3-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
    </div>
</template>

<script lang="ts">
    import { defineComponent,ref,getCurrentInstance } from 'vue';
    export default defineComponent({
        name: 'MyHeader',
        components: {

        },
        setup() {
            const activeIndex = ref('1');
            const { proxy } = getCurrentInstance() as any;
            const handleSelect = (index: string, path: string) => {
                proxy.$router.push({ path: index, query: {}});
            }
            return {
                activeIndex,
                handleSelect
            }
        }

    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .flex-grow {
        flex-grow: 1;
    }

    /**
      顶部导航栏样式
     */
    .my-header{
        position: fixed;
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin: 0;
        background-color: #fefefe;
        box-shadow: 0 0 10px rgb(0 0 0 / 40%);
        box-sizing: border-box;
        z-index: 100;
        /*display: flex;*/
        white-space: nowrap;
        flex-wrap: nowrap;
    }
</style>
