import { useState, useRef } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { auto } from '@popperjs/core';

interface TodoCProps {
  todosC: string[];
  title: string;
  status: string;
  //time: number;
}

function TodoC({
  title,
  status,
  todosC,
}: //time,
TodoCProps) {
  const [todoVisible, setTodoVisible] = useState(true);

  function removeCompletedTodoHandler(event) {
    let index = todosC.indexOf(event.target.value);
    console.log('todoC index 1 is:', index);
    todosC.splice(index, 1);
    setTodoVisible(false);
    console.log('todoC index is:', index);
    console.log('todoC is:', todosC);
  }
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
          <div
            style={{
              fontSize: 25,
              //msTransform: 'translateY(25%)',
              //transform: 'translateY(25%)',
              float: 'left',
              //margin: auto,
              marginLeft: 20,
            }}
          >
            {title}
          </div>
          <button
            style={{
              //msTransform: 'translateY(25%)',
              //transform: 'translateY(25%)',
              float: 'right',
              margin: auto,
              //marginRight: 20,
            }}
            type="button"
            className="btn btn-primary align-middle redy"
            title={title} //maybe change to time
          >
            {status}
          </button>
          <button
            style={{
              color: 'transparent',
              textShadow: '0 0 0 #8b0000',
              float: 'right',
              margin: auto,
              border: 'none',
              background: 'none',
            }}
            id="bin"
            title="Remove completed todo"
            value={title}
            onClick={removeCompletedTodoHandler}
          >
            🗑️
          </button>
        </p>,
      ]}
      {todosC.length == 0 && [
        <p style={{ textAlign: 'center' }}>No Completed Todos Yet!</p>,
      ]}
    </>
  );
}

export default TodoC;
