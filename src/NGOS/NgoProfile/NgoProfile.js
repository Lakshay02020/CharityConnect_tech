import { Link, useParams } from "react-router-dom";
import EventSlider from "./EventsSlider/EventSlider"
import Header from "./Header/header"
import { useEffect, useState } from "react";

const NgoProfile=(props)=>{

   const {id}=useParams();
   const {type}=useParams();
   
   

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5161/api/ngo');
      const jsonData =await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  
  let profile=null;
  

    if(data){
      

      const x=data.filter((dat,index)=>(
      
         dat.id==id
         
      ));
      //setProfile(x);
      profile=x;
    
    }
    else{
      return null;
    }

    
    return(
        <div>
            <div>
                <Header id={id}/>
            </div>
            <div>
                <div>
                  {type==="ngo"?  <div>Events </div>: <div>Events  user</div>}
                 
                  
                  <Link to={`/Ngos/AddEvent/${profile[0].id}`}><a href="">Add event</a></Link>
                </div>
                <EventSlider id={id}/>
            </div>
            <div>
                {profile[0].id}
            </div>
            <div>
                Users
            </div>
        </div>
    )
}

export default NgoProfile