import { useObserver } from 'mobx-react';
import React from 'react';
import { useTodoStore } from '../store/Provider';

const TodoList = () => {
  const todoStore = useTodoStore();

  console.log('rendered');
  console.log(todoStore.todoList);

  return useObserver(() => (
    <ul>
      {todoStore.todoList.map(todo => {
        return (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => todoStore.removeTodo(todo.id)}>
                Delete
            </button>
          </li>
        );
      })}
    </ul>
  ));
};

export default TodoList;
