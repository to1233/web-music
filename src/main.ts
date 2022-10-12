import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import "./assets/icons/index";
import "./assets/css/index.scss";

declare  module "@vue/runtime-core" {
    interface State {
        count: number;
    }

    interface  ComponentCustomProperties {
        $store: Store<State>;
    }
}


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
