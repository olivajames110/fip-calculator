import React, { useState, useEffect } from 'react';
import Calculator from './components/calculator/calculator';
import Result from './components/result/result';
import './css/app.css';

function App() {
	// const [ fipType, setFipType ] = useState('initial');

	return (
		<div className="App">
			<div className="title-container">
				<h1 className="title">Weight-Based Dose Calculator</h1>
			</div>
			<Calculator />
		</div>
	);
}

export default App;
