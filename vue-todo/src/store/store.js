// import { defineStore } from "pinia";
// import { storage } from "./mutations";

// export const useTodoStore = defineStore("todoStore", {
//   state: function () {
//     return {
//       todos: storage.getTodos(),
//     };
//   },
//   actions: {
//     addTodo: function (state, newTodoItem) {
//       const { item, completed } = newTodoItem;
//       state.todos = [...state.todos, { item, completed }];
//       storage.createTodo({ item, completed });
//     },
//     removeTodo: function (state, targetTodo) {
//       state.todos = state.todos.filter((todo) => todo.item !== targetTodo);
//       storage.removeTodo(targetTodo);
//     },
//     toggleCompleted: function (state, targetTodo) {
//       state.todos = state.todos.map((todo) =>
//         todo.item === targetTodo
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//       storage.toggleComplted(targetTodo);
//     },
//     clearAll: function (state) {
//       state.todos = [];
//       storage.clearAll();
//     },
//   },
//   getters: {
//     storedTodos: function (state) {
//       return state.todos;
//     },
//   },
// });
