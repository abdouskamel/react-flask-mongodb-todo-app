import {useState} from "react"
import InputTodoItem from "./InputTodoItem"
import DisplayTodoList from "./DisplayTodoList"
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);

    const addTodoItem = (todoItem) => {
        if (todoItem !== "") {
            setTodoList([...todoList, todoItem]);
        }
    };

    const deleteTodoItem = (todoItemIndex) => {
        const newTodoList = [...todoList];
        newTodoList.splice(todoItemIndex, 1);
        setTodoList(newTodoList);
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
