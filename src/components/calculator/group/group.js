import React from 'react';
import MetricSwitcher from '../../inputs/metricSwitcher/metricSwitcher';
import './css/group.css';

const Group = (props) => {
	return (
		<div id={props.id} className="group-wrapper">
			<h2 className="group-title">{props.title}</h2>
			{props.description && <p className="group-description">{props.description}</p>}
			<div id={`${props.id}-options`} className="group-options">
				{props.children}
			</div>
		</div>
	);
};

export default Group;
