import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandle = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
    }))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  let completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {!!todos.length > 0 && <TodosActions
      completedTodosExist={!!completedTodosCount}
        resetTodos={resetTodosHandler}
        deleteCompletedTodos={deleteCompletedTodosHandler} />

      }

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandle} />

        {completedTodosCount > 0 && <h2>{`You have cmpleted ${completedTodosCount} ${completedTodosCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App;
