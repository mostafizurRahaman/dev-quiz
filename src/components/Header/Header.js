import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import quizImg from '../../img/quiz.png'
import "./Header.css";
const Header = () => {
   return (
      <div className="header">
         <div className="container">
            <div className="header-details">
               <h2>Dev Quiz</h2>
               <h4>Test Your Knowledge about Development</h4>
               <RiArrowDownSLine className="header-icon"></RiArrowDownSLine>
            </div>
            <div className="header-img">
                  <img src={quizImg} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Header;
