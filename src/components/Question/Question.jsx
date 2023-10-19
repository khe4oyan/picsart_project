import React, { useEffect } from 'react'
import './Question.css'

export default function Question({ questionData }) {
	const [showAsk, setShowAsk] = React.useState(false);
	const {
		question, 
		ask,
	} = questionData

	const toggleShowAsk = () => {
		setShowAsk(prev => !prev);
	}

	useEffect(() => {
		setShowAsk(false);
	}, [questionData]);

	return (
		<div className={`question ${showAsk && 'question__showAsk'}`} onClick={toggleShowAsk}>
			<div className={`question__title ${showAsk && 'question__title_off'}`}>
				<h2 className='question__title__question center'>{ question }</h2>
				<button className={`question__title__button ${ showAsk && 'question__title__button__rotate'}`}>+</button>
			</div>
			<p className='question__ask'>
				{ ask }
			</p>
		</div>
	)
}
