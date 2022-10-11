import { logDOM } from '@testing-library/react';
import React from 'react';
import { RiContrastDropLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quizes = () => {
   const quizes = useLoaderData().data; 
   const {logo, name, questions, total } = quizes;
   console.log(questions);  
   return (
      <div>
         <img src={logo} alt="" />
          <h3>{name}</h3>
          <div className='questions-container'>
                  {
                     questions.map((ques, idx) => <Question key={ques.id} ques={ques}serial={idx}></Question>) 
                  }
          </div>
          
      </div>
   );
};

export default Quizes;