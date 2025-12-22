import React from "react";

const Card = ({ children, style = {} }) => {
	return (
		<div
			style={{
				background: "#fff",
				borderRadius: "10px",
				boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
				padding: "1.5rem",
				margin: "1rem 0",
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Card;
