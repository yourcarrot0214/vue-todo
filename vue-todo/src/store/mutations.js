export const storage = {
  getTodos: function () {
    let todos = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return todos;
  },
  createTodo: (newTodoItem) =>
    localStorage.setItem(
      `todo-${newTodoItem.item}`,
      JSON.stringify(newTodoItem)
    ),
  removeTodo: (targetTodo) => localStorage.removeItem(`todo-${targetTodo}`),
  toggleComplted: (targetTodo) => {
    let currentTodo = JSON.parse(localStorage.getItem(`todo-${targetTodo}`));
    localStorage.setItem(
      `todo-${targetTodo}`,
      JSON.stringify({
        item: targetTodo,
        completed: !currentTodo.completed,
      })
    );
  },
  clearAll: () => localStorage.clear(),
};

const mutations = {
  addTodo: function (state, newTodoItem) {
    const { item, completed } = newTodoItem;
    state.todos = [...state.todos, { item, completed }];
    storage.createTodo({ item, completed });
  },
  removeTodo: function (state, targetTodo) {
    state.todos = state.todos.filter((todo) => todo.item !== targetTodo);
    storage.removeTodo(targetTodo);
  },
  toggleCompleted: function (state, targetTodo) {
    state.todos = state.todos.map((todo) =>
      todo.item === targetTodo ? { ...todo, completed: !todo.completed } : todo
    );
    storage.toggleComplted(targetTodo);
  },
  clearAll: function (state) {
    state.todos = [];
    storage.clearAll();
  },
};

export default mutations;
