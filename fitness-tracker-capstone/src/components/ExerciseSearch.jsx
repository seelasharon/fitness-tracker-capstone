import React, { useState } from "react";
import Button from "./Button";

const ExerciseSearch = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSearch && query.trim()) {
			onSearch(query.trim());
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{
			display: "flex",
			gap: "0.8rem",
			alignItems: "center",
			background: "rgba(255, 255, 255, 0.95)",
			padding: "1.2rem",
			borderRadius: "12px",
			boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
			backdropFilter: "blur(10px)",
			border: "1px solid rgba(255, 255, 255, 0.3)",
		}}>
			<span style={{ fontSize: "1.5rem" }}>🔍</span>
			<input
				type="text"
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder="Search exercises (e.g., bench press, squat, arms)..."
				style={{
					flex: 1,
					padding: "0.8rem 1.2rem",
					borderRadius: "8px",
					border: "2px solid rgba(102, 126, 234, 0.2)",
					fontSize: "1rem",
					fontWeight: "500",
					transition: "all 0.3s ease",
					outline: "none",
					color: "#2c3e50",
				}}
				onFocus={(e) => {
					e.target.style.borderColor = "rgba(102, 126, 234, 0.6)";
					e.target.style.boxShadow = "0 0 10px rgba(102, 126, 234, 0.2)";
				}}
				onBlur={(e) => {
					e.target.style.borderColor = "rgba(102, 126, 234, 0.2)";
					e.target.style.boxShadow = "none";
				}}
			/>
			<Button type="submit">Search</Button>
		</form>
	);
};

export default ExerciseSearch;
