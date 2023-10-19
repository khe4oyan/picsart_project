import React from 'react'
import './Modal.css'

export default function Modal({ children, setModalName }) {
	const closeModal = () => {
		setModalName('');
	}

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
