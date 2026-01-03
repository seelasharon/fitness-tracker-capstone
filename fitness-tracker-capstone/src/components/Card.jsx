import React from "react";

const Card = ({ children, style = {} }) => {
	return (
		<div
			style={{
				background: "rgba(255, 255, 255, 0.95)",
				borderRadius: "16px",
				boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
				padding: "2rem",
				margin: "1.5rem 0",
				backdropFilter: "blur(10px)",
				border: "1px solid rgba(255, 255, 255, 0.3)",
				transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
				...style,
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = "translateY(-5px)";
				e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = "translateY(0)";
				e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.15)";
			}}
		>
			{children}
		</div>
	);
};

export default Card;
