import React from "react";
import TodoScreen from "./HomeScreen"; 

const CompletedTodosScreen = () => {
  return <TodoScreen filter="completed" showAddButton={false} heading="Completed Todos" />;
};

export default CompletedTodosScreen;
