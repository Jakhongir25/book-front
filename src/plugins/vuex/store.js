import {createStore} from "vuex";
import user from "@/plugins/vuex/user";
import book from "@/plugins/vuex/book";
import category from "@/plugins/vuex/category";
import mediaObject from "@/plugins/vuex/mediaObject"

export default createStore({
    modules: {
        user, book, category, mediaObject
    }
})