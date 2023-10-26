import Todo from './Todo';
import TodoC from './TodoC';

interface TodoListProps {
  todos: string[];
  todosC: string[];
  completeTodoHandlerReducer: (todo: number) => void;
  completedAddTodoHandlerReducer: (todo: string) => void;
  editTodoHandlerReducer: (todo: string) => void;
}
function TodoList({
  todos,
  todosC,
  completeTodoHandlerReducer,
  completedAddTodoHandlerReducer,
  editTodoHandlerReducer,
}: TodoListProps) {
  return (
    <>
      <h2>Todo List</h2>
      {todos && todos.length > 0 ? (
        todos.map((todo: string) => (
          <Todo
            key={Math.random()}
            title={todo}
            status="Complete"
            todos={todos}
            completeTodoHandlerReducer={completeTodoHandlerReducer}
            completedAddTodoHandlerReducer={completedAddTodoHandlerReducer}
            editTodoHandlerReducer={editTodoHandlerReducer}
            //time={Date.now()}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No Todos Yet!</p>
      )}
      <br />
      <br />
      <h2>Completed Todo List</h2>
      <br />
      {todosC && todosC.length > 0 ? (
        todosC.map((todo: string) => (
          <TodoC
            key={Math.random()}
            title={todo}
            status="Completed"
            todosC={todosC}
            //time={Date.now()}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No Completed Todos Yet!</p>
      )}
    </>
  );
}

export default TodoList;
