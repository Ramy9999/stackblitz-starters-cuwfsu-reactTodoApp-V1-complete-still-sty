import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import '../css/style.css';

interface NewTodoProps {
  addTodoHandlerReducer: (todo: string) => void;
}

function NewTodo({ addTodoHandlerReducer }: NewTodoProps) {
  const [todoText, setTodoText] = useState<string>('');

  function addTodoHandler() {
    if (todoText != '') {
      addTodoHandlerReducer(todoText);
      setTodoText('');
    }
  }
  function onChangeHandler(event) {
    setTodoText(event.target.value);
  }
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            className="form-control beeko"
            name="new"
            type="text"
            placeholder="Create a new todo"
            value={todoText}
            onChange={onChangeHandler}
          />
          <button
            type="button"
            className="btn btn-info text-white"
            onClick={addTodoHandler}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTodo;
