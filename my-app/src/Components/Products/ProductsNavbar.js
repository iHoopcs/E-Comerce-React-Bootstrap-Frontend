import { Container, Nav, Navbar } from "react-bootstrap";

export default function ProductsNavbar(props) {
  const { cart } = props;

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" className="mb-4">
        <Container>
          <Navbar.Brand href="/">E-Commerce Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/shoes">Shoes</Nav.Link>
            <Nav.Link href="/clothes">Clothes</Nav.Link>
            <Nav.Link href="/accessories">Accessories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">
              Cart
              {cart.length === 0 ? (
                ""
              ) : (
                <button className="badge">{cart.length}</button>
              )}
            </Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
