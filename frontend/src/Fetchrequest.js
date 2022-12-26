import fetch from 'node-fetch'
export async function fetchTodos () {
  try {
    const url = 'http://localhost:3000/todos'
    const response = await fetch(url)
    // console.log('response-data-->', response)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    const data = await response.json() // extracting the data from json object
    // console.log('actual-Data-->', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

// export async function attachTodo (input) {
//   try {
//     const config = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         title: input
//       })
//     }
//     const url = 'http://localhost:3000/addTodo'
//     const response = await fetch(url, config)
//     if (!response.ok) {
//       throw new Error(`HTTP error status:${response.status}`)
//     }
//     return response
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchTodos()
