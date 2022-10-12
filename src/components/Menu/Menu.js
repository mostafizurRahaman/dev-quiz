import React, { useState } from "react";
import './Menu.css'; 
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {ImCross} from 'react-icons/im'
 

const Menu = () => {
   const [open , setOpen] = useState(false); 
   console.log(open) 
   return ( 
      <nav className="menu-bar">
         <NavLink to="/home"><h1>Dev Quiz</h1></NavLink>
         <div className='toggle-icon' onClick={()=> setOpen(!open)}>
            {open ? <ImCross></ImCross> : <FaBars ></FaBars> }         
         </div>
         <div className={`menu ${ open ? 'clickedAfter' : 'clickedBefore'}`}>
            <NavLink to="/topics">Topics</NavLink>
            <NavLink to="/statistic">statistic</NavLink>
            <NavLink to="/blog">Blog</NavLink>
         </div>
      </nav>
   );
};

export default Menu;


// 