import React from "react";
import './Menu.css'; 
import { NavLink } from "react-router-dom";

const Menu = () => {
   return (
      <nav className="menu-bar">
         <NavLink to="/home"><h1>Dev Quiz</h1></NavLink>
         <div className="menu">
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/statustic">Statustic</NavLink>
            <NavLink to="/blog">Blog</NavLink>
         </div>
      </nav>
   );
};

export default Menu;
