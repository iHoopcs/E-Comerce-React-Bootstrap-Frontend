
import Product from "./Product";
import {Container, Nav, Navbar} from "react-bootstrap";

function ShoesNavbar ()  {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/clothes">Clothes</Nav.Link>
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
export default function Shoes(props) {
    //fetch props from index.js useState variable
    const { shoes } = props;
    return (
        <>
            <ShoesNavbar />
            <div className='container card-container'>
                <div className='row'>
                    {
                        //loop shoes array -> display info for each shoe item
                        shoes.map((item) => {
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