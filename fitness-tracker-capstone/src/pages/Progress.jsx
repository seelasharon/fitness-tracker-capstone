import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import ProgressChart from "../components/ProgressChart";

const demoProgress = [
	{ label: "Dec 1", value: 2 },
	{ label: "Dec 8", value: 3 },
	{ label: "Dec 15", value: 4 },
	{ label: "Dec 22", value: 5 },
];

const Progress = () => (
	<LayoutWrapper>
		<h2>Progress</h2>
		<ProgressChart data={demoProgress} title="Workouts per week" />
	</LayoutWrapper>
);

export default Progress;
