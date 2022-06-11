import React from 'react'
import { useState } from 'react'

function TodoForm(props){
    const [text, setText] = useState('');

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    function addItem(event){
        event.preventDefault();
        if(text){
            props.onAddItem(text)
            setText("")
        }
    }
    return (
        <form className="formControl">
            <label>Add a task</label>
            <input onChange={handleChange} type="text" value={text}></input>
            <button className="addItem" onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm