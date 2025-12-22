import React from "react";

const ErrorMessage = ({ message }) => {
	if (!message) return null;
	return (
		<div
			style={{
				background: "#ffdddd",
				color: "#d8000c",
				border: "1px solid #d8000c",
				borderRadius: "6px",
				padding: "0.75rem 1rem",
				margin: "1rem 0",
				fontWeight: "bold",
			}}
		>
			{message}
		</div>
	);
};

export default ErrorMessage;
