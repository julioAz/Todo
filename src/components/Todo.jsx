import React from 'react'
import { useState } from 'react'
import './Todo.css'
import Item from './Item/Item'
import List from './List/List';
import TodoForm from './TodoForm/TodoForm'

function Todo(){
    const [items, setItems] = useState([])

    function onAddItem(text){
        let it = new Item(text)
        setItems([...items, it])
    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it => it.id != item.id)
        setItems(filteredItems)
    }

    function onDone(item){
        let updatedItems = items.map(it => {
            if(it.id === item.id){
                it.done = !it.done;
            }
            return it
        })
        setItems(updatedItems);
    }

    return (
        <div className="container">
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
        </div>
    )
}

export default Todo 