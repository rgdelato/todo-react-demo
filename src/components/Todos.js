import React from "react";
import TodosData from "./TodosData";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodosFooter from "./TodosFooter";

const Todos = () => {
  return (
    <TodosData>
      {({ todos, addTodo, updateTodo, deleteTodo, clearCompleted }) => (
          <section>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList
              todos={todos}
              onUpdateTodo={updateTodo}
              onDeleteTodo={deleteTodo}
            />
            <TodosFooter todos={todos} onClearCompleted={clearCompleted} />
          </section>
        )}
    </TodosData>
  );
};

export default Todos;
