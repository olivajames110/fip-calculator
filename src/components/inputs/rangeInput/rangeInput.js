import React from 'react';

const RangeInput = ({ id, value, onChange, min, max, fill }) => {
	return (
		<div className="input-slider-wrapper">
			<input id={id} min={min} max={max} value={value} type="range" />
			<div style={{ width: `${fill}%` }} className="input-fill" />
		</div>
	);
};

export default RangeInput;
