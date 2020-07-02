import React, { useRef } from 'react';
import './css/numberInput.css';

const NumberInput = ({ id, name, value, htmlFor, label, min, max, onChange, placeholder }) => {
	let inputRef = useRef();

	return (
		<div className="number-input-wrapper">
			<input
				ref={inputRef}
				autocomplete="off"
				onChange={() => onChange(inputRef.current.value)}
				type="number"
				placeholder={placeholder}
				id={id}
				name={name}
				min={min}
				max={max}
			/>
			<label htmlFor={htmlFor}>{label}</label>
		</div>
	);
};

export default NumberInput;
