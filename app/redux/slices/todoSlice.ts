import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      title: "Buy groceries",
      completed: false,
    },
    {
      id: "2",
      title: "Go for a walk",
      completed: true,
    },
    {
      id: "3",
      title: "Learn Redux Toolkit",
      completed: false,
    },
    {
      id: "4",
      title: "Drink water",
      completed: false,
    },
  ]
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const { id, title } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

