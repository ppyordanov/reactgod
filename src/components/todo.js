import React, { Component, useState }  from 'react';
import Modal from './modal';
import Backdrop from './backdrop';

function Todo(props){
    const [isOpen, setOpen] = useState(false);

    function deleteHandler(){
        setOpen(true)
        console.log("Clicked: " + props.text)

    }

    function closeHandler(){
        setOpen(false)
        console.log("Clicked: " + props.text)

    }

    return       <div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
        <span>description</span>
      <button className='btn' onClick={deleteHandler}>Delete</button></div>
      {isOpen ? <Modal onCancel={closeHandler} onConfirm={closeHandler}/> : null}
      {isOpen && <Backdrop onCancel={closeHandler}/>}
    </div>
}

export  default Todo;