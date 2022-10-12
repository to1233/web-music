<template>
    <div class="play-list">
        <div class="play-title" v-if="title"> {{title}}</div>
        <ul class="play-body">
            <li class="card-frame" v-for="(item, index) in playList" :key="index">
               <div class="card" @click="goAblum(item)">
                   <el-image class="card-img" fit="contain" :src="imageUrl(item.pic)" />
                   <div class="mask" @click="goAblum(item)">

                   </div>
               </div>
                <p class="card-name">{{ item.name || item.title}}</p>
            </li>
        </ul>
    </div>

</template>

<script lang="ts">
    import { defineComponent,getCurrentInstance,toRefs } from 'vue';
    import { attachImageUrl} from "@/api";

    export default  defineComponent({
        props: {
            title: String,
            playList: Array,
            path: String,
        },
        setup(props) {
            const {proxy} = getCurrentInstance();
            const {path} = toRefs(props);

            function goAblum(item) {
                // 这里歌手和歌单公用
                proxy.$router.push({path: `/${path.value}`,query: {itemId: item.id}});
            }

            return {
                goAblum,
            };
        },
        methods: {
            imageUrl(pic) {
                return   attachImageUrl(pic);
            }
        }

    });

</script>


<style lang="scss" scoped>

    @import "@/assets/css/var.scss";
    @import "@/assets/css/global.scss";

    .play-list {
        padding: 0 1rem;

        .play-title {
            height: 60px;
            line-height: 60px;
            font-size: 28px;
            font-weight: 500;
            text-align: center;
            color: $color-black;
            box-sizing: border-box;
        }

        .play-body {
            @include layout(flex-start, stretch, row, wrap);
        }
    }

    .card-frame {
        .card {
            position: relative;
            height: 0;
            padding-bottom: 100%;
            overflow: hidden;
            border-radius: 5px;

            .card-img {
                width: 100%;
                transition: all 0.4s ease;
            }
        }

        .card-name {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            margin: 0.5rem 0;
        }

        &:hover .card-img {
            transform: scale(1.2);
        }
    }

    .mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 5px;
        background-color: rgba(52, 47, 41, 0.4);
        @include layout(center, center);
        transition: all 0.3s ease-in-out;
        opacity: 0;

        .mask-icon {
            @include icon(2em, rgba(240, 240, 240, 1));
        }

        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    @media screen and (min-width: $sm) {
        .card-frame {
            width: 18%;
            margin: 0.5rem 1%;
        }
    }

    @media screen and (max-width: $sm) {
        .card-frame {
            width: 46%;
            margin: 0.5rem 2%;
        }
    }
</style>
