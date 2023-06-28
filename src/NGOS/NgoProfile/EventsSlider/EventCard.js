import { Link } from "react-router-dom";
import image from '../../Ngo/tesla.jpg';
import { IconButton } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const EventCard=(props)=>{
  
  console.log(props.event);
    return(
        <div className="card" style={{width: '18rem',
          color: 'rgb(49, 84, 159)',
          margin: '50px 50px',
          boxShadow: '2px 2px 4px 2px skyblue',
          border: 'none'}}>
   
          <div style={{width:'18rem',height:'10rem',display:'flex',justifyContent:'center',alignItems:'center'}} >
  <img src={image} style={{width:'100%',height:'100%', backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}/>
</div>

 
  <div className="card-body">
    <h5 className="card-title" style={{width:'fit-content'}}>{props.event.name}</h5>
    <div style={{width:'fit-content',margin: '10px 0px'}}><LocationOnIcon fontSize="20px" style={{marginTop: '-4px'}}/>    {props.event.adress}</div>
   
    <div style={{width:'fit-content',margin: '10px 0px'}}><CalendarTodayIcon fontSize="20px" style={{marginTop: '-4px'}}/>    {props.event.date}</div>
    <div style={{width:'fit-content',margin: '10px 0px'}}><AccessTimeIcon fontSize="20px" style={{marginTop: '-4px'}}/>    {props.event.time}</div>
    <Link to={`/Events/Edit/${props.event.id}`}>
    <button type="button" class="btn btn-info" style={{marginLeft: '170px',
    width: '80px',
    background: '#bffbf5',
    color: '#002285',
    border: 'none'}}>Edit</button>
    </Link>
  </div>
</div>
    )
}

export default EventCard