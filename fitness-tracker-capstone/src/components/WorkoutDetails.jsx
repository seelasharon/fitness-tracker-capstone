import React from "react";
import Card from "./Card";

const WorkoutDetails = ({ workout }) => {
	if (!workout) return null;
	return (
		<Card style={{ margin: "1.5rem 0" }}>
			<h3 style={{ marginBottom: "0.5rem" }}>{workout.name || "Workout"}</h3>
			<div><strong>Date:</strong> {workout.date || "-"}</div>
			<div><strong>Exercises:</strong></div>
			<ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
				{(workout.exercises || []).map((ex, i) => (
					<li key={i}>{ex.name} - {ex.reps} reps x {ex.sets} sets</li>
				))}
			</ul>
			{workout.notes && (
				<div style={{ marginTop: "0.5rem", color: "#555" }}><strong>Notes:</strong> {workout.notes}</div>
			)}
		</Card>
	);
};

export default WorkoutDetails;
