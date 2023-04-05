import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Header from "../Header";

export default function Signup(){
    return (
        <>
            <Header />
            <div className='container form-container '>
                <h2 className='form-title'>Please fill out information</h2>
                <Form action='http://localhost:8080/addUser' method='post'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name='firstName' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" name='lastName' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Account Username</Form.Label>
                        <Form.Control type="text" placeholder="Account Username" name='username' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Account Password</Form.Label>
                        <Form.Control type="password" placeholder="Account Password" name='password' />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    );
}