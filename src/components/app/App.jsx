import React from 'react';
import TodoProvider from '../../store/Provider';
import TodoInput from '../TodoInput';

export default function App() {
  return ( 
    <TodoProvider>
      <TodoInput />;
    </TodoProvider>
  );
}
