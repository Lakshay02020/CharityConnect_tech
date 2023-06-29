import { Link } from "react-router-dom"
import image from '../../Ngo/tesla.jpg';
import EmailIcon from '@mui/icons-material/Email';

const Header=(props)=>{
    return(
        <div style={{display:'flex'}}>
           <div style={{width: '8rem',
    height: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 100px',
    borderRadius: '100px',
    boxSizing: 'border-box',
    boxShadow: '4px 4px 7px 1px #c0bcbc'}} >
                  <img src={image} style={{width:'100%',height:'100%', backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover',borderRadius: '100px'}}/>
            </div>
           <div>
            
               <div className="ngoName" style={{fontSize: 'xxx-large'}}>
                   {props.name}
               </div>
               <div className="disc" style={{width: 'fit-content'}}>
                   {props.disc}
               </div>
               <div className="disc" style={{width: 'fit-content',margin: '11px 0px',
    fontSize: '17px'}}>
                   <EmailIcon style={{fontSize:'20px'}}/>  {props.email}
               </div>
            
           </div>

           <Link to={`/Ngos/Edit/${props.id}`}>
           <button type="button" class="btn btn-info" style={{marginLeft: '240px',
    width: '80px',
    background: '#bffbf5',
    color: '#002285',
    border: 'none',position: 'absolute',
    right: '85px'}}>Edit</button>
           </Link>

           

           
        </div>
    )
}

export default Header