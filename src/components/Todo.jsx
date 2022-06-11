import React from 'react'
import { useState } from 'react'
import './Todo.css'
import Item from './Item/Item'
import List from './List/List';
import TodoForm from './TodoForm/TodoForm'
import { useEffect } from 'react';
import Modal from './Modal/Modal'

function Todo(){
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState([])
    
    useEffect(()=> {
        const savedItems = JSON.parse(localStorage.getItem("savedItems"))
        if(savedItems){
            setItems(savedItems);
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("savedItems", JSON.stringify(items))
    }, [items])

    function onAddItem(text){
        let it = new Item(text)
        setItems([...items, it])
        onHideModal();
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

    function onHideModal(){
        setShowModal(false)
    }

    return (
        <div className="container">
            <header>
                <h1>Todo</h1>
                <button onClick={() => { setShowModal(true) }} className="add">+</button>
            </header>
            {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}

export default Todo 