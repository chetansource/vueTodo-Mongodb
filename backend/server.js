import express from 'express'
import cors from 'cors'
import { connectDataBase, getAllTodos, insertTodo, updateTodo, deleteTodo, deleteDoneTodos, deleteAllTodos, getcompletedTodos } from './database.js'

const app = express()
connectDataBase()

app.use(cors({ methods: ['GET', 'POST', 'DELETE', 'PUT'] })) //  enable all cors request
app.use(express.json())

app.get('/todos', async (req, res) => {
  try {
    const todos = await getAllTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).send(error)
  }
})
// inspect the error  message  send to the user
app.post('/addTodo', async (req, res) => {
  try {
    const addTodo = await insertTodo(req.body.title)
    res.json(addTodo)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.put('/reviseTodo/:id', async (req, res) => {
  try {
    const modifyTodo = await updateTodo(req.params.id, req.body.property, req.body.value)
    res.json(modifyTodo)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.delete('/removeTodo/:id', async (req, res) => {
  try {
    await deleteTodo(req.params.id)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.delete('/removeDone/', async (req, res) => {
  try {
    await deleteDoneTodos()
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.delete('/removeAll/', async (req, res) => {
  try {
    await deleteAllTodos()
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.get('/showDone', async (req, res) => {
  try {
    const todos = await getcompletedTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).send(error)
  }
})

app.listen(3000, () => {
  console.log('welcome to mongo')
})
// change  use a standard respose
