import { MongoClient, ObjectId } from 'mongodb'
const url = 'mongodb://localhost:27017'
const dbName = 'todoListDb'
const client = new MongoClient(url)

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

export async function getAllTodos () {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const todos = await collection.find({}).toArray()
  return todos
}

export async function insertTodo (todo) {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const doc = {
    title: todo,
    checkbox: false,
    notes: '',
    dueDate: '',
    priority: ''

  }
  const addTodos = collection.insertOne(doc)
  return await addTodos
}

export async function updateTodo (id, property, value) {
  id = id.slice(1)
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const update = {}
  update[property] = value
  const updateTodo = await collection.updateOne({ _id: ObjectId(id) }, { $set: update })
  console.log(updateTodo)
  return updateTodo
}

export async function deleteTodo (id) {
  id = id.slice(1)
  console.log(id, typeof (id))
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const deleteTodo = await collection.deleteOne({ _id: ObjectId(id) })
  return deleteTodo
}
