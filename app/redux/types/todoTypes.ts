export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
  loading: boolean;
  error: string | null;
};

