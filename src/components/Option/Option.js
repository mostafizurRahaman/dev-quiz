import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css';
const Option = ({option, id, idx, handleCurrentAns, correctAnswer}) => {
  const optionId = id+idx; 
   return (
      <div>
      <p className='option' >         
             <input type="radio" name={id} id={optionId}  value={option}/>
             <label  onClick={(event)=> handleCurrentAns(correctAnswer,event)} htmlFor={optionId} >{option}</label>
      </p>
      <ToastContainer role='alert'></ToastContainer>
      </div>
        
      
   );
};

export default Option;
