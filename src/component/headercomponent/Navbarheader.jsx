import { Link } from "react-router-dom";
import MobileNav from "../../Pages/MobileNavbar";
import thebroadcastlogo from "../../assets/images/thebroadcastlogo.png";

export default function Navbarheader() {
	return (
		<>
			<nav className="nav">
				<div className="navbars">
					<div className="left-col">
						<Link
							className="link"
							to="/">
							Home
						</Link>
						<Link
							className="link"
							to="/About">
							About Us
						</Link>
					</div>
					<div className="logo">
						<Link to="/">
							<img
								src={thebroadcastlogo}
								className="d-inline-block align-top"
								alt="Logo"
							/>
						</Link>
					</div>
					<div className="right-col">
						<Link
							className="link"
							to="/Product">
							Products
						</Link>
						<Link
							className="link"
							to="/Contact">
							Contact
						</Link>
					</div>
				</div>
				{/* <div
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
				</div> */}
			</nav>
			<MobileNav />
		</>
	);
}
