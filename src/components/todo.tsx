import React from 'react'
import {Todo} from '../../src/App'


interface Props {
    todo: Todo;
}

const TodoCard = ({todo}: Props) => {
  return (
    <div >
      <input type="checkbox"/>
      <span>{todo.title}</span>
      <span>-</span>
      <span>{todo.description}</span>
    </div>
  );
}

export default TodoCard