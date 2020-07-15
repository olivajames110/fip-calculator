import React, { useState, useEffect } from 'react';
import './css/metricSwitcher.css';

const MetricSwitcher = (props) => {
	const [ unit, setUnit ] = useState('lbs');

	const update = function(unit) {
		setUnit(unit);
		props.onClick(unit);
		console.log('updates');
	};
	return (
		<div className="metric-type-container">
			<span
				onClick={() => update('lbs')}
				id={props.leftMetric}
				className={`metric-type ${unit === 'lbs' && 'metric-active'}`}
			>
				{props.leftMetric}
			</span>
			<span
				onClick={() => update('kgs')}
				id={props.rightMetric}
				className={`metric-type ${unit === 'kgs' && 'metric-active'}`}
			>
				{props.rightMetric}
			</span>
		</div>
	);
};

export default MetricSwitcher;
