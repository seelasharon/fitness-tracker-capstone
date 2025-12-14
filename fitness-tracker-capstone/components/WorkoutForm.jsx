import React, { useState } from 'react';

const initialSet = { reps: '', weight: '' };

export default function WorkoutForm({ onSave }) {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState([{ ...initialSet }]);

  const handleSetChange = (idx, field, value) => {
    const updated = sets.map((set, i) =>
      i === idx ? { ...set, [field]: value } : set
    );
    setSets(updated);
  };

  const addSet = () => setSets([...sets, { ...initialSet }]);
  const removeSet = idx => setSets(sets.filter((_, i) => i !== idx));

  const handleSubmit = e => {
    e.preventDefault();
    if (!exercise.trim()) return;
    const workout = {
      id: Date.now(),
      exercise,
      sets: sets.filter(s => s.reps && s.weight),
      date: new Date().toISOString(),
    };
    // Save to LocalStorage
    const prev = JSON.parse(localStorage.getItem('workouts') || '[]');
    localStorage.setItem('workouts', JSON.stringify([workout, ...prev]));
    if (onSave) onSave(workout);
    setExercise('');
    setSets([{ ...initialSet }]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Log Workout</h2>
      <input
        className="w-full border p-2 mb-2 rounded"
        placeholder="Exercise name"
        value={exercise}
        onChange={e => setExercise(e.target.value)}
        required
      />
      {sets.map((set, idx) => (
        <div key={idx} className="flex gap-2 mb-2 items-center">
          <input
            className="border p-2 rounded w-1/2"
            type="number"
            min="1"
            placeholder="Reps"
            value={set.reps}
            onChange={e => handleSetChange(idx, 'reps', e.target.value)}
            required
          />
          <input
            className="border p-2 rounded w-1/2"
            type="number"
            min="1"
            placeholder="Weight (kg)"
            value={set.weight}
            onChange={e => handleSetChange(idx, 'weight', e.target.value)}
            required
          />
          {sets.length > 1 && (
            <button type="button" onClick={() => removeSet(idx)} className="text-red-500">✕</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addSet} className="mb-4 text-blue-600">+ Add Set</button>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Save Workout</button>
    </form>
  );
}
