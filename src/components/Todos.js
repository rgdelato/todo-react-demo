import React from "react";
import TodosData from "./TodosData";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodosFooter from "./TodosFooter";

const Todos = () => {
  return (
    <TodosData>
      {
        (
          {
            todos,
            addTodo,
            updateTodo,
            updateAllTodos,
            deleteTodo,
            clearCompleted
          }
        ) => (
          <section>
            <TodoInput addTodo={addTodo} />
            <TodoList
              todos={todos}
              updateTodo={updateTodo}
              updateAllTodos={updateAllTodos}
              deleteTodo={deleteTodo}
            />
            <TodosFooter todos={todos} onClearCompleted={clearCompleted} />
          </section>
        )
      }
    </TodosData>
  );
};

export default Todos;
