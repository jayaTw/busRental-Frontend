import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const BookTicket = () => {

  const [busData, setBusData] = useState({
    source: "",
    destination: "",
    date: "",
    noOfSeats: ""
  })
  const [resp, setResp] = useState([])
  const navigate = useNavigate();


  const handleChange = (event, property) => {
    setBusData({ ...busData, [property]: event.target.value });
  }


  const SubmitForm = (event) => {
    event.preventDefault()

    navigate('/listOfBuses', {
      state:
        { busData }
    });
  }


  return (
      <section className='book-ticket mt-100'>
        <div className='container'>
          <Form onSubmit={SubmitForm} className="Form">
            <div className="card" style={{ margin: '0px 150px' }}>
              <div className="card-header">
                <center><h1>Book Ticket</h1></center>
              </div>
              <div className="card-body">
                <div className='row'>
                  <div className='col-lg-6'>

                    <Form.Group>
                      <Form.Label>Source</Form.Label>
                      <Form.Select name="source"
                        onChange={(e) => handleChange(e, 'source')} required >
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
                      <Form.Select name="destination"
                        onChange={(e) => handleChange(e, 'destination')} required>
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
                      <Form.Control name="date" type="date"
                        onChange={(e) => handleChange(e, 'date')} required />
                    </Form.Group>
                  </div>
                  <div className='col-lg-6'>
                    <Form.Group>
                      <Form.Label className='mt-10'>Number of Seats</Form.Label>
                      <Form.Control name="numberOfSeats" type="number"
                        onChange={(e) => handleChange(e, 'noOfSeats')}
                        placeholder='Enter no. of seats' required />
                    </Form.Group>
                  </div>

                </div>
                <br />
              </div>
              <div className="card-footer">

                <center><Button type="submit" variant="success" className="submitButton">Book Ticket
                </Button>{' '}</center>
              </div>
            </div>
          </Form>
        </div>
      </section>
  )
}