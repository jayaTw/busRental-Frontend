import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export const CheckTickets=()=>{
    return (
        <>
        <div className='container'>
        <br/>
        <center><h1>Check Your Bookings</h1></center><br/>
        <Table striped bordered hover> 
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Bus Name</th>
          <th>Bus Number</th>
          <th>Bus Contact Number</th>
          <th>Arrival Time</th>
          <th>Departure Date</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Total Cost</th>
          <th>No. of seats</th>
          <th>Cancel ticket</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>User</td>
          <td>Dhano</td>
          <td>4553</td>
          <td>9876543210</td>
          <td>10:50</td>
          <td>14-Nov-2022</td>
          <td>Delhi</td>
          <td>Agra</td>
          <td>200</td>
          <td>5</td>
          <td><Button variant="danger">Cancel</Button>{' '}</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
        </>
    )
}