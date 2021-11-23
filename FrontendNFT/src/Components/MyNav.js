import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./MyNav.css";

const MyNav = ({ flag, setFlag }) => {
  const [token, setToken] = useState();
  let history = useHistory();

  useEffect(() => {
    console.log("Value of flag  in nav", flag);
    setToken(localStorage.getItem("auth-token"));
  }, [flag]);

  const logout = () => {
    localStorage.removeItem("auth-token");
    setFlag(false);
    history.push("/login");
  };

  return (
    <>
      <Navbar className="nav-bar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Test App For Blockchain</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link></Nav.Link>

            {!token ? (
              <>
                <Nav.Link>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    SignUp Page{" "}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Login Page{" "}
                  </Link>
                </Nav.Link>
              </>
            ) : null}
          </Nav>
        </Container>

        <div className="logout-button">
          {token ? (
            <Button variant="danger" onClick={() => logout()}>
              Logout
            </Button>
          ) : null}
        </div>
      </Navbar>
    </>
  );
};

export default MyNav;
