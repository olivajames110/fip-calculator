import React, { useState, useEffect } from 'react';
import Calculator from './components/calculator/calculator';
import Result from './components/result/result';
import './css/app.css';

function App() {
	const [ calcData, setCalcData ] = useState('initial');

	return (
		<div className="app">
			<section id="description">
				<div className="inner-wrapper">
					<div className="intro-container">
						<h1 className="">Weight-Based Dose Calculator</h1>
						<div className="calculator-description">
							<p>Below is a simple calculator for figuring out your dosage for your kitty.</p>
							<p>
								Throughout the course of treatment, remember to weigh your cat frequently and increase
								his/her dose accordingly with weight gain. Also, if you change brands, you will need to
								recalculate due to the difference in concentration.
							</p>
							<p>
								Please contact an FIP Warrior admin for assistance in determining the appropriate
								starting dose for your cat.
							</p>
						</div>
					</div>
					<div id="instructions" className="intro-container">
						<h2>Instructions</h2>
						<ol>
							<li>
								Choose <span>FIP Type</span> and <span>Unit Amount</span>
							</li>
							<li>
								Enter your <span>Cat's Weight</span> in LBS or KGS
							</li>
							<li>
								Select your <span>Brand of GS</span>
							</li>
							<li>View your results below</li>
						</ol>
					</div>
				</div>
			</section>
			<section id="calculator">
				<div className="">
					<Calculator />
				</div>
			</section>
		</div>
	);
}

export default App;
