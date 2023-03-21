import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useJwt } from "react-jwt";

function Dash() {
  const navigate = useNavigate();
  const location = useLocation();
  let token = "";
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (!location) {
      navigate("/");
    } else {
      token = location == null ? "" : location.state.token;
      axios.get(`http://localhost/react-login/getUser.php?token=${token}`).then(res => {
        if (res.status !== 200) {
          navigate("/");
        } else {
          setUserDetails({...res.data.data});
        }
      }).catch(err => console.log(err));
    }

  }, []);

  const logout = () => {
    token = "";
    navigate("/");
  }

  return (
    <div>
        <Header />
        <div className='container mt-4'>
          <h1>Hello, {userDetails.name}</h1>
          <button className="mt-3 btn btn-warning" onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Dash;