import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import Header from "../Header";
import './LoginSignup.css';
import {useNavigate} from "react-router-dom";
export default function Login(){
    let navigate = useNavigate();

    const toHomepage = () => {
        //redirect page to url
        navigate('/');
    }
    function handleSubmit(e){
        //prevent default form submission
        e.preventDefault();
        setTimeout(() => toHomepage(), 1000)
    }

    return (
        <>
            <Header />
            <div className='container form-container mt-5'>
                <h2 className='form-title'> Please enter login credentials</h2>
                <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
            </div>

        </>
    );
}