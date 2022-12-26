import fetch from 'node-fetch'
export async function fetchTodos () {
  try {
    const url = 'http://localhost:3000/todos'
    const response = await fetch(url, { method: 'GET' })
    console.log('response-data-->', response)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    const data = await response.json() // extracting the data from json object
    console.log('actual-Data-->', data)
    return data
  } catch (error) {
    console.log(error)
  }
}

// fetchTodos()
