import "./Navbar.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <>
            <NavbarComp expand="lg"
                        data-bs-theme="dark"
                        className="green-back-head"
            >
                <Container>
                    <NavbarComp.Brand className="comfortaa-font">
                        <Link to="/" className="text-white text-decoration-none">
                            Животные рекордсмены
                        </Link>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        className="outline-none"
                    />
                    <NavbarComp.Collapse id="basic-navbar-nav" className="comfortaa-font">
                        <Nav className="me-auto gap-4 gap-sm-3">
                            <NavLink to="/category" className="text-white text-decoration-none">
                                Каталог категорий
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </>
    );
};