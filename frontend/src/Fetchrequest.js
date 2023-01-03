
export async function fetchTodos () {
  try {
    const url = 'http://localhost:3000/todos'
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    const data = await response.json() // extracting the data from json object
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function attachTodo (input) {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: input
      })
    }
    const url = 'http://localhost:3000/addTodo'
    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function reformTodo (id, field, val) {
  try {
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        property: field,
        value: val
      })
    }
    const url = `http://localhost:3000/reviseTodo/${id}`
    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function removeTodo (id) {
  try {
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const url = `http://localhost:3000/removeTodo/${id}`
    console.log(url)
    const response = await fetch(url, config)
    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function removeDone () {
  try {
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const url = 'http://localhost:3000/removeDone'
    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function removeAll () {
  try {
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const url = 'http://localhost:3000/removeAll'
    const response = await fetch(url, config)
    if (!response.ok) {
      throw new Error(`HTTP error status:${response.status}`)
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
