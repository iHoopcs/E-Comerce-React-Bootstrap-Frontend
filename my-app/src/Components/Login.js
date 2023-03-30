import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Header from "./Header";
import './App.css';
export default function Login(){
    return (
        <>
            <Header />
            <div className=' container form-container'>
                <h2 className='form-title'> Please enter login credentials</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </>
    );
}