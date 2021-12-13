import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Google from "../components/Google";
import GoogleLogin from "react-google-login";

const SignUp = (props) => {
  const userName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const imgUrl = useRef();
  const [country, setCountry] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.newU({
      email: email.current.value,
      password: password.current.value,
      userName: userName.current.value,
      lastName: lastName.current.value,
      imgUrl: imgUrl.current.value,
      country: country,
    });
    // console.log(userName.current.value);
  };

  const responseGoogle = (response) => {
    // console.log(response);
    props.newU({
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      google: true,
      lastName: response.profileObj.familyName,
      userName: response.profileObj.givenName,
      imgUrl: response.profileObj.imageUrl,
      country:'default country gilipollas'
    });
  };

  return (
    <div className="d-flex justify-content-center w-100 align-items-center">
      <Form onSubmit={handleSubmit} className=" rounded w-50 p-sm-3">
        <h2 className="text-center mb-4">Join to our World of Adventures!</h2>
        <h4 className="text-center mb-4">
          Already have an account?
          <Link className="text-center m-3 signUp" to={"/SignIn"}>
            Sign In!
          </Link>
        </h4>

        <Form.Group
          className="d-flex flex-column align-items-center mb-3"
          controlId="formBasicText"
        >
          <Form.Control
            className="w-75 text-center mb-3"
            type="text"
            placeholder="First Name"
            ref={userName}
          />
          <Form.Control
            className="w-75 text-center"
            type="text"
            placeholder="Last Name"
            ref={lastName}
          />
        </Form.Group>

        <Form.Group
          className="d-flex flex-column align-items-center mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            className="w-75 text-center"
            type="email"
            placeholder="Enter email"
            ref={email}
          />
        </Form.Group>

        <Form.Group
          className=" d-flex flex-column align-items-center"
          controlId="formBasicPassword"
        >
          <Form.Control
            className="w-75 text-center"
            type="password"
            placeholder="Password"
            ref={password}
          />
          <Form.Text className="text-muted mt-0">
            min. 6 chararcters and at least 1 letter and 1 number
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column align-items-center"
          controlId="formBasicSelect"
        >
          <Form.Select
            className="w-75 text-center"
            aria-label="Default select example"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Choose Your Country</option>
            {props.country.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-1 d-flex flex-column align-items-center">
          <Form.Control
            className="w-75 text-center mb-3"
            type="text"
            placeholder="Perfil Picture URL Link"
            ref={imgUrl}
          ></Form.Control>
        </Form.Group>

        <div className="d-flex justify-content-around">
          <Button className="" variant="warning" type="submit">
            Create Account
          </Button>

          {/* <Google />  */}
          <GoogleLogin
            clientId="1079226912737-0jfnjel6vj30sf15ktu3vvg0d1fum3f5.apps.googleusercontent.com"
            buttonText="Sign up"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Form>
      ;
    </div>
  );
};

export default SignUp;
