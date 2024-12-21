import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from "../Components/Home";
import Menu from "../Components/Menu";
import Products from "../Components/Products"
import Locations from "../Components/Locations";
import './Nav.css';

export default function Nav() {
  return (
    <div>
      <div className="Nav">
        <div>
          <small className="name">chaibubs</small>
        </div>
        <nav>
          <div><NavLink to="/">Home</NavLink></div>
          <div><NavLink to="/menu">Menu</NavLink></div>
          <div><NavLink to="/products">Products</NavLink></div>
          <div><NavLink to="/locations">Locations</NavLink></div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}
