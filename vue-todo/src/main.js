import Vue from "vue";
import App from "./App.vue";
import { createPinia, PiniaVuePlugin, defineStore } from "pinia";
import mutations, { storage } from "./store/mutations";

Vue.config.productionTip = false;
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

export const useStore = defineStore("todoStore", {
  data: function () {
    return {
      todos: storage.getTodos(),
    };
  },
  actions: mutations,
  getters: {
    storedTodos: function (state) {
      return state.todos;
    },
  },
});

export const useTodoStore = useStore(pinia);

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
