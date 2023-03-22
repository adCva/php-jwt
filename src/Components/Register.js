import React, { useState } from 'react';
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        gender: "",
        password: ""
    });

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser);

        axios.post("http://localhost/react-login/register", newUser).then((res) => {
            navigate("/");
        }).catch(err => {
            console.log(err);
        });
    };


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <select class="form-control" name="gender" onChange={handleChange} >
                    <option value="" selected >Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="primary" type="submit">Sign Up</Button>
            </div>
            
        </Form>
    )
}

export default Register;