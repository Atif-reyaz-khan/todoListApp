import React from 'react';
import Input from './components/Input'
import './App.css';
import TodoItem from './components/Todoitem'
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'

function App() {
  const TodoList=useSelector(selectTodoList)
  console.log(TodoList);
  return (
    <div className="App">
     <div className="app__container">
       <h1>Todo List</h1>
       <div className="app__todoContainer">
         {
               TodoList.map(item=>(
                 <TodoItem
                 name={item.type}
                 
                 done={item.done}
                 id={item.id}
                 />

               ))
         }
   
       </div>
       <Input/>
     </div>

     
    </div>
  );
}

export default App;
