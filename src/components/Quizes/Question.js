import React from 'react';
import Option from '../Option/Option';

const Question = ({ques,serial}) => {
   const {id, correctAnswer, question, options} = ques; 
   return (
      <div>
         <h2>{serial+1}:- <span>{question}</span></h2>
         <div className='options-container'>
            {
               options.map((option, idx) => <Option option={option} id={id}  idx={idx} key={idx}></Option>)
            }
         </div>
      </div>
   );
};

export default Question;