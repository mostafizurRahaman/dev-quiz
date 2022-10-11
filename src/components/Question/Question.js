import React, { useState } from 'react';
import Option from '../Option/Option';
import { FaEye } from 'react-icons/fa';
import './Question.css';

const Question = ({ques,serial, handleCurrentAns}) => {
   const  [show ,setShow ] = useState(false); 
   const {id, correctAnswer , question, options} = ques; 

   return (
      <div className='question'>
         <h3>{serial+1}:- <span>{question}</span></h3>
         <FaEye className='eye-icon' onClick={()=> setShow(!show)}></FaEye>
         <div className='options-container'>
            {
               options.map((option, idx) => <Option option={option} id={id}  idx={idx} key={idx} handleCurrentAns={handleCurrentAns} correctAnswer={correctAnswer}></Option>)
            }

         </div>
         <div className={`correct-answer ${show ?  'd-block' : 'd-none'}`} >
            <h3> <span>Correct Answer : </span> {correctAnswer}</h3>
         </div>
      </div>
   );
};

export default Question;