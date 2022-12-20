<template>
  <div class="new-Todos">
    <input
      class="checkBox"
      type="checkbox"
      v-model="todo.checkbox"
      v-on:click="updateCheckbox"
    />
    <input
      class="tasks"
      type="text"
      v-bind:class="{ done: todo.checkbox }"
      v-model="todo.text"
      v-on:click="toggle()"
    />
    <div class="dropdown-menu" v-show="showdropdown">
      <textarea
        class="textarea"
        v-model="todo.notes"
        placeholder="notes"
        v-on:click="updateTodo"
      ></textarea>
      <label for="dateInput">Due Date:</label>
      <input
        type="date"
        id="dateInput"
        v-model="todo.dateInput"
        v-on:click="updateTodo"
      />
      <label for="prior">Priority:</label>
      <select id="prior" v-model="todo.priority">
        <option
          v-for="priority in options"
          v-bind:key="priority"
          v-on:click="updateTodo"
        >
          {{ priority }}
        </option>
      </select>
      <button class="destroy" v-on:click="deleteTodo(todo.id)">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "createTodo",
    props: ["items"],
    emits: ["Rerender"],
    data() {
      return {
        todo: this.items,
        showdropdown: false,
        options: ["none", "low", "medium", "high"],
      };
    },
    methods: {
      toggle() {
        this.showdropdown = !this.showdropdown;
      },
      updateCheckbox() {
        const tempTodos = JSON.parse(localStorage.getItem("todosArray"));
        const tempTodo = tempTodos.find((obj) => obj.id === this.todo.id);
        tempTodo.checkbox = !this.todo.checkbox;
        localStorage.setItem("todosArray", JSON.stringify(tempTodos));
      },
      updateTodo() {
        const tempTodos = JSON.parse(localStorage.getItem("todosArray"));
        const tempTodo = tempTodos.find((obj) => obj.id === this.todo.id);
        tempTodo.notes = this.todo.notes;
        tempTodo.dateInput = this.todo.dateInput;
        tempTodo.priority = this.todo.priority;
        localStorage.setItem("todosArray", JSON.stringify(tempTodos));
        // this.$emit("Rerender");
      },
      deleteTodo(id) {
        let tempTodos = JSON.parse(localStorage.getItem("todosArray"));
        tempTodos = tempTodos.filter((todo) => todo.id !== id);
        localStorage.setItem("todosArray", JSON.stringify(tempTodos));
        this.$emit("Rerender");
      },
    },
  };
</script>

<style>
  .new-Todos {
    text-align: center;
    padding-right: 70px;
    margin-top: 5px;
  }
</style>
