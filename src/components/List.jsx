/* eslint-disable react/prop-types */
import { Item } from "./Item"

export function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="container">
    <ul className="list">
      {todos.length === 0 && "No List"}
      {todos.map(todo => {
        return (
          <Item
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
    </div>
  )
}
