import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {

  const [error, setError] = useState('');
  const { login, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  
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
            if (user.emailVerified) {
              navigate(from, { replace: true });
            } else {
              toast.error(
                "Your email is not verified. Please verify your email address.",
              );
            }
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      };

  return (
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
  );
};

export default Login;