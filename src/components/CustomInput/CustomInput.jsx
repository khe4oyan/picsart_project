import React, { useState } from 'react'
import './CustomInput.css'

export default function CustomInput({ value, setValue, placeholder, inputType='text' }) {
	const [inputFocused, setInputFocused] = useState(false);
	const [showPass, setShowPass] = useState(false);

	const focusToggle = (status) => {
		if (status) {
			setInputFocused(status);
		} else {
			if (value === '') {
				setInputFocused(status);
			}
		}
	}

	const showPassToggle = () => {
		setShowPass(prev => !prev);
	}

	return (
		<div className='customInput'>
			<p className={`customInput__placeholder ${inputFocused && 'customInput__placeholder_passive'}`}>{placeholder}</p>
			<input
				className='customInput__input'
				type={inputType === 'password' ? (showPass === true ? 'text' : inputType) : inputType}
				value={value}
				onFocus={() => { focusToggle(true) }}
				onBlur={() => { focusToggle(false) }}
				onChange={(e) => { setValue(e.target.value) }}
			/>
			{
				inputType === 'password' &&
				<div className={`customInput__password_eye ${showPass && 'customInput__password_eye_2'}`} onClick={showPassToggle}></div>
			}
		</div>
	)
}
