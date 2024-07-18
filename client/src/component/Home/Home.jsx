import "../Home/Home.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { PieChart, Pie, Tooltip } from "recharts";

function Home() {
  const [data, setdata] = useState([]);
  const [cropcount, setcropcount] = useState(0);
  const [schemecount, setschemecount] = useState(0);
  var [schemeapplied, setschemeapplied] = useState(0);
  const getlocaldata = JSON.parse(localStorage.getItem("email"));
  
  const Data = [
    { name: "Total No Of Crops", value: cropcount },
    { name: "Total No Of Schemes", value: schemecount },
    { name: "Total No Of Schemes Applied", value: schemeapplied },
  ];
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
    const getdata = async () => {
    await Axios.post("https://internship-c5up.onrender.com/user/userdetails", {
      email: getlocaldata,
    })
      .then((result) => {
        setdata(result.data);
        setschemeapplied(result.data.schemes.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    getdata();
  }, [getlocaldata]);
  
  useEffect(() => {
    getcropcount();
    getschemecount();
  }, [cropcount, schemecount]);
  return (
    <div className="dashboard-component">
      <div className="dashboard-navbar">
        <Navbar />
      </div>
      <div className="dashboard-content">
        <div className="dashboard-content-heading">
          <h1>Farmer Government Aided Schemes</h1>
        </div>
        <div className="dashboard-content-details">
          <div className="crops-schemes">
            <div className="profile">
              <h3>
                Welcome , <span>{data.username}</span>
              </h3>
            </div>
            <div className="check-status">
              {/* <h3>Pie Chart</h3> */}
              <PieChart width={400} height={200}>
                <Pie
                  data={Data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                  isAnimationActive={true}
                />
                <Pie
                  data={Data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  fill="#82ca9d"
                  isAnimationActive={true}
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div className="scheme-status">
            <div className="scheme">
              <h3>View Schemes Detail</h3>
              <p>
                By supporting farmers through these schemes, we ensure food
                security, economic stability, and the advancement of
                agricultural communities.
              </p>
            </div>
            <div className="crops">
              <h3>View Crops Detail</h3>
              <p>
                Embracing the benefits of crops ensures a healthier, more
                sustainable future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
