import React, { useRef } from 'react';
import './css/radioInput.css';

const NumberInput = ({ id, name, value, htmlFor, label, onClick, type, mgAmount, price, unit, element }) => {
	let inputRef = useRef();

	// const checkIfActive = function(e) {
	// 	const input = document.querySelector(`input#${id}`);

	// };

	const single = (
		<div className="checkbox">
			<span className="type">{type}</span>
			<span className="mg-amount">{`$${price} per ${unit}`}</span>
		</div>
	);

	const double = (
		<div className="checkbox">
			<span className="type">{type}</span>
			<span className="mg-amount">
				{mgAmount === typeof String ? mgAmount : `${mgAmount}mg/ml | $${price}/${unit}`}
			</span>
		</div>
	);

	const element_single = (
		<div className="checkbox">
			<span className="type">{type}</span>
		</div>
	);

	const element_double = !mgAmount ? single : double;

	// const double_alt = (
	// 	<div className="checkbox">
	// 		<span className="type">{type}</span>
	// 		<span className="mg-amount">{mgAmount}</span>
	// 	</div>
	// );

	// const double = <Fragment>{mgAmount !== Number ? double_alt : double_MgAmount}</Fragment>;

	return (
		<div htmlFor={id} className="radio-input-wrapper">
			<label className="label">
				<input
					ref={inputRef}
					onClick={() =>
						onClick({
							value : inputRef.current.value,
							price : inputRef.current.dataset.price,
							name  : inputRef.current.dataset.name
						})}
					type="radio"
					id={id}
					name={name}
					data-name={type}
					value={value}
					data-price={price}
				/>
				{element === 'single' ? element_single : element_double}
			</label>
		</div>
	);
};

export default NumberInput;
