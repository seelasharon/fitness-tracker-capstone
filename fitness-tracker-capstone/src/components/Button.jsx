import React from "react";

const Button = ({ children, onClick, type = "button", style = {}, disabled = false }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			style={{
				padding: "0.75rem 1.5rem",
				background: "#4CAF50",
				color: "#fff",
				border: "none",
				borderRadius: "6px",
				fontWeight: "bold",
				fontSize: "1rem",
				cursor: disabled ? "not-allowed" : "pointer",
				opacity: disabled ? 0.6 : 1,
				transition: "background 0.2s",
				...style,
			}}
		>
			{children}
		</button>
	);
};

export default Button;
