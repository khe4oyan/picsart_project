import React, { useEffect } from 'react'
import './Modal.css'

export default function Modal({ children, setModalName }) {
	const closeModal = () => {
		setModalName(null);
	}

	useEffect(() => {
		const keyDownLisener = (e) => {
			if (e.key === 'Escape') {
				closeModal();
			}
		}

		document.addEventListener('keydown', keyDownLisener);

		return () => { document.removeEventListener('keydown', keyDownLisener); }
	}, []);

	return (
		<div className='modal center'>
			<div className="modalBox">
				<button className='closeBox__button' onClick={closeModal}>+</button>
				<div className='modalBox_content'>
					{children}
				</div>
			</div>
		</div>
	)
}
