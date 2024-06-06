import React from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import thebroadcastlogo from "../../assets/images/thebroadcastlogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbarheader = () => {
	const navigate = useNavigate();

	const handleReload = (e) => {
		navigate("/");
		// if (location.pathname === '/') {
		e.preventDefault();
		window.location.reload();
		// }
	};

	return (
		<>
			<Navbar
				expand="lg"
				className="py-3 navbarenew">
				<Container className="d-flex justify-content-between">
					<div style={{ width: "40%" }}>
						<Nav className="me-auto">
							<Link
								to="/"
								onClick={handleReload}>
								Home
							</Link>
							<Link to="/About">About Us</Link>
							<Nav.Link href="/Product">Products</Nav.Link>
							<Nav.Link href="/Contact">Contact</Nav.Link>
						</Nav>
					</div>
					<div
						className="text-center"
						style={{ width: "20%" }}>
						<Navbar.Brand href="/">
							<img
								src={thebroadcastlogo}
								className="d-inline-block align-top"
								alt="Logo"
							/>
						</Navbar.Brand>
					</div>
					<div
						style={{ width: "40%" }}
						className="d-flex dropdown  align-items-center">
						<NavDropdown
							title="New Products"
							id="basic-nav-dropdown"
							className="me-3"
							style={{ width: "20%" }}>
							<NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Product 2</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Product 3</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Another Product
							</NavDropdown.Item>
						</NavDropdown>
						<Nav
							className="d-flex justify-content-between icons align-items-center"
							style={{ width: "20%" }}>
							<Form
								inline
								className="d-flex">
								{/* <FormControl type="text" placeholder="Search" className="mr-2" /> */}
								<Button variant="outline-success">
									<FaSearch />
								</Button>
							</Form>
							<Nav.Link href="#profile">
								<FaUser />
							</Nav.Link>
							<Nav.Link href="#cart">
								<FaShoppingCart />
							</Nav.Link>
						</Nav>
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default Navbarheader;
