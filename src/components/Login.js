import React from 'react';
import {Form, Button} from 'react-bootstrap';
import bgImg from '../images/bg1.jpeg';
import './style.css';
import { useEffect, useState } from 'react';
import { LoginService } from '../services/userService';

export const Login = () =>{
    const [user,setUser] = useState({
        emailId:'',
        password:''
    })

    const submitForm=(event)=>{
        event.preventDefault();   
        setUser({
            emailId: event.target.email.value,
            password:  event.target.password.value
        })
        LoginService(user).then((response)=>{console.log("----------------response---------",response)})
       
    }

    return(
        <>
            <section className="login-section" style={{backgroundImage: 'url('+bgImg+')'}}>
                <div className='form-body'>
                    <Form className="inner-form" onSubmit={submitForm}>
                        <h3>Login</h3>
                        <hr />
                        <Form.Group>
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" name="email" />
                        </Form.Group>                         
                        <Form.Group>
                            <Form.Label className='mt-10'>Enter Your Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" name="password" />
                        </Form.Group> 
                        <br/>
                        <Button type="submit" className="w-100">Log In</Button>   
                        <p className='mt-10'>Don't have an account? <span><a href="signup">Register</a></span></p>          
                    </Form>
                </div>
            </section>
        </>
    )
} 
