import React from "react";

const navStyle = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "1rem 2rem",
	background: "#222",
	color: "#fff",
	position: "sticky",
	top: 0,
	zIndex: 1000,
};

const linkStyle = {
	color: "#fff",
	textDecoration: "none",
	margin: "0 1rem",
	fontWeight: "bold",
	fontSize: "1.1rem",
};

const Navbar = () => (
	<nav style={navStyle}>
		<div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Fitness Tracker</div>
		<div>
			<a href="/" style={linkStyle}>Dashboard</a>
			<a href="/exercises" style={linkStyle}>Exercises</a>
			<a href="/history" style={linkStyle}>History</a>
			<a href="/progress" style={linkStyle}>Progress</a>
		</div>
	</nav>
);

export default Navbar;
