<template>
    <div class="todo-item" > 
        <input type="text" {{newTodo}}/>
        </div>
            <!-- <input class="checkBox" type="checkbox" v-model="todo.done"  />
            <input class="tasks" type="text" v-bind:class="{done:todo.done}" v-model="todo.text" v-on:click="toggle(todo.id)" /> --> -->
        <!-- <div class="dropdown-menu" v-show="showdropdown" >
            <textarea  class="textarea" v-model="todo.notes" placeholder="notes"></textarea>
            <label for="dateInput">Due Date:</label>
            <input type="date"  id="dateInput" v-model="todo.date"/>
            <label for="prior">Priority:</label>
            <select id="prior" v-model="priority">
                <option v-for="priority in options" v-bind:key="priority"> {{priority}} </option>
            </select>
            <button class='destroy' v-on:click='removeTodo(todo)'>Delete</button>
        </div> -->
  

</template>

<script>
export default {
  name:"createTodo",
  props:['newtodo']
  
}
</script>