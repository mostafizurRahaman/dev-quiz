import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './Topics.css'; 
const Topics = ({topic}) => {
   const {id, name ,logo , total} = topic; 
   const navigate =  useNavigate(); 
   const handleTopicsQuizes = () => {
      console.log(name)
      navigate(`/topic/${id}`); 

   } 
   console.log(id);
   return (
      <div className='topics'>
         <img src={logo} className='topics-img' alt={name} />        
        <div className='topics-details-container'>
          <div className="topics-details">
             <h3>{name}</h3>
             <h4>Total Quiz: {total}</h4>             
          <button className='quiz-button' onClick={handleTopicsQuizes} >Start <FaArrowAltCircleRight></FaArrowAltCircleRight></button>
          </div>
        </div> 
      </div>
   );
};

export default Topics;