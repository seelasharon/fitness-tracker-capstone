import React from "react";
import Card from "./Card";

const WorkoutHistory = ({ workouts = [], onSelect }) => {
	if (!workouts.length) {
		return <Card><div style={{ color: '#aaa', textAlign: 'center', fontSize: "1.1rem" }}>📋 No workout history yet. Start your fitness journey!</div></Card>;
	}
	return (
		<Card>
			<h3 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
				📝 Workout History
			</h3>
			<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
				{workouts.map((w, i) => (
					<li key={i} style={{ marginBottom: 12 }}>
						<button
							onClick={() => onSelect && onSelect(w)}
							style={{
								background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
								border: "2px solid rgba(102, 126, 234, 0.3)",
								borderRadius: 10,
								padding: "1rem 1.2rem",
								width: "100%",
								textAlign: "left",
								cursor: "pointer",
								fontWeight: "600",
								fontSize: "1.05rem",
								transition: "all 0.3s ease",
								color: "#2c3e50",
							}}
							onMouseEnter={(e) => {
								e.target.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)";
								e.target.style.borderColor = "rgba(102, 126, 234, 0.6)";
								e.target.style.transform = "translateX(5px)";
							}}
							onMouseLeave={(e) => {
								e.target.style.background = "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)";
								e.target.style.borderColor = "rgba(102, 126, 234, 0.3)";
								e.target.style.transform = "translateX(0)";
							}}
						>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
								<span>{w.name || "Workout"}</span>
								<span style={{ color: "#667eea", fontWeight: "500", fontSize: "0.9rem" }}>{w.date}</span>
							</div>
						</button>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default WorkoutHistory;
