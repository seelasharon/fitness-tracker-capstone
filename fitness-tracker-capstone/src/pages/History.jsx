import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import WorkoutHistory from "../components/WorkoutHistory";
import WorkoutDetails from "../components/WorkoutDetails";

// Demo data for illustration
const demoWorkouts = [
	{ name: "Push Day", date: "2025-12-20", exercises: [{ name: "Bench Press", reps: 10, sets: 3 }], notes: "Felt strong!" },
	{ name: "Leg Day", date: "2025-12-18", exercises: [{ name: "Squat", reps: 8, sets: 4 }], notes: "Tough session." },
];

const History = () => {
	const [selected, setSelected] = useState(null);
	return (
		<LayoutWrapper>
			<h2>Workout History</h2>
			<WorkoutHistory workouts={demoWorkouts} onSelect={setSelected} />
			{selected && <WorkoutDetails workout={selected} />}
		</LayoutWrapper>
	);
};

export default History;
