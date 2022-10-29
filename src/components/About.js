import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const About = () => {
    return (
        <>
            <div className='container'>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3 mt-100">
                <Tab eventKey="about" title="Why us?">
                    <Container>
                        <Row className="justify-content-md-left">
                            <Col xs >
                                <p>
                                    zingbus is covering 500+ cities in 17 states in North, west & south India, with a fleet of over 350 buses. Online bus bookings can be done quickly and easily using zingbus (web & App) or other OTA platforms. We have already served over 2 million customers and are India's most dependable bus service.

                                    The advantages of booking online bus tickets with zingbus are as follows:

                                    Get Best Offers, Discounts & Cashbacks
                                    Get ₹250 on Sign Up
                                    Get ₹200 On Every Referral
                                    Free Travel Insurance up to ₹7.5 Lac
                                    Zero Cancellation Charges with Instant Refund
                                    Opt for a Carbon Neutral Ride
                                    Access to zingbus Premium Lounges
                                    24X7 WhatsApp Support
                                    Female-Friendly Rides
                                    Free Wi-Fi & Live Tracking
                                    Download the zingbus App to have a smoother experience of booking bus tickets online.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="book" title="Book Tickets Online">
                    <Container>
                        <Row className="justify-content-md-left">
                            <Col xs >
                                <p>
                                    zingbus is the best bus booking website and App to book bus tickets. Also, any transaction you make on the zingbus website or App is easy, safe & secure.

                                    You can book bus tickets online in a few simple steps:

                                    Enter the trip details in the "From City" and "To City" tab, respectively
                                    Select the date of your choice from the calendar and click on the "Search" button
                                    Select any bus of your choice from the list of buses displayed along their timings and prices, and then click on "select seat."
                                    Click "Book Now" after choosing your seat, boarding point, and drop-off location.
                                    Enter all the information needed, including passenger details, choose the best coupon code and click "Pay and Book Now."
                                    Complete the payment process by choosing one of the available payment methods.
                                    After completing the payment procedure, you will receive an E-ticket through SMS, Whatsapp message, and on the email address provided during the booking process.

                                    Also, every booking made from zingbus has a complimentary Travel Insurance providing Personal Accidental cover, Emergency Medical & Baggage Loss Cover up to 7.5 Lacs.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="cancellation" title="Free Cancellation" >
                    <Container>
                        <Row className="justify-content-md-left">
                            <Col xs >
                                <p>
                                    zingbus offers a free cancellation feature for all its users. You can cancel the ticket at any time before the journey begins and get the full refund instantly.

                                    Keeping uncertainties in mind, zingbus makes sure that all its customers are tension-free from the last-minute change of plans.ß
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
            </div>
        </>
    )
}