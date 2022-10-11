import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';
import './Home.css'; 
const Home = () => {
   const topics = useLoaderData(); 
   return (
      <>
      {/* <Header></Header> */}
      <div className='container'>
        <div className='topics-container'>
               {
                  topics.map(topic => <Topics topic={topic} key={topic.id}></Topics>)
               }
        </div>
      </div>
      </>
   );
};

export default Home;