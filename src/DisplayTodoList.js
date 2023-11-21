function DisplayTodoList({todoList, onDeleteTodoItem}) {
    if (todoList.length > 0) {
        return (
            <ul className="todo-list">
                {todoList.map((item, index) => (
                    <div className="todo-item-wrapper" key={index}>
                        <li>{item}</li>
                        <button 
                            className="delete-button" 
                            onClick={(e) => {
                                onDeleteTodoItem(index);
                        }}>Delete</button>
                    </div>
                ))}
            </ul>
        )
    }

    else {
        return (
            <div className="empty-wrapper">
                <p>No task found</p>
            </div>
        )
    }
}

export default DisplayTodoList;