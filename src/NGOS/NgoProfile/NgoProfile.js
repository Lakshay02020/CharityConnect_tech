import { Link, useParams } from "react-router-dom";
import EventSlider from "./EventsSlider/EventSlider"
import Header from "./Header/header"
import { useEffect, useState } from "react";
import Donations from "./EventsSlider/Donations";

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
            <div className="header" style={{display:'flex'}}>
                <Header id={id} name={profile[0].name} disc={profile[0].description} email={profile[0].email}/>
            </div>
            <div>
                <div style={{display: 'flex',marginTop: '44px'}}>
                  <div style={{fontSize: 'xx-large',
    fontWeight: '400',
    marginLeft: '114px'}}>EVENTS </div>
                 
                  
                  <Link to={`/Ngos/AddEvent/${profile[0].id}`}><button type="button" class="btn btn-info" style={{marginLeft: '240px',
    
    background: '#bffbf5',
    color: '#002285',
    position:'absolute',
    right:'55px',
    border: 'none'}}>ADD EVENT</button></Link>
                </div>
                <EventSlider id={id}/>
            </div>

         <div style={{display: 'flex',marginTop: '44px'}}>
            <div style={{fontSize: 'xx-large',
    fontWeight: '400',
    marginLeft: '114px'}}>DONATIONS </div>
            <Link to={`/Ngos/AddEvent/${profile[0].id}`}><button type="button" class="btn btn-info" style={{marginLeft: '240px',
    
    background: '#bffbf5',
    color: '#002285',
    position:'absolute',
    right:'55px',
    border: 'none'}}>DONATE</button></Link>
        </div>

            <Donations id={id}/>
            
        </div>
    )
}

export default NgoProfile