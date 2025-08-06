import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo, TodoState } from "../types/todoTypes"; // path adjust karna


export const fetchTodos = createAsyncThunk<Todo[]>(
  "todo/fetchTodos",
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return response.data?.map((todo: any) => ({
      id: String(todo.id),
      title: todo.title,
      completed: todo.completed,
    })) ?? [];
  }
);


// const initialState: TodoState = {
//   todos: [
//     {
//       id: "1",
//       title: "Buy groceries",
//       completed: false,
//     },
//     {
//       id: "2",
//       title: "Go for a walk",
//       completed: true,
//     },
//     {
//       id: "3",
//       title: "Learn Redux Toolkit",
//       completed: false,
//     },
//     {
//       id: "4",
//       title: "Drink water",
//       completed: false,
//     },
//   ]
// };

const initialState: TodoState = {
  todos: [],          
  loading: false,
  error: null,
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
extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    }

});

export const { addTodo, editTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

