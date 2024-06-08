import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import logo from "../../src/assets/images/thebroadcastlogo.png";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const navLinks = [
	{
		id: 1,
		title: "Home",
		to: "/",
	},
	{
		id: 2,
		title: "About Us",
		to: "/About",
	},
	{
		id: 3,
		title: "Product",
		to: "/Product",
	},
	{
		id: 4,
		title: "Contact Us",
		to: "/Contact",
	},
];

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		if (toggle) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [toggle]);
	return (
		<div className="mobileNavbar">
			<div className="mobileNavbar-logo">
				<div>
					<Link to={"/"}>
						<img
							src={logo}
							alt="logo"
							className="logoImg"
						/>
					</Link>
				</div>
				<IoMenu
					onClick={() => setToggle(!toggle)}
					className="mobileNavbar-logo-icon"
					size={30}
				/>
			</div>
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
						className="mobileNavbar-fixed">
						<div className="mobileNavbar-logo">
							<Link to={"/"}>
								<img
									src={logo}
									alt="logo"
									className="logoImg"
								/>
							</Link>
							<IoMdClose
								onClick={() => setToggle(!toggle)}
								className="mobileNavbar-logo-icon"
								size={30}
							/>
						</div>
						<ul className="mobileNavbar-fixed-links">
							{navLinks.map((item) => (
								<Link
									to={item.to}
									key={item.title}
									onClick={(toggle) => setToggle(!toggle)}
									className="mobileNavbar-fixed-links-title">
									{item.title}
								</Link>
							))}
							<div className="mobileNavbar-socials">
								<h3 className="mobileNavbar-socials-title">Socials</h3>
								<div className="flex items-center gap-3">
									<h3 className="mobileNavbar-socials-para">Email:</h3>
									<Link
										to="mailto:suzy@thebroadcaststore.co"
										className="mobileNavbar-socials-para">
										suzy@thebroadcaststore.co
									</Link>
								</div>
								<div className="flex items-center gap-3">
									<h3 className="mobileNavbar-socials-para">Contact:</h3>
									<Link
										to="tel:747-609-5599"
										className="mobileNavbar-socials-para">
										747-609-5599
									</Link>
								</div>
								<div className="flex flex-col gap-y-2">
									<h1 className="mobileNavbar-socials-title">FOLLOW US ON:</h1>
									<div className="mobileNavbar-socials-icon">
										<SlSocialLinkedin
											size={25}
											className="mobileNavbar-logo-icon"
										/>
										<FaInstagram
											size={25}
											className="mobileNavbar-logo-icon"
										/>
										<SlSocialFacebook
											size={25}
											className="mobileNavbar-logo-icon"
										/>
									</div>
								</div>
							</div>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
