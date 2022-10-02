import React from "react";
import logo from "./images/logo.svg";
import {
	FaBars,
	FaExternalLinkSquareAlt,
	FaLongArrowAltRight,
} from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenuOpen } = useGlobalContext();

	const haldeMouseOver = (e) => {
		const page = e.target.textContent;
		const position = e.target.getBoundingClientRect();
		const center = (position.left + position.right) / 2;
		const bottom = position.bottom;
		openSubmenu(page, { center, bottom });
		console.log(position);
	};
	return (
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="logo"></img>
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>

				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={haldeMouseOver}
						>
							products
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={haldeMouseOver}
						>
							developers
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={haldeMouseOver}
						>
							company
						</button>
					</li>
				</ul>
				<div className="btn signin-btn">Sign In</div>
			</div>
		</nav>
	);
};

export default Navbar;
