import React from 'react';

const Option = ({option, id, idx}) => {
  const optionId = id+idx; 
   return (
      <p>
         <label htmlFor={optionId}>
             <input type="radio" name={id} id={optionId}  value={option}/><span>{option}</span>
         </label>
      </p>
        
      
   );
};

export default Option;