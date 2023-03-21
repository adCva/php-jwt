import React, { useState } from 'react';
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost/react-login/login.php", data).then((res) => {
      navigate("/dash", {
        state: {
          token: res.data.token
        }
      });
    }).catch (err => console.log(err))
  };


  return (
    <div className='container mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
        </Form.Group>


        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default Login;