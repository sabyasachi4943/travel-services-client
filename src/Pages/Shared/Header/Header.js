import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

      const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.error(error));
      };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">travel-services</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant="light">
              <Link to="/services">All services</Link>
            </Button>
            {user?.uid ? (
              <>
                <Button variant="light">
                  <Link to="/my-reviews">All my reviews</Link>
                </Button>
                <Button variant="light">
                  <Link to="/services">Add services</Link>
                </Button>
              </>
            ) : (
              <></>
            )}

            <Button variant="light">
              <Link to="/blogs">Blogs</Link>
            </Button>
          </Nav>
          <Nav>
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="light">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="light">
                    <Link to="/signup">Signup</Link>
                  </Button>
                </>
              )}
            </>
            <>
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;