import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIssideBarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState("");
	const [links, setLinks] = useState([]);
	const openSidebar = () => {
		setIssideBarOpen(true);
	};
	const closeSidebar = () => {
		setIssideBarOpen(false);
	};

	const openSubmenu = (text, position) => {
		setPage(text);
		setLocation(position);
		setIsSubmenuOpen(true);
		console.log(text.toLowerCase());
		const item = sublinks.find((link) => link.page === text.toLowerCase());
		const { links } = item;
		setLinks(links);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				openSubmenu,
				closeSubmenu,
				openSidebar,
				closeSidebar,
				location,
				page,
				links,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
