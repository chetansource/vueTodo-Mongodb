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
    checkbox: '',
    notes: '',
    dueDate: '',
    priority: ''

  }
  const addTodos = collection.insertOne(doc)
  return await addTodos
}

export async function updateTodo (id, property, value) {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const update = {}
  update[property] = value
  const updateTodo = await collection.updateOne({ _id: ObjectId(id) }, { $set: update })
  return updateTodo
}

export async function deleteTodo (id) {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const deleteTodo = await collection.deleteOne({ _id: ObjectId(id) })
  return deleteTodo
}

export async function deleteDoneTodos () {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const deleteTodos = await collection.deleteMany({ checkbox: true })
  return deleteTodos
}

export async function deleteAllTodos () {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const deleteAllTodos = await collection.deleteMany({ _id: ObjectId })
  return deleteAllTodos
}

export async function getcompletedTodos () {
  const database = client.db(dbName)
  const collection = database.collection('todoList')
  const doneTodos = await collection.find({ title: 'todo1' }).toArray()
  return doneTodos
}
