import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./NgoEdit.css"


const NgoEdit=()=>{
    const {id}=useParams();

    const [data, setData] = useState(null);
    const [name, setName] = useState('jsi');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [description,setDescription]=useState('');
    const [location,setLocation]=useState('');

    console.log(name);
        
 
    //   console.log(profile);
     
    const handleSubmit=async (event)=>{
        event.preventDefault();
        console.log("uidi");
        console.log({ name, description, email, website,contact,location });

        let newItem={name:name,description:description,location:location,email: email, contact:contact,website:website}
          
        try {
         
          const response = await fetch(`http://localhost:5161/api/ngo/${id}`, {
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

                <span>Name of Ngo</span>

                <input

                    type="text"

                    onChange={(e) => setName(e.target.value)}
                    // placeholder={profile[0].id}
                    value={name}

                />

            </label>

            <label>

                <span>Email</span>

                <input

                    type="text"

                    onChange={(e) => setEmail(e.target.value)}
                    // placeholder={profile[0].email}
                    value={email}

                />

            </label>

           
            <label>

                <span>Contact</span>

                <input

                    type="number"

                    onChange={(e) => setContact(e.target.value)}
                    // placeholder={profile[0].contact}
                    value={contact}

                />

            </label>

            <label>

                <span>Website</span>

                <input

                    type="text"

                    onChange={(e) => setWebsite(e.target.value)}
                    // placeholder={profile[0].website}
                    value={website}

                />

            </label>

            <label>

                <span>Description</span>

                <input

                    type="text"

                    onChange={(e) => setDescription(e.target.value)}
                    // placeholder={profile[0].description}
                    value={description}

                />

            </label>

            <label>

                <span>Location</span>

                <input

                    type="text"

                    onChange={(e) => setLocation(e.target.value)}
                    // placeholder={profile[0].website}
                    value={location}

                />

            </label>

            <button className="btn">

                SAVE

            </button>

        </form>
    )
}

export default NgoEdit