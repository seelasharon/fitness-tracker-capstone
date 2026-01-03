import React from "react";

// data: [{ label: string, value: number }]
const ProgressChart = ({ data = [], title = "Progress" }) => {
	const max = Math.max(...data.map(d => d.value), 1);
	
	const gradientId = `gradient-${Math.random()}`;
	
	return (
		<div style={{ 
			background: "rgba(255, 255, 255, 0.95)", 
			borderRadius: "16px", 
			padding: "2rem", 
			boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
			border: "1px solid rgba(255, 255, 255, 0.3)",
			backdropFilter: "blur(10px)",
		}}>
			<h3 style={{ 
				marginBottom: "2rem", 
				fontSize: "1.5rem",
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
				backgroundClip: "text",
			}}>
				📊 {title}
			</h3>
			<svg width="100%" height={data.length * 45} style={{ overflow: "visible" }}>
				<defs>
					<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				{data.map((d, i) => (
					<g key={d.label} transform={`translate(0,${i * 45})`}>
						<rect 
							x={0} 
							y={8} 
							width={`${(d.value / max) * 300}`} 
							height={20} 
							fill={`url(#${gradientId})`}
							rx={10}
							style={{ transition: "all 0.3s ease" }}
						/>
						<text 
							x={310} 
							y={24} 
							fontSize="1.1rem" 
							fontWeight="600"
							fill="#667eea"
						>
							{d.value}
						</text>
						<text 
							x={0} 
							y={4} 
							fontSize="1rem" 
							fontWeight="600"
							fill="#2c3e50"
						>
							{d.label}
						</text>
					</g>
				))}
			</svg>
			{data.length === 0 && <div style={{ color: '#aaa', textAlign: 'center', fontSize: "1.1rem" }}>📈 No data to display yet.</div>}
		</div>
	);
};

export default ProgressChart;
