import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => (
	<div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
		<Navbar />
		<main style={{ 
			flex: 1, 
			padding: "2rem 1rem", 
			paddingBottom: "5rem",
			maxWidth: "1400px",
			margin: "0 auto",
			width: "100%",
		}}>
			{children}
		</main>
		<Footer />
	</div>
);

export default LayoutWrapper;
