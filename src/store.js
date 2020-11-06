import { nanoid } from 'nanoid';

export const createTodoStore = () => {
  return ({
    todoList: [],
    addTodo: todo => {
      this.todoList.push({ id: nanoid(), name: todo });
    },
    removeTodo: id => {
      this.todoList.filter(todo => todo.id !== id);
    }
  });
};
