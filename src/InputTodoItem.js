import {useState} from "react"

function InputTodoItem({onAddTodoItem}) {
    const [todoItem, setTodoItem] = useState("");

    return (
        <div className="input-wrapper">
            <input 
                type="text"
                name="todoItem"
                placeholder="Create a new todo item"
                value={todoItem}
                onChange={(e) => {
                    setTodoItem(e.target.value)
                }}
            />

            <button 
                className="add-button" 
                onClick={(e) => {
                    onAddTodoItem(todoItem);
                    setTodoItem("");
            }}>Add</button>
        </div>
    )
}

export default InputTodoItem;