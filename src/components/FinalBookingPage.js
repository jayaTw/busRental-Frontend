import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const FinalBooking = () => {
    const { state } = useLocation()
    const { busId,busTicket } =state
    const [userData,setUserData] = useState({
        custName:'',
        custPhone:'',
        custEmail:''
    })


    const handleChange=(event,property)=>{
        setUserData({...userData,[property]:event.target.value})
    }

    console.log("-----userdata--------",userData) // user data is getting stored


    return (
    <div className='container' >
        <br></br>
    <Form>
        <div className='card-header'>
            <h1 align="center">Payment</h1>
            <br></br>
        </div>
        <div className='card-body'>
            <div className='row'>
                <div className='col'>
                    <Form.Control type="text" placeholder="Enter Customer Name" 
                    onChange={(e)=>handleChange(e,'custName')}></Form.Control>
                </div>
                <div className='col'>
                    <Form.Control type="text" placeholder="Enter Customer Phone Number"
                    onChange={(e)=>handleChange(e,'custPhone')}></Form.Control>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className='card-body'>
            <div className='row'>
                <div className='col'>
                    <Form.Control type="email" placeholder="Enter Customer email-id"
                    onChange={(e)=>handleChange(e,'custEmail')}></Form.Control>
                </div>
                <div className='col'>
                    <Form.Control type="number" placeholder={busTicket} disabled ></Form.Control>
                </div>
            </div>
        </div>
        <br></br>
        <div className='card-footer' >
            <center><Button ><a href="#" style={{color:'white' , textDecoration:'none'}}>Pay Now</a></Button></center>
        </div>
    </Form>
    </div>
    )
}