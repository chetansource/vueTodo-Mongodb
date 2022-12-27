<template>
  <h2 id="h1">Todo List</h2>
  <div>
    <form id="todotitle" v-on:submit.prevent="addTodo">
      <input
        id="newinput"
        v-model="newTodo"
        type="text"
        placeholder="Create a new todo"
      />
      <button id="sub-btn">Add Todo</button>
    </form>
  </div>

  <createTodo
    class="newtodo"
    v-for="todo in todosArray"
    v-bind:key="todo.id"
    :items="todo"
    @Rerender="reRenderTodos"
  />
</template>

<script>
import createTodo from "./components/newtodo.vue"
import { fetchTodos, attachTodo } from "./Fetchrequest.js"
export default {
  name: "App",
  data() {
    return {
      todosArray: [],
      newTodo: "",
      priority: "",
    }
  },

  methods: {
    async reRenderTodos() {
      this.todosArray = await fetchTodos()
    },
    async addTodo() {
      if (this.newTodo === "") {
        alert("please enter the task")
        return
      }
      await attachTodo(this.newTodo)
      this.todosArray = await fetchTodos()
      this.newTodo = ""
    },
  },
  components: {
    createTodo,
  },
  //life cycle hook
  async created() {
    this.todosArray = await fetchTodos()
  },
}
</script>

<style>
#app {
  background-color: aquamarine;
}
#h1 {
  text-align: center;
  font-size: 35px;
}
#todotitle {
  display: flex;
  justify-content: center;
  height: 40px;
}
#newinput {
  width: 380px;
  font-size: 20px;
  height: 30px;
}
#sub-btn {
  width: 90px;
  font-size: 15px;
  font-weight: bold;
  height: 37px;
}
#sub-btn:hover {
  background-color: greenyellow;
}
.done {
  text-decoration: line-through;
}

.checkBox {
  height: 20px;
  width: 30px;
  margin-right: 1px;
}
.tasks {
  width: 450px;
  font-weight: bold;
  font-size: 16px;
  height: 33px;
  padding-left: 10px;
}
.dropdown-menu {
  display: flex;
  flex-direction: row;
  border-style: ridge;
  background-color: rgb(85, 255, 198);
}
.textarea {
  width: 510px;
  height: 170px;
  resize: none;
}
#dateInput {
  display: flex;
  margin-right: 20px;
}
.prior {
  margin-right: 20px;
  font-size: 12px;
}
.destroy {
  width: 80px;
  font-size: 16px;
}
.destroy:hover {
  background-color: rgb(251, 114, 114);
}
</style>
