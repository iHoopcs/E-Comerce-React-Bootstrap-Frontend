import {Nav, Navbar, Container} from "react-bootstrap";
export default function Header ()  {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/shoes">Shoes</Nav.Link>
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