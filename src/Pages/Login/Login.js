import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Button, ButtonGroup } from "react-bootstrap";
import {FaGoogle} from "react-icons/fa";

const Login = () => {

  const [error, setError] = useState('');
  const { login, setLoading, providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || '/';
  
  
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
      const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
          .then((result) => {
            const user = result.user;

            const currentUser = {
              email: user.email,
            };

            console.log(currentUser);
            form.reset();
            setError("");
            
            navigate(from, { replace: true });

            }
          )
          .catch((error) => {
            console.log(error);
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
      </ButtonGroup>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Login;