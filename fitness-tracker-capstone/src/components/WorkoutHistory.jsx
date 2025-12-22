import React from "react";
import Card from "./Card";

const WorkoutHistory = ({ workouts = [], onSelect }) => {
	if (!workouts.length) {
		return <Card><div style={{ color: '#888', textAlign: 'center' }}>No workout history yet.</div></Card>;
	}
	return (
		<Card>
			<h3 style={{ marginBottom: "1rem" }}>Workout History</h3>
			<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
				{workouts.map((w, i) => (
					<li key={i} style={{ marginBottom: 8 }}>
						<button
							onClick={() => onSelect && onSelect(w)}
							style={{
								background: "#f6f8fa",
								border: "1px solid #ccc",
								borderRadius: 6,
								padding: "0.5rem 1rem",
								width: "100%",
								textAlign: "left",
								cursor: "pointer",
								fontWeight: "bold",
								fontSize: "1rem",
							}}
						>
							{w.name || "Workout"} <span style={{ color: "#888", fontWeight: "normal", marginLeft: 8 }}>{w.date}</span>
						</button>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default WorkoutHistory;
