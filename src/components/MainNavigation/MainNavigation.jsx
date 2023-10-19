import React from 'react'
import './MainNavigation.css'

export default function MainNavigation({ navigationsNames, setNavigationName, navigationName }) {
	return (
		<div className='main__hero__navigation'>
			{
				navigationsNames.map((item, i) =>
					<p
						onClick={() => { setNavigationName(item) }}
						key={`navigationName_${i}`}
						className={`main__hero__navigation__p ${navigationName === item && 'main__hero__navigation__p_active'}`}
					>
						{item}
					</p>
				)
			}
		</div>
	)
}
