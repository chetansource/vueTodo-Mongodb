import express from 'express'
// import { connectDataBase, getAllTodos, insertTodo, updateTodo, deleteTodo } from './database.js'
 
import { connectDataBase } from './database.js'

const app = express()
connectDataBase()

// app.use(express.json())

// app.get('/todos', async (req, res) => {
//   try {
//     const Todo = await getAllTodos()
//     res.json(Todo)
//   } catch (error) {
//     res.status(500).send(error)
//   }
// })

// app.post('/addTodo', async (req, res) => {
//   try {
//     const addTodo = await insertTodo(req.body.text)
//     res.json(addTodo)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

// app.put('/update/:id', async (req, res) => {
//   try {
//     const modifyTodo = await updateTodo(req.params.id, req.body.property, req.body.value)
//     res.json(modifyTodo)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

// app.delete('/delete/:id', async (req, res) => {
//   try {
//     const deletet= await deleteTodo(req.params.id)
//     res.statusCode(200)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// })

app.listen(3000, () => {
  console.log('welcome to mongo')
})
