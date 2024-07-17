import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css'


function Navbar(){
    
   const Navigate=useNavigate()

   const handelLogoutbutton=()=>{
         Navigate('/')
   }
    return(
        <div className="Navbar-container">
            <ul>
                <li><Link to={`/dashboard/`}>Home</Link></li>
                <li><Link to='/crops'>Crops</Link></li>
                <li><Link to='/schemes'>Government Schemes</Link></li>
                <li><Link to='/status'>Scheme Status</Link></li>
                <li onClick={handelLogoutbutton}><Link>Logout</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;