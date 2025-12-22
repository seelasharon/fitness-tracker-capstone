import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import WorkoutHistory from "../components/WorkoutHistory";
import ProgressChart from "../components/ProgressChart";
import WorkoutDetails from "../components/WorkoutDetails";

// Demo data for illustration
const demoWorkouts = [
	{ name: "Push Day", date: "2025-12-20", exercises: [{ name: "Bench Press", reps: 10, sets: 3 }], notes: "Felt strong!" },
	{ name: "Leg Day", date: "2025-12-18", exercises: [{ name: "Squat", reps: 8, sets: 4 }], notes: "Tough session." },
];
const demoProgress = [
	{ label: "Dec 1", value: 2 },
	{ label: "Dec 8", value: 3 },
	{ label: "Dec 15", value: 4 },
	{ label: "Dec 22", value: 5 },
];

const Dashboard = () => {
	const [selected, setSelected] = useState(null);
	return (
		<LayoutWrapper>
			<h2>Welcome back!</h2>
			<div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
				<div style={{ flex: 1, minWidth: 320 }}>
					<WorkoutHistory workouts={demoWorkouts} onSelect={setSelected} />
				</div>
				<div style={{ flex: 2, minWidth: 320 }}>
					<ProgressChart data={demoProgress} title="Workouts per week" />
				</div>
			</div>
			{selected && <WorkoutDetails workout={selected} />}
		</LayoutWrapper>
	);
};

export default Dashboard;
