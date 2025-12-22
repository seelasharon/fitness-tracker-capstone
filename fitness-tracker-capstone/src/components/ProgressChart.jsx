import React from "react";

// data: [{ label: string, value: number }]
const ProgressChart = ({ data = [], title = "Progress" }) => {
	const max = Math.max(...data.map(d => d.value), 1);
	return (
		<div style={{ background: "#fff", borderRadius: "10px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
			<h3 style={{ marginBottom: "1rem" }}>{title}</h3>
			<svg width="100%" height={data.length * 32}>
				{data.map((d, i) => (
					<g key={d.label} transform={`translate(0,${i * 32})`}>
						<rect x={0} y={8} width={`${(d.value / max) * 300}`} height={16} fill="#4CAF50" rx={8} />
						<text x={310} y={20} fontSize="1rem" fill="#333">{d.value}</text>
						<text x={0} y={6} fontSize="0.95rem" fill="#555">{d.label}</text>
					</g>
				))}
			</svg>
			{data.length === 0 && <div style={{ color: '#888', textAlign: 'center' }}>No data to display.</div>}
		</div>
	);
};

export default ProgressChart;
