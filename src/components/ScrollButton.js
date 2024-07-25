import React, {useState, useEffect} from "react";
import "../styles/ScrollButton.css";

const ScrollButton = () => {
	const [showScrollButton, setShowScrollButton] = useState(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 300) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		})
	}, []);

  return (
		<div>
			{showScrollButton && (
				<div className="scroll-button-widget" onClick={scrollTop}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#141414"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
				</div>
			)}
		</div>
	); 
}

export default ScrollButton