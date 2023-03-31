import Product from "./Product";
import './App.css'
import {Container, Nav, Navbar} from "react-bootstrap";
function ClothesNavbar ()  {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/shoes">Shoes</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/signup'>Signup</Nav.Link>
                        
                    </Nav>

                </Container>
            </Navbar>
        </>
    );
}

export default function Clothes(props) {
    const { clothes } = props;
    //fetch clothes from index.js useState variable
    return (
        <>
            <ClothesNavbar />
            <div className='container card-container'>
                <div className='row'>

                        {
                            //loop clothes array  & display data for each clothing item
                            clothes.map((item) => {
                                return (
                                    <Product item={item}/>
                                )

                            })
                        }
                </div>
            </div>
        </>
    );
}