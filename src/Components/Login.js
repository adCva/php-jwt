import React, { useState } from 'react';
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


function Login() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost/react-login/login", loginData).then((res) => {
            console.log(res);
            cookies.set('token', res.data.token, { path: '/', secure: true, sameSite: "None" });
            console.log(cookies.get('token'));
            navigate("/home");
        }).catch (err => console.log(err))
    };


    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">Log In</Button>
            </div>
        </Form>
    )
}

export default Login;