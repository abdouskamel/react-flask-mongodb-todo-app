import {useState, useEffect} from "react"
import axios from "axios"

import InputTodoItem from "./InputTodoItem"
import DisplayTodoList from "./DisplayTodoList"

import configData from "./config.json"
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);

    // Get all todo items when the web page is opened
    useEffect(() => {
        axios.get(`${configData.API_URI}/get_todo_items`)
        .then((response) => {
            if (response.status === 200) {
                setTodoList(response.data.todoItems);
            }
        });
    }, []);

    // Add a todo item to the list and to the database
    const addTodoItem = (todoItem) => {
        if (todoItem !== "") {
            axios.post(`${configData.API_URI}/add_todo_item`, {item: todoItem})
                .then((response) => {
                    if (response.status === 200) {
                        setTodoList([...todoList, todoItem]);
                    }
                });
        }
    };

    // delete a todo item for the list and from the database
    const deleteTodoItem = (todoItemIndex) => {
        axios.post(`${configData.API_URI}/delete_todo_item`, {index: todoItemIndex})
            .then((response) => {
                if (response.status === 200) {
                    const newTodoList = [...todoList];
                    newTodoList.splice(todoItemIndex, 1);
                    setTodoList(newTodoList);
                }
            });
    };

    return (
        <div className="App">
            <h1>React Todo App</h1>

            <InputTodoItem onAddTodoItem={addTodoItem} />
            <DisplayTodoList todoList={todoList} onDeleteTodoItem={deleteTodoItem} />
        </div>
    );
}

export default App;
