<template>
  <div class="new-Todos">
    <input class="checkBox" type="checkbox" v-model="todo.checkbox" />
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
      ></textarea>
      <label for="dateInput">Due Date:</label>
      <input type="date" id="dateInput" v-model="todo.dateInput" />
      <label for="prior">Priority:</label>
      <select id="prior" v-model="todo.priority">
        <option v-for="priority in options" v-bind:key="priority">
          {{ priority }}
        </option>
      </select>
      <button class="destroy">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "createTodo",
    props: ["items"],
    //   emits:['response'],
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
      created() {
        this.$emit("response", "this is child");
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
