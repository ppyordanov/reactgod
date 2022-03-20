import React, { Component }  from 'react';
import Backdrop from './components/backdrop';
import Modal from './components/modal';
import Todo from './components/todo';

function App() {
  return (
    <div>
      <h1>TODOs</h1>
      <Todo text="learn"/>
      <Todo text="achieve"/>
      <Todo text="dominate"/>
      <Todo text="succeed"/>#
    </div>
  );
}

export default App;
