import { useObserver } from 'mobx-react';
import React, { useState } from 'react';
import { useTodoStore } from '../store/Provider';

const TodoInput = () => {
  const [name, setName] = useState('');
  const todoStore = useTodoStore();
  
  const handleSubmit = event => {
    event.preventDefault();
    todoStore.addTodo(name);
    console.log(todoStore.todoList);
  };
  
  return useObserver(() => (
    <form onSubmit={handleSubmit}>
      <label>To do:</label>
      <input
        type="text"
        value={name}
        name={name}
        onChange={({ target }) => setName(target.value) }
      />
      <button>Add to list</button>
    </form>
  ));
};

export default TodoInput;
