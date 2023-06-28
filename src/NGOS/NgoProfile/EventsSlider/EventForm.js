import { useState } from "react";
import "./EventForm.css"
import { useParams } from "react-router-dom";
const EventForm=()=>{

  const {id}=useParams();

  const [data,setData]=useState(null);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  console.log(typeof(id))

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log({ title, address, date, time, description });
        
        let newItem={name:title,description:description,adress:address,date: date, time:time,ngoId:id.toString()}
        
        try {
         
          const response = await fetch(`http://localhost:5161/api/event`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
          });
          const createdItem = await response.json();
          setData([...data, createdItem]);
          
        } catch (error) {
          //setError('Error creating item');
          console.log('Error fetching data:', error);
        }
      };




    return(
      <form onSubmit={handleSubmit} className="event-form">
      <h2>Event Detail</h2>
      <label>
          <span>Title :</span>
          <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
          />
      </label>
      <label>
          <span>Address :</span>
          <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
          />
      </label>
      <label>
          <span>Date :</span>
          <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
          />
      </label>
      <label>
          <span>Time :</span>
          <input
              type="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
          />
      </label>
      <label>
          <span>Description :</span>
              <input 
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description} 
              />
          
      </label>
      <button className="btn">
          Add Event
      </button>
  </form>
    )
}

export default EventForm