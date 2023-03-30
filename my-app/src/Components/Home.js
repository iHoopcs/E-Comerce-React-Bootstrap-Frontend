import './App.css'
import {Nav, Navbar, Container} from "react-bootstrap";
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
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

const Body = () => {
    return (
        <>
            <div className='container body-container'>
                <h1>Body</h1>
            </div>
        </>
    )
}
export default function Home(){
    return(
        <>
            <div>
                <Header />
                <div>
                    <Body />
                </div>
            </div>


        </>
    );
}