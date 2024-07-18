
import './App.css';
import Home from './component/Home/Home';
import LoginPage from './component/LoginPage/LoginPage';
import RegisterPage from './component/RegisterPage/RegisterPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Crops from './component/crops/Crops';
import Schemes from './component/schemes/Schemes';
import Status from './component/Status/Status';
import AdminLogin from './component/AdminLogin/AdminLogin';
import AdminHome from './component/AdminHome/AdminHome';
import AddCrops from './component/AddCrops/AddCrops';
import AddScheme from './component/AddSchemes/AddScheme';
import Approve from './component/ApproveRequest/Approve';

function App() {
 
  return (
     <Router>
      <Routes>
        {/* user */}
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/Register' element={<RegisterPage/>}></Route>
        <Route path='/dashboard' element={<Home/>}></Route>
        <Route path='/crops' element={<Crops/>}></Route>
        <Route path='/schemes' element={<Schemes/>}></Route>
        <Route path='/status' element={<Status/>}></Route>
        {/* admin  */}
        <Route path='/Adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/Admindashboard' element={<AdminHome/>}></Route>
        <Route path='/Addcrops' element={<AddCrops/>}></Route>
        <Route path='/Addschemes' element={<AddScheme/>}></Route>
        <Route path='/Request' element={<Approve/>}></Route>
      </Routes>
     </Router>
  );
}

export default App;
