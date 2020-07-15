import React, { useRef } from 'react';

const SelectInput = ({ id, name, value, htmlFor, label, unit, suffix, min, max, options, onChange }) => {
	const inputRef = useRef();

	const optionsList = options.map((option) => (
		<option value={`${option}`}>
			{option} {suffix}/{unit}
		</option>
	));
	return (
		<div className="select-input-wrapper">
			<label htmlFor={htmlFor}>{label}</label>

			<select ref={inputRef} onChange={() => onChange(inputRef.current.value)} name={name} id={id}>
				{optionsList}
			</select>
		</div>
	);
};

export default SelectInput;
