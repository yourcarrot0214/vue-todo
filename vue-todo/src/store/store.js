import Vue from "vue";
import Vuex from "vuex";

// vuex 속성 모듈
import mutations, { storage } from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: storage.getTodos(),
  },
  getters: {
    storedTodos: function (state) {
      return state.todos;
    },
  },
  mutations,
});
