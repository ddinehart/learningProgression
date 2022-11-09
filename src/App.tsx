import React, { ChangeEvent, useState }from 'react';
import './App.css';
import TodoItem from './components/todo';


export interface Todo {
  title: string,
  description: string,
  completed: boolean
}


const App = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [completed, setCompleted] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleAddTodo = () => {
    const newTodo = {title: title, description: description, completed: completed }
    setTodoList([...todoList, newTodo])
    setTitle('')
    setDescription('')
  }

  return (
    <><div className="App">
      <h1>TODO</h1>
      <input type="text" value={title} placeholder='Todo Title' onChange={handleTitleChange} />
      <input type="text" value={description} placeholder='Todo Description' onChange={handleDescriptionChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div><div>
        {todoList.map((todo: Todo, key: number) => {
          return <TodoItem key={key} todo={todo}/>;
        })}
      </div></>
  );
}

export default App;
 