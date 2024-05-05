/* eslint-disable react/prop-types */

export function Item({ completed, id, title, toggleTodo, deleteTodo }) {
  // function to handle the checkbox change event and call the toggleTodo function with the new value of the checkbox.
  return (
    <div className="container">
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    </div>
  )
}