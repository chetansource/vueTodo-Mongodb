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
  ></createTodo>
  <!-- <createTodo v-on:response="(msg)=> childmsg=msg"></createTodo> -->

  <!-- <div class="newtodo" v-for="todo in todosArray" v-bind:key="todo.id">  -->
  <!-- <input class="checkBox" type="checkbox" v-model="todo.done"  />
    <input class="tasks" type="text" v-bind:class="{done:todo.done}" v-model="todo.text" v-on:click="showdropdown = !showdropdown" />
    <div class="dropdown-menu" v-show="showdropdown" >
      <textarea  class="textarea" v-model="todo.notes" placeholder="notes"></textarea>
       <label for="dateInput">Due Date:</label>
      <input type="date"  id="dateInput" v-model="todo.date"/>
      <label for="prior">Priority:</label>
      <select id="prior" v-model="priority">
        <option v-for="priority in options" v-bind:key="priority"> {{priority}} </option>
     </select>
     <button class='destroy' v-on:click='removeTodo(todo)'>Delete</button>
    </div> -->
  <!-- </div>  -->
</template>

<script>
  let id = 0;
  import createTodo from "./components/newtodo.vue";

  export default {
    name: "App",
    data() {
      return {
        newTodo: "",
        todosArray: [],
        priority: "",
        childmsg: "no child msg yet",
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo === "") {
          alert("please enter the task");
          return;
        }
        this.todosArray.push({
          id: id++,
          text: this.newTodo,
          checkbox: false,
          notes: "",
          dateInput: "",
          priority: this.priority,
        });
        localStorage.setItem("todosArray", JSON.stringify(this.todosArray));
        this.newTodo = "";
      },
      // removeTodo(todo){
      //   this.todosArray.splice(this.todosArray.indexOf(todo),1)
      // },
      //  mounted(){
      //   this.todosArray=JSON.parse(localStorage.getItem("todosArray")) || []
      // }
    },
    components: {
      createTodo,
    },
  };
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
    width: 380px;
    font-weight: bold;
    font-size: 16px;
    height: 30px;
    padding-left: 10px;
  }
  .dropdown-menu {
    border-style: groove;
    background-color: rgb(85, 255, 198);
  }
  .textarea {
    width: 380px;
    height: 180px;
    resize: none;
  }
</style>
