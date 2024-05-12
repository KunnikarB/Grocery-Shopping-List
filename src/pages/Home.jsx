import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import "../index.css"
import { List } from "../components/List"
import { FaShopify } from "react-icons/fa";

export default function Home() {
  const [todos, setTodos] = useState(() => {
    // Retrieve the todos from local storage. If there are no todos, return an empty array.
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // Save the todos to local storage whenever the todos state changes. 
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      // Add a new todo item to the list of todos using the currentTodos state.
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  // Update the completed status of a todo item. 
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      // Map over the current todos and update the completed status of the todo item with the specified id.
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  // Delete a todo item from the list of todos. 

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    
    <div className="container">
    <h1 className="header"><FaShopify />Shopping List</h1>
      <Form onSubmit={addTodo} />
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

