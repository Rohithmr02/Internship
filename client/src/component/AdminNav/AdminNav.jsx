import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../AdminNav/AdminNav.css'


function AdminNav(){
   const Navigate=useNavigate()

   const handelLogoutbutton=()=>{
         Navigate('/')
   }
    return(
        <div className="AdminNav-container">
            <ul>
                <li><Link to='/Admindashboard'>Home</Link></li>
                <li><Link to='/Addcrops'>Add Crops</Link></li>
                <li><Link to='/Addschemes'>Add Government Schemes</Link></li>
                <li><Link to='/Request'>Approve Request</Link></li>
                <li onClick={handelLogoutbutton}><Link>Logout</Link></li>
            </ul>
        </div>
    )
}

export default AdminNav;