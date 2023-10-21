import React, { useEffect, useState } from 'react'
import './PassChecker.css';

export default function PassChecker({ statuses }) {
	const [strengthStatus, setStrengthStatus] = useState(0);

	useEffect(() => {
		let validsCount = 0;
		for (let i = 0; i < statuses.length; ++i) {
			if (statuses[i]) { ++validsCount; }
		}
		setStrengthStatus(validsCount);
	}, [statuses]);

	const strengthsNames = [
		'Empty',
		'Weak',
		'Average',
		'Strong',
		'Perfect',
	];

	const reqs = [
		'minimum of 8 characters',
		'an uppercase latter',
		'a lowercase letter',
		'a number',
	];

	return (
		<div className='passChecker'>
			<p >Your Password must contain a:</p>
			{
				reqs.map((item, i) =>
					<p key={`passChecker_${i}`} className={`passChecker__requirement ${statuses[i] && 'passChecker__requirement_done'}`}>{item}</p>
				)
			}

			<div className='passChecker__statusBox'>
				<p className='passChecker__statusBox__statusText'>Password strength: {strengthsNames[strengthStatus]}</p>
				<div className='passChecker__statusBox__status'>
					<div style={{ '--point': strengthStatus }} className={`passChecker__statusBox__status_line passChecker__statusBox__status_line__color_${strengthStatus}`}></div>
				</div>
			</div>
			<div className='passChecker__arrow'></div>
		</div>
	)
}
