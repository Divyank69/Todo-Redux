import React from "react";
import TodoScreen from "./HomeScreen"; 

const AllTodosScreen = () => {
  return <TodoScreen showAddButton={false} heading="All Todos" />;
};

export default AllTodosScreen;
