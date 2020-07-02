import React, { useRef } from 'react';
import './css/radioInput.css';

const NumberInput = ({ id, name, value, htmlFor, label, onClick, type, mgAmount, price }) => {
	let inputRef = useRef();

	// const checkIfActive = function(e) {
	// 	const input = document.querySelector(`input#${id}`);

	// };

	const single = (
		<div className="checkbox">
			<span className="type">{type}</span>
		</div>
	);

	const double = (
		<div className="checkbox">
			<span className="type">{type}</span>
			<span className="mg-amount">
				{mgAmount === typeof String ? mgAmount : `${mgAmount}mg/ml | $${price}/vial`}
			</span>
		</div>
	);

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
					onClick={() => onClick({ value: inputRef.current.value, price: inputRef.current.dataset.price })}
					type="radio"
					id={id}
					name={name}
					value={value}
					data-price={price}
				/>
				{!mgAmount ? single : double}
			</label>
		</div>
	);
};

export default NumberInput;
