<template>
  <div class="new-Todos">
    <div class="container1">
      <input
        class="checkBox"
        type="checkbox"
        v-model="todo.checkbox"
        v-on:input="updateTodo('checkbox', !todo.checkbox)"
      />
      <input
        class="tasks"
        type="text"
        v-bind:class="{ done: todo.checkbox }"
        v-model="todo.title"
        v-on:click="toggle()"
        v-on:input="updateTodo('title', todo.title)"
      />
    </div>
    <div class="dropdown-menu" v-show="showdropdown">
      <textarea
        class="textarea"
        v-model="todo.notes"
        placeholder="notes"
        v-on:input="updateTodo('notes', todo.notes)"
      ></textarea>
      <div class="flex-container">
        <div class="dateDiv">
          <label for="dateInput">Due Date:</label>
          <input
            type="date"
            id="dateInput"
            v-model="todo.dueDate"
            v-on:input="updateTodo('dueDate', todo.dueDate)"
          />
        </div>
        <div class="priorDiv">
          <label for="prior">Priority:</label>
          <select class="prior" v-model="todo.priority">
            <option
              v-for="priority in options"
              v-bind:key="priority"
              v-on:click="updateTodo('priority', todo.priority)"
            >
              {{ priority }}
            </option>
          </select>
        </div>
        <button class="destroy" v-on:click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reformTodo, removeTodo } from "../Fetchrequest.js"
export default {
  name: "createTodo",
  props: ["items"],
  emits: ["reRender"],
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
    async updateTodo(property, value) {
      await reformTodo(this.todo.id, property, value)
    },
    async deleteTodo(id) {
      await removeTodo(id)
      this.$emit("reRender")
    },
  },
}
</script>

<style scoped>
.new-Todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px;
}
</style>
<!-- bem covention to css -->
<!-- learn em and rem -->
