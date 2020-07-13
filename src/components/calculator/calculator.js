import React, { useState, useEffect } from 'react';
import RadioInput from '../inputs/radioInput/radioInput';
import NumberInput from '../inputs/numberInput/numberInput';
import MetricSwitcher from '../inputs/metricSwitcher/metricSwitcher';
import SelectInput from '../inputs/selectInput/selectInput';
import Result from '../../components/result/result';
import Group from './group/group';
import typeData from './group/groupData/typeData';
import brandData from './group/groupData/brandData';
import './css/calculator.css';

const Calculator = () => {
	const [ fipType, setfipType ] = useState('Wet');
	const [ fipTypeMg, setfipTypeMg ] = useState(1);
	const [ weight, setWeight ] = useState(0);
	const [ brand, setBrand ] = useState({ value: 0, price: 0 });
	const [ isLBS, setIsLBS ] = useState('lbs');

	//groups

	let group_fipType = (
		<Group
			id="type-of-fip"
			title="Type of FIP"
			// description="Select the type of FIP"
			leftMetric={'lbs'}
			rightMetric={'kgs'}
		>
			<div className="fip-type-options-container">
				<div className="group-description">Select the type of FIP</div>
				<div className="fip-options">
					{typeData.map((type) => (
						<RadioInput
							onClick={setfipType}
							id={type.id}
							name={type.name}
							type={type.type}
							mgAmount={type.mgAmount}
							value={type.type}
							element="single"
						/>
					))}
				</div>
			</div>
			<div className="unit-container">
				<div className="group-description">Select Unit Amount</div>
				<SelectInput
					onChange={setfipTypeMg}
					suffix="mg"
					unit={isLBS}
					options={[ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]}
				/>
			</div>
		</Group>
	);

	let group_cat_weight = (
		<Group
			id="cat-weight"
			title="Cat's Weight"
			description="Enter your cat's weight below"
			leftMetric={'lbs'}
			rightMetric={'kgs'}
		>
			<div className="metric-value">
				<NumberInput
					onChange={setWeight}
					id="cat-weight-value"
					name="name"
					type="Cat Weight"
					mgAmount=""
					htmlFor="forname"
					value={weight}
					min="0"
					max="30"
					// placeholder="6"
				/>

				<MetricSwitcher onClick={setIsLBS} leftMetric={'lbs'} rightMetric={'kgs'} />
			</div>
		</Group>
	);

	let group_brands = (
		<Group
			id="brand-concentration-of-gs"
			title="Brand & Concentration of GS"
			description="Select the brand of GS you will be using"
			a
		>
			{brandData.map((type) => (
				<RadioInput
					onClick={setBrand}
					id={type.id}
					name={'brand-concentration-of-gs'}
					type={type.type}
					mgAmount={type.mgAmount}
					value={type.mgAmount}
					price={type.price}
					unit={type.unit}
				/>
			))}
		</Group>
	);

	// useEffect(
	// 	() => {
	// 		console.log(unit);
	// 	},
	// 	[ unit ]
	// );
	return (
		<div className="calculator-wrapper">
			<div className="group-container inner-wrapper">
				<div className="group-container_row">
					{group_fipType} {group_cat_weight}
				</div>
				{group_brands}
			</div>

			<Result
				fipType={fipType}
				fipTypeMg={fipTypeMg}
				// brand={2}
				brandName={brand}
				weight={weight}
				unit={isLBS}
			/>
		</div>
	);
};

export default Calculator;
