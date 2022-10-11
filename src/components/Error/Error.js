import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../img/error.png";
import "./Error.css";
const Error = () => {
   const navigate = useNavigate();
   const handleBack = () => {
      navigate("/home");
   };
   return (
      <div className="error-page">
         <div className="error-details">
            <h1>404 Error</h1>
            <h2>Not Found Your Route.</h2>
            <button onClick={handleBack}>Go Back To Home</button>
         </div>
         <div className="error-image">
            <img src={errorImg} alt="error img" />
         </div>
      </div>
   );
};

export default Error;
