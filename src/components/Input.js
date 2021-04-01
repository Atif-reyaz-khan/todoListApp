import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {saveTodo} from '../features/todoSlice'
import './input.css'
 const Input = () => {
    const [Input,setInput]=useState('')
    const dispatch =useDispatch()
    const addTodo=()=>{

    dispatch(saveTodo({
            type:Input,
            done:false,
            id:Date.now()
        }));
        
    }
    return (
        <div className="input">
            <input type="text" value={Input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add!</button>
            
        </div>
    )
    
}
export default Input;
