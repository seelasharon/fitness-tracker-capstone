import React from "react";

const Footer = () => (
	<footer
		style={{
			width: "100%",
			padding: "1rem 0",
			background: "#222",
			color: "#fff",
			textAlign: "center",
			position: "fixed",
			left: 0,
			bottom: 0,
			zIndex: 100,
		}}
	>
		&copy; {new Date().getFullYear()} Fitness Tracker App
	</footer>
);

export default Footer;
