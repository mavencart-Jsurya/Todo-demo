import React,{useState} from "react";
import "./todo.css"
import Todolist from "./Todolist";

export default function Todo() {
    const[input , setInput] = useState("")
    const[iteamList, setIteamList] = useState([])

    const handleChange =(e)=>{
        setInput(e.target.value)
        
    }

    const handleClick =()=>{
        setIteamList([...iteamList,{iteam:input , key:Date.now()}])
        setInput("")
        
    }
    return (
        
        <div className='todo'>
            <div className="todo-list">
                <input type="text" 
                className="todo-Input"
                 placeholder="What Is Your Plan?" 
                value={input}
                onChange={handleChange}
                />
                <button className="todo-submit" onClick={handleClick}>Add</button>
                
            </div>
            <Todolist iteamlist={iteamList}/>
        </div>
        
       
    )
}
