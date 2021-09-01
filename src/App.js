import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // const getTodos = async (db) => {
  //   const todosCol = collection(db, 'todos');
  //   const todoSnapshot = await getDocs(todosCol);
  //   const todoList = todoSnapshot.docs.map(doc => doc.data().todo);
  //   return todoList;
  // }

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here ... fires when the App.js loads
    // db.collection('todos').onSnapshot(snapshot => {
    //   console.log(snapshot.docs.map(doc => doc.data().todo))
    //   setTodos(snapshot.docs.map(doc => doc.data().todo))
    // })

    // getTodos(db).then(result => setTodos(result)).catch(err => console.log(err));


    // this code here ... fires when the App.js loads
    onSnapshot(query(collection(db, 'todos'), orderBy('timestamp', 'desc')), (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    })
  }, [])
  
  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // stops the refresh

    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>TODO LIST 📌</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
