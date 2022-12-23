import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost:27017'
const database = 'todoListDb'
const client = new MongoClient(url)

export async function connectDataBase () {
  const result = await client.connect()
  console.log('Connected successfully to server')
  const db = result.db(database)
  const collection = db.collection('todoList')
  const findResult = await collection.find({}).toArray()
  console.log('Found documents =>', findResult)
}

// const todoTaskSchema = new mongoose.Schema({
//   title: String,
//   checkbox: Boolean,
//   notes: String,
//   dueDate: String,
//   priority: String
// })
// const TodoTask = mongoose.model('TodoTask', todoTaskSchema) // TodoTask is model name

// export async function getAllTodos () {
//   const todos = await db.collection('todoList').find({}).toArray()
//   return todos
// }

// export async function insertTodo (todo) {
//   const addTodos = new TodoTask({ title: todo, checkbox: false })
//   return await addTodos.save()
// }

// export async function updateTodo (id, property, value) {
//   const update = {}
//   update[property] = value
//   const updatetodo = await TodoTask.findOneAndUpdate({ _id: id }, update)
//   return updatetodo
// }

// export async function deleteTodo (id) {
//   const deleteTodo = await TodoTask.remove({ _id: id })
//   return deleteTodo
// }
