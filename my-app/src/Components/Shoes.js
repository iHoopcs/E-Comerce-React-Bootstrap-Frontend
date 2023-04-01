import './App.css';
import Product from "./Product";
import {Container, Nav, Navbar} from "react-bootstrap";

function ShoesNavbar (props)  {
    //use props to fetch cartItem length in index.js & display #ofitems in cart
    const {numCartItems} = props;
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">E-Commerce Shopping</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/clothes">Clothes</Nav.Link>
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
export default function Shoes(props) {
    //fetch props from index.js useState variable
    const { shoes, onAdd, numCartItems } = props;
    return (
        <>
            <ShoesNavbar numCartItems={numCartItems}/>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    {
                        //loop shoes array -> display info for each shoe item
                        shoes.map((item) => {
                            return (
                                <Product
                                    key={item.id}
                                    item={item}
                                    onAdd={onAdd}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
}