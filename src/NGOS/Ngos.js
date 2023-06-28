//import Ngo from "./Ngo/Ngo"

import { BrowserRouter, Link, Route, Router, Routes, useParams } from "react-router-dom";
import Ngo from "./Ngo/Ngo";
import { useEffect, useState } from "react";

const Ngos=(props)=>{
    const {Ngos}=props;
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

  console.log(data);


  const ngos=[
    {
      Name: "Being human",
      tags:[
        "Food","Shelter","Cloths"
      ],
      members:9178
    },
    {
      Name:"No Being human",
      tags:[
        "party","get Drunk"
      ],
      members:98283728
    },
    {
      Name:"No Being human",
      tags:[
        "party","get Drunk"
      ],
      members:98283728
    }
  ]

    if(data==null){
      return null;
    }

    
    return(
        <div className="Ngos" style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
            
           {data.map((ngo, index) => (
                
                <Link to={`/Ngos/${ngo.id}`} style={{textDecoration:'none'}}><Ngo ngo={ngo}/></Link>
                
            
      ))}
        </div>
    )
}

export default Ngos