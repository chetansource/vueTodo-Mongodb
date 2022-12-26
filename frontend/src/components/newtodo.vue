<template>
  <!-- have a update button -->
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
      v-model="todo.title"
      v-on:click="toggle()"
    />
    <div class="dropdown-menu" v-show="showdropdown">
      <textarea
        class="textarea"
        v-model="todo.notes"
        placeholder="notes"
        v-on:click="updateTodo('notes')"
      ></textarea>
      <label for="dateInput">Due Date:</label>
      <input
        type="date"
        id="dateInput"
        v-model="todo.dueDate"
        v-on:click="updateTodo('dueDate')"
      />
      <label for="prior">Priority:</label>
      <select class="prior" v-model="todo.priority">
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
import { reformTodo } from "../Fetchrequest.js"
export default {
  name: "createTodo",
  props: ["items"],
  emits: ["Rerender"],
  data() {
    return {
      todo: this.items,
      showdropdown: false,
      options: ["none", "low", "medium", "high"],
    }
  },
  methods: {
    toggle() {
      this.showdropdown = !this.showdropdown
      console.log(this.todo)
    },
    updateCheckbox() {
      const tempTodos = JSON.parse(localStorage.getItem("todosArray"))
      const tempTodo = tempTodos.find((obj) => obj.id === this.todo.id)
      tempTodo.checkbox = !this.todo.checkbox
      localStorage.setItem("todosArray", JSON.stringify(tempTodos))
    },
    updateTodo(property) {
      reformTodo(this.todo._id, property, this.todo.notes)
      // const tempTodos = JSON.parse(localStorage.getItem("todosArray"))
      // const tempTodo = tempTodos.find((obj) => obj.id === this.todo.id)
      // tempTodo.notes = this.todo.notes
      // tempTodo.dateInput = this.todo.dueDate
      // tempTodo.priority = this.todo.priority
      // localStorage.setItem("todosArray", JSON.stringify(tempTodos))
      // this.$emit("Rerender");
    },
    deleteTodo(id) {
      let tempTodos = JSON.parse(localStorage.getItem("todosArray"))
      tempTodos = tempTodos.filter((todo) => todo.id !== id)
      localStorage.setItem("todosArray", JSON.stringify(tempTodos))
      this.$emit("Rerender")
    },
  },
  // use spread operator and change the name, remove the id argu in delete todo, localstorage funcion
}
</script>

<style scoped>
.new-Todos {
  text-align: center;
  padding-right: 70px;
  margin-top: 5px;
  padding-left: 70px;
}
</style>
<!-- bem covention to css -->
<!-- learn em and rem -->
