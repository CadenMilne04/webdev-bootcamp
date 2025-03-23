import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <div className="">
            <Navbar className="mx-3" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand>Caden Milne</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <LinkContainer to="/projects">
                            <Nav.Link>Projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/aboutme">
                            <Nav.Link>About Me</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
