import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: () => import("@/views/error/404.vue"),
  },
  {
    path: "/",
    name: "my-container",
    component: () =>import("@/views/MyContainer.vue"),
    children : [
      {
        path: '/',
        name: 'home',
        component: () => import("@/views/Home.vue"),
      },
      {
        path: '/song-sheet',
        name: 'song-sheet',
        component: () => import("@/views/song-sheet/SongSheet.vue"),
      },
      {
        path: "/song-sheet-detail",
        name: "song-sheet-detail",
        component: () => import("@/views/song-sheet/SongSheetDetail.vue"),
      },
      {
        path: "/singer",
        name: "singer",
        component: () => import("@/views/singer/Singer.vue"),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
