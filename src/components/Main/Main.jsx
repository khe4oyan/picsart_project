import React, { useState } from 'react'
import './Main.css'
import Question from '../Question/Question';
import mainData from './data';
import MainNavigation from '../MainNavigation/MainNavigation'

export default function Main() {
	const navigationsNames = Object.keys(mainData);
	const [navigationName, setNavigationName] = useState(navigationsNames[0]);

	return (
		<main className='main container'>
			<div className='main__hero'>
				<h1 className='main__hero__title'>Frequently Asked Questions</h1>
				<MainNavigation
					navigationName={navigationName}
					navigationsNames={navigationsNames}
					setNavigationName={setNavigationName}
				/>
			</div>
			{
				mainData[navigationName].map((question, i) =>
					<Question questionData={question} key={`mainQuestionKey_${i}`} />
				)
			}
		</main>
	)
}
