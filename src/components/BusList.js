import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


export const BusList = () => {
    const [data,setData]=useState([])
    const { state } = useLocation();
    const { busData } = state;
    const navigate = useNavigate();


    const fetchData = () => {
        return fetch("http://127.0.0.1:8000/Bus/searchBus"
        , {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(busData),
          })
              .then((response) => response.json())
              .then((respData) => setData(respData));
      }
    

      useEffect(() => {
        fetchData();
        
      },[])

      const bookNow=(busid,busticket)=>{
        navigate("/finalBooking",{
            state:{
                busId:busid,
                busTicket:busticket    
            }
        })
      }


      const DisplayData=data.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.busId}</td>
                    <td>{info.busNumber}</td>
                    <td>{info.startDestination}</td>
                    <td>{info.endDestination}</td>
                    <td>{info.startTime}</td>
                    <td>{info.departureDate}</td>
                    <td>{info.ticketPrice}</td>
                    <td>{info.availableSeats}</td>
                    <td>{info.totalSeats}</td>
                    <td>{info.contactNumber}</td>
                    <td><Button onClick={()=>bookNow(info.busId,info.ticketPrice)} variant="success">Book Now</Button></td> 
                </tr>
            )
        }
    )


    return (
        <div className="container">
            <br />
            <h1 align="center">Select Your Bus</h1>

            <br />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Bus Number</th>
                        <th scope="col">Source</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Starting Time</th>
                        <th scope="col">Departure Date</th>
                        <th scope="col">Ticket price</th>
                        <th scope="col">Number of seats available</th>
                        <th scope="col">Total seats</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col"></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
       
        
    )
}