import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Header from "../Header";
import './LoginSignup.css';
export default function Login(){
    return (
        <>
            <Header />
            <div className=' container form-container mt-5'>
                <h2 className='form-title'> Please enter login credentials</h2>
                <Form>
                    <div className='col-12'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>

        </>
    );
}