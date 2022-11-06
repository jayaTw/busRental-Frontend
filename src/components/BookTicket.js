import {  useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const BookTicket=()=>{

  const navigate = useNavigate();
  const submitForm=(event)=>{
    event.preventDefault()
    
    navigate('/listOfBuses', { state: 
      // {source:data.source,destination:data.destination,date:data.date,noOfSeats:data.noOfSeats} 
      {source:event.target.source.value,
        destination:event.target.destination.value,
        date:event.target.date.value,
        noOfSeats:event.target.numberOfSeats.value}
    });
  }
  
    return (
      <>
   
        
        <section className='book-ticket mt-100'>
          <div className='container'>
            <Form onSubmit={submitForm}>        
              <div className="card" style={{margin:'0px 150px'}}>
                <div className="card-header">
                  <center><h1>Book Ticket</h1></center>
                </div>
                <div className="card-body">                
                  <div className='row'>
                      <div className='col-lg-6'>
                      
                          <Form.Group>
                              <Form.Label>Source</Form.Label>
                              <Form.Select name="source" required>
                              <option disabled selected value=''>Select Source</option>
                                  <option value="Delhi">Delhi</option>
                                  <option value="Agra">Agra</option>
                                  <option value="Mumbai">Mumbai</option>
                              </Form.Select>
                          </Form.Group>  
                      </div>
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label>Destination</Form.Label>
                              <Form.Select name="destination" required>
                              <option disabled selected value=''>Select Destination</option>
                                  <option value="Delhi">Delhi</option>
                                  <option value="Agra">Agra</option>
                                  <option value="Mumbai">Mumbai</option>
                              </Form.Select>
                          </Form.Group>  
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label className='mt-10'>Date</Form.Label>
                              <Form.Control name="date" type="date" required />
                          </Form.Group> 
                      </div>  
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label className='mt-10'>Number of Seats</Form.Label>
                              <Form.Control name="numberOfSeats" type="number" placeholder='Enter no. of seats' required />
                          </Form.Group> 
                      </div>
                     
                  </div>     
                  <br/>
                </div>
                <div className="card-footer">
                  
                  <center><Button type="submit" variant="success">Book Ticket
                    </Button>{' '}</center>
                </div>
              </div>
            </Form>
          </div>
        </section>
 
      </>
    )
}