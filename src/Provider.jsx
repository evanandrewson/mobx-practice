import { useLocalObservable } from 'mobx-react';
import { createTodoStore } from './store';
import React, { createContext, useContext } from 'react';

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const todoStore = useLocalObservable(() => createTodoStore());

  return (
    <TodoContext.Provider value={todoStore}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoStore = useContext(TodoContext);

export default TodoProvider;
