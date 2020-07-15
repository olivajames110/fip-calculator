import React, { useState, useEffect } from 'react';
import './css/result.css';

const Result = ({ fipType, fipTypeMg, brandName, weight, unit }) => {
	// Wet & dry FIP without neurological or ocular symptoms, the recommended dosage is 5mg (GS) x weight (kg) / GS concentration per 1mL = dose per 24 hr.
	// Neurological and Ocular FIP cats require 7mg/kg MINIMUM, and can go as high as 10mg/kg for extreme ocular or neurological cases.

	// const [ brand, setBrand ] = useState(brandName.value);
	// const [ price, setPrice ] = useState(brandName.price);
	const [ dailyDosage, setDailyDosage ] = useState();
	const [ numOfVials, setNumOfVials ] = useState();
	const [ totalPrice, setTotalPrice ] = useState();

	const checkNum = function(num) {
		if (isFinite(num)) {
			return num.toLocaleString();
		} else {
			return 0;
		}
	};

	useEffect(
		() => {
			let brand = brandName.value;
			let price = brandName.price;
			let dailyDosageAmt;
			let numOfVialsAmt;
			let totalPriceAmt;
			if (unit === 'lbs') {
				dailyDosageAmt = Math.round((fipTypeMg * (weight * 0.45359237) / brand + Number.EPSILON) * 100) / 100;
			} else {
				dailyDosageAmt = Math.round((fipTypeMg * weight / brand + Number.EPSILON) * 100) / 100;
			}

			//Num of Vials
			numOfVialsAmt = Math.round(dailyDosageAmt * 84 / 5);

			//Total Price
			totalPriceAmt = Math.round(numOfVialsAmt * price);

			setDailyDosage(dailyDosageAmt);
			setNumOfVials(numOfVialsAmt);
			setTotalPrice(totalPriceAmt);

			// setBrand(brandName.value);
			// setPrice(brandName.price);
			console.log('fipType: ', fipType);
			console.log('fipTypeMg: ', fipTypeMg);
			console.log('weight: ', weight);
			console.log('brandName: ', brandName);
			console.log('brand: ', brand);
			console.log('unit: ', unit);
			console.log('-------------------------');
		},
		[ fipType, fipTypeMg, brandName, weight, unit ]
	);

	const resultBrandName = (
		<span className="additional-info">
			* Using {brandName.name} priced at ${brandName.price} per vialgi
		</span>
	);

	return (
		<div className="result-wrapper a">
			<div className="result-sections-container inner-wrapper">
				<div id="daily-dosage" className="result-section">
					<h2 className="title"> Daily Dosage of GS</h2>
					<div className="results-container">
						<div className="result-value">{checkNum(dailyDosage)}ml</div>
						<div className="result-description">
							Given to your cat in mL (milliliters) via injection per every 24 hours
						</div>
					</div>
				</div>

				<div id="number-of-vials" className="result-section">
					<h2 className="title"> Est. Number of Vials</h2>
					<div className="results-container">
						<div className="result-value">{checkNum(numOfVials)}</div>
						<div className="result-description">
							<span> Over 84 days of treatment</span>
							<span className="additional-info">
								* This value is always rounded up as you cannot purchase a partial vial
							</span>
						</div>
					</div>
				</div>

				<div id="total-cost" className="result-section">
					<h2 className="title">Est. Cost Of Treatment</h2>
					<div className="results-container">
						<div className="result-value">{checkNum(totalPrice)}</div>
						<div className="result-description">Per 12 week period {brandName.name && resultBrandName}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Result;
