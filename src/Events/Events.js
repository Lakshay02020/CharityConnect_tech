import { useEffect, useState } from "react";
import EventCard from "../NGOS/NgoProfile/EventsSlider/EventCard"

const Events=(props)=>{
   
   

    const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5161/api/event');
      const jsonData =await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  
  let events=null;
  

    if(data){
   
     
      events=data;
      console.log(events);
     
    }
    else{
      return null;
    } 
    
    return(
    
            <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>

              
           {events.map((event, index) => (
             
             <EventCard event={event}/>
        
           ))}
        </div>
   
    )
}

export default Events