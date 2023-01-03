import { MongoClient, ObjectId } from 'mongodb'
import { renameKey } from './utility.js'
const url = 'mongodb://localhost:27017'
const dbName = 'todoListDb'
const client = new MongoClient(url)
const database = client.db(dbName)
const collection = database.collection('todoList')

export async function connectDataBase () {
  try {
    const result = await client.connect()
    const db = result.db(dbName)
    db.collection('todoList')
    console.log('Connected successfully to server')
  } catch (error) {
    console.log(error)
  }
}

function renameTodoId (todo) {
  return renameKey(todo, '_id', 'id')
}

export async function getAllTodos () {
  const todos = await collection.find({}).toArray()
  const todosNew = todos.map(renameTodoId)
  return todosNew
}

export async function insertTodo (todo) {
  const Todo = {
    title: todo,
    checkbox: '',
    notes: '',
    dueDate: '',
    priority: ''

  }
  const addTodo = collection.insertOne(Todo)
  return await addTodo
}

export async function updateTodo (id, property, value) {
  const update = {}
  update[property] = value
  const updateTodo = await collection.updateOne({ _id: ObjectId(id) }, { $set: update })
  return updateTodo
}

export async function deleteTodo (id) {
  const deleteTodo = await collection.deleteOne({ _id: ObjectId(id) })
  return deleteTodo
}

export async function deleteDoneTodos () {
  const deleteTodos = await collection.deleteMany({ checkbox: true })
  return deleteTodos
}

export async function deleteAllTodos () {
  const deleteAllTodos = await collection.deleteMany({ _id: ObjectId })
  return deleteAllTodos
}


