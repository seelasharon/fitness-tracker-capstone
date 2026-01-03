import React from "react";

const Footer = () => (
	<footer
		style={{
			width: "100%",
			padding: "1.5rem 0",
			background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(102, 126, 234, 0.7) 100%)",
			color: "#fff",
			textAlign: "center",
			position: "fixed",
			left: 0,
			bottom: 0,
			zIndex: 100,
			backdropFilter: "blur(10px)",
			boxShadow: "0 -8px 32px rgba(0, 0, 0, 0.2)",
		}}
	>
		<span style={{ fontSize: "1.1rem", fontWeight: "500", letterSpacing: "0.5px" }}>
			💪 &copy; {new Date().getFullYear()} Fitness Tracker App | Keep Pushing! 🚀
		</span>
	</footer>
);

export default Footer;
