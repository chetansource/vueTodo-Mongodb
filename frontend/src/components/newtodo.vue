<template>
  <!-- have a update button -->
  <div class="new-Todos">
    <input
      class="checkBox"
      type="checkbox"
      v-model="todo.checkbox"
      v-on:click="updateCheckbox('checkbox')"
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
        v-on:click="updateNote('notes')"
      ></textarea>
      <label for="dateInput">Due Date:</label>
      <input
        type="date"
        id="dateInput"
        v-model="todo.dueDate"
        v-on:click="updateDueDate('dueDate')"
      />
      <label for="prior">Priority:</label>
      <select class="prior" v-model="todo.priority">
        <option
          v-for="priority in options"
          v-bind:key="priority"
          v-on:click="updatePriority('priority')"
        >
          {{ priority }}
        </option>
      </select>
      <button class="destroy" v-on:click="deleteTodo(todo._id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { reformTodo, removeTodo } from "../Fetchrequest.js"
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
    },
    updateCheckbox(property) {
      reformTodo(this.todo._id, property, !this.todo.checkbox)
      // this.$emit("Rerender")
    },
    updateNote(property) {
      reformTodo(this.todo._id, property, this.todo.notes)
      // this.$emit("Rerender")
    },
    updateDueDate(property) {
      reformTodo(this.todo._id, property, this.todo.dueDate)
      // this.$emit("Rerender")
    },
    updatePriority(property) {
      reformTodo(this.todo._id, property, this.todo.priority)
      // this.$emit("Rerender")
    },
    deleteTodo(id) {
      removeTodo(id)
      this.$emit("Rerender")
    },
  },
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
