import { getByLabelText } from "@testing-library/react";
import React, { useState, useRef, useEffect } from "react";
import { icons } from "react-icons";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
	const { isSubmenuOpen, location, page, links } = useGlobalContext();
	const container = useRef(null);
	const [itemNumber, setItemNumber] = useState("col-2");
	useEffect(() => {
		setItemNumber(2);
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
		if (links.length === 3) {
			setItemNumber("col-3");
		}
		if (links.length > 3) {
			setItemNumber("col-4");
		}
	}, [location]);

	return (
		<aside
			ref={container}
			className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${itemNumber}`}>
				{links.map((link, index) => {
					const { icon, label, url } = link;
					return (
						<a key={index} href="url">
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;

