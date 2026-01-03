import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Exercises from "./pages/Exercises";
import History from "./pages/History";
import Progress from "./pages/Progress";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/exercises" element={<Exercises />} />
				<Route path="/history" element={<History />} />
				<Route path="/progress" element={<Progress />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
