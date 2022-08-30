<template>
  <div id="app">
    <TodoHeader />
    <TodoInput v-on:addTodo="addTodo" />
    <TodoList
      v-bind:todos="todos"
      v-on:removeTodo="removeTodo"
      v-on:toggleCompleted="toggleCompleted"
    />
    <TodoFooter v-on:allClear="allClear" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      id: 0
    };
  },
  methods: {
    addTodo(newTodoItem) {
      const { item, completed } = newTodoItem;
      this.todos = [...this.todos, { item, completed }];
      localStorage.setItem(
        `todo-${newTodoItem.item}`,
        JSON.stringify(newTodoItem)
      );
    },
    removeTodo(targetTodo) {
      this.todos = this.todos.filter(todo => todo.item !== targetTodo);
      localStorage.removeItem(`todo-${targetTodo}`);
    },
    toggleCompleted(targetTodo) {
      this.todos = this.todos.map(todo =>
        todo.item === targetTodo
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    allClear() {
      this.todos = [];
      localStorage.clear();
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created: function() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

  width: 300px;
  margin: 0 auto;
}
</style>