import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({ todoId, createdAt, text }) {
  return (
    <tr>
      <td>{todoId}</td>
      <td><input type="text" value={text} /></td>
      <td>{createdAt}</td>
    </tr>
  );
}



function App() {
  const [todos, setTodos] = useState([
    { id: 1, createdAt: new Date().toISOString(), text: "Task 1" },
    { id: 2, createdAt: new Date().toISOString(), text: "Task 2" },
    { id: 3, createdAt: new Date().toISOString(), text: "Task 3" },
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  }

  return (
    <div id="main">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>input</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <ToDo key={todo.id} todoId={todo.id} createdAt={todo.createdAt} text={todo.text} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


// function App() {
//   const [todos, setTodos] = useState([{
//     id: 'todo1',
//     createdAt: '20:30',
//   }, {
//     id: 'todo2',
//     createdAt: '18:00',
//   }
//   ]);

//   return (
//     <div id="main">
//       <button>Reverse</button>
//       <table>
//         <tbody>
//         </tbody>
//       </table>
//     </div>
//   )
// }


// export default App;
