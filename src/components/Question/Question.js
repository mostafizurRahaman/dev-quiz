import React from 'react';
import Option from '../Option/Option';
import './Question.css';

const Question = ({ques,serial, handleCurrentAns}) => {
   const {id, correctAnswer , question, options} = ques; 
   return (
      <div className='question'>
         <h3>{serial+1}:- <span>{question}</span></h3>
         <div className='options-container'>
            {
               options.map((option, idx) => <Option option={option} id={id}  idx={idx} key={idx} handleCurrentAns={handleCurrentAns} correctAnswer={correctAnswer}></Option>)
            }
            
         </div>
      </div>
   );
};

export default Question;