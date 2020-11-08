import { nanoid } from 'nanoid';

export const createTodoStore = () => {
  return ({
    todoList: [],
    addTodo(name) {
      this.todoList.push({ id: nanoid(), name });
    },
    removeTodo(id) {
      this.todoList.filter(todo => todo.id !== id);
    }
  });
};
