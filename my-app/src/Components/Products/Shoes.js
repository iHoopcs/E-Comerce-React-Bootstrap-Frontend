import './Products.css';
import ProductCard from "./ProductCard";
import {Container, Nav, Navbar} from "react-bootstrap";


function ShoesNavbar (props)  {
    const { cart } = props;

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' className='mb-4'>
                <Container>
                    <Navbar.Brand href="/">E-Commerce Shopping</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/clothes">Clothes</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/cart'>
                            Cart
                            {
                                cart.length === 0 ? '': <button className='badge'>{cart.length}</button>
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
    const { shoes, cart } = props;

    return (
        <>
            <ShoesNavbar cart={cart}/>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    {
                        //loop shoes array -> display info for each shoe item
                        shoes.map((item) => {
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