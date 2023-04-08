import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {
    const todolistTitle_1: string = 'What to learn'
    const todolistTitle_2: string = 'What to buy'
    const tasks_1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: false}
    ]
    const tasks_2: TaskType[] = [
        {id: 4, title: 'Milk', isDone: true},
        {id: 5, title: 'Bread', isDone: true},
        {id: 6, title: 'Potato', isDone: false}
    ]
    return (
        <div className="App">
            <TodoList title={todolistTitle_1} tasks={tasks_1}/>
            <TodoList title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
