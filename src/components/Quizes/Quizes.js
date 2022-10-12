import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import  Question from '../Question/Question';
import { toast} from 'react-toastify';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import './Quizes.css'; 

const Quizes = () => {
   const quizes = useLoaderData().data; 
   const {logo, name, questions, total } = quizes;
   const [correct, setCorrect] = useState(0); 
   const notify = () => {
      toast.warn(' 😢 Wrong Ans ', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         role: "alert"
         });
   }
   const handleCurrentAns = (currentAns, event) => {
            const SelectedAns = event.target.innerText;
            const Ans1 = SelectedAns.replace(/ /g, '');
            const Ans2 = currentAns.replace(/ /g, ''); 
         if(Ans1 === Ans2){
             toast.success(' 🙂 Correct Ans!', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               role: "alert"
               });
               setCorrect((previous)=> previous + 1); 
         }else{
            notify();
         }
         
         console.log(Ans1); 
         console.log(Ans2); 
   }
   return (
      <div className='quiz-container'>
         <img src={logo} alt="" />
          <h2 className='topics-name'>{name}</h2>
          <h3 style={{textAlign:"center", }} className='topics-name'>Total Quiz: {total}</h3>
          <h3>Correct: {correct}</h3>

          <div className='questions-container'>
                  {
                     questions.map((ques, idx) => <Question key={ques.id} ques={ques}serial={idx} handleCurrentAns={handleCurrentAns}></Question>) 
                  }
          </div>
          
      </div>
   );
};

export default Quizes;