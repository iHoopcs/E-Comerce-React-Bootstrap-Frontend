import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Header from "./Header";
export default function Signup(){
    return (
        <>
            <Header />
            <div className='container form-container '>
                <h2 className='form-title'>Please fill out information</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="fName" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lName" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Account Username</Form.Label>
                        <Form.Control type="username" placeholder="Account Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Account Password</Form.Label>
                        <Form.Control type="password" placeholder="Account Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    );
}