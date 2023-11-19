import {createStore} from "vuex";
import userModule from "@/store/user-module";

export default createStore({
    modules: {
        userModule,
    }
})