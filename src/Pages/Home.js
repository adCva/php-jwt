import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Home() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  cookies.get('token');

  const [userDetails, setUserDetails] = useState({
    name: ""
  });

  let token = cookies.get('token');

  const logout = () => {
    token = "";
    cookies.remove("token", { secure: true, sameSite: "None" });
    navigate("/");
  };


  useEffect(() => {
      if (cookies.get('token') === "") {
        navigate("/");
      } else {
        axios.get(`http://localhost/react-login/getUser?token=${token}`).then(res => {
          if (res.status !== 200) {
            navigate("/");
          } else {
            setUserDetails({...userDetails, name: res.data.data.name});
          }
        }).catch(err => console.log(err));
      }

  }, []);


  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <div className='fake-container'>
          <div>
            <h1>Hello, {userDetails.name}</h1>
            <button className="mt-3 btn btn-warning" onClick={logout}>Logout</button>
          </div>
          <img src={userDetails.gender === "male" ? "./images/woman.png" : "./images/man.png"} alt="Avatar" />
        </div>
      </main>
    </div>
  )
}

export default Home;