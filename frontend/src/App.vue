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
    @Rerender="fetchTodos"
  />
</template>

<script>
import createTodo from "./components/newtodo.vue"
// let id = 0;
export default {
  name: "App",
  data() {
    return {
      todosArray: JSON.parse(localStorage.getItem("todosArray")) || [],
      id: 0,
      newTodo: "",
      priority: "",
    }
  },

  methods: {
    fetchTodos() {
      this.todosArray = JSON.parse(localStorage.getItem("todosArray"))
    },
    addTodo() {
      if (this.newTodo === "") {
        console.log(Math.max(this.todosArray.length))
        alert("please enter the task")
        return
      }

      this.todosArray.push({
        id:
          this.todosArray.length === 0
            ? 0
            : Math.max(...this.todosArray.map((e) => e.id)) + 1,
        text: this.newTodo,
        checkbox: false,
        notes: "",
        dateInput: "",
        priority: "",
      })
      localStorage.setItem("todosArray", JSON.stringify(this.todosArray))
      this.newTodo = ""
    },
  },
  components: {
    createTodo,
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
  height: 40px;
  text-align: center;
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
  margin-top: 5px;
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
  border-style: ridge;
  background-color: rgb(85, 255, 198);
  margin-left: 620px;
  margin-right: 620px;
}
.textarea {
  width: 510px;
  height: 170px;
  resize: none;
}
#dateInput {
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
