import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './CartCheckout.css';
import axios from "axios";
import DisplayCheckoutItem from "./DisplayCheckoutItem";
function CheckoutNavbar(props){
    //use props to fetch cartItem length in index.js & display #ofitems in cart
    const {cart} = props;
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">E-Commerce Shopping</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/shoes">Shoes</Nav.Link>
                        <Nav.Link href="/clothes">Clothes</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/cart'>
                            Cart
                            {
                                //render cart count
                                //display cart length as badge, if empty display nothing
                                cart.length ? (
                                    <button className='badge'>{cart.length}</button>
                                ): ('')
                            }
                        </Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/signup'>Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default function Checkout(props){

    const REMOTE_API_URL = 'http://springbootbackendecommerce-env.eba-biverqpa.us-east-2.elasticbeanstalk.com';
    //const LOCAL_API_URL = 'http://localhost:5000';

    const { cart } = props;

    //hook to switch pages on form submission -> show order confirmation
    const navigate = useNavigate();

    const placeOrder = () =>{
        //send delete request -> delete all cart items in db
        axios.delete(REMOTE_API_URL + '/resetCart')
            .then(response => {console.log(response)});

        //onclick -> go to route
        navigate('/confirmationPage')
    }

    return(
        <>
            <CheckoutNavbar cart={cart}/>
            <h1 className='checkout-form-title'>Checkout</h1>
            <div className='container mt-4 mb-4'>
                <div className='row'>
                    <div className='col-7 checkout-column-1 mx-5'>
                        <h1 className='home-display-title mt-4'>Shipping & Payment</h1>
                        <div className='container p-5'>
                            <Form>
                                <div className='row-cols-2 d-flex '>
                                    <Form.Group className="mb-3 mx-0" controlId="formBasicEmail">
                                        <Form.Control placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='mx-2' placeholder="Last Name" />
                                    </Form.Group>
                                </div>

                                <Form.Group>
                                    <Form.Control className='mb-3' placeholder='Address'/>
                                </Form.Group>

                                <div className='row-cols-3 d-flex '>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control placeholder="City" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='mx-2' placeholder="State" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='mx-3 mb-5' placeholder="Zip Code" />
                                    </Form.Group>
                                </div>

                                <div className='row-cols-3 d-flex '>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='mx-2'>Card Number</Form.Label>
                                        <Form.Control placeholder="Card Number" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='mx-3'>Expiration Date</Form.Label>
                                        <Form.Control className='mx-2' placeholder="MM/YY" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className='mx-4'>Security Code</Form.Label>
                                        <Form.Control className='mx-3 mb-5' placeholder="XXX" />
                                    </Form.Group>
                                </div>
                                <Button variant="outline-info" type="submit" onClick={placeOrder}>
                                    Place Order
                                </Button>
                            </Form>
                        </div>
                    </div>

                    <div className='col checkout-column-1'>
                        <h1 className='in-your-cart-title mb-4'>In Your Cart</h1>
                        {
                            cart.map((item) => <DisplayCheckoutItem item={item}/>)

                        }
                    </div>
                </div>
            </div>

        </>
    );
}