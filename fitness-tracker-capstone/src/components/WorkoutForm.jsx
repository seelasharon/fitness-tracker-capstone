import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";

const emptyExercise = { name: "", reps: "", sets: "" };

const WorkoutForm = ({ initial = {}, onSubmit }) => {
	const [name, setName] = useState(initial.name || "");
	const [date, setDate] = useState(initial.date || "");
	const [exercises, setExercises] = useState(initial.exercises || [emptyExercise]);
	const [notes, setNotes] = useState(initial.notes || "");

	const handleExerciseChange = (idx, field, value) => {
		setExercises(exs => exs.map((ex, i) => i === idx ? { ...ex, [field]: value } : ex));
	};

	const addExercise = () => setExercises(exs => [...exs, emptyExercise]);
	const removeExercise = idx => setExercises(exs => exs.length > 1 ? exs.filter((_, i) => i !== idx) : exs);

	const handleSubmit = e => {
		e.preventDefault();
		if (onSubmit) {
			onSubmit({ name, date, exercises, notes });
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "1rem" }}>
					<label>Workout Name<br />
						<input value={name} onChange={e => setName(e.target.value)} required style={{ width: "100%", padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }} />
					</label>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label>Date<br />
						<input type="date" value={date} onChange={e => setDate(e.target.value)} required style={{ width: "100%", padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }} />
					</label>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label>Exercises</label>
					{exercises.map((ex, idx) => (
						<div key={idx} style={{ display: "flex", gap: "0.5rem", marginBottom: 4 }}>
							<input placeholder="Name" value={ex.name} onChange={e => handleExerciseChange(idx, "name", e.target.value)} required style={{ flex: 2, padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }} />
							<input placeholder="Reps" type="number" min="1" value={ex.reps} onChange={e => handleExerciseChange(idx, "reps", e.target.value)} required style={{ flex: 1, padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }} />
							<input placeholder="Sets" type="number" min="1" value={ex.sets} onChange={e => handleExerciseChange(idx, "sets", e.target.value)} required style={{ flex: 1, padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }} />
							<Button type="button" style={{ background: "#e53935" }} onClick={() => removeExercise(idx)} disabled={exercises.length === 1}>Remove</Button>
						</div>
					))}
					<Button type="button" style={{ marginTop: 6 }} onClick={addExercise}>Add Exercise</Button>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label>Notes<br />
						<textarea value={notes} onChange={e => setNotes(e.target.value)} style={{ width: "100%", padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }} />
					</label>
				</div>
				<Button type="submit">Save Workout</Button>
			</form>
		</Card>
	);
};

export default WorkoutForm;
