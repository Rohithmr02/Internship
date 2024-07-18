import "../AdminHome/AdminHome.css";
import AdminNav from "../AdminNav/AdminNav";
import Axios from "axios";
import { useEffect, useState } from "react";
import {
  Tooltip,
  Legend,
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

function AdminHome() {
  const [cropcount, setcropcount] = useState(0);
  const [schemecount, setschemecount] = useState(0);
  const [usercount, setusercount] = useState(0);

  const Data = [
    { name: "Crops", Totalcount: cropcount },
    { name: "Schemes", Totalcount: schemecount },
    { name: "Users", Totalcount: usercount },
  ];

  const getusercount = async () => {
    await Axios.get("https://internship-c5up.onrender.com/user/all/userdetails")
      .then((result) => {
        setusercount(result.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getschemecount = async () => {
    await Axios.get("https://internship-c5up.onrender.com/schemes/schemedetails")
      .then((result) => {
        setschemecount(result.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getcropcount = async () => {
    await Axios.get("https://internship-c5up.onrender.com/crops/cropdetails")
      .then((result) => {
        setcropcount(result.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getcropcount();
    getschemecount();
    getusercount();
  }, [cropcount, schemecount, usercount]);
  return (
    <div className="AdminHome-conatiner">
      <div className="dashboard-navbar">
        <AdminNav />
      </div>
      <div className="AdminHome-content">
        <div className="dashboard-content-heading">
          <h1>Farmer Government Aided Schemes</h1>
          <h3>Welcome <span>Admin</span></h3>
        </div>
        <div className="AdminHome-content-details">
          <div className="dashboard-admincontent-details">
            <LineChart
              width={750}
              height={250}
              data={Data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Totalcount" stroke="black" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
