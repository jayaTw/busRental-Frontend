import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import bgImg from '../images/bg1.jpeg';
import './style.css';
import {SignupService} from '../services/userService';

export const Signup = () =>{

    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    })

    const [error,setError]=useState({
        error:{},
        isError:false
    })

    useEffect(()=>{            // it calls when change in 'data'
        console.log(data);
    },[data])

    const handleChange=(event,property)=>{
        // console.log("change");
        // console.log(event.target.value);
        setData({...data,[property]:event.target.value});
    }

    const resetData=()=>{
        setData({
            name:'',
            email:'',
            password:''
        })
    }

    const submitForm=(event)=>{
        event.preventDefault();        // prevent from reloading the page after submit

        // call server api for sending data using 'axios'
        // react-tosify = for display message

        SignupService(data).then((resp)=>{
            console.log(resp);
            console.log('user registered');
        }).catch((error)=>{
            console.log("error = "+error);
        })

    }


    return(
        <>
            <section className="login-section" style={{backgroundImage: 'url('+bgImg+')'}}>
                <div className='form-body'>
                    <Form className="inner-form" onSubmit={submitForm}>
                        <h3>Sign Up</h3>
                        <hr />
                        <Form.Group>
                            <Form.Label>Enter Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" 
                              onChange={(e)=>handleChange(e,'name')}
                              value = {data.name}
                            />
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" 
                                onChange={(e)=>handleChange(e,'email')}
                                value={data.email}
                            />
                        </Form.Group>                         
                        <Form.Group>
                            <Form.Label className='mt-10'>Enter Your Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" 
                                onChange={(e)=>handleChange(e,'password')}
                                value = {data.password}
                            />
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label className='mt-10'>Enter Your Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your confirm password" />
                        </Form.Group> 
                        <br/>
                        {/* <Button type="button" className="w-100" onClick={resetData}>Reset</Button>    */}
                        <Button type="submit" className="w-100">Sign Up</Button>   
                        <p className='mt-10'>Already Registered? <span><a href="login">Login</a></span></p>          
                    </Form>
                </div>
            </section>
        </>
    )
} 
