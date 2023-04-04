import ProductCard from "./ProductCard";
import './Products.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "../Checkout/Cart";

function ClothesNavbar ()  {
    //useContext to fetch global variable
    const {cart} = useContext(CartContext);
    let numCartItems = cart.length;

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' className='mb-4'>
                <Container>
                    <Navbar.Brand href="/">E-Commerce Shopping</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/shoes">Shoes</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/cart'>
                            Cart
                            {
                                //render cart count
                                //display cart length as badge, if empty display nothing
                                numCartItems ? (
                                    <button className='badge'>{numCartItems}</button>
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

export default function Clothes(props) {
    //fetch clothes from index.js useState variable
    const { clothes } = props;

    return (
        <>
            <ClothesNavbar/>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                        {
                            //loop clothes array  & display data for each clothing item
                            clothes.map((item) => {
                                return (
                                    <ProductCard
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })
                        }
                </div>
            </div>
        </>
    );
}