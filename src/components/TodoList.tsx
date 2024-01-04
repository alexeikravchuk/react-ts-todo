import React from 'react';
import { Todo } from '../todo.model';

import './TodoList.css'

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (todoId: string) => void
}

function TodoList(props: TodoListProps) {
  return <ul>
    {props.items.map(todo => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
      </li>
    ))}
  </ul>
}

export default TodoList