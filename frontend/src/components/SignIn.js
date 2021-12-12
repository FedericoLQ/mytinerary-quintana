import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingIn = (props) => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    props.signIn(email.current.value, password.current.value);
        
  };

  return (
   
      <div className="d-flex justify-content-center w-100 align-items-center">
        <Form onSubmit={handleSubmit} className="rounded w-50 p-sm-3">
            <h1 className="text-center mb-4">Log In with your account!</h1>
            <h4 className="text-center mb-4">Don't have an account? <Link
                className="text-center m-3 signUp"
                to={"/SignUp"}
              >
                Sign Up!
              </Link></h4>
            
          <Form.Group className="d-flex flex-column align-items-center mb-2" controlId="formBasicEmail">
            
            <Form.Control className="w-75 text-center" type="email" placeholder="Enter email" ref={email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4 d-flex flex-column align-items-center" controlId="formBasicPassword">
           
            <Form.Control className="w-75 text-center" type="password" placeholder="Password" ref={password}/>
          </Form.Group>
          <div className="d-flex justify-content-around">         
          <Button className="" variant="warning" type="submit">
            Sign In
          </Button>
          <Button className="" variant="warning" type="submit">
            Sign In with Google
          </Button>
          </div>
        </Form>
      </div>
     
  );
};

export default SingIn;