import ProductCard from "./ProductCard";
import './Products.css';
import {Container, Nav, Navbar} from "react-bootstrap";

function ClothesNavbar (props)  {
    const { cart } = props;

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

export default function Clothes(props) {
    //fetch clothes from index.js useState variable
    const { clothes, cart } = props;

    return (
        <>
            <ClothesNavbar cart={cart}/>
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