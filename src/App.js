import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventItem from './Events/Event/EventItem';
import sampleImg from './NGOS/Ngo/tesla.jpg'
import Ngos from './NGOS/Ngos';
import Ngo from './NGOS/Ngo/Ngo';
import Navbar from './Navbar/Navbar';
import NgoProfile from './NGOS/NgoProfile/NgoProfile';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NgoEdit from './NGOS/NgoProfile/NgoEdit';
import EventForm from './NGOS/NgoProfile/EventsSlider/EventForm';
import nearbyNGOs from './Navbar/NearbyNGOs'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Events from './Events/Events';
import EventEdit from './NGOS/NgoProfile/EventsSlider/EventEdit';
import LandingPage from './Pages/LandingPage';
import NGOSignup from './Pages/NGOSignup';
import NGOLogin from './Pages/NGOLogin';
import Footer from './Footer/Footer';

function App() {

  const eventDetails = { logo: 'sample', altText: 'Event Logo', title: 'Sample Event', startDate: '2023-07-01 10:00 AM', userJoined: 50, };
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5161/api/ngo');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.log('Error fetching data:', error);
  //   }
  // };

  // const newItem=null;

  // const createItem = async (newItem) => {
  //   newItem={contact:"",description:"",location:"",website:"",email:"",name:""}

  //   try {
     
  //     const response = await fetch('http://localhost:5161/api/ngo', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newItem),
  //     });
  //     const createdItem = await response.json();
  //     setData([...data, createdItem]);
      
  //   } catch (error) {
  //     //setError('Error creating item');
  //     console.log('Error fetching data:', error);
  //   }
  // };


  // if(!data){
  //   console.log("hsj")
  // }
  // else{
  //   //console.log(data[0]);
   
  //   createItem(newItem);
  // }

  
  
  
  return (
    

    <div className="App">
    
       <Navbar/>
       <BrowserRouter>
        <Routes>
          <Route exact path="/Ngos" Component={Ngos} ></Route>
          <Route exact path="/Ngos/:id" Component={NgoProfile} ></Route>
          <Route exact path="/Ngos/Edit/:id" Component={NgoEdit} ></Route>
          <Route exact path="/Ngos/AddEvent/:id" Component={EventForm} ></Route>
          <Route exact path="/Events" Component={Events} ></Route>
          <Route exact path="/Events/Edit/:id" Component={EventEdit} ></Route>
          <Route exact path="/nearbyNGOs" Component={nearbyNGOs}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/signup" Component={Signup}></Route>
          <Route exact path="/ngoSignup" Component={NGOSignup}></Route>
          <Route exact path="/ngoLogin" Component={NGOLogin}></Route>
          <Route exact path="/home" Component={LandingPage}></Route>
          {/* <Route exact path="/Event"Component={Ngos} ></Route> */}
          {/* <Ngos  Ngos={ngos}/> */}
          {/* <EventItem eventDetails={eventDetails}/>
          <NgoProfile/> */}
          </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
