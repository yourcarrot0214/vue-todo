<template>
  <div>
    <input type="text" v-model="newTodoItem.item" v-on:keyup.enter="addTodo" />
    <button type="button" v-on:click="addTodo">Add</button>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>⚠️ Modal</h3>
        </template>
        <template #body>
          <p>custom body</p>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import ModalComponent from "./common/ModalComponent";
import EventBus from "./common/EventBus";

export default {
  data: function() {
    return {
      newTodoItem: {
        completed: false,
        item: ""
      },
      showModal: false
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem.item === "") {
        this.showModal = true;
        return;
      } else {
        EventBus.$emit("addTodo", this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem.item = "";
    }
  },
  components: {
    Modal: ModalComponent
  }
};
</script>

<style>
input {
  border: none;
  border-bottom: 2px solid #bdbdbd;
}
input:focus {
  outline: none;
}
button {
  outline: none;
  border: none;
  background: none;
  font-weight: bold;
  color: #bdbdbd;
}
</style>
