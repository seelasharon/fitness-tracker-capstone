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
		<form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
			<input
				type="text"
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder="Search exercises..."
				style={{
					padding: "0.5rem 1rem",
					borderRadius: "6px",
					border: "1px solid #ccc",
					fontSize: "1rem",
				}}
			/>
			<Button type="submit">Search</Button>
		</form>
	);
};

export default ExerciseSearch;
