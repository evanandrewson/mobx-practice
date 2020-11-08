import React from 'react';
import TodoProvider from '../../store/Provider';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

export default function App() {
  return ( 
    <TodoProvider>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}
