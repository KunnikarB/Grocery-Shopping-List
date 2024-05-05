/* eslint-disable react/prop-types */
import { useState } from "react"
import { GoTasklist } from "react-icons/go";
// function to create a form to add new items to the list
export function Form({ onSubmit }) {
  // state to store the new item
  const [newItem, setNewItem] = 
  useState("")
  // function to handle the form submission
  function handleSubmit(e) {
    e.preventDefault()
    // check if the new item is empty
    if (newItem === "") return
    // call the onSubmit function with the new item
    onSubmit(newItem)
    // reset the new item
    setNewItem("")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"><GoTasklist />Add New List</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>

        <button className="btn">Add</button>

      </form>
    </div>
  )
}