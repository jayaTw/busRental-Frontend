import {Form, Button, Table} from 'react-bootstrap';

export const BookTicket=()=>{
    return (
      <>
        <section className='book-ticket mt-100'>
          <div className='container'>
            <Form>        
              <div className="card" style={{margin:'0px 150px'}}>
                <div className="card-header">
                  <center><h1>Book Ticket</h1></center>
                </div>
                <div className="card-body">                
                  <div className='row'>
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label>Source</Form.Label>
                              <Form.Select>
                                  <option>Delhi</option>
                                  <option>Agra</option>
                                  <option>Mumbai</option>
                              </Form.Select>
                          </Form.Group>  
                      </div>
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label>Destination</Form.Label>
                              <Form.Select>
                                  <option>Delhi</option>
                                  <option>Agra</option>
                                  <option>Mumbai</option>
                              </Form.Select>
                          </Form.Group>  
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label className='mt-10'>Date</Form.Label>
                              <Form.Control type="date" />
                          </Form.Group> 
                      </div>  
                      <div className='col-lg-6'>
                          <Form.Group>
                              <Form.Label className='mt-10'>No. Of Seats</Form.Label>
                              <Form.Control type="number" placeholder='Enter no. of seats'/>
                          </Form.Group> 
                      </div>
                  </div>     
                  <br/>
                </div>
                <div className="card-footer">
                  <center><Button type="submit" variant="success"><a href="listOfBuses" style={{color:"white",textDecoration:"none"}}>Book Ticket</a></Button>{' '}</center>
                </div>
              </div>
            </Form>
          </div>
        </section>
      </>
    )
}