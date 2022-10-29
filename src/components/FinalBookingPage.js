import { Form, Button, Table } from 'react-bootstrap';

export const FinalBooking = () => {
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
                    <Form.Control type="text" placeholder="Enter Customer Name"></Form.Control>
                </div>
                <div className='col'>
                    <Form.Control type="text" placeholder="Enter Customer Phone Number"></Form.Control>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className='card-body'>
            <div className='row'>
                <div className='col'>
                    <Form.Control type="email" placeholder="Enter Customer email-id"></Form.Control>
                </div>
                <div className='col'>
                    <Form.Control type="number" placeholder="Amount" disabled ></Form.Control>
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