import React from "react";

const navStyle = {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "1.2rem 2rem",
	background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	color: "#fff",
	position: "sticky",
	top: 0,
	zIndex: 1000,
	boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
	backdropFilter: "blur(10px)",
};

const linkStyle = {
	color: "#fff",
	textDecoration: "none",
	margin: "0 1.5rem",
	fontWeight: "600",
	fontSize: "1.05rem",
	position: "relative",
	transition: "all 0.3s ease",
	padding: "0.5rem 0",
};

const linkHoverStyle = {
	...linkStyle,
	textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
	transform: "scale(1.05)",
};

const Navbar = () => {
	const [hoveredLink, setHoveredLink] = React.useState(null);

	return (
		<nav style={navStyle}>
			<div style={{ fontWeight: "700", fontSize: "1.6rem", letterSpacing: "1px" }}>
				💪 Fitness Tracker
			</div>
			<div style={{ display: "flex", gap: "0.5rem" }}>
				{["Dashboard", "Exercises", "History", "Progress"].map((text, i) => (
					<a
						key={i}
						href={text === "Dashboard" ? "/" : `/${text.toLowerCase()}`}
						style={hoveredLink === i ? linkHoverStyle : linkStyle}
						onMouseEnter={() => setHoveredLink(i)}
						onMouseLeave={() => setHoveredLink(null)}
					>
						{text}
					</a>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
