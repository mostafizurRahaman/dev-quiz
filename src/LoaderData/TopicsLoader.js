export const getTopicsData = async() => {
      const res = await fetch('https://openapi.programming-hero.com/api/quiz'); 
      const topicsData = await res.json(); 
      const topic = topicsData.data; 
      console.log(topic); 
      return topic; 
}