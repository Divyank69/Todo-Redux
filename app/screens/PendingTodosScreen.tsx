import React from "react";
import TodoScreen from "./HomeScreen";

const PendingTodosScreen = () => {
  return <TodoScreen filter="pending" showAddButton={false} heading="Pending Todos" />;
};

export default PendingTodosScreen;
