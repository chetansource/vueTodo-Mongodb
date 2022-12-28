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
  <footer class="footer">
    <button v-on:click="deleteDone" class="delDone">DeleteDone</button>
    <button v-on:click="deleteAll" class="delAll">DeleteAll</button>
    <button v-on:click="showDone" class="targetComplete">ShowDone</button>
    <button v-on:click="showAll" class="displayAll">ShowAll</button>
  </footer>
</template>

<script>
import createTodo from "./components/newtodo.vue"
import {
  fetchTodos,
  attachTodo,
  removeDone,
  removeAll,
  showCompleted,
} from "./Fetchrequest.js"
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
    async deleteDone() {
      await removeDone()
      this.reRenderTodos()
    },
    async deleteAll() {
      await removeAll()
      this.reRenderTodos()
    },
    async showDone() {
      this.todosArray = await showCompleted()
    },
    async showAll() {
      this.todosArray = await fetchTodos()
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
  background-color: rgba(95, 220, 242, 0.622);
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
  width: 400px;
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
  background-color: rgb(232, 153, 125);
}

.checkBox {
  height: 20px;
  width: 30px;
  margin-right: 1px;
}
.tasks {
  width: 580px;
  font-weight: bold;
  font-size: 18px;
  height: 33px;
  padding-left: 10px;
}
.dropdown-menu {
  display: flex;
  flex-direction: row;
  border-style: ridge;
  background-color: rgb(41, 249, 180);
}
.textarea {
  width: 450px;
  height: 250px;
  resize: none;
}
#dateInput {
  display: flex;
  height: 25px;
}
.prior {
  margin-right: 20px;
  font-size: 12px;
  height: 25px;
}
.destroy {
  width: 80px;
  font-size: 16px;
  height: 25px;
}
.destroy:hover {
  background-color: rgb(251, 114, 114);
}
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.footer {
  display: flex;
  flex-direction: row;
  margin-top: 550px;
  height: 50px;
  justify-content: center;
  position: fixed;
  justify-content: space-around;
}
.delDone {
  font-size: 20px;
  width: 150px;
  margin-right: 200px;
  margin-left: 100px;
}
.delAll {
  font-size: 20px;
  width: 150px;
  margin-right: 200px;
  margin-left: 200px;
}
.targetComplete {
  font-size: 20px;
  width: 150px;
  margin-right: 200px;
  margin-left: 200px;
}
.displayAll {
  font-size: 20px;
  width: 150px;
  margin-right: 200px;
  margin-left: 100px;
}
.displayAll:hover {
  background-color: rgb(83, 255, 83);
}
.delAll:hover {
  background-color: rgb(217, 34, 34);
}
.delDone:hover {
  background-color: rgb(245, 95, 95);
}
.targetComplete:hover {
  background-color: rgb(117, 235, 150);
}
</style>
