import React from "react";
import './Header.css'; 
import { NavLink } from "react-router-dom";

const Header = () => {
   return (
      <nav className="menu-bar">
         <NavLink to="/home"><h1>DevQuiz</h1></NavLink>
         <div className="menu">
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/statustic">Statustic</NavLink>
            <NavLink to="/blog">Blog</NavLink>
         </div>
      </nav>
   );
};

export default Header;
