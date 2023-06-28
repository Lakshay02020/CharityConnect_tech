import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./EventEdit.css"


const EventEdit=()=>{
    const {id}=useParams();

    const [data, setData] = useState(null);
    const [adress, setAdress] = useState('jsi');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [description,setDescription]=useState('');
   
    console.log(name);
        
 
    //   console.log(profile);
     
    const handleSubmit=async (event)=>{
        event.preventDefault();
        console.log("uidi");
        // console.log({ name, description, email, website,contact,location });

        let newItem={name:name,adress:adress,description:description,date: date, time:time}
          
        try {
         
          const response = await fetch(`http://localhost:5161/api/event/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
          });
         
          
        } catch (error) {
          //setError('Error creating item');
          console.log('Error fetching data:', error);
        }
    }

  

    return(
        <form onSubmit={handleSubmit} className="signup-form">

            <h2>Edit</h2>

            <label>

                <span>Name of Event</span>

                <input

                    type="text"

                    onChange={(e) => setName(e.target.value)}
                    // placeholder={profile[0].id}
                    value={name}

                />

            </label>

            <label>

                <span>Description</span>

                <input

                    type="text"

                    onChange={(e) => setDescription(e.target.value)}
                    // placeholder={profile[0].email}
                    value={description}

                />

            </label>

           
            <label>

                <span>Loaction</span>

                <input

                    type="text"

                    onChange={(e) => setAdress(e.target.value)}
                    // placeholder={profile[0].contact}
                    value={adress}

                />

            </label>

            <label>

                <span>Date</span>

                <input

                    type="date"

                    onChange={(e) => setDate(e.target.value)}
                    // placeholder={profile[0].website}
                    value={date}

                />

            </label>

            <label>

                <span>Time</span>

                <input

                    type="time"

                    onChange={(e) => setTime(e.target.value)}
                    // placeholder={profile[0].description}
                    value={time}

                />

            </label>


            <button className="btn">

                SAVE

            </button>

        </form>
    )
}

export default EventEdit