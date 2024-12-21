import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Nav from "./Navbar/Nav";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
    </div>
  );
}




