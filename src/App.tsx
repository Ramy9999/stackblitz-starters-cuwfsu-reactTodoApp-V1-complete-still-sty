import { FC, useReducer } from 'react';
import NewTodo from './components/newTodo';
import TodoList from './components/TodoList';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = { todos: [] };
// const initialState = {
//   todos: [{ id: 1, description: 'test task', state: 'NEW' }],
//   };

let todosC = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case 'COMPLETE':
      const newItems = [...state.todos]; // create new array
      newItems.splice(action.todoIndex, 1); // remove element
      return { ...state, todos: newItems }; // spread state first so we don't lose our awesome title, override items with new items
    case 'COMPLETED':
      todosC.push(action.todo);
      todosC = [...new Set(todosC)];
      console.log('todoC is: ', todosC);
    case 'EDIT':
      return {
        ...state,
        todos: [...state.todos],
      };

    default:
      return state;
  }
};

export const App: FC<{ name: string }> = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;

  function addTodoHandlerReducer(todo) {
    dispatch({ type: 'ADD', todo: todo });
  }
  function completeTodoHandlerReducer(index) {
    dispatch({ type: 'COMPLETE', todoIndex: index });
  }
  function completedAddTodoHandlerReducer(todo) {
    dispatch({ type: 'COMPLETED', todo: todo });
  }
  function editTodoHandlerReducer() {
    dispatch({ type: 'EDIT' });
  }
  return (
    <>
      <h1>Todo Appication:</h1>
      <br />
      <h1 style={{ color: 'grey', fontWeight: 'normal' }}>V1</h1>
      <NewTodo addTodoHandlerReducer={addTodoHandlerReducer} />
      <br />
      <TodoList
        todos={todos}
        todosC={todosC}
        completeTodoHandlerReducer={completeTodoHandlerReducer}
        completedAddTodoHandlerReducer={completedAddTodoHandlerReducer}
        editTodoHandlerReducer={editTodoHandlerReducer}
      />
    </>
  );
};
