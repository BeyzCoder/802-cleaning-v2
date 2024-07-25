import React, { useRef } from "react";
import "../styles/Navbar.css";

const Navbar = ({ tabs }) => {
	const sideBarRef = useRef(null);

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		})
		sideBarRef.current.style.display = "none";
	}

	const showSideBar = (event) => {
		event.preventDefault();
		if (sideBarRef.current)
			sideBarRef.current.style.display = "flex";
	}

	const closeSideBar = (event) => {
		event.preventDefault();
		if (sideBarRef.current)
			sideBarRef.current.style.display = "none";
	}


	return (
		<div className="nav-container">
			<div className="menu-btn" onClick={showSideBar}>
				<svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#3c3c3c"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
			</div>
			<nav className="portrait-view" ref={sideBarRef}>
				<ul>
					<li className="close-btn" onClick={closeSideBar}>
						<svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#3c3c3c"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
					</li>
					{tabs.map((tab, index) => (
						<li key={index} onClick={() => scrollToSection(tab.ref)}>
							{tab.name}
						</li>
					))}
				</ul>
			</nav>

			<nav className="landscape-view">
				<ul>
					{tabs.map((tab, index) => (
						<li key={index} onClick={() => scrollToSection(tab.ref)}>
							{tab.name}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;