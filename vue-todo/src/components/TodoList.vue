<template>
  <div class="todolist-container">
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.item" name="todo.item">
        <span v-on:click="toggleCompleted(todo.item)">
          <img v-show="!todo.completed" src="../assets/circle-icon.png" />
          <img v-show="todo.completed" src="../assets/check-circle-icon.png" />
        </span>
        {{ todo.item }}
        <span v-on:click="removeTodo(todo.item)">
          <img src="../assets/trash-icon.png" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// 🚌
import EventBus from "./common/EventBus";

export default {
  // 📦
  data: function() {
    return {
      todos: []
    };
  },
  // 🎮 🕹🕹🕹🕹
  methods: {
    removeTodo: function(targetTodo) {
      this.todos = this.todos.filter(todo => todo.item !== targetTodo);
      localStorage.removeItem(`todo-${targetTodo}`);
    },
    toggleCompleted: function(targetTodo) {
      this.todos = this.todos.map(todo =>
        todo.item === targetTodo
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      let todo = JSON.parse(localStorage.getItem(`todo-${targetTodo}`));
      localStorage.setItem(
        `todo-${targetTodo}`,
        JSON.stringify({
          ...todo,
          completed: !todo.completed
        })
      );
    },
    addTodo: function(newTodoItem) {
      const { item, completed } = newTodoItem;
      this.todos = [...this.todos, { item, completed }];
      localStorage.setItem(
        `todo-${newTodoItem.item}`,
        JSON.stringify(newTodoItem)
      );
    },
    allClear: function() {
      this.todos = [];
      localStorage.clear();
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    // 🚌 🛰
    EventBus.$on("addTodo", this.addTodo);
    EventBus.$on("removeTodo", this.removeTodo);
    EventBus.$on("toggleCompleted", this.toggleCompleted);
    EventBus.$on("allClear", this.allClear);
  }
};
</script>

<style>
.todolist-container {
  width: 100%;
}
ul {
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
}

li {
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 0 auto;
}

li > span {
  display: flex;
  align-items: center;
  margin: 0.5rem;
}
</style>
