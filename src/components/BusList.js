import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


export const BusList = ({userDetails}) => {
//    const user = useContext(BookTicketContext)
const {state} = useLocation();
const { source,destination,date,noOfSeats } = state; 
console.log("------------------------",source,destination,date,noOfSeats)
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
                    <tr>
                        <th scope="row">1</th>
                        <td>6787</td>
                        <td>Delhi</td>
                        <td>Agra</td>
                        <td>6:47</td>
                        <td>14-Nov-2022</td>
                        <td>500</td>
                        <td>10</td>
                        <td>30</td>
                        <td>9876543210</td>
                        <td><Button type="submit" variant="success"><a href="finalBooking" style={{color:"white",textDecoration:"none"}}>Book Now</a></Button></td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}