<template>
  <div class="todolist-container">
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.item" name="todo.item">
        <span v-on:click="toggleCompleted(todo.item)">
          <img v-show="!todo.completed" src="../assets/circle-icon.png" />
          <img v-show="todo.completed" src="../assets/check-circle-icon.png" />
        </span>
        {{todo.item}}
        <span v-on:click="removeTodo(todo.item)">
          <img src="../assets/trash-icon.png" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  methods: {
    removeTodo: function(todo) {
      this.$emit("removeTodo", todo);
    },
    toggleCompleted: function(todo) {
      this.$emit("toggleCompleted", todo);
    }
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