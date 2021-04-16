import React, { useState , useEffect } from "react";
import { Button, TextField } from '@material-ui/core';
import './App.css';
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";

function App() {
  const [todos, setTodos ] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); //blank to run only on first launch

  function getTodos(){
      db.collection("todos").onSnapshot(function(querySnapshot){
       setTodos(
        querySnapshot.docs.map((doc)=> ({
          id: doc.id,
          todo: doc.data().todo,
          is_in_progress: doc.data().is_in_progress,
        }))
       );
      });
  }

  function addTodo(event){
    event.preventDefault();
    db.collection("todos").add({
      is_in_progress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
    });  

    setTodoInput("");

  }

  function todoInputHandler(event){
    setTodoInput(event.target.value);
  }
  return (

    <div className="App" style={{display:"flex",flexDirection:"column",justifyContent: "center",alignItems: "center"}}>

     <h1>TO_DO </h1> 

    <form>

    < TextField id="standard-basic" label="Write a to-do" value={todoInput} onChange={todoInputHandler} />

    <Button type = "submit" variant="contained" onClick = {addTodo} style={{display: "none"}}>Add</Button>

    </form>
     
    {todos.map((todo) => (
       <TodoListItem 
       todo={todo.todo}
        is_in_progress={todo.is_in_progress}
         id={todo.id} />

    ))}

    </div>

  );
}

export default App;
