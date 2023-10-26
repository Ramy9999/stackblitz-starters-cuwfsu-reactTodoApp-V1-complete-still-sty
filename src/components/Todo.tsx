import { useState, useRef } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { auto } from '@popperjs/core';

interface TodoProps {
  todos: string[];
  title: string;
  status: string;
  completeTodoHandlerReducer: (todo: number) => void;
  completedAddTodoHandlerReducer: (todo: string) => void;
  editTodoHandlerReducer: (todo: string) => void;
  //time: number;
}

function Todo({
  title,
  status,
  todos,
  completeTodoHandlerReducer,
  completedAddTodoHandlerReducer,
  editTodoHandlerReducer,
}: //time,
TodoProps) {
  const [todoVisible, setTodoVisible] = useState(true);
  const myEditContainer = useRef(null);
  const [toTitle, setToTitle] = useState(title);

  function completeTodoHandler(event) {
    let index = todos.indexOf(event.target.title);
    completeTodoHandlerReducer(index);
    completedAddTodoHandlerReducer(event.target.title);
    console.log(index);
  }
  const onChangeTodoEditHandler = (event) => {
    setToTitle(event.target.value);
    let index = todos.indexOf(event.target.value);
    console.log('the edited todo index is: ', index);
    todos.splice(todos.indexOf(event.target.title), 1, event.target.value);

    //add the todo when the user stops typing using a timer
    let timer;
    const waitTime = 1000;
    const messageInput = myEditContainer.current;
    messageInput.addEventListener('keyup', (event) => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        editTodoHandlerReducer(event.target.value);
      }, waitTime);
    });
  };
  return (
    <>
      {todoVisible && [
        <p
          style={{
            borderStyle: 'ridge',
            borderRadius: 5,
            borderWidth: 1.6,
            borderColor: 'white',
            height: 65,
            position: 'relative',
          }}
        >
          <input
            type="text"
            value={toTitle}
            onChange={onChangeTodoEditHandler}
            style={{
              border: 0,
              width: 'inherit',
              display: 'block',
              //margin: '1.12em 0',
              //fontSize: '100%',
              font: 'inherit',
              fontSize: 25,
              //msTransform: 'translateY(25%)',
              //transform: 'translateY(25%)',
              float: 'left',
              //margin: auto,
              marginLeft: 20,
            }}
            title={toTitle}
            ref={myEditContainer}
            id="editInp"
          />
          <button
            style={{
              //msTransform: 'translateY(25%)',
              //transform: 'translateY(25%)',
              float: 'right',
              margin: auto,
              //marginRight: 20,
            }}
            type="button"
            className="btn btn-success align-middle redy"
            onClick={completeTodoHandler}
            title={title} //maybe change to time
          >
            {status}
          </button>
        </p>,
      ]}
    </>
  );
}

export default Todo;
