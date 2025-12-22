import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import ExerciseSearch from "../components/ExerciseSearch";
import Card from "../components/Card";

// Demo exercise data
const allExercises = [
	{ name: "Bench Press", muscle: "Chest" },
	{ name: "Squat", muscle: "Legs" },
	{ name: "Deadlift", muscle: "Back" },
	{ name: "Bicep Curl", muscle: "Arms" },
];

const Exercises = () => {
	const [results, setResults] = useState(allExercises);

	const handleSearch = (query) => {
		setResults(
			allExercises.filter(ex =>
				ex.name.toLowerCase().includes(query.toLowerCase()) ||
				ex.muscle.toLowerCase().includes(query.toLowerCase())
			)
		);
	};

	return (
		<LayoutWrapper>
			<h2>Exercises</h2>
			<ExerciseSearch onSearch={handleSearch} />
			<div style={{ marginTop: "2rem" }}>
				{results.length === 0 ? (
					<Card>No exercises found.</Card>
				) : (
					results.map((ex, i) => (
						<Card key={i}>
							<div><strong>{ex.name}</strong></div>
							<div style={{ color: "#888" }}>{ex.muscle}</div>
						</Card>
					))
				)}
			</div>
		</LayoutWrapper>
	);
};

export default Exercises;
