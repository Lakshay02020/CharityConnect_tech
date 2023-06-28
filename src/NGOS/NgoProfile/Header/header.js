import { Link } from "react-router-dom"

const Header=(props)=>{
    return(
        <div>
           <div>
              <img className="logo"/>
           </div>
           <div>
               <div className="ngoName">
                   Being human
               </div>
               <div className="disc">
                   Hey How are you
               </div>
           </div>
           <Link to={`/Ngos/Edit/${props.id}`}>
           <div className="editProfile">Edit</div>
           </Link>
        </div>
    )
}

export default Header