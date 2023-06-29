import { useEffect, useState } from "react";
import Donation from "./Donation";

const Donations=(props)=>{

   

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5161/api/transaction');
      const jsonData =await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  let donations=null;
  
  if(data){
      
    // console.log(data);
    // console.log(data[0]);
    const x=data.filter((dat,index)=>(
    
       dat.ngoId==props.id
       
    ));
    //setProfile(x);
    donations=x;
    console.log(donations);
   
  }
  else{
    return null;
  } 

  console.log(donations[0]);
  
    return(
        <div style={{display:"flex",alignItems:"center",flexWrap:"wrap"}}>

              
        {donations.map((donation, index) => (
          
          <Donation donation={donation}/>
     
        ))}
     </div>
    )
}

export default Donations