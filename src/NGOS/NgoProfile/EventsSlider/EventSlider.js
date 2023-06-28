import { useEffect, useState } from "react";
import EventCard from "./EventCard"

const EventSlider=(props)=>{
   
   

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
      
      // console.log(data);
      // console.log(data[0]);
      const x=data.filter((dat,index)=>(
      
         dat.ngoId==props.id
         
      ));
      //setProfile(x);
      events=x;
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

export default EventSlider