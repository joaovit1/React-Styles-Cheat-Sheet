import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App" style={{textAlign:"left"}}>
        <h1>
            React Cheat Sheet
        </h1>
        <ul>
            <Link to="/css">CSS cheat sheet</Link>
        </ul>
    </div>
  );
}

export default App;
