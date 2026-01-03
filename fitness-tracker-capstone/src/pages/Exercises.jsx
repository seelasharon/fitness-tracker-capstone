import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import ExerciseSearch from "../components/ExerciseSearch";
import Card from "../components/Card";

// Placeholder image generator with exercise name
const createPlaceholder = (exerciseName, color) => {
	return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='400'%3E%3Cdefs%3E%3Cfilter id='shadow'%3E%3CfeDropShadow dx='0' dy='2' stdDeviation='3' flood-color='rgba(0,0,0,0.5)'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='500' height='400' fill='${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold' filter='url(%23shadow)'%3E${exerciseName}%3C/text%3E%3C/svg%3E`;
};

// Import images - update these paths when you add your own images
// For now, using placeholders
const getExerciseImage = (exerciseName) => {
	const colors = {
		"Bench Press": "%23667eea",
		"Squat": "%23764ba2",
		"Deadlift": "%23f093fb",
		"Bicep Curl": "%234facfe"
	};
	
	try {
		// Import actual images from assets folder
		const imageMap = {
			"Bench Press": () => import("../assets/images/bench-press.jpg").then(m => m.default),
			"Squat": () => import("../assets/images/squat.jpg").then(m => m.default),
			"Deadlift": () => import("../assets/images/deadlift.jpg").then(m => m.default),
			"Bicep Curl": () => import("../assets/images/bicep-curl.jpg").then(m => m.default),
		};
		
		// Return the image or placeholder
		if (imageMap[exerciseName]) {
			return require(`../assets/images/${exerciseName.toLowerCase().replace(' ', '-')}.jpg`);
		}
		return createPlaceholder(exerciseName, colors[exerciseName] || "%23667eea");
	} catch {
		return createPlaceholder(exerciseName, colors[exerciseName] || "%23667eea");
	}
};

// Enhanced exercise data with images and details
const allExercises = [
	{
		name: "Bench Press",
		muscle: "Chest",
		description: "A compound exercise that primarily targets the chest, shoulders, and triceps. Performed by pushing a barbell away from your body while lying on a flat bench.",
		image: getExerciseImage("Bench Press"),
		instructions: [
			"Lie flat on a bench with feet planted on the floor",
			"Grip the bar slightly wider than shoulder-width",
			"Lower the bar to your chest in a controlled manner",
			"Push the bar back up to the starting position",
			"Repeat for desired reps"
		],
		videoUrl: "https://www.youtube.com/embed/rT7DgCr-3pg"
	},
	{
		name: "Squat",
		muscle: "Legs",
		description: "A fundamental lower body exercise that targets the quadriceps, hamstrings, glutes, and lower back. Essential for building leg strength and power.",
		image: getExerciseImage("Squat"),
		instructions: [
			"Stand with feet shoulder-width apart",
			"Lower your body by bending knees and hips",
			"Keep your chest up and weight in your heels",
			"Go down until thighs are parallel to the ground",
			"Push through your heels to return to starting position"
		],
		videoUrl: "https://www.youtube.com/embed/Dy28eq2PjkM"
	},
	{
		name: "Deadlift",
		muscle: "Back",
		description: "A powerful compound movement that works the entire posterior chain including back, glutes, and hamstrings. Great for building overall strength.",
		image: getExerciseImage("Deadlift"),
		instructions: [
			"Stand with feet hip-width apart, bar over mid-foot",
			"Bend down and grip the bar with straight arms",
			"Keep your chest up and back neutral",
			"Drive through your heels to stand up",
			"Lower the bar back to the ground with control"
		],
		videoUrl: "https://www.youtube.com/embed/VL5vCeSoffA"
	},
	{
		name: "Bicep Curl",
		muscle: "Arms",
		description: "An isolation exercise that targets the biceps. Perfect for arm development and can be performed with dumbbells, barbells, or cables.",
		image: getExerciseImage("Bicep Curl"),
		instructions: [
			"Stand with dumbbells at your sides, palms facing forward",
			"Keep elbows stationary at your sides",
			"Curl the weights up toward your shoulders",
			"Squeeze your biceps at the top",
			"Lower the weights back to starting position"
		],
		videoUrl: "https://www.youtube.com/embed/H1B8EwZkBWw"
	},
];

const Exercises = () => {
	const [results, setResults] = useState(allExercises);
	const [selectedExercise, setSelectedExercise] = useState(null);

	const handleSearch = (query) => {
		setResults(
			allExercises.filter(ex =>
				ex.name.toLowerCase().includes(query.toLowerCase()) ||
				ex.muscle.toLowerCase().includes(query.toLowerCase())
			)
		);
		setSelectedExercise(null);
	};

	return (
		<LayoutWrapper>
			<h2 style={{
				fontSize: "2.5rem",
				marginBottom: "2rem",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)",
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
				backgroundClip: "text",
				fontWeight: "700",
			}}>
				💪 Exercise Library
			</h2>
			<ExerciseSearch onSearch={handleSearch} />
			<div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: selectedExercise ? "1fr 1fr" : "1fr", gap: "2rem", alignItems: "start" }}>
				<div>
					{results.length === 0 ? (
						<Card>📭 No exercises found. Try a different search.</Card>
					) : (
						results.map((ex, i) => (
							<Card
								key={i}
								style={{
									cursor: "pointer",
									background: selectedExercise?.name === ex.name ? "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)" : "rgba(255, 255, 255, 0.95)",
									borderLeft: selectedExercise?.name === ex.name ? "4px solid #667eea" : "none",
									paddingLeft: selectedExercise?.name === ex.name ? "calc(2rem - 4px)" : "2rem",
								}}
								onClick={() => setSelectedExercise(ex)}
							>
								<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
									<img
										src={ex.image}
										alt={ex.name}
										style={{
											width: "80px",
											height: "80px",
											borderRadius: "10px",
											objectFit: "cover",
										}}
									/>
									<div style={{ flex: 1 }}>
										<strong style={{ fontSize: "1.1rem", color: "#2c3e50" }}>{ex.name}</strong>
										<div style={{ color: "#667eea", fontWeight: "600", marginTop: "0.5rem" }}>🎯 {ex.muscle}</div>
										<div style={{ color: "#999", fontSize: "0.9rem", marginTop: "0.3rem" }}>Click to view details</div>
									</div>
								</div>
							</Card>
						))
					)}
				</div>

				{selectedExercise && (
					<div style={{ position: "sticky", top: "100px" }}>
						<Card style={{ background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)" }}>
							<button
								onClick={() => setSelectedExercise(null)}
								style={{
									float: "right",
									background: "#667eea",
									color: "#fff",
									border: "none",
									borderRadius: "50%",
									width: "32px",
									height: "32px",
									fontSize: "1.2rem",
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: "bold",
								}}
							>
								✕
							</button>
							<h3 style={{
								fontSize: "1.8rem",
								background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								marginBottom: "1rem",
								clear: "both",
							}}>
								{selectedExercise.name}
							</h3>

							<img
								src={selectedExercise.image}
								alt={selectedExercise.name}
								style={{
									width: "100%",
									borderRadius: "12px",
									marginBottom: "1.5rem",
									maxHeight: "300px",
									objectFit: "cover",
									boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
								}}
							/>

							<div style={{ marginBottom: "1.5rem" }}>
								<p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#2c3e50" }}>
									{selectedExercise.description}
								</p>
							</div>

							<div style={{ marginBottom: "1.5rem" }}>
								<h4 style={{
									fontSize: "1.2rem",
									color: "#667eea",
									fontWeight: "700",
									marginBottom: "1rem",
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
									📋 Instructions
								</h4>
								<ol style={{ paddingLeft: "1.5rem", color: "#2c3e50", lineHeight: "1.8" }}>
									{selectedExercise.instructions.map((instr, i) => (
										<li key={i} style={{ marginBottom: "0.7rem" }}>
											{instr}
										</li>
									))}
								</ol>
							</div>

							<div style={{ marginBottom: "1rem" }}>
								<h4 style={{
									fontSize: "1.2rem",
									color: "#667eea",
									fontWeight: "700",
									marginBottom: "1rem",
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
									🎥 Video Demo
								</h4>
								<div style={{
									position: "relative",
									paddingBottom: "56.25%",
									height: 0,
									overflow: "hidden",
									borderRadius: "10px",
									boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
								}}>
									<iframe
										style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											border: "none",
											borderRadius: "10px",
										}}
										src={selectedExercise.videoUrl}
										title={selectedExercise.name}
										allowFullScreen
									/>
								</div>
							</div>

							<div style={{
								background: "rgba(102, 126, 234, 0.1)",
								padding: "1rem",
								borderRadius: "10px",
								marginTop: "1.5rem",
								border: "1px solid rgba(102, 126, 234, 0.3)",
							}}>
								<span style={{ fontWeight: "600", color: "#667eea" }}>💡 Tip:</span>
								<p style={{ color: "#2c3e50", marginTop: "0.5rem", fontSize: "0.95rem" }}>
									Focus on proper form over heavy weight. Quality reps with controlled movement will give you better results and prevent injuries.
								</p>
							</div>
						</Card>
					</div>
				)}
			</div>
		</LayoutWrapper>
	);
};

export default Exercises;
